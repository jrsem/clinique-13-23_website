'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const doctorsList = [
  {
    id: 'dr-norman-colins',
    name: 'Dr. Norman Colins',
    specialty: 'Neurologie & Système Nerveux',
    department: 'neurologie',
    image: '/doctor-1.jpg',
  },
  {
    id: 'dr-steven-lee',
    name: 'Dr. Steven Lee',
    specialty: 'Cardiologie & Santé Cardiovasculaire',
    department: 'cardiologie',
    image: '/doctor-2.jpg',
  },
  {
    id: 'dr-david-kim',
    name: 'Dr. David Kim',
    specialty: 'Gastro-entérologie & Hépatologie',
    department: 'hepatologie',
    image: '/doctor-3.jpg',
  },
  {
    id: 'dr-sarah-lee',
    name: 'Dr. Sarah Lee',
    specialty: 'Ophtalmologie & Soins de la Vue',
    department: 'ophtalmologie',
    image: '/apointment.jpg',
  },
]

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Header entrance
      gsap.fromTo(
        section.querySelector('[data-gsap="doctors-heading"]'),
        { y: 24, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      )

      // Doctors cards entrance on scroll down & up
      gsap.fromTo(
        section.querySelectorAll('[data-gsap="doctor-card"]'),
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
        }
      )

      // Bottom referral bar entrance
      gsap.fromTo(
        section.querySelector('[data-gsap="referral-bar"]'),
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      )
    })

    return () => mm.revert()
  }, [])

  const handleSelectDoctor = (departmentId: string, doctorId: string) => {
    window.dispatchEvent(
      new CustomEvent('clinique:select-department', {
        detail: { department: departmentId, doctor: doctorId },
      })
    )
    const section = document.getElementById('appointment-section')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-glacier-tint"
      id="doctors"
      data-purpose="doctors-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          data-gsap="doctors-heading"
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
          data-purpose="main-header"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-12 bg-clinique_rose" aria-hidden="true"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Corps Médical
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-clinique_bleue">
              Rencontrez Nos Médecins Spécialistes
            </h2>
            <p className="text-slate-600 text-base mt-3 max-w-2xl">
              Une équipe médicale expérimentée, attentive et engagée pour un suivi personnalisé.
            </p>
          </div>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          data-purpose="doctors-listing"
        >
          {doctorsList.map((doc) => (
            <div key={doc.id} data-gsap="doctor-card" className="h-full">
              <article
                className="group h-full bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(26,54,93,0.16)] hover:-translate-y-2 border border-slate-100 hover:border-clinique_bleue/30 transition-all duration-300 ease-out flex flex-col items-center text-center min-w-0"
              >
                <div className="relative w-full aspect-square bg-portrait-sky rounded-xl mb-4 overflow-hidden">
                  <Image
                    alt={`Portrait de ${doc.name}, spécialiste en ${doc.specialty}`}
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    src={doc.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinique_bleue/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-clinique_bleue transition-colors duration-300 break-words">
                  {doc.name}
                </h3>
                <p className="text-slate-600 text-sm font-medium mt-1 mb-5 group-hover:text-slate-800 transition-colors duration-200">
                  {doc.specialty}
                </p>
                <button
                  type="button"
                  onClick={() => handleSelectDoctor(doc.department, doc.id)}
                  aria-label={`Prendre rendez-vous avec ${doc.name} en ${doc.specialty}`}
                  className="cursor-pointer w-full py-3 px-4 bg-clinique_bleue hover:bg-clinique_bleu_fonce text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 mt-auto inline-flex items-center justify-center gap-2 shadow-sm group-hover:shadow group-hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue active:translate-y-0"
                >
                  <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} aria-hidden="true" />
                  <span>Prendre rendez-vous</span>
                </button>
              </article>
            </div>
          ))}
        </div>

        {/* Family Medicine & Pediatrics Direct Referral Bar */}
        <div
          data-gsap="referral-bar"
          className="mt-8 bg-white rounded-xl border border-slate-100 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Médecine Familiale &amp; Pédiatrie
            </h3>
            <p className="text-sm text-slate-600 mt-0.5">
              Consultations assurées par Dr.&nbsp;Marc Jean-Baptiste, Dr.&nbsp;Claire Pierre-Louis (Médecine Familiale), Dr.&nbsp;Nadia Wilson et Dr.&nbsp;Patrick Brown (Pédiatrie).
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => handleSelectDoctor('medecine-familiale', 'dr-jean-baptiste')}
              className="cursor-pointer rounded-full bg-sky-badge hover:bg-blue-100 border border-blue-200 px-4 py-2 text-xs font-bold text-clinique_bleue transition-colors"
            >
              Médecine Familiale
            </button>
            <button
              type="button"
              onClick={() => handleSelectDoctor('pediatrie', 'dr-wilson')}
              className="cursor-pointer rounded-full bg-sky-badge hover:bg-blue-100 border border-blue-200 px-4 py-2 text-xs font-bold text-clinique_bleue transition-colors"
            >
              Pédiatrie
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
