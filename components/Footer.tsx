'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

const footerDepartments = [
  { id: 'medecine-familiale', label: 'Médecine Familiale & Générale' },
  { id: 'cardiologie', label: 'Cardiologie' },
  { id: 'pediatrie', label: 'Pédiatrie' },
  { id: 'neurologie', label: 'Neurologie' },
  { id: 'hepatologie', label: 'Gastro-entérologie & Hépatologie' },
  { id: 'ophtalmologie', label: 'Ophtalmologie' },
]

const Footer = () => {
  const handleSelectDepartment = (deptId: string) => {
    window.dispatchEvent(
      new CustomEvent('clinique:view-department', {
        detail: { department: deptId },
      })
    )
  }

  return (
    <footer
      id="contact"
      className="pt-16 pb-24 md:pb-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="min-w-0" data-purpose="brand-section">
            <div className="flex items-center gap-3 mb-5" data-purpose="logo">
              <Image
                src="/logo.png"
                alt="Clinique 13-23"
                width={130}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Clinique médicale multidisciplinaire dédiée à la médecine familiale, aux consultations spécialisées et à la prise en charge rapide des urgences.
            </p>
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-clinique_rose flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
              <span>Centre Médical Clinique 13-23 — Accueil Consultations &amp; Entrée Urgences 24h/24</span>
            </div>
          </div>

          {/* Departments Column */}
          <div className="min-w-0" data-purpose="department-links">
            <h2 className="text-lg font-bold text-clinique_bleue mb-8 section-title-underline">
              Départements
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {footerDepartments.map((dept) => (
                <li key={dept.id}>
                  <Link
                    className="hover:text-clinique_bleue transition-colors inline-block py-0.5"
                    href="/#departments"
                    onClick={() => handleSelectDepartment(dept.id)}
                  >
                    {dept.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Information Column */}
          <div className="min-w-0" data-purpose="support-links">
            <h2 className="text-lg font-bold text-clinique_bleue mb-8 section-title-underline">
              Accès Patients
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link className="hover:text-clinique_bleue transition-colors" href="/#appointment-section">
                  Prendre rendez-vous en ligne
                </Link>
              </li>
              <li>
                <Link className="hover:text-clinique_bleue transition-colors" href="/#services">
                  Nos services médicaux
                </Link>
              </li>
              <li>
                <Link className="hover:text-clinique_bleue transition-colors" href="/#doctors">
                  Équipe médicale
                </Link>
              </li>
              <li>
                <Link className="hover:text-clinique_bleue transition-colors" href="/rendez-vous">
                  Page dédiée Rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="min-w-0" data-purpose="contact-section">
            <h2 className="text-lg font-bold text-clinique_bleue mb-8 section-title-underline">
              Nous Contacter
            </h2>

            <div className="mb-5">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 mb-1.5">
                <Mail className="w-3.5 h-3.5 text-clinique_rose flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                <span>Courriel &amp; Renseignements</span>
              </div>
              <a
                className="text-sm font-bold text-slate-900 hover:text-clinique_bleue transition-colors block break-all"
                href="mailto:contact@clinique-13-23.com"
              >
                contact@clinique-13-23.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 mb-1.5">
                <Clock className="w-3.5 h-3.5 text-clinique_rose flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                <span>Lun – Ven : 07h30 – 20h00 | Sam : 08h00 – 18h00</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 tabular-nums flex-wrap">
                <Phone className="w-3.5 h-3.5 text-clinique_bleue flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                <a className="hover:text-clinique_green transition-colors" href="tel:34502653">
                  3450-2653
                </a>
                <span aria-hidden="true">|</span>
                <a className="hover:text-clinique_green transition-colors" href="tel:55232555">
                  5523-2555
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Clinique 13-23. Tous droits réservés.</p>
          <p className="tabular-nums">Urgences médicales 24h/24 : 3450-2653 | 5523-2555</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
