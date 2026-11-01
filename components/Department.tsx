'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ChevronRight, Stethoscope } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const departments = [
  {
    id: 'medecine-familiale',
    label: 'Médecine Familiale',
    title: 'Médecine Familiale & Générale',
    subtitle:
      'Suivi médical global, bilans de santé préventifs et prise en charge des affections courantes.',
    description:
      'Notre service de médecine familiale constitue votre premier point de contact à la Clinique 13-23. Nos médecins assurent un diagnostic précis, coordonnent votre parcours de soins et vous orientent vers nos spécialistes si\u00A0nécessaire.',
    procedures: [
      'Consultations adultes, suivi des maladies chroniques (diabète, tension)',
      'Bilans annuels de prévention et certificats médicaux',
      'Prise en charge rapide des infections et urgences courantes',
    ],
    doctors: [
      { id: 'dr-jean-baptiste', name: 'Dr. Marc Jean-Baptiste' },
      { id: 'dr-pierre-louis', name: 'Dr. Claire Pierre-Louis' },
    ],
    image: '/doctor.jpg',
    imageAlt: 'Consultation de médecine familiale à la Clinique 13-23',
  },
  {
    id: 'cardiologie',
    label: 'Cardiologie',
    title: 'Cardiologie & Santé Cardiovasculaire',
    subtitle:
      'Prévention, dépistage de l’hypertension et suivi complet des pathologies cardiaques.',
    description:
      'Le département de cardiologie réalise les bilans cardiovasculaires, électrocardiogrammes (ECG) et suivis d’insuffisance cardiaque ou d’hypertension artérielle avec des protocoles cliniques rigoureux.',
    procedures: [
      'Électrocardiogramme (ECG) de repos et bilan de douleur thoracique',
      'Dépistage et équilibrage de l’hypertension artérielle',
      'Suivi post-hospitalisation et prévention cardiovasculaire',
    ],
    doctors: [
      { id: 'dr-steven-lee', name: 'Dr. Steven Lee' },
      { id: 'dr-adams', name: 'Dr. Michel Adams' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBv9BU2X1JdHwDMDKhWc3RUevLHIR2yejpAQOuow4IuNgYbQlGbm_9DaqvsV4INVtj87kvAOEK5ZPbfUV02ONsyYxk0hZtpeKqhJz0ZcQz8bn58X6se9JZsye-ObMm1eGZt9dZ46tWfZBhZ4X_wqrP4jY55c1lOv5rhmwGozcbG2VKzhv51yRwZ7s93T4sJxNbndkta_ErE_FX4PNxhbQr6MCjlvrUB0kRcXiCvWZHWo2cGf6ThUmXocci9B-hbTPKM8gg5meNmDmGc',
    imageAlt: 'Département de Cardiologie',
  },
  {
    id: 'pediatrie',
    label: 'Pédiatrie',
    title: 'Pédiatrie & Santé de l’Enfant',
    subtitle:
      'Soins dédiés aux nourrissons, aux enfants et aux adolescents dans un cadre rassurant.',
    description:
      'Nous accompagnons la croissance de vos enfants : suivi du développement, vaccinations, urgences pédiatriques et conseils nutritionnels auprès des parents.',
    procedures: [
      'Suivi mensuel du nourrisson, courbes de croissance et calendrier vaccinal',
      'Consultations pédiatriques d’urgence (fièvre, infections respiratoires)',
      'Bilan de santé scolaire et accompagnement de l’adolescent',
    ],
    doctors: [
      { id: 'dr-wilson', name: 'Dr. Nadia Wilson' },
      { id: 'dr-brown', name: 'Dr. Patrick Brown' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM_fD-UIlJxwx_fMER6Zk8M9tB8Z6-rQzoKeev3p0Z7WIerb4P_3-0Jp2N2W1qKec-MEyzHP3CGDbLj4SvGE3lnOQcXKRV-bFO7Lc05PGobW94-0VDwbsWyjuypA37lSx3_9QuTc0ye8LJ7tggOxaGtD3EnVkQEnNPSdQ1DyhkoDY-eLgFfnLWREYR7lInllEEF9DJVUuZDCBDagbevAMrSRYbN03EiFt7gXOa-TmjF_gi3p8taNh0vfz8rNOXp4ARdMb8d0akaa',
    imageAlt: 'Département de Pédiatrie',
  },
  {
    id: 'neurologie',
    label: 'Neurologie',
    title: 'Neurologie',
    subtitle:
      'Diagnostic et prise en charge des troubles du système nerveux central et périphérique.',
    description:
      'Nos spécialistes prennent en charge les migraines chroniques, troubles de l’équilibre, neuropathies et suivis post-AVC avec une approche personnalisée et attentive.',
    procedures: [
      'Prise en charge des céphalées, migraines chroniques et vertiges',
      'Évaluation des troubles de la mémoire et des neuropathies périphériques',
      'Suivi neurologique au long cours et réadaptation post-AVC',
    ],
    doctors: [
      { id: 'dr-norman-colins', name: 'Dr. Norman Colins' },
      { id: 'dr-doe', name: 'Dr. Henri Laurent' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAD8FFRsx9taFhR0DFnEoQsL80WZIhFrZdyAgh7ebqbWshLrsNhXSlXxbUDjfXoZ9JcWsSHDtyFWbOXWscvYb4qz496E3M9KMY67eeou4muodShVXQTyBQqlzlz0C3Iu6LJngWZ7IgyJ8FWholbV0QwORlIv2-FdSizHfXCMZ_l5dHsXCTFiOYkHiBxQIOfiXE-CACeVg21jrvERbTrnfutaT-kslr_dmvCdIEEaLCcW9ji4vWdUOwZGGG7pzdn6Gyu4SMFvbRR2ZV',
    imageAlt: 'Département de Neurologie',
  },
  {
    id: 'hepatologie',
    label: 'Gastro-entérologie & Foie',
    title: 'Gastro-entérologie & Hépatologie',
    subtitle:
      'Bilan spécialisé et traitement des maladies de l’appareil digestif et du foie.',
    description:
      'Ce département assure le dépistage, le diagnostic et le suivi thérapeutique des pathologies digestives, hépatiques et biliaires en lien étroit avec notre laboratoire d’analyses.',
    procedures: [
      'Bilan hépatique complet et suivi des hépatites et stéatoses',
      'Prise en charge du reflux gastro-œsophagien, des ulcères et colopathies',
      'Dépistage digestif et coordination avec le laboratoire d’analyses',
    ],
    doctors: [
      { id: 'dr-david-kim', name: 'Dr. David Kim' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyI_KbH-KK3qO4d3yIo6tCkhfiQh1540JpUgHCWKgkTLIJG6PIecYylQQMd9ouVe2mfs5uDKyZbxg5iu26bv8T8Zsaig2U4m64J9MKgFbfB3_7Q9m-weBejN6Znqifyz2Nl5vknQtWdzn7chYsdT0-5SY89E3e_HxiMsle_7FffZPp6h6SAPLW0tJgtQcGknCfm6iOa7Gi3-m9cBTjY6nKfbVbnGps2W0r9WwFQvaDwBpZouLReCsK-L5xx6QTxcbreMezLbDNYUkH',
    imageAlt: 'Spécialiste en Gastro-entérologie et Hépatologie',
  },
  {
    id: 'ophtalmologie',
    label: 'Ophtalmologie',
    title: 'Ophtalmologie & Soins de la Vue',
    subtitle:
      'Examens de la vue, dépistage du glaucome et correction visuelle.',
    description:
      'Des contrôles réguliers de l’acuité visuelle jusqu’au suivi des pathologies oculaires, notre équipe d’ophtalmologie veille à préserver durablement votre santé visuelle.',
    procedures: [
      'Mesure de l’acuité visuelle et prescription de verres correcteurs',
      'Mesure de la tension oculaire et dépistage précoce du glaucome',
      'Examen du fond d’œil (suivi diabétique et hypertensif)',
    ],
    doctors: [
      { id: 'dr-sarah-lee', name: 'Dr. Sarah Lee' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZPKriD7h83pWRRdXKCBXLgILkgCmNU8VvV_W1Ld8MYLwirorH2IxmzZJI69brmH2fZQ0RlMYDed1KzgJ_dnMLLQwzfq6ghYe6OP0zZDAGuFIjiejCusC_uR2Pek4JborlLYLf1_-Fp4UlqWboX8hAOb88A_sW7Pk',
    imageAlt: 'Département d’Ophtalmologie',
  },
]

export default function DepartmentsSection() {
  const [activeId, setActiveId] = useState('medecine-familiale')
  const sectionRef = useRef<HTMLElement>(null)

  const activeDept = departments.find((d) => d.id === activeId) || departments[0]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        section.querySelector('[data-gsap="dept-container"]'),
        { y: 32, opacity: 0 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: 'power2.out',
        }
      )
    })

    return () => mm.revert()
  }, [])

  useEffect(() => {
    const handleViewDepartment = (e: Event) => {
      const detail = (e as CustomEvent<{ department?: string }>).detail
      if (detail?.department && departments.some((d) => d.id === detail.department)) {
        setActiveId(detail.department)
      }
    }
    window.addEventListener('clinique:view-department', handleViewDepartment)
    return () => window.removeEventListener('clinique:view-department', handleViewDepartment)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      nextIndex = (index + 1) % departments.length
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      nextIndex = (index - 1 + departments.length) % departments.length
    } else if (e.key === 'Home') {
      e.preventDefault()
      nextIndex = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      nextIndex = departments.length - 1
    } else {
      return
    }
    const nextDept = departments[nextIndex]
    setActiveId(nextDept.id)
    const btn = document.getElementById(`dept-tab-${nextDept.id}`)
    btn?.focus()
  }

  const handleBookDepartment = (deptId: string, doctorId?: string) => {
    window.dispatchEvent(
      new CustomEvent('clinique:select-department', {
        detail: { department: deptId, doctor: doctorId },
      })
    )
    const section = document.getElementById('appointment-section')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="departments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-gsap="dept-container">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-clinique_rose" aria-hidden="true"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Pôles d&apos;Excellence Clinique
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-clinique_bleue">
            Explorez Nos Départements Médicaux
          </h2>
          <p className="text-slate-600 text-base mt-3 max-w-2xl">
            Consultez les examens réalisés dans chaque pôle et choisissez directement votre praticien référent.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Responsive Department Selector: 2-col grid on mobile, 3-col on tablet, vertical tablist on desktop */}
          <div
            role="tablist"
            aria-label="Départements médicaux"
            className="w-full lg:w-1/4 lg:border-r border-slate-200 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 lg:gap-0"
          >
            {departments.map((dept, index) => {
              const isSelected = activeId === dept.id
              return (
                <button
                  key={dept.id}
                  id={`dept-tab-${dept.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`dept-panel-${dept.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveId(dept.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`w-full min-h-[48px] text-left py-3.5 px-4 lg:py-4 lg:px-5 font-semibold text-sm sm:text-base transition-colors duration-200 rounded-lg lg:rounded-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-clinique_bleue ${
                    isSelected
                      ? 'text-clinique_bleue bg-blue-50/90 border border-clinique_rose/40 lg:border-0 lg:border-r-[3px] lg:border-clinique_rose'
                      : 'text-slate-700 bg-slate-50 lg:bg-transparent hover:text-clinique_green hover:bg-slate-100/80 lg:hover:bg-slate-50'
                  }`}
                >
                  {dept.label}
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div
            id={`dept-panel-${activeDept.id}`}
            role="tabpanel"
            aria-labelledby={`dept-tab-${activeDept.id}`}
            className="w-full lg:w-3/4 min-w-0"
          >
            <article key={activeDept.id} className="animate-fadeIn">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 break-words">
                    {activeDept.title}
                  </h3>
                  <p className="italic text-slate-700 font-medium mb-4 leading-relaxed">
                    {activeDept.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {activeDept.description}
                  </p>

                  {/* Clinical Procedures List */}
                  <div className="mb-6 bg-glacier-tint border border-blue-100 rounded-lg p-4 sm:p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-clinique_bleue mb-3">
                      Actes &amp; examens réalisés dans ce pôle
                    </h4>
                    <ul className="space-y-2">
                      {activeDept.procedures.map((proc) => (
                        <li key={proc} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check className="w-4 h-4 text-clinique_green flex-shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Attached Doctors */}
                  <div className="mb-6">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Praticiens référents du département :
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeDept.doctors.map((doc) => (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => handleBookDepartment(activeDept.id, doc.id)}
                          className="cursor-pointer inline-flex items-center gap-1.5 rounded-full bg-sky-badge hover:bg-blue-100 border border-blue-200 px-3.5 py-1.5 text-xs font-semibold text-clinique_bleue transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue"
                        >
                          <Stethoscope className="w-3.5 h-3.5 text-clinique_green" strokeWidth={2} aria-hidden="true" />
                          <span>{doc.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBookDepartment(activeDept.id)}
                    className="group cursor-pointer inline-flex items-center gap-2 bg-clinique_bleue hover:bg-clinique_bleu_fonce active:scale-[0.985] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue"
                  >
                    <span>Rendez-vous en {activeDept.label}</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2.25} aria-hidden="true" />
                  </button>
                </div>
                <div className="w-full md:w-1/3 flex items-center">
                  <Image
                    src={activeDept.image}
                    alt={activeDept.imageAlt}
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
