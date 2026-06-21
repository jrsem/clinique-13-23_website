import React from 'react'

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-4 md:px-10 lg:px-20 bg-white" data-purpose="site-footer">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div data-purpose="brand-section">
<div className="flex items-center gap-2 mb-6" data-purpose="logo">
<i className="fa-solid fa-staff-snake text-clinique_rose text-3xl"></i>
<span className="text-3xl font-bold text-clinique_bleue font-heading tracking-tight">Clinique 13/23</span>
</div>
<p className="text-novena-blue leading-relaxed mb-8">
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>

<div className="flex gap-3">
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white hover:bg-clinique_rose transition-colors" href="#">
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
<h3 className="text-xl font-bold text-clinique_bleue mb-10 section-title-underline font-heading">Department</h3>
<ul className="space-y-4 text-novena-blue">
<li><a className="hover:text-novena-red transition-colors" href="#">Surgery</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Wome's Health</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Radiology</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Cardioc</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Medicine</a></li>
</ul>
</div>

<div data-purpose="support-links">
<h3 className="text-xl font-bold text-clinique_bleue mb-10 section-title-underline font-heading">Support</h3>
<ul className="space-y-4 text-novena-blue">
<li><a className="hover:text-novena-red transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Company Support</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">FAQuestions</a></li>
<li><a className="hover:text-novena-red transition-colors" href="#">Company Licence</a></li>
</ul>
</div>

<div data-purpose="contact-section">
<h3 className="text-xl font-bold text-clinique_bleue mb-10 section-title-underline font-heading">Get In Touch</h3>

<div className="mb-6">
<div className="flex items-center gap-3 text-novena-blue mb-1">
<i className="fa-regular fa-envelope text-sm"></i>
<span className="text-sm">Support Disponible 24/7</span>
</div>
<a className="text-sm font-bold text-novena-navy hover:text-novena-red transition-colors font-heading block" href="mailto:Support@email.com">
              contact@clinique-13-23.com
            </a>
</div>

<div>
<div className="flex items-center gap-3 text-novena-blue mb-1">
<i className="fa-solid fa-headset text-sm"></i>
<span className="text-sm">Lundi - Samedi : 07:30 - 20:00</span>
</div>
<a className="text-sm font-bold text-novena-navy hover:text-clinique_green transition-colors font-heading block" href="tel:+234566588">
              3450-2653 | 5523-2555
            </a>
</div>
</div>
</div>
</div>
</footer>
  )
}

export default Footer