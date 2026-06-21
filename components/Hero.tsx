import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="relative bg-[#F0F7FF] overflow-hidden h-[50vh] min-h-[20vh] flex items-center" data-purpose="hero-banner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative z-10" data-purpose="hero-content">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="h-[2px] w-12 bg-clinique_rose"></div>
                        <span className="text-clinique_rose font-semibold tracking-wide uppercase text-sm">Total Health Care Solution</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-clinique_bleue leading-tight mb-6">
                        Take Best Quality Treatment Get.
                    </h1>
                    <p className="text-gray-700 text-lg mb-10 max-w-lg leading-relaxed">
                        The art of medicine consists in amusing the patient while. Treatment without prevention is simply.
                    </p>
                    <a className="inline-flex items-center bg-clinique_green hover:bg-clinique_green text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl" href="#">
                        Prendre rendez-vous Maintenant <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </a>
                </div>

                <div className="relative" data-purpose="hero-image-container">
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
                    <div className="relative">
                        <Image alt="Healthcare professionals with family" className="w-full h-auto object-contain" src="/doctor.jpg" width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero