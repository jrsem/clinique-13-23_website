"use client"

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhoneCall, Check, ChevronRight, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const departmentLabels: Record<string, string> = {
  "medecine-familiale": "Médecine Familiale & Générale",
  "cardiologie": "Cardiologie (Cœur & Tension)",
  "pediatrie": "Pédiatrie (Nourrissons & Enfants)",
  "neurologie": "Neurologie (Migraines & Nerfs)",
  "hepatologie": "Gastro-entérologie & Foie",
  "ophtalmologie": "Ophtalmologie (Vue & Yeux)",
}

export const departmentDoctors: Record<string, { id: string, name: string }[]> = {
  "medecine-familiale": [
    { id: "dr-jean-baptiste", name: "Dr. Marc Jean-Baptiste (Médecine Familiale)" },
    { id: "dr-pierre-louis", name: "Dr. Claire Pierre-Louis (Médecine Générale)" }
  ],
  "cardiologie": [
    { id: "dr-steven-lee", name: "Dr. Steven Lee (Cardiologie)" },
    { id: "dr-adams", name: "Dr. Michel Adams (Cardiologie)" }
  ],
  "pediatrie": [
    { id: "dr-wilson", name: "Dr. Nadia Wilson (Pédiatrie)" },
    { id: "dr-brown", name: "Dr. Patrick Brown (Pédiatrie)" }
  ],
  "neurologie": [
    { id: "dr-doe", name: "Dr. Henri Laurent (Neurologie)" },
    { id: "dr-norman-colins", name: "Dr. Norman Colins (Neurologie)" }
  ],
  "hepatologie": [
    { id: "dr-david-kim", name: "Dr. David Kim (Gastro-entérologie & Foie)" }
  ],
  "ophtalmologie": [
    { id: "dr-sarah-lee", name: "Dr. Sarah Lee (Ophtalmologie)" }
  ]
}

export const doctorImages: Record<string, string> = {
  "dr-norman-colins": "/doctor-1.jpg",
  "dr-steven-lee": "/doctor-2.jpg",
  "dr-david-kim": "/doctor-3.jpg",
  "dr-sarah-lee": "/apointment.jpg",
  "dr-jean-baptiste": "/doctor.jpg",
  "dr-pierre-louis": "/doctor-2.jpg",
  "dr-wilson": "/doctor-2.jpg",
  "dr-brown": "/doctor-1.jpg",
  "dr-adams": "/doctor-1.jpg",
  "dr-doe": "/doctor-1.jpg",
}

export const getDoctorNameById = (doctorId?: string) => {
  if (!doctorId) return ""
  for (const dep of Object.values(departmentDoctors)) {
    const found = dep.find((d) => d.id === doctorId)
    if (found) return found.name
  }
  return ""
}

