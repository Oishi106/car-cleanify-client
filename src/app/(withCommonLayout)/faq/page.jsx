'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'How long does a typical service take?',
    answer: 'Most exterior washes take 30 to 45 minutes, while full detailing can take a few hours depending on vehicle size and condition.'
  },
  {
    question: 'Do you use eco-friendly products?',
    answer: 'Yes. We prioritize safe, eco-conscious products that protect both your vehicle and the environment.'
  },
  {
    question: 'Can I book a same-day appointment?',
    answer: 'Same-day bookings are available when our schedule allows. Contact us early in the day for the best chance of availability.'
  },
  {
    question: 'Do you offer fleet or business packages?',
    answer: 'Yes. We can create recurring maintenance plans for fleets, offices, and dealership partners.'
  }
]

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0)

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
              FAQ
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
A quick guide to booking, timing, service quality, and business plans.            </p>
          </div>
        </div>
      </div>
  

      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-6 space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className='rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden'>
                <button
                  className='flex w-full items-center justify-between gap-6 px-6 py-5 text-left'
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className='text-lg font-semibold text-slate-900'>{faq.question}</span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white text-xl transition ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className='px-6 pb-6 text-slate-600 leading-relaxed'>
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className='py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Still need help?</h2>
          <p className='text-slate-300 text-lg mb-8'>
            Reach out and we will answer anything about services, timing, or pricing.
          </p>
          <Link href='/contact' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            Contact Support
          </Link>
        </div>
      </section>
    </>
  )
}

export default FaqPage