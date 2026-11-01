'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X, Phone, Calendar } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/#doctors', label: 'Médecins' },
  { href: '/#departments', label: 'Départements' },
  { href: '/#contact', label: 'Horaires & Contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const appointmentHref = pathname === '/rendez-vous' ? '#appointment-section' : '/#appointment-section'

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue rounded-md"
            data-purpose="logo-container"
          >
            <Image
              src="/logo.png"
              alt="Clinique 13-23 — Accueil"
              width={150}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden md:flex space-x-7 items-center"
            data-purpose="primary-navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-slate-700 hover:text-clinique_bleue font-medium text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue rounded-sm"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              className="group bg-clinique_bleue hover:bg-clinique_bleu_fonce active:scale-[0.985] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-150 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue"
              href={appointmentHref}
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={appointmentHref}
              className="bg-clinique_green text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide inline-flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
              <span>Rendez-vous</span>
            </Link>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-md text-slate-700 hover:text-clinique_bleue hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-clinique_bleue"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Menu mobile"
          className="animate-fadeIn md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-lg space-y-1.5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] py-2.5 px-3 rounded-md text-base font-medium text-slate-800 hover:bg-blue-50 hover:text-clinique_bleue active:bg-blue-100/60"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href={appointmentHref}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-clinique_bleue text-white py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              <span>Prendre rendez-vous en ligne</span>
            </Link>
            <a
              href="tel:34502653"
              className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider tabular-nums"
            >
              <Phone className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              <span>Appeler les urgences : 3450-2653</span>
            </a>
          </div>
        </nav>
      )}

      {/* Thumb-Zone Bottom Quick-Action Bar on Mobile */}
      <div
        role="region"
        aria-label="Actions rapides mobiles"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] grid grid-cols-2 gap-2.5"
      >
        <a
          href="tel:34502653"
          className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full border border-clinique_bleue/25 bg-blue-50/70 text-clinique_bleue px-3 py-2.5 text-xs font-bold uppercase tracking-wide tabular-nums active:bg-blue-100"
        >
          <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
          <span>3450-2653</span>
        </a>
        <Link
          href={appointmentHref}
          className="min-h-[46px] inline-flex items-center justify-center gap-1.5 rounded-full bg-clinique_green text-white px-3 py-2.5 text-xs font-bold uppercase tracking-wide active:bg-clinique_rose shadow-sm"
        >
          <span>Rendez-vous</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
