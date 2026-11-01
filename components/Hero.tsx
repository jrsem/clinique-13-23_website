import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative bg-glacier-tint overflow-hidden min-h-[420px] py-16 flex items-center"
      data-purpose="hero-banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10 min-w-0" data-purpose="hero-content">
          <div className="h-[2px] w-12 bg-clinique_rose mb-4" aria-hidden="true"></div>
          <h1 className="text-4xl lg:text-6xl font-bold text-clinique_bleue leading-tight mb-6">
            Des soins médicaux attentifs et accessibles pour toute la famille
          </h1>
          <p className="text-slate-700 text-lg mb-8 max-w-lg leading-relaxed">
            La Clinique 13-23 réunit médecine familiale, consultations spécialisées et garde d&apos;urgence 24h/24 pour vous accompagner en toute confiance.
          </p>
          <a
            className="inline-flex items-center bg-clinique_green hover:bg-clinique_rose text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-md"
            href="#appointment-section"
          >
            <span>Prendre rendez-vous</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </a>
        </div>

        <div className="relative" data-purpose="hero-image-container">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="relative">
            <Image
              alt="Médecin de la Clinique 13-23 accueillant une famille"
              className="w-full h-auto object-contain rounded-lg"
              src="/doctor.jpg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