const getTodayIso = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const formSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, "Veuillez indiquer votre nom complet (au moins 2 caractères).")
    .max(100, "Le nom ne peut pas dépasser 100 caractères."),
  age: z
    .string()
    .trim()
    .regex(/^\d+$/, "Veuillez saisir un âge valide en chiffres.")
    .refine((val) => {
      const n = Number(val)
      return Number.isInteger(n) && n >= 0 && n <= 120
    }, "L'âge doit être compris entre 0 et 120 ans."),
  gender: z
    .string()
    .min(1, "Veuillez sélectionner votre sexe."),
  phone_number: z
    .string()
    .trim()
    .min(8, "Veuillez saisir un numéro de téléphone valide (ex. 3450-2653).")
    .max(20, "Le numéro de téléphone est trop long.")
    .regex(
      /^[+\d][\d\s()-]{6,18}\d$/,
      "Format invalide. Utilisez uniquement des chiffres, espaces ou tirets (ex. 3450-2653)."
    ),

  department: z
    .string()
    .min(1, "Veuillez choisir un département médical."),
  doctor: z
    .string()
    .min(1, "Veuillez choisir un médecin."),
  previously_attended: z
    .string()
    .min(1, "Veuillez indiquer si vous avez déjà consulté à la clinique."),

  appointment_date: z
    .string()
    .min(1, "Veuillez choisir une date de rendez-vous.")
    .refine((val) => {
      const today = getTodayIso()
      return val >= today
    }, "La date du rendez-vous ne peut pas être dans le passé."),
  appointment_time: z
    .string()
    .min(1, "Veuillez choisir une heure de rendez-vous.")
    .refine((val) => {
      return val >= "07:30" && val <= "19:30"
    }, "Veuillez choisir un horaire d'ouverture compris entre 07h30 et 19h30."),
  message: z
    .string()
    .max(500, "Votre message ne peut pas dépasser 500 caractères.")
    .optional(),
}).superRefine((data, ctx) => {
  if (!data.appointment_date) return
  const parts = data.appointment_date.split("-").map(Number)
  if (parts.length !== 3 || parts.some(isNaN)) return
  const dateObj = new Date(parts[0], parts[1] - 1, parts[2])
  const day = dateObj.getDay()
  if (day === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["appointment_date"],
      message: "Les consultations programmées ont lieu du lundi au samedi. Le dimanche, notre garde d'urgence 24h/24 vous accueille au 3450-2653.",
    })
  } else if (day === 6 && data.appointment_time && (data.appointment_time < "08:00" || data.appointment_time > "17:30")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["appointment_time"],
      message: "Le samedi, les créneaux de consultation sont compris entre 08h00 et 17h30 (fermeture à 18h00).",
    })
  }
})

type FormData = z.infer<typeof formSchema>

const stepsMeta = [
  { number: 1, title: "Coordonnées" },
  { number: 2, title: "Consultation" },
  { number: 3, title: "Date & Horaire" },
]

