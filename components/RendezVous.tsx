"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const departmentDoctors: Record<string, { id: string, name: string }[]> = {
  cardiology: [
    { id: "dr-smith", name: "Dr. Smith" },
    { id: "dr-adams", name: "Dr. Adams" }
  ],
  neurology: [
    { id: "dr-doe", name: "Dr. Doe" },
    { id: "dr-lee", name: "Dr. Lee" }
  ],
  pediatrics: [
    { id: "dr-wilson", name: "Dr. Wilson" },
    { id: "dr-brown", name: "Dr. Brown" }
  ]
};

const formSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  age: z.string().regex(/^\d+$/, "Age must be a valid number"),
  gender: z.string().min(1, "Select a gender"),
  phone_number: z.string().min(8, "Valid phone number is required"),
  
  department: z.string().min(1, "Select a department"),
  doctor: z.string().min(1, "Select a doctor"),
  previously_attended: z.string().min(1, "Please select an option"),

  appointment_date: z.string().min(1, "Date is required"),
  appointment_time: z.string().min(1, "Time is required"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const RendezVous = () => {
  const [step, setStep] = useState(1)

  const { register, handleSubmit, trigger, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  })

  const selectedDepartment = watch("department");

  useEffect(() => {
    setValue("doctor", "");
  }, [selectedDepartment, setValue]);

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['full_name', 'age', 'gender', 'phone_number']
    if (step === 2) fieldsToValidate = ['department', 'doctor', 'previously_attended']
    
    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid) {
      setStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data)
    alert("Appointment successfully requested!")
    // Reset or handle post submission...
  }

  return (
    <section className='w-full bg-[#EDF4F8] py-16'>
      <div className="max-w-7xl mx-auto shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row" data-purpose="booking-container" id="appointment-section">

        {/* Image Column */}
        <div className="relative w-full md:w-5/12 lg:w-1/2 min-h-[400px]" data-purpose="image-column">
          <Image alt="Medical Team Professional Portrait" className="w-full h-full object-cover object-center" src="/apointment.jpg" width={500} height={400}/>
          <div className="absolute bottom-0 left-0 right-0 md:left-8 md:right-0 bg-clinique_bleue text-white p-6 md:p-8 flex items-center gap-4 shadow-lg" data-purpose="contact-overlay">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-bold tracking-tight">3450-2653 | 5523-2555</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full md:w-7/12 lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white" data-purpose="form-column">
          
          <div className="mb-10" data-purpose="form-header">
            <h2 className="text-4xl font-bold text-navy-dark mb-4 text-[#2c4964]">Prendre un rendez-vous</h2>
            <p className="text-gray-500 leading-relaxed max-w-lg mb-8">
              Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit. Iste dolorum atque similique praesentium soluta.
            </p>
            {/* Step Indicator */}
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= s ? 'bg-clinique_green' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-purpose="appointment-form">
            
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <input {...register("full_name")} className="input-field w-full h-14 px-4 py-2 rounded-md text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100" placeholder="Full Name" type="text" />
                  {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
                </div>
                <div>
                  <input {...register("age")} className="input-field w-full h-14 px-4 py-2 rounded-md text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100" placeholder="Age" type="number" />
                  {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
                </div>
                <div className="relative">
                  <select {...register("gender")} className="input-field w-full h-14 px-4 py-2 rounded-md appearance-none text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                </div>
                <div>
                  <input {...register("phone_number")} className="input-field w-full h-14 px-4 py-2 rounded-md text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100" placeholder="Phone Number" type="tel" />
                  {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number.message}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Medical Details */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="relative">
                  <select {...register("department")} className="input-field w-full h-14 px-4 py-2 rounded-md appearance-none text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100">
                    <option value="">Choose Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                  {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
                </div>
                <div className="relative">
                  <select {...register("doctor")} disabled={!selectedDepartment} className="input-field w-full h-14 px-4 py-2 rounded-md appearance-none text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100 disabled:opacity-50">
                    <option value="">{selectedDepartment ? "Select Doctor" : "Choose Department First"}</option>
                    {selectedDepartment && departmentDoctors[selectedDepartment]?.map(doc => (
                      <option key={doc.id} value={doc.id}>{doc.name}</option>
                    ))}
                  </select>
                  {errors.doctor && <p className="text-red-500 text-xs mt-1">{errors.doctor.message}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <p className="text-gray-700 mb-2">Have you previously attended our facilities?</p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                      <input type="radio" value="Yes" {...register("previously_attended")} className="text-clinique_bleue focus:ring-clinique_bleue w-4 h-4" /> Yes
                    </label>
                    <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                      <input type="radio" value="No" {...register("previously_attended")} className="text-clinique_bleue focus:ring-clinique_bleue w-4 h-4" /> No
                    </label>
                  </div>
                  {errors.previously_attended && <p className="text-red-500 text-xs mt-1">{errors.previously_attended.message}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Appointment Booking */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <div>
                  <input {...register("appointment_date")} className="input-field w-full h-14 px-4 py-2 rounded-md text-gray-600 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100" type="date" />
                  {errors.appointment_date && <p className="text-red-500 text-xs mt-1">{errors.appointment_date.message}</p>}
                </div>
                <div>
                  <input {...register("appointment_time")} className="input-field w-full h-14 px-4 py-2 rounded-md text-gray-600 focus:ring-2 focus:ring-clinique_bleue outline-none bg-gray-50 border border-gray-100" type="time" />
                  {errors.appointment_time && <p className="text-red-500 text-xs mt-1">{errors.appointment_time.message}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea {...register("message")} className="input-field w-full px-4 py-4 rounded-md text-gray-700 focus:ring-2 focus:ring-clinique_bleue outline-none resize-none bg-gray-50 border border-gray-100" placeholder="Your Message" rows={4}></textarea>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-6 flex gap-4 mt-6">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-gray-800 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm">
                  Previous
                </button>
              )}
              {step < 3 && (
                <button type="button" onClick={nextStep} className="cursor-pointer bg-clinique_bleue hover:bg-clinique_bleu_fonce transition-colors duration-300 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm ml-auto">
                  Next Step
                </button>
              )}
              {step === 3 && (
                <button type="submit" className="cursor-pointer bg-clinique_green hover:bg-clinique_rose transition-colors duration-300 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 ml-auto">
                  Confirmer
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              )}
            </div>
            
          </form>

        </div>
      </div>
    </section>
  )
}

export default RendezVous