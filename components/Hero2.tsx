'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { CalendarPlus, Clock, PhoneCall, ChevronRight, ChevronLeft, Pause, Play } from 'lucide-react'

const heroSlides = [
  {
    image: '/hero.jpg',
    alt: 'Salle de consultation moderne et équipe médicale attentive à la Clinique 13-23',
    ruleLabel: 'Médecine Familiale & Spécialités',
    title: 'Clinique 13-23 : Votre Partenaire de Santé le Plus Fiable',
    description:
      'Médecine familiale, consultations spécialisées et accueil d’urgence. Notre équipe médicale vous accompagne avec écoute, rigueur et réactivité tout au long de vos soins.',
  },
  {
    image: '/apointment.jpg',
    alt: 'Équipe médicale professionnelle prête à vous accueillir et coordonner votre prise en charge',
    ruleLabel: 'Urgences & Soins Rapides',
    title: 'Une Prise en Charge Médicale Réactive et Humaine',
    description:
      'Ligne d’urgence 24h/24 au 3450-2653, secrétariat médical dédié et rendez-vous sans attente pour veiller sur vous et vos proches au quotidien.',
  },
  {
    image: '/doctor.jpg',
    alt: 'Médecin à l’écoute auscultant un patient avec bienveillance',
    ruleLabel: 'Pédiatrie & Santé Globale',
    title: 'Des Spécialistes Dévoués à la Santé de Votre Famille',
    description:
      'Du suivi pédiatrique des tout-petits au bilan cardiologique et neurologique des aînés, bénéficiez d’un plateau technique moderne et rigoureux.',
  },
]

