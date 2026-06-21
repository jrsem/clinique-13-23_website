import React from 'react'

const Services = () => {
    return (
        <section className="py-24 bg-white" data-purpose="departments-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Heading --> */}
                <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="h-[2px] w-12 bg-clinique_rose"></div>
                        <span className="text-clinique_rose font-semibold tracking-wide uppercase text-sm">Nos Services</span>
                    </div>
                    <h2 className="text-4xl font-bold text-clinique_bleue">Des soins professionnels pour votre santé</h2>
                </div>
                {/* <!-- Cards Grid --> */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Card 1: Denture Care --> */}
                    <div className="group bg-white p-8 rounded-2xl border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300" data-purpose="department-card">
                        <div className="flex items-start space-x-5">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-clinique_bleue">
                                {/* <!-- Tooth Icon --> */}
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-clinique_bleue transition-colors">Denture Care</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Primary care the main doctor that treats your health.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 2: Orthopedics --> */}
                    <div className="group bg-white p-8 rounded-2xl border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300" data-purpose="department-card">
                        <div className="flex items-start space-x-5">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-clinique_bleue">
                                {/* <!-- Ortho Icon --> */}
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.283a2 2 0 01-1.186.116l-2.054-.411a7 7 0 01-5.147-4.142l-.527-1.157a2 2 0 00-1.002-1.002l-1.157-.527a7 7 0 01-4.142-5.147l-.411-2.054a2 2 0 01.116-1.186l.283-.628a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L15.428 19.428z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-clinique_bleue transition-colors">Orthopedics</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Primary care the main doctor that treats your health.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 3: Otology --> */}
                    <div className="group bg-white p-8 rounded-2xl border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300" data-purpose="department-card">
                        <div className="flex items-start space-x-5">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-clinique_bleue">
                                {/* <!-- Ear Icon --> */}
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 8c1.105 0 2 1.343 2 3s-.895 3-2 3-2-1.343-2-3 .895-3 2-3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-clinique_bleue transition-colors">Otology</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Primary care the main doctor that treats your health.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 4: Nephrology --> */}
                    <div className="group bg-white p-8 rounded-2xl border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300" data-purpose="department-card">
                        <div className="flex items-start space-x-5">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-clinique_bleue">
                                {/* <!-- Kidney/Internal Icon --> */}
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.283a2 2 0 01-1.186.116l-2.054-.411a7 7 0 01-5.147-4.142l-.527-1.157a2 2 0 00-1.002-1.002l-1.157-.527a7 7 0 01-4.142-5.147l-.411-2.054a2 2 0 01.116-1.186l.283-.628a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L15.428 19.428z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-clinique_bleue transition-colors">Nephrology</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Primary care the main doctor that treats your health.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 5: General Surgery --> */}
                    <div className="group bg-white p-8 rounded-2xl border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300" data-purpose="department-card">
                        <div className="flex items-start space-x-5">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-clinique_bleue">
                                {/* <!-- Scalpel/Surgery Icon --> */}
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-clinique_bleue transition-colors">General Surgery</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Primary care the main doctor that treats your health.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 6: Urology --> */}
                    <div className="group bg-white p-8 rounded-2xl border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300" data-purpose="department-card">
                        <div className="flex items-start space-x-5">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-clinique_bleue">
                                {/* <!-- Urology Icon --> */}
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">Urology</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Primary care the main doctor that treats your health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services