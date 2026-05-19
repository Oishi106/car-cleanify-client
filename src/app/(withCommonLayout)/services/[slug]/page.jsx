'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const ServiceDetailsPage = () => {
  const { slug } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${slug}`)
        const data = await res.json()
        if (data.success) setService(data.product)
      } catch (err) {
        console.error('Failed to fetch service:', err)
      } finally {
        setLoading(false)
      }
    }
    if (slug) fetchService()
  }, [slug])

  // Loading
  if (loading) {
    return (
      <section className='relative overflow-hidden bg-slate-950 text-white min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4' />
          <p className='text-slate-400'>Loading service...</p>
        </div>
      </section>
    )
  }

  // Not found
  if (!service) {
    return (
      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(248,250,252,0.08),transparent_32%)]' />
        <div className='relative mx-auto max-w-3xl px-6 py-28 text-center'>
          <p className='mb-4 text-sm uppercase tracking-[0.35em] text-red-300'>Service details</p>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>Service not found</h1>
          <p className='mb-8 text-slate-300'>The requested service page does not exist yet.</p>
          <div className='flex flex-col justify-center gap-3 sm:flex-row'>
            <Link href='/services' className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
              Back to services
            </Link>
            <Link href='/services/booking' className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-red-400 hover:text-red-200'>
              Book now
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_24%)]' />

        <div className='relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28'>
          <div className='max-w-2xl'>
            {/* Category tag */}
            <p className='mb-4 text-sm uppercase tracking-[0.35em] text-red-200'>
              {service.category?.name || 'Car Cleaning'}
            </p>
            <h1 className='text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl'>
              {service.name}
            </h1>
            <p className='mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg'>
              {service.description}
            </p>

            {/* Badges */}
            <div className='mt-8 flex flex-wrap gap-3'>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90'>
                ৳{service.price?.toLocaleString()}
              </span>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90'>
                ⏱ {service.duration}
              </span>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90'>
                ★ {service.rating} Rating
              </span>
              {service.popular && (
                <span className='rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300'>
                  🔥 Popular Service
                </span>
              )}
            </div>

            {/* CTA */}
            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <Link
                href='/services/booking'
                className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'
              >
                Book this service
              </Link>
              <Link
                href='/services'
                className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'
              >
                Explore all services
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className='relative'>
            <div className='absolute -left-4 -top-4 h-24 w-24 rounded-full bg-red-500/20 blur-2xl' />
            <div className='overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl'>
              <img
                src={service.image}
                alt={service.name}
                className='w-full h-72 sm:h-96 object-cover'
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop'
                }}
              />
            </div>

            {/* Stat cards */}
            <div className='-mt-12 grid grid-cols-3 gap-3 px-4'>
              <div className='rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur'>
                <p className='text-xs uppercase tracking-widest text-red-300'>Price</p>
                <p className='mt-1 text-sm font-semibold text-white'>
                  ৳{service.price?.toLocaleString()}
                </p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur'>
                <p className='text-xs uppercase tracking-widest text-red-300'>Time</p>
                <p className='mt-1 text-sm font-semibold text-white'>{service.duration}</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur'>
                <p className='text-xs uppercase tracking-widest text-red-300'>Rating</p>
                <p className='mt-1 text-sm font-semibold text-white'>★ {service.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features + Info ───────────────────── */}
      <section className='bg-white py-20'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]'>

          {/* Features */}
          <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
            <div className='mb-8'>
              <p className='text-sm uppercase tracking-[0.3em] text-red-500'>Included</p>
              <h2 className='mt-2 text-3xl font-bold text-slate-900'>What is included</h2>
            </div>
            <div className='grid gap-4'>
              {service.features?.map((feature) => (
                <div
                  key={feature}
                  className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
                >
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500 text-white font-bold text-sm'>
                    ✓
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900'>{feature}</p>
                    <p className='mt-1 text-sm leading-6 text-slate-500'>
                      Professional steps designed to protect the surface and improve the final finish.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className='grid gap-6'>
            {/* Dark info card */}
            <div className='rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8'>
              <div className='mb-8 flex flex-wrap gap-4'>
                <div className='rounded-2xl bg-white/5 px-4 py-3'>
                  <p className='text-xs uppercase tracking-widest text-red-300'>Duration</p>
                  <p className='mt-1 text-lg font-semibold'>{service.duration}</p>
                </div>
                <div className='rounded-2xl bg-white/5 px-4 py-3'>
                  <p className='text-xs uppercase tracking-widest text-red-300'>Price</p>
                  <p className='mt-1 text-lg font-semibold'>৳{service.price?.toLocaleString()}</p>
                </div>
                <div className='rounded-2xl bg-white/5 px-4 py-3'>
                  <p className='text-xs uppercase tracking-widest text-red-300'>Rating</p>
                  <p className='mt-1 text-lg font-semibold'>★ {service.rating} / 5</p>
                </div>
              </div>

              <h2 className='text-3xl font-bold'>Why this service works</h2>
              <p className='mt-5 text-slate-300 leading-7'>
                This package balances finish quality, turnaround time, and day-to-day vehicle care so you can choose the right level of service without guessing.
              </p>

              {/* Tags as steps */}
              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {service.features?.slice(0, 4).map((feature, index) => (
                  <div key={feature} className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                    <p className='text-sm uppercase tracking-widest text-red-300'>Step {index + 1}</p>
                    <p className='mt-2 font-semibold text-white'>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
              <p className='text-sm uppercase tracking-[0.3em] text-red-500'>Next step</p>
              <h3 className='mt-2 text-2xl font-bold text-slate-900'>Ready to book?</h3>
              <p className='mt-4 text-slate-600 leading-7'>
                Book the service now and we will confirm the best slot, or explore the full list of options before you decide.
              </p>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/services/booking'
                  className='inline-flex items-center justify-center rounded-full bg-red-500 px-7 py-3.5 font-semibold text-white transition hover:bg-red-600'
                >
                  Book now
                </Link>
                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500'
                >
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — আগের মতোই ─────────────────── */}
      <section className='bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-20 text-white'>
        <div className='mx-auto max-w-5xl px-6 text-center'>
          <p className='text-sm uppercase tracking-[0.3em] text-red-300'>Ready to go</p>
          <h2 className='mt-3 text-3xl font-bold md:text-4xl'>Ready to book this service?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-300'>
            Move straight to the booking form and choose a date that works for you.
          </p>
          <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='/services/booking'
              className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'
            >
              Book now
            </Link>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsPage