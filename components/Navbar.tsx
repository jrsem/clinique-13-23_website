import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center space-x-2" data-purpose="logo-container">
{/* <div className="w-8 h-8 bg-brand-primary rounded-md flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div> */}
<Image src="/logo.png" alt="logo" width={150} height={150} />
{/* <span className="text-2xl font-bold text-brand-dark">MediAid</span> */}
</div>

<nav className="hidden md:flex space-x-8 items-center" data-purpose="primary-navigation">
<Link className="text-slate-600 hover:text-brand-primary font-medium" href="/">Accueil</Link>
<Link className="text-slate-600 hover:text-brand-primary font-medium" href="/about">A propos</Link>
<Link className="text-slate-600 hover:text-brand-primary font-medium" href="/service">Service</Link>
<Link className="text-slate-600 hover:text-brand-primary font-medium" href="/doctor">Docteurs</Link>
<Link className="text-slate-600 hover:text-brand-primary font-medium" href="/department">Departements</Link>
<Link className="text-slate-600 hover:text-brand-primary font-medium" href="/contact">Contact</Link>

</nav>

{/* <div className="flex items-center">
<a className="bg-clinique_bleue hover:bg-clinique_green text-white px-6 py-2.5 rounded-full font-medium flex items-center transition-all shadow-md" href="#">
            Prendre rendez-vous <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
    </a>
</div> */}
</div>
</div>
</header>

  )
}

export default Navbar