import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section
      className="relative bg-glacier-tint overflow-hidden min-h-[260px] py-12 flex items-center"
      data-purpose="hero-banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 min-w-0" data-purpose="hero-content">
          <nav aria-label="Fil d'Ariane" className="mb-3 text-sm text-slate-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-clinique_bleue underline-offset-4 hover:underline">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-clinique_bleue" aria-current="page">
                Rendez-vous
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-bold text-clinique_bleue leading-tight mb-4 text-balance">
            Prendre un rendez-vous médical en ligne
          </h1>
          <p className="text-slate-700 text-base leading-relaxed max-w-lg">
            Réservez votre consultation en médecine familiale ou spécialisée. En cas d&apos;urgence, appelez le{" "}
            <a href="tel:34502653" className="font-bold text-clinique_bleue hover:underline tabular-nums whitespace-nowrap">
              3450-2653
            </a>{" "}
            ou le{" "}
            <a href="tel:55232555" className="font-bold text-clinique_bleue hover:underline tabular-nums whitespace-nowrap">
              5523-2555
            </a>
            .
          </p>
        </div>

        <div className="relative hidden lg:flex justify-end" data-purpose="hero-image-container">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="relative">
            <Image
              alt="Équipe médicale de la Clinique 13-23"
              className="w-full max-w-[320px] h-auto object-contain rounded-lg"
              src="/doctor.jpg"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
