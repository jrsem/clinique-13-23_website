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
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZPKriD7h83pWRRdXKCBXLgILkgCmNU8VvV_W1Ld8MYLwirorH2IxmzZJI69brmH2fZQ0RlMYDed1KzgJ_dnMLLQwzfq6ghYe6OP0zZDAGuFIjiejCusC_uR2Pek4JborlLYLf1_-Fp4UlqWboX8hAOb88A_sW7Pk',
  },
  {
    id: 'dr-steven-lee',
    name: 'Dr. Steven Lee',
    specialty: 'Cardiologie & Santé Cardiovasculaire',
    department: 'cardiologie',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAD8FFRsx9taFhR0DFnEoQsL80WZIhFrZdyAgh7ebqbWshLrsNhXSlXxbUDjfXoZ9JcWsSHDtyFWbOXWscvYb4qz496E3M9KMY67eeou4muodShVXQTyBQqlzlz0C3Iu6LJngWZ7IgyJ8FWholbV0QwORlIv2-FdSizHfXCMZ_l5dHsXCTFiOYkHiBxQIOfiXE-CACeVg21jrvERbTrnfutaT-kslr_dmvCdIEEaLCcW9ji4vWdUOwZGGG7pzdn6Gyu4SMFvbRR2ZV',
  },
  {
    id: 'dr-david-kim',
    name: 'Dr. David Kim',
    specialty: 'Gastro-entérologie & Hépatologie',
    department: 'hepatologie',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyI_KbH-KK3qO4d3yIo6tCkhfiQh1540JpUgHCWKgkTLIJG6PIecYylQQMd9ouVe2mfs5uDKyZbxg5iu26bv8T8Zsaig2U4m64J9MKgFbfB3_7Q9m-weBejN6Znqifyz2Nl5vknQtWdzn7chYsdT0-5SY89E3e_HxiMsle_7FffZPp6h6SAPLW0tJgtQcGknCfm6iOa7Gi3-m9cBTjY6nKfbVbnGps2W0r9WwFQvaDwBpZouLReCsK-L5xx6QTxcbreMezLbDNYUkH',
  },
  {
    id: 'dr-sarah-lee',
    name: 'Dr. Sarah Lee',
    specialty: 'Ophtalmologie & Soins de la Vue',
    department: 'ophtalmologie',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM_fD-UIlJxwx_fMER6Zk8M9tB8Z6-rQzoKeev3p0Z7WIerb4P_3-0Jp2N2W1qKec-MEyzHP3CGDbLj4SvGE3lnOQcXKRV-bFO7Lc05PGobW94-0VDwbsWyjuypA37lSx3_9QuTc0ye8LJ7tggOxaGtD3EnVkQEnNPSdQ1DyhkoDY-eLgFfnLWREYR7lInllEEF9DJVUuZDCBDagbevAMrSRYbN03EiFt7gXOa-TmjF_gi3p8taNh0vfz8rNOXp4ARdMb8d0akaa',
  },
]

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-gsap="doctor-card"]', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'expo.out',
        clearProps: 'transform,opacity',
      })
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
            <article
              key={doc.id}
              data-gsap="doctor-card"
              className="doctor-card bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300 border border-slate-100 flex flex-col items-center text-center min-w-0"
            >
              <div className="relative w-full aspect-square bg-portrait-sky rounded-lg mb-4 overflow-hidden">
                <Image
                  alt={`Portrait de ${doc.name}, spécialiste en ${doc.specialty}`}
                  className="object-cover"
                  src={doc.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 break-words">{doc.name}</h3>
              <p className="text-slate-600 text-sm font-medium mt-1 mb-5">{doc.specialty}</p>
              <button
                type="button"
                onClick={() => handleSelectDoctor(doc.department, doc.id)}
                aria-label={`Prendre rendez-vous avec ${doc.name} en ${doc.specialty}`}
                className="cursor-pointer w-full py-3 px-4 bg-clinique_bleue hover:bg-clinique_bleu_fonce text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors mt-auto inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue"
              >
                <Calendar className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                <span>Prendre rendez-vous</span>
              </button>
            </article>
          ))}
        </div>

        {/* Family Medicine & Pediatrics Direct Referral Bar */}
        <div className="mt-8 bg-white rounded-xl border border-slate-100 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
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
