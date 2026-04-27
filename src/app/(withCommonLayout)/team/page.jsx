'use client'

import React from 'react'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Ariana Khan',
    role: 'Lead Detailer',
    experience: '8 years',
    specialty: 'Paint correction and interior restoration'
  },
  {
    name: 'Nabil Ahmed',
    role: 'Wash & Care Specialist',
    experience: '6 years',
    specialty: 'Exterior wash, foam treatment, and finish protection'
  },
  {
    name: 'Maya Rahman',
    role: 'Customer Experience Manager',
    experience: '5 years',
    specialty: 'Booking support and service coordination'
  },
  {
    name: 'Imran Hossain',
    role: 'Ceramic Coating Expert',
    experience: '7 years',
    specialty: 'Long-term protection and premium coating application'
  }
]

const TeamPage = () => {
  const visible = true

  return (
    <>
         {/* Hero Section */}
      <div 
        className='relative w-full min-h-[70vh] flex items-center pt-20'
        style={{
          backgroundImage: 'url(/abouthero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/40'></div>
        
        <div className='relative max-w-7xl mx-auto px-6 z-10 w-full'>
          <div className='max-w-2xl'>
            <h1 className='hero-title text-5xl lg:text-7xl font-bold text-white mb-6'>
              Our Team
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
              Meet the specialists behind our detailing, protection, and customer care services.
            </p>
          </div>
        </div>
      </div>
      

      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid gap-8 sm:grid-cols-2 xl:grid-cols-4'>
            {teamMembers.map((member, index) => (
              <article key={member.name} className='rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
                <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-2xl font-bold text-white'>
                  {member.name.split(' ').map(part => part[0]).join('')}
                </div>
                <p className='text-sm font-semibold uppercase tracking-[0.25em] text-red-500 mb-2'>Team Member {index + 1}</p>
                <h2 className='text-2xl font-bold text-slate-900 mb-2'>{member.name}</h2>
                <p className='text-slate-600 font-medium mb-4'>{member.role}</p>
                <div className='space-y-3 text-sm text-slate-600'>
                  <p><span className='font-semibold text-slate-900'>Experience:</span> {member.experience}</p>
                  <p><span className='font-semibold text-slate-900'>Specialty:</span> {member.specialty}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-900 text-white'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Need help choosing the right service?</h2>
          <p className='text-slate-300 text-lg mb-8'>
            Our team can recommend the best package based on your vehicle condition and schedule.
          </p>
          <Link href='/contact' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            Talk to us
          </Link>
        </div>
      </section>
    </>
  )
}

export default TeamPage