import React from 'react'

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-4 md:px-10 lg:px-20 bg-white" data-purpose="site-footer">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div data-purpose="brand-section">
<div className="flex items-center gap-2 mb-6" data-purpose="logo">
<i className="fa-solid fa-staff-snake text-novena-red text-3xl"></i>
<span className="text-3xl font-bold text-novena-navy font-heading tracking-tight">Novena</span>
</div>
<p className="text-novena-blue leading-relaxed mb-8">
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>

<div className="flex gap-3">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white hover:bg-novena-red transition-colors" href="#">
<i className="fa-brands fa-facebook-f"></i>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white hover:bg-novena-red transition-colors" href="#">
<i className="fa-brands fa-twitter"></i>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white hover:bg-novena-red transition-colors" href="#">
<i className="fa-brands fa-linkedin-in"></i>
</a>
</div>
</div>

<div data-purpose="department-links">
<h3 className="text-xl font-bold text-novena-navy mb-10 section-title-underline font-heading">Department</h3>
<ul className="space-y-4 text-novena-blue">
<li><a className="hover:text-novena-red transition-colors" href="#">Surgery</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Wome's Health</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Radiology</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Cardioc</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Medicine</a></li>
</ul>
</div>

<div data-purpose="support-links">
<h3 className="text-xl font-bold text-novena-navy mb-10 section-title-underline font-heading">Support</h3>
<ul className="space-y-4 text-novena-blue">
<li><a className="hover:text-novena-red transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Company Support</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">FAQuestions</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Company Licence</a></li>
</ul>
</div>

<div data-purpose="contact-section">
<h3 className="text-xl font-bold text-novena-navy mb-10 section-title-underline font-heading">Get In Touch</h3>

<div className="mb-6">
<div className="flex items-center gap-3 text-novena-blue mb-1">
<i className="fa-regular fa-envelope text-sm"></i>
<span className="text-sm">Support Available for 24/7</span>
</div>
<a className="text-xl font-bold text-novena-navy hover:text-novena-red transition-colors font-heading block" href="mailto:Support@email.com">
              Support@email.com
            </a>
</div>

<div>
<div className="flex items-center gap-3 text-novena-blue mb-1">
<i className="fa-solid fa-headset text-sm"></i>
<span className="text-sm">Mon to Fri : 08:30 - 18:00</span>
</div>
<a className="text-xl font-bold text-novena-navy hover:text-novena-red transition-colors font-heading block" href="tel:+234566588">
              +23-456-6588
            </a>
</div>
</div>
</div>

<hr className="border-gray-100 mb-8"/>

<div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative pb-4">

<div className="text-novena-blue text-sm order-2 lg:order-1" data-purpose="copyright">
          © Copyright Reserved to <span className="text-novena-navy font-semibold">Novena</span> by <span className="text-novena-navy font-semibold">Themefisher</span>
</div>

<div className="w-full lg:w-1/2 order-1 lg:order-2" data-purpose="newsletter">
<form className="relative flex items-center bg-white rounded-full border border-gray-100 shadow-sm overflow-hidden p-1.5 focus-within:border-novena-red transition-colors">
<input className="w-full px-6 py-3 border-none focus:ring-0 text-gray-700 placeholder:text-gray-400" placeholder="Your Email address" required type="email"/>
<button className="bg-novena-red text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider hover:bg-opacity-90 transition-all uppercase" type="submit">
              Subscribe
            </button>
</form>
</div>

<a aria-label="Back to top" className="fixed bottom-10 right-10 lg:static lg:flex w-12 h-12 bg-novena-red rounded-full flex items-center justify-center text-white shadow-lg hover:bg-novena-navy transition-all z-50" href="#">
<i className="fa-solid fa-arrow-up"></i>
</a>
</div>

<div className="text-center mt-8 text-novena-blue text-sm">
        Distributed by <span className="text-novena-navy font-semibold">Themewagon</span>
</div>
</div>
</footer>
  )
}

export default Footer