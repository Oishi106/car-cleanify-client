'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const serviceOptions = [
  'Car wash lift',
  'Hand car wash',
  'Tunnel washes',
  'Chemical car wash',
  'Premium Detailing',
  'Ceramic Coating'
]

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  service: 'Hand car wash',
  vehicle: '',
  date: '',
  time: '',
  notes: ''
}

const BookingPage = () => {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <section className='pt-28 pb-16 bg-slate-950 text-white'>
        <div className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center'>
          <div>
            <p className='uppercase tracking-[0.35em] text-sm text-red-300 mb-4'>Booking</p>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-6'>Book your service in a few quick steps.</h1>
            <p className='text-lg text-slate-300 max-w-2xl'>
              Choose a service, select a time, and tell us what your vehicle needs. We will confirm everything with you after submission.
            </p>
          </div>

          <div className='rounded-4xl bg-white/5 border border-white/10 p-6'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl bg-white/10 p-5'>
                <p className='text-sm uppercase tracking-[0.2em] text-red-300 mb-2'>Support</p>
                <p className='font-semibold'>+880 1812-456789</p>
              </div>
              <div className='rounded-3xl bg-white/10 p-5'>
                <p className='text-sm uppercase tracking-[0.2em] text-red-300 mb-2'>Email</p>
                <p className='font-semibold'>support@carcleanify.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='max-w-5xl mx-auto px-6'>
          <form onSubmit={handleSubmit} className='rounded-4xl border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-sm'>
            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Full name</label>
                <input
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                  placeholder='Enter your email'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Phone</label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                  placeholder='Enter your phone number'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Vehicle type</label>
                <input
                  name='vehicle'
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                  placeholder='Sedan, SUV, van, etc.'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Service</label>
                <select
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Date</label>
                <input
                  type='date'
                  name='date'
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-700'>Time</label>
                <input
                  type='time'
                  name='time'
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                />
              </div>
            </div>

            <div className='mt-6'>
              <label className='mb-2 block text-sm font-semibold text-slate-700'>Special notes</label>
              <textarea
                name='notes'
                value={formData.notes}
                onChange={handleChange}
                rows='6'
                className='w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-red-500'
                placeholder='Tell us about paint condition, stains, or any special requests'
              />
            </div>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <button type='submit' className='inline-flex justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
                Confirm booking
              </button>
              <Link href='/services' className='inline-flex justify-center rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500'>
                Back to services
              </Link>
            </div>

            {submitted && (
              <div className='mt-6 rounded-2xl border border-green-500 bg-green-50 px-4 py-3 text-green-700'>
                Your booking request has been submitted. We will contact you shortly.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default BookingPage