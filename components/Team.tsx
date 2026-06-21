import React from 'react'

const Team = () => {
  return (
    < div className=" py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6" data-purpose="main-header">
    <div className="space-y-2">
    <div className="flex items-center gap-2">
    <div className="h-[2px] w-12 bg-clinique_rose"></div>
    <span className="text-clinique_rose font-medium text-sm">Docteurs</span>
    </div>
    <h1 className="text-3xl md:text-4xl font-bold text-clinique_bleue">Rencontrez Nos Médecins Expérimentés</h1>
    </div>
    </header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8">
{/* <!-- BEGIN: DoctorGrid --> */}
<section className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" data-purpose="doctors-listing">
{/* <!-- Doctor Card 1 --> */}
<article className="doctor-card bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-full aspect-square bg-[#e0f2fe] rounded-lg mb-4 overflow-hidden">
<img alt="Dr. Norman Colins" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_UHByOZYxng5abKFu_zowXSH8roh1zVYimwJ1xo3bFhRnXlAovES2xrI27wKec1HVgQFkz840bNjHGguv3Qh6GDBQQmp71VZiRaL0R-ebeIsHzj14_cJFl0GgW7Ctlb4vZ3MCBNJUTCNW6VGrY0bl787uqiHFSsdtvjoMji7hb-zFyNlNRgoLx1Ig81tFrKTyjrPcNXgNrnYY5zM4_TXpOAP4xAonDi3wnz_5T2Q8brt6-_OHvWxeLBWXDCAIFdZL69p6gEpOpCiB"/>
</div>
<h3 className="text-lg font-bold text-[#1e293b]">Dr. Norman Colins</h3>
<p className="text-slate-400 text-sm mb-4">Dental Surgeon</p>
{/* <button className="w-full py-2.5 bg-clinique_bleue hover:bg-clinique_bleue text-white rounded-lg font-medium transition-colors">Prendre rendez-vous</button> */}
</article>
{/* <!-- Doctor Card 2 --> */}
<article className="doctor-card bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-full aspect-square bg-[#e0f2fe] rounded-lg mb-4 overflow-hidden">
<img alt="Dr. Steven Lee" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ebJ1PZKq8MhsXIGeMiMFWu8Qb0ZA2Mi9IBmAphV6OgWGf7pGUUoD-opVCq4hFnb7kePTeehBn9nYvxMiia8l4Kh0ehJEhybIciWnelH1t6DdOyUr-89p0C9oVWlayQLA_bfuMU_xIMQQMr5TUxD1NxtjJveIQStgLkMxdUqNlMOx-X3GrtnzPgDQJCBUqyZLYCUA9Ju263Zbbm_2pcB0Ze6PgzJB4-OcucQsABtcB-d74a0y4JQ8WWRtvMqdHCv8AChi7C6MMIaF"/>
</div>
<h3 className="text-lg font-bold text-[#1e293b]">Dr. Steven Lee</h3>
<p className="text-slate-400 text-sm mb-4">Cardiology</p>
{/* <button className="w-full py-2.5 bg-clinique_bleue hover:bg-clinique_bleue text-white rounded-lg font-medium transition-colors">Prendre rendez-vous</button> */}
</article>
{/* <!-- Doctor Card 3 --> */}
<article className="doctor-card bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-full aspect-square bg-[#e0f2fe] rounded-lg mb-4 overflow-hidden">
<img alt="Dr. David Kim" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoUu_IXwHVvy0a-A5H9Q9VmLRL-qRMi8xTTz0DQH7V19gO9GNrciuKRJnviEfRvWn-gTX-eeZsqU5Ui4gWW4TpwXW9uy1j4p56fLP7rbyEBASHux7wqIvHNEg8MFLNNLBCCQt9fG2HUdyGYImybdk4BIAou8aBCHyeAK0qWw5Q7YrfrCyADCUUYjUg_12W3KlYZxbS8WbeQJimuijMjhC3Nk0ACopDc42jr82ZUc-Qlxf5oRT8aUn5Ghjk9yK-d097i8CPMYAWk6sP"/>
</div>
<h3 className="text-lg font-bold text-[#1e293b]">Dr. David Kim</h3>
<p className="text-slate-400 text-sm mb-4">Dental Surgeon</p>
{/* <button className="w-full py-2.5 bg-clinique_bleue hover:bg-clinique_bleue text-white rounded-lg font-medium transition-colors">Prendre rendez-vous</button> */}
</article>
{/* <!-- Doctor Card 4 --> */}
<article className="doctor-card bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-full aspect-square bg-[#e0f2fe] rounded-lg mb-4 overflow-hidden">
<img alt="Dr. Sarah Lee" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARVUstHb2FbNaakW1cSSBEGQ_wSHDJoLxYP32Alxxa_9czuRe5Q628kT9xP0MZZRBvFdWgt2KWt_DAqGbqL2-dp8FjrbWAqgn45ALZXSzh6tVxo5WqZLPaOen-WKZTFZtM1B0XAmM8SLtPHl0NHoBsGcB9S0MsgFrRR-3HAvWj4W3iGwxptm7VmNe5elXMJ0oZ6R3CMtj96E0_2djq-unc9cIQdzmRkiIiZAWeYIDM_6V2Ils10dDAtSlDXHjI_aWVhiiZh-5z3XOy"/>
</div>
<h3 className="text-lg font-bold text-[#1e293b]">Dr. Sarah Lee</h3>
<p className="text-slate-400 text-sm mb-4">Dermatologist</p>
{/* <button className="w-full py-2.5 bg-clinique_bleue hover:bg-clinique_bleue text-white rounded-lg font-medium transition-colors">Prendre rendez-vous</button> */}
</article>


</section>
{/* <!-- END: DoctorGrid --> */}
{/* <!-- BEGIN: SidebarForm --> */}

    {/* END: SidebarForm */}
</div>
</div>
 </div> )
}

export default Team