const Hero2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)
  const slideContentRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, nextSlide])

  // GSAP animation when the slide changes
  useEffect(() => {
    if (!slideContentRef.current) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        slideContentRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' }
      )
    })

    return () => mm.revert()
  }, [currentSlide])

  // Initial GSAP load animation for Hero triage cards
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-gsap="triage-card"]', {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'expo.out',
        clearProps: 'transform,opacity',
      })
    })

    return () => mm.revert()
  }, [])

  const activeSlide = heroSlides[currentSlide]

  return (
    <div ref={rootRef} className="relative">
      <section
        className="relative h-[600px] sm:h-[660px] lg:h-[720px] flex items-center overflow-hidden"
        data-purpose="hero-carousel"
        aria-roledescription="carousel"
        aria-label="Diaporama d'introduction Clinique 13-23"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Background Images with Cross-Fade - Full bleed edge-to-edge */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center scale-105 transition-transform duration-[6000ms] ease-out"
                sizes="100vw"
              />
            </div>
          ))}
          {/* Option A: Rich deep overlay preserving 100% of the image visibility while providing contrast */}
          <div
            className="absolute inset-0 bg-slate-950/55 md:bg-slate-950/45 mix-blend-multiply z-10"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent z-10"
            aria-hidden="true"
          />
        </div>

        {/* Slide Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20 w-full">
          <div ref={slideContentRef} className="max-w-xl min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-clinique_rose" aria-hidden="true"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-300 drop-shadow-sm">
                {activeSlide.ruleLabel}
              </span>
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-white leading-tight mb-6 break-words drop-shadow-md">
              {activeSlide.title}
            </h1>

            <p className="text-slate-100 text-base sm:text-lg mb-8 leading-relaxed max-w-lg drop-shadow-sm">
              {activeSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-clinique_green text-white px-7 py-4 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-clinique_rose focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-300 shadow-lg"
                href="#appointment-section"
              >
                <span>Prendre un rendez-vous</span>
                <ChevronRight className="w-4 h-4 flex-shrink-0" strokeWidth={2.25} aria-hidden="true" />
              </a>
              <a
                className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-white/95 text-slate-900 hover:text-clinique_bleue px-6 py-4 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-300 tabular-nums shadow-md"
                href="tel:34502653"
              >
                <PhoneCall className="w-4 h-4 flex-shrink-0 text-clinique_rose" strokeWidth={2} aria-hidden="true" />
                <span>Urgences : 3450-2653</span>
              </a>
            </div>

            {/* Carousel Controls: Indicator Pills & Prev/Next & Play/Pause */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2" role="tablist" aria-label="Sélection des diapositives">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={idx === currentSlide}
                    aria-label={`Aller à la diapositive ${idx + 1}`}
                    onClick={() => goToSlide(idx)}
                    className={`cursor-pointer transition-all duration-300 rounded-full h-2.5 ${
                      idx === currentSlide
                        ? 'w-8 bg-white shadow-xs'
                        : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5 ml-2 border-l border-white/20 pl-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Diapositive précédente"
                  className="cursor-pointer w-8 h-8 rounded-full border border-white/30 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Diapositive suivante"
                  className="cursor-pointer w-8 h-8 rounded-full border border-white/30 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? 'Mettre en pause le défilement automatique' : 'Démarrer le défilement automatique'}
                  className="cursor-pointer w-8 h-8 rounded-full border border-white/30 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  ) : (
                    <Play className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triage Cards Section overlapping Hero */}
      <section
        aria-labelledby="triage-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-12 relative z-20"
      >
        <h2 id="triage-heading" className="sr-only">
          Accès rapide : rendez-vous, horaires d&apos;ouverture et urgences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Online Appointment */}
          <div
            data-gsap="triage-card"
            className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm flex flex-col items-start min-w-0 border border-slate-100"
            data-purpose="feature-card"
          >
            <div className="text-clinique_rose mb-4" aria-hidden="true">
              <CalendarPlus className="w-9 h-9" strokeWidth={1.75} />
            </div>
            <span className="text-slate-600 text-xs font-medium mb-1">Consultation planifiée</span>
            <h3 className="text-xl font-bold text-clinique_bleue mb-3">Rendez-vous en ligne</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Réservez votre créneau en médecine familiale ou auprès d&apos;un spécialiste en quelques clics, sans attente au&nbsp;guichet.
            </p>
            <a
              className="bg-clinique_bleue text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-clinique_bleu_fonce focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue transition mt-auto inline-flex items-center gap-1.5"
              href="#appointment-section"
            >
              <span>Prendre un rendez-vous</span>
              <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.25} aria-hidden="true" />
            </a>
          </div>

          {/* Card 2: Opening Hours */}
          <div
            data-gsap="triage-card"
            className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm flex flex-col items-start min-w-0 border border-slate-100"
            data-purpose="feature-card"
          >
            <div className="text-clinique_rose mb-4" aria-hidden="true">
              <Clock className="w-9 h-9" strokeWidth={1.75} />
            </div>
            <span className="text-slate-600 text-xs font-medium mb-1">Disponibilité</span>
            <h3 className="text-xl font-bold text-clinique_bleue mb-5">Heures d&apos;ouverture</h3>
            <dl className="w-full space-y-3 text-sm text-slate-600 tabular-nums">
              <div className="flex justify-between gap-2 border-b border-slate-100 pb-2">
                <dt>Lundi – Vendredi :</dt>
                <dd className="font-semibold text-slate-900">07:30 – 20:00</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-slate-100 pb-2">
                <dt>Samedi :</dt>
                <dd className="font-semibold text-slate-900">08:00 – 18:00</dd>
              </div>
              <div className="flex justify-between gap-2 pb-1">
                <dt>Dimanche &amp; Urgences :</dt>
                <dd className="font-semibold text-clinique_green">Garde 24h/24</dd>
              </div>
            </dl>
          </div>

          {/* Card 3: Emergency */}
          <div
            data-gsap="triage-card"
            className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm flex flex-col items-start min-w-0 border border-slate-100 md:col-span-2 lg:col-span-1"
            data-purpose="feature-card"
          >
            <div className="text-clinique_rose mb-4" aria-hidden="true">
              <PhoneCall className="w-9 h-9" strokeWidth={1.75} />
            </div>
            <span className="text-slate-600 text-xs font-medium mb-1">Assistance médicale 24h/24</span>
            <h3 className="text-xl sm:text-2xl font-bold text-clinique_bleue mb-3 tabular-nums">
              <a href="tel:34502653" className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-clinique_bleue rounded-sm">
                3450-2653
              </a>{" "}
              |{" "}
              <a href="tel:55232555" className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-clinique_bleue rounded-sm">
                5523-2555
              </a>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              En cas d&apos;urgence médicale, contactez immédiatement notre ligne directe pour une prise en charge&nbsp;prioritaire.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero2