const RendezVous = () => {
  const [step, setStep] = useState(1)
  const [stepDirection, setStepDirection] = useState<"forward" | "backward">("forward")
  const [preselectPulse, setPreselectPulse] = useState(0)
  const [isPreselectHighlighted, setIsPreselectHighlighted] = useState(false)
  const [errorNudge, setErrorNudge] = useState(false)
  const [minDate, setMinDate] = useState("2026-01-01")
  const [submittedData, setSubmittedData] = useState<(FormData & { reference: string }) | null>(null)
  const [selectedDoctorPhoto, setSelectedDoctorPhoto] = useState<string>("/apointment.jpg")

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      full_name: "",
      age: "",
      gender: "",
      phone_number: "",
      department: "",
      doctor: "",
      previously_attended: "",
      appointment_date: "",
      appointment_time: "09:00",
      message: "",
    }
  })

  useEffect(() => {
    setMinDate(getTodayIso())
  }, [])

  const selectedDepartment = watch("department")
  const selectedDoctorId = watch("doctor")
  const watchedFullName = watch("full_name")
  const watchedPhone = watch("phone_number")
  const watchedMessage = watch("message") || ""

  useEffect(() => {
    const currentDoctors = departmentDoctors[selectedDepartment] || []
    if (selectedDoctorId && !currentDoctors.some((d) => d.id === selectedDoctorId)) {
      setValue("doctor", "")
    }
  }, [selectedDepartment, selectedDoctorId, setValue])

  useEffect(() => {
    if (selectedDoctorId && doctorImages[selectedDoctorId]) {
      setSelectedDoctorPhoto(doctorImages[selectedDoctorId])
    }
  }, [selectedDoctorId])

  useEffect(() => {
    let highlightTimer: ReturnType<typeof setTimeout> | null = null
    const handlePreselect = (e: Event) => {
      const detail = (e as CustomEvent<{ department?: string; doctor?: string; image?: string }>).detail
      if (detail?.department && departmentLabels[detail.department]) {
        setSubmittedData(null)
        setStepDirection("forward")
        setStep(1)
        setValue("department", detail.department, { shouldValidate: true })
        if (detail.doctor) {
          setValue("doctor", detail.doctor, { shouldValidate: true })
        }
        if (detail.image) {
          setSelectedDoctorPhoto(detail.image)
        } else if (detail.doctor && doctorImages[detail.doctor]) {
          setSelectedDoctorPhoto(doctorImages[detail.doctor])
        }
        setPreselectPulse((prev) => prev + 1)
        setIsPreselectHighlighted(true)
        if (highlightTimer) clearTimeout(highlightTimer)
        highlightTimer = setTimeout(() => {
          setIsPreselectHighlighted(false)
        }, 900)
      }
    }
    window.addEventListener("clinique:select-department", handlePreselect)
    return () => {
      window.removeEventListener("clinique:select-department", handlePreselect)
      if (highlightTimer) clearTimeout(highlightTimer)
    }
  }, [setValue])

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []
    if (step === 1) fieldsToValidate = ['full_name', 'age', 'gender', 'phone_number']
    if (step === 2) fieldsToValidate = ['department', 'doctor', 'previously_attended']

    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid) {
      setStepDirection("forward")
      setStep((prev) => Math.min(prev + 1, 3))
    } else {
      setErrorNudge(false)
      requestAnimationFrame(() => {
        setErrorNudge(true)
        setTimeout(() => setErrorNudge(false), 200)
      })
    }
  }

  const prevStep = () => {
    setStepDirection("backward")
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data: FormData) => {
    const refSuffix = String(Math.floor(1000 + Math.random() * 9000))
    setSubmittedData({
      ...data,
      reference: `RDV-1323-${refSuffix}`,
    })
  }

  const handleReset = () => {
    reset()
    setSubmittedData(null)
    setStepDirection("backward")
    setStep(1)
    setSelectedDoctorPhoto("/apointment.jpg")
  }

  const stepAnimationClass = `${
    stepDirection === "forward" ? "animate-step-forward" : "animate-step-backward"
  } ${errorNudge ? "animate-error-nudge" : ""}`

  const selectedDoctorName =
    (selectedDepartment &&
      departmentDoctors[selectedDepartment]?.find((d) => d.id === selectedDoctorId)?.name) ||
    getDoctorNameById(selectedDoctorId) ||
    ""

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        section.querySelector('[data-purpose="booking-container"]'),
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

  return (
    <section ref={sectionRef} className="w-full bg-ice-canvas py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="appointment-section">
      <div
        className={`max-w-7xl mx-auto shadow-md hover:shadow-lg border border-slate-100 rounded-lg overflow-hidden flex flex-col lg:flex-row bg-white transition-shadow duration-300 ${
          isPreselectHighlighted ? "ring-2 ring-clinique_bleue/30 shadow-md" : ""
        }`}
        data-purpose="booking-container"
      >
        {/* Image & Emergency Contact Column */}
        <div className="relative w-full lg:w-5/12 flex flex-col justify-end bg-slate-900" data-purpose="image-column">
          {/* Dedicated photo area: full portrait visibility on mobile, full-height absolute on desktop */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full lg:min-h-[580px] lg:absolute lg:inset-0 overflow-hidden bg-portrait-sky">
            <Image
              key={selectedDoctorPhoto}
              alt={selectedDoctorName ? `Portrait de ${selectedDoctorName} - Clinique 13-23` : "Équipe médicale de la Clinique 13-23 à votre écoute"}
              className="w-full h-full object-cover object-top animate-fadeIn"
              src={selectedDoctorPhoto}
              sizes="(max-width: 1024px) 100vw, 42vw"
              fill
              priority
            />
          </div>

          {/* Contact overlay: docked directly beneath the photo on mobile, floats at bottom on desktop */}
          <div className="relative z-10 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 bg-clinique_bleue text-white p-5 sm:p-6 md:p-8 flex items-center gap-3.5 sm:gap-4 shadow-md lg:shadow-none" data-purpose="contact-overlay">
            <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/30" aria-hidden="true">
              <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <span className="block text-xs uppercase tracking-wider text-blue-100 font-semibold mb-0.5 sm:mb-1">
                Urgences &amp; Accueil Téléphonique
              </span>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight tabular-nums flex flex-wrap items-center gap-x-2">
                <a
                  href="tel:34502653"
                  className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
                >
                  3450-2653
                </a>
                <span aria-hidden="true">|</span>
                <a
                  href="tel:55232555"
                  className="hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
                >
                  5523-2555
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full lg:w-7/12 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white min-w-0" data-purpose="form-column">
          <div className="mb-8" data-purpose="form-header">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-12 bg-clinique_rose" aria-hidden="true"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Demande en Ligne
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-clinique_bleue mb-3">
              Prendre un rendez-vous
            </h2>
            <p className="text-slate-600 text-base leading-relaxed max-w-xl mb-2">
              Complétez votre demande en 3 étapes. Notre secrétariat médical vous rappelle pour confirmer votre créneau.
            </p>
            {!submittedData && (
              <p className="text-xs text-slate-600 mb-6">
                Les champs marqués d&apos;un astérisque (<span className="text-red-600 font-semibold">*</span>) sont&nbsp;obligatoires.
              </p>
            )}

            {!submittedData && selectedDepartment && (step === 1 || step === 2) && (
              <div
                key={preselectPulse}
                className="animate-badge-confirm mb-5 inline-flex items-center gap-2 rounded-full bg-sky-badge border border-blue-200 px-3.5 py-1.5 text-xs font-semibold text-clinique_bleue shadow-xs"
              >
                <Check className="w-3.5 h-3.5 text-clinique_green flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>
                  Spécialité pré-sélectionnée : {departmentLabels[selectedDepartment]}
                  {selectedDoctorName ? ` (${selectedDoctorName.split(' (')[0]})` : ''}
                </span>
              </div>
            )}

            {/* Step Indicator */}
            {!submittedData && (
              <nav aria-label="Étapes de la demande de rendez-vous">
                <ol className="grid grid-cols-3 gap-2 sm:gap-3">
                  {stepsMeta.map((item) => {
                    const isCompleted = step > item.number
                    const isCurrent = step === item.number
                    return (
                      <li key={item.number} className="min-w-0">
                        <button
                          type="button"
                          disabled={item.number >= step}
                          onClick={() => {
                            if (item.number < step) {
                              setStepDirection("backward")
                              setStep(item.number)
                            }
                          }}
                          aria-current={isCurrent ? "step" : undefined}
                          className={`w-full text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clinique_bleue rounded-md ${
                            item.number < step ? "cursor-pointer" : "cursor-default"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <span
                              className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors duration-200 ${
                                isCurrent || isCompleted
                                  ? "bg-clinique_green text-white"
                                  : "bg-slate-200 text-slate-700"
                              }`}
                            >
                              {isCompleted ? (
                                <Check className="w-3.5 h-3.5 animate-check-pop" strokeWidth={2.5} aria-hidden="true" />
                              ) : (
                                item.number
                              )}
                            </span>
                            <span
                              className={`text-xs sm:text-sm font-semibold truncate transition-colors duration-200 ${
                                isCurrent
                                  ? "text-clinique_bleue"
                                  : isCompleted
                                  ? "text-clinique_green group-hover:underline"
                                  : "text-slate-600"
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                            <span
                              className={`block h-full w-full rounded-full bg-clinique_green origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                isCurrent || isCompleted ? "scale-x-100" : "scale-x-0"
                              }`}
                            />
                          </div>
                        </button>
                      </li>
                    )
                  })}
                </ol>
              </nav>
            )}
          </div>

          {submittedData ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 space-y-6 animate-fadeIn"
              data-purpose="appointment-confirmation"
            >
              <div className="flex items-start gap-4">
                <div className="animate-check-pop flex-shrink-0 w-12 h-12 rounded-full bg-clinique_green text-white flex items-center justify-center shadow-xs">
                  <Check className="w-6 h-6" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-clinique_green mb-1">
                    Référence : {submittedData.reference}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Demande de rendez-vous enregistrée
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base mt-1 leading-relaxed">
                    Merci <strong className="font-semibold text-slate-900 break-words">{submittedData.full_name}</strong>. Notre équipe d&apos;accueil vous contactera au{" "}
                    <strong className="font-semibold text-slate-900 tabular-nums">{submittedData.phone_number}</strong> pour confirmer votre consultation.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 sm:p-5 rounded-lg border border-slate-200 text-sm">
                <div className="min-w-0">
                  <dt className="text-slate-500 font-medium">Spécialité choisie</dt>
                  <dd className="text-slate-900 font-semibold mt-0.5 break-words">
                    {departmentLabels[submittedData.department] || submittedData.department}
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-slate-500 font-medium">Médecin</dt>
                  <dd className="text-slate-900 font-semibold mt-0.5 break-words">
                    {departmentDoctors[submittedData.department]?.find((d) => d.id === submittedData.doctor)?.name ||
                      submittedData.doctor}
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Date souhaitée</dt>
                  <dd className="text-slate-900 font-semibold mt-0.5 tabular-nums">
                    {(() => {
                      const parts = submittedData.appointment_date.split("-").map(Number)
                      if (parts.length === 3 && !parts.some(isNaN)) {
                        const d = new Date(parts[0], parts[1] - 1, parts[2])
                        return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(d)
                      }
                      return submittedData.appointment_date
                    })()}
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 font-medium">Horaire souhaité</dt>
                  <dd className="text-slate-900 font-semibold mt-0.5 tabular-nums">
                    {submittedData.appointment_time}
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-600">
                  Besoin d&apos;une prise en charge immédiate ? Appelez le{" "}
                  <a href="tel:34502653" className="font-bold text-clinique_bleue underline">
                    3450-2653
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="cursor-pointer bg-clinique_bleue hover:bg-clinique_bleu_fonce text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-colors self-start sm:self-auto"
                >
                  Nouvelle demande
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" data-purpose="appointment-form">
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div key="step-1" className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${stepAnimationClass}`}>
                  <div className="min-w-0">
                    <label htmlFor="full_name" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Nom complet <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      placeholder="Ex. Marie Jean-Baptiste"
                      aria-invalid={!!errors.full_name}
                      aria-describedby={errors.full_name ? "full_name-error" : undefined}
                      {...register("full_name")}
                      className="input-field w-full h-14 px-4 py-2 rounded-md text-base text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 transition-shadow"
                    />
                    {errors.full_name && (
                      <p id="full_name-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.full_name.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="age" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Âge du patient (en années) <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="age"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={120}
                      placeholder="Ex. 34 (0 pour < 1 an)"
                      aria-invalid={!!errors.age}
                      aria-describedby={errors.age ? "age-error" : "age-hint"}
                      {...register("age")}
                      className="input-field w-full h-14 px-4 py-2 rounded-md text-base text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 tabular-nums transition-shadow"
                    />
                    {errors.age ? (
                      <p id="age-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.age.message}
                      </p>
                    ) : (
                      <p id="age-hint" className="text-slate-600 text-xs mt-1">
                        Indiquez 0 pour un nourrisson de moins de 12&nbsp;mois.
                      </p>
                    )}
                  </div>

                  <div className="relative min-w-0">
                    <label htmlFor="gender" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Sexe <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="gender"
                        autoComplete="sex"
                        aria-invalid={!!errors.gender}
                        aria-describedby={errors.gender ? "gender-error" : undefined}
                        {...register("gender")}
                        className="input-field w-full h-14 pl-4 pr-10 py-2 rounded-md appearance-none text-base text-slate-900 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 transition-shadow"
                      >
                        <option value="">Sélectionner votre sexe</option>
                        <option value="Féminin">Féminin</option>
                        <option value="Masculin">Masculin</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" strokeWidth={2} aria-hidden="true" />
                    </div>
                    {errors.gender && (
                      <p id="gender-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="phone_number" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Téléphone <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone_number"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={20}
                      placeholder="Ex. 3450-2653"
                      aria-invalid={!!errors.phone_number}
                      aria-describedby={errors.phone_number ? "phone_number-error" : "phone_number-hint"}
                      {...register("phone_number")}
                      className="input-field w-full h-14 px-4 py-2 rounded-md text-base text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 tabular-nums transition-shadow"
                    />
                    {errors.phone_number ? (
                      <p id="phone_number-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.phone_number.message}
                      </p>
                    ) : (
                      <p id="phone_number-hint" className="text-slate-600 text-xs mt-1">
                        Numéro utilisé pour confirmer votre consultation.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Medical Details */}
              {step === 2 && (
                <div key="step-2" className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${stepAnimationClass}`}>
                  <div className="relative min-w-0">
                    <label htmlFor="department" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Département médical <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="department"
                        aria-invalid={!!errors.department}
                        aria-describedby={errors.department ? "department-error" : undefined}
                        {...register("department")}
                        className="input-field w-full h-14 pl-4 pr-10 py-2 rounded-md appearance-none text-base text-slate-900 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 transition-shadow"
                      >
                        <option value="">Choisir un département</option>
                        {Object.entries(departmentLabels).map(([key, label]) => (
                          <option key={key} value={key}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" strokeWidth={2} aria-hidden="true" />
                    </div>
                    {errors.department && (
                      <p id="department-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.department.message}
                      </p>
                    )}
                  </div>

                  <div className="relative min-w-0">
                    <label htmlFor="doctor" className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Médecin souhaité <span className="text-red-600" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="doctor"
                        disabled={!selectedDepartment}
                        aria-invalid={!!errors.doctor}
                        aria-describedby={errors.doctor ? "doctor-error" : undefined}
                        {...register("doctor")}
                        className="input-field w-full h-14 pl-4 pr-10 py-2 rounded-md appearance-none text-base text-slate-900 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-shadow"
                      >
                        <option value="">
                          {selectedDepartment ? "Choisir un médecin" : "Sélectionnez d'abord un département"}
                        </option>
                        {selectedDepartment &&
                          departmentDoctors[selectedDepartment]?.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name}
                            </option>
                          ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" strokeWidth={2} aria-hidden="true" />
                    </div>
                    {errors.doctor && (
                      <p id="doctor-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.doctor.message}
                      </p>
                    )}
                  </div>

                  <fieldset className="col-span-1 md:col-span-2 pt-2">
                    <legend className="text-sm font-semibold text-slate-800 mb-2">
                      Avez-vous déjà consulté à la Clinique 13-23 ? <span className="text-red-600" aria-hidden="true">*</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 min-h-[48px] px-4 py-3 rounded-md border border-slate-200 bg-gray-50 hover:bg-slate-100/80 text-slate-800 cursor-pointer transition-colors has-[:checked]:border-clinique_bleue has-[:checked]:bg-blue-50/60">
                        <input
                          type="radio"
                          value="Oui"
                          {...register("previously_attended")}
                          className="text-clinique_bleue focus:ring-clinique_bleue w-5 h-5"
                        />
                        <span className="text-sm font-medium">Oui, je suis déjà patient(e)</span>
                      </label>
                      <label className="flex items-center gap-3 min-h-[48px] px-4 py-3 rounded-md border border-slate-200 bg-gray-50 hover:bg-slate-100/80 text-slate-800 cursor-pointer transition-colors has-[:checked]:border-clinique_bleue has-[:checked]:bg-blue-50/60">
                        <input
                          type="radio"
                          value="Non"
                          {...register("previously_attended")}
                          className="text-clinique_bleue focus:ring-clinique_bleue w-5 h-5"
                        />
                        <span className="text-sm font-medium">Non, c&apos;est ma première visite</span>
                      </label>
                    </div>
                    {errors.previously_attended && (
                      <p role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                        {errors.previously_attended.message}
                      </p>
                    )}
                  </fieldset>
                </div>
              )}

              {/* Step 3: Appointment Booking */}
              {step === 3 && (
                <div key="step-3" className={`space-y-4 ${stepAnimationClass}`}>
                  {/* Working Memory Bridge: Summary of Steps 1 & 2 */}
                  <div className="rounded-md bg-blue-50/70 border border-blue-100 px-4 py-3 text-xs sm:text-sm text-slate-700 flex flex-wrap justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-semibold text-clinique_bleue">Patient :</span>{" "}
                      <span className="break-words">{watchedFullName}</span> ({watchedPhone})
                    </div>
                    <div className="min-w-0">
                      <span className="font-semibold text-clinique_bleue">Consultation :</span>{" "}
                      <span className="break-words">
                        {departmentLabels[selectedDepartment] || selectedDepartment}
                        {selectedDoctorName ? ` — ${selectedDoctorName}` : ""}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="min-w-0">
                      <label htmlFor="appointment_date" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Date souhaitée <span className="text-red-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="appointment_date"
                        type="date"
                        min={minDate}
                        aria-invalid={!!errors.appointment_date}
                        aria-describedby={errors.appointment_date ? "appointment_date-error" : undefined}
                        {...register("appointment_date")}
                        className="input-field w-full h-14 px-4 py-2 rounded-md text-base text-slate-900 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 tabular-nums transition-shadow"
                      />
                      {errors.appointment_date && (
                        <p id="appointment_date-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                          {errors.appointment_date.message}
                        </p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="appointment_time" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Heure souhaitée (07h30 – 19h30) <span className="text-red-600" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="appointment_time"
                        type="time"
                        min="07:30"
                        max="19:30"
                        aria-invalid={!!errors.appointment_time}
                        aria-describedby={errors.appointment_time ? "appointment_time-error" : "appointment_time-hint"}
                        {...register("appointment_time")}
                        className="input-field w-full h-14 px-4 py-2 rounded-md text-base text-slate-900 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none bg-gray-50 border border-slate-200 tabular-nums transition-shadow"
                      />
                      {errors.appointment_time ? (
                        <p id="appointment_time-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                          {errors.appointment_time.message}
                        </p>
                      ) : (
                        <p id="appointment_time-hint" className="text-slate-600 text-xs mt-1">
                          Consultations : Lun – Ven (07h30 – 20h00), Sam (08h00 – 18h00).
                        </p>
                      )}
                    </div>

                    <div className="col-span-1 md:col-span-2 min-w-0">
                      <div className="flex justify-between items-baseline mb-1.5">
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
                          Motif de consultation ou informations complémentaires (optionnel)
                        </label>
                        <span className="text-xs text-slate-600 tabular-nums">
                          {watchedMessage.length}/500
                        </span>
                      </div>
                      <textarea
                        id="message"
                        rows={3}
                        maxLength={500}
                        placeholder="Précisez brièvement vos symptômes ou vos préférences horaires..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        {...register("message")}
                        className="input-field w-full px-4 py-3 rounded-md text-base text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-clinique_bleue focus:bg-white outline-none resize-none bg-gray-50 border border-slate-200 transition-shadow"
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="text-red-600 text-xs font-medium mt-1.5">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="cursor-pointer bg-slate-200 hover:bg-slate-300 active:scale-[0.985] transition-all duration-150 text-slate-800 px-6 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm"
                  >
                    Retour
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="group cursor-pointer bg-clinique_bleue hover:bg-clinique_bleu_fonce active:scale-[0.985] transition-all duration-150 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm ml-auto inline-flex items-center gap-2"
                  >
                    <span>Étape suivante</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2.25} aria-hidden="true" />
                  </button>
                )}

                {step === 3 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group cursor-pointer bg-clinique_green hover:bg-clinique_rose active:scale-[0.985] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm inline-flex items-center justify-center gap-2 ml-auto"
                  >
                    <span>{isSubmitting ? "Envoi de la demande..." : "Envoyer ma demande"}</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" strokeWidth={2.25} aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default RendezVous
