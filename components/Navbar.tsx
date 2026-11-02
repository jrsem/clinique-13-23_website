'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react'

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
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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
              className="h-11 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              className="group bg-clinique_bleue hover:bg-clinique_bleu_fonce active:scale-[0.985] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-150 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue"
              href={appointmentHref}
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="cursor-pointer inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:text-clinique_bleue hover:bg-blue-50 active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-clinique_bleue"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-clinique_bleue" strokeWidth={2.25} aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" strokeWidth={2.25} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 bg-slate-950/40 backdrop-blur-xs md:hidden z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-navigation-menu"
            aria-label="Menu mobile"
            className="relative z-50 md:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 px-5 pt-4 pb-7 shadow-2xl animate-fadeIn space-y-1.5"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between min-h-[46px] py-3 px-3.5 rounded-xl text-base font-semibold text-slate-800 hover:text-clinique_bleue hover:bg-blue-50/80 active:bg-blue-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" strokeWidth={2} aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <Link
                href={appointmentHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-clinique_green hover:bg-clinique_rose text-white py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                <span>Prendre un rendez-vous en ligne</span>
              </Link>
              <a
                href="tel:34502653"
                className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider tabular-nums transition-colors"
              >
                <Phone className="w-4 h-4 text-clinique_rose" strokeWidth={2} aria-hidden="true" />
                <span>Urgences 24/7 : 3450-2653</span>
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

export default Navbar
