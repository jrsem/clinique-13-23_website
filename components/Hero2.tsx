import React from 'react'

const Hero2 = () => {
  return (
    <main>

<section className="relative min-h-[800px] flex items-center bg-cover bg-center" data-purpose="hero-banner" style={{ backgroundImage: "url('/hero.jpg')" }}>

<div className="absolute inset-0 bg-white/60 md:bg-transparent md:hero-overlay"></div>
<div className="container mx-auto px-6 py-12 relative z-10">
<div className="max-w-lg">
<div className="flex items-center mb-2">
<span className="w-8 h-1 bg-clinique_rose mr-3"></span>
<span className="uppercase tracking-widest text-xs font-bold text-clinique_rose">Clinique 13/23</span>
</div>
<h1 className="text-4xl md:text-6xl font-bold text-clinique_bleue leading-tight mb-6">
            Votre Partenaire de Santé  <br/> le Plus Fiable
          </h1>
<p className="text-gray-700 text-sm mb-8 leading-relaxed">
            A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
          </p>
<a className="inline-flex items-center bg-clinique_green text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-clinique_rose transition duration-300" href="#">
            Prendre un rendez-vous
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="container mx-auto px-4 -mt-10 mb-12 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
{/* Card 1: 24 Hours Service */}
<div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm flex flex-col items-start" data-purpose="feature-card">
<div className="text-clinique_rose mb-4">
<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
</svg>
</div>
<span className="text-novena-gray text-xs mb-1">Service 24h/24</span>
<h3 className="text-xl font-bold text-novena-navy mb-4">Rendez-vous en ligne</h3>
<p className="text-novena-gray text-sm leading-relaxed mb-6">
           Obtenez un soutien en ligne à tout moment pour les urgences. Nous avons introduit le principe de la médecine familiale.
          </p>
<a className="bg-clinique_bleue text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-clinique_rose transition mt-auto" href="#">
            Prendre un rendez-vous
          </a>
</div>

<div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm flex flex-col items-start" data-purpose="feature-card">
<div className="text-clinique_rose mb-4">
<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
</svg>
</div>
<span className="text-novena-gray text-xs mb-1">Horaire</span>
<h3 className="text-xl font-bold text-novena-navy mb-6"> Heures de travail</h3>
<div className="w-full space-y-3 text-sm text-novena-gray">
<div className="flex justify-between border-b border-gray-100 pb-2">
<span>Samedi - Mercredi :</span>
<span className="text-novena-navy">8:00 - 17:00</span>
</div>
<div className="flex justify-between border-b border-gray-100 pb-2">
<span>Jeudi - Vendredi :</span>
<span className="text-novena-navy">9:00 - 17:00</span>
</div>
<div className="flex justify-between pb-2">
<span>Samedi - Dimanche :</span>
<span className="text-novena-navy">10:00 - 17:00</span>
</div>
</div>
</div>

<div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm flex flex-col items-start" data-purpose="feature-card">
<div className="text-clinique_rose mb-4">
<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
<span className="text-novena-gray text-xs mb-1">Urgences</span>
<h3 className="text-2xl font-bold text-novena-navy mb-4">3450-2653 | 5523-2555</h3>
<p className="text-novena-gray text-sm leading-relaxed">
            Obtenez un soutien en ligne à tout moment pour les urgences. Nous avons introduit le principe de la médecine familiale. Connectez-vous avec nous pour toute urgence.
          </p>
</div>
</div>
</section>

</main>
  )
}

export default Hero2