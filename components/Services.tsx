'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Brain,
  Activity,
  Eye,
  ChevronRight,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const servicesList = [
  {
    id: 'medecine-familiale',
    title: 'Médecine Familiale',
    description:
      'Suivi général des adultes et enfants, bilans préventifs et gestion des affections courantes au quotidien.',
    Icon: Stethoscope,
  },
  {
    id: 'cardiologie',
    title: 'Cardiologie & Cœur',
    description:
      'Dépistage, ECG et suivi des troubles cardiovasculaires et de l’hypertension artérielle avec rigueur.',
    Icon: HeartPulse,
  },
  {
    id: 'pediatrie',
    title: 'Pédiatrie & Enfants',
    description:
      'Consultations pédiatriques, suivi de croissance, vaccinations et conseils dédiés aux jeunes parents.',
    Icon: Baby,
  },
  {
    id: 'neurologie',
    title: 'Neurologie',
    description:
      'Prise en charge des céphalées, migraines chroniques, troubles de la mémoire et affections neurologiques.',
    Icon: Brain,
  },
  {
    id: 'hepatologie',
    title: 'Gastro & Hépatologie',
    description:
      'Diagnostic des troubles digestifs, bilans hépatiques et accompagnement thérapeutique individualisé.',
    Icon: Activity,
  },
  {
    id: 'ophtalmologie',
    title: 'Ophtalmologie',
    description:
      'Contrôles de la vue, dépistage précoce du glaucome et examens de routine pour toute la famille.',
    Icon: Eye,
  },
]

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-gsap="service-card"]', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'expo.out',
        clearProps: 'transform,opacity',
      })
    })

    return () => mm.revert()
  }, [])

  const handleSelectService = (departmentId: string) => {
    window.dispatchEvent(
      new CustomEvent('clinique:select-department', {
        detail: { department: departmentId },
      })
    )
    const section = document.getElementById('appointment-section')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 bg-white" data-purpose="departments-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-clinique_rose" aria-hidden="true"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Soins &amp; Consultations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-clinique_bleue">
            Nos Spécialités et Soins Médicaux
          </h2>
          <p className="text-slate-600 text-base mt-3 max-w-xl">
            Choisissez la spécialité correspondant à votre besoin médical pour demander directement une consultation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              data-gsap="service-card"
              className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300 min-w-0 flex flex-col justify-between"
              data-purpose="department-card"
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-sky-badge flex items-center justify-center text-clinique_bleue">
                  <Icon className="w-8 h-8" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-clinique_bleue transition-colors break-words">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSelectService(id)}
                    aria-label={`Choisir ${title} pour prendre rendez-vous`}
                    className="cursor-pointer inline-flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-wider text-clinique_bleue hover:text-clinique_green transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue rounded-sm"
                  >
                    <span>Demander un rendez-vous</span>
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.25} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
