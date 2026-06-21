import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
     <section className="relative bg-[#F0F7FF] overflow-hidden h-[40vh] min-h-[20vh] flex items-center" data-purpose="hero-banner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="relative z-10" data-purpose="hero-content">
                      
                        <h1 className="text-3xl lg:text-4xl font-bold text-clinique_bleue leading-tight mb-6">
                            Prendre rendez-vous.
                        </h1>
                      
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

export default Banner