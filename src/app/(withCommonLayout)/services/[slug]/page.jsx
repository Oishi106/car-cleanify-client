'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowRight, Sparkles, Clock3, BadgeDollarSign, Star } from 'lucide-react'

const ServiceDetailsPage = () => {
  const params = useParams()
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

        const getServiceFromList = async () => {
          const listRes = await fetch(`${baseUrl}/api/products?limit=100`)
          const listData = await listRes.json()
          const foundService = listData?.products?.find((item) => item.slug === slug || item._id === slug)
          if (foundService) {
            setService(foundService)
          }
        }

        const res = await fetch(`${baseUrl}/api/products/${slug}`)
        const data = await res.json()

        if (data?.success && data?.product) {
          setService(data.product)
          return
        }

        await getServiceFromList()
      } catch (err) {
        console.error('Failed to fetch service:', err)
      } finally {
        setLoading(false)
      }
    }
    if (slug) fetchService()
  }, [slug])

  const serviceImage = service?.image || 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=900&fit=crop'
  const priceLabel = typeof service?.price === 'number' ? `৳${service.price.toLocaleString()}` : 'Contact us'
  const durationLabel = service?.duration || 'Flexible timing'
  const ratingLabel = service?.rating ? Number(service.rating).toFixed(1) : '4.8'
  const categoryLabel = service?.category?.name || 'Car Cleaning'
  const featureFallbacks = [
    'Premium exterior wash and shine',
    'Interior vacuuming and wipe down',
    'Surface-safe products and finish care',
    'Quality check before handover',
  ]
  const features = Array.isArray(service?.features) && service.features.length > 0 ? service.features : featureFallbacks
  const featureDetails = [
    'Clear, careful steps with a premium result.',
    'Built for speed without losing attention to detail.',
    'Ideal for a clean look before meetings, trips, or pickups.',
    'Balanced care for both daily use and special occasions.',
  ]
  const quickFacts = [
    { label: 'Price', value: priceLabel },
    { label: 'Duration', value: durationLabel },
    { label: 'Rating', value: `★ ${ratingLabel} / 5` },
  ]
  const quickStats = [
    {
      icon: <BadgeDollarSign className='h-5 w-5' />,
      label: 'Price',
      value: priceLabel,
    },
    {
      icon: <Clock3 className='h-5 w-5' />,
      label: 'Duration',
      value: durationLabel,
    },
    {
      icon: <Star className='h-5 w-5' />,
      label: 'Rating',
      value: `★ ${ratingLabel} / 5`,
    },
  ]

  // Loading
  if (loading) {
    return (
      <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]' />
        <div className='absolute inset-x-0 top-0 h-72 bg-linear-to-b from-red-500/15 to-transparent' />
        <div className='relative mx-auto max-w-md px-6 text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur'>
            <div className='h-7 w-7 animate-spin rounded-full border-2 border-red-400 border-t-transparent' />
          </div>
          <p className='mt-6 text-sm uppercase tracking-[0.35em] text-red-200'>Loading service</p>
          <h1 className='mt-4 text-2xl font-bold sm:text-3xl'>Preparing the details page</h1>
          <p className='mt-3 text-slate-400'>Fetching the latest package, price, and service imagery.</p>
        </div>
      </section>
    )
  }

  // Not found
  if (!service) {
    return (
      <section className='relative min-h-screen overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]' />
        <div className='absolute inset-x-0 top-0 h-80 bg-linear-to-b from-red-500/15 to-transparent' />
        <div className='relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]'>
          <div>
            <p className='mb-4 text-sm uppercase tracking-[0.35em] text-red-200'>Service details</p>
            <h1 className='text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>Service not found</h1>
            <p className='mt-5 max-w-xl text-lg leading-8 text-slate-300'>
              The requested service page could not be loaded. It may have been moved, or the backend did not return a matching item.
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link href='/services' className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
                Back to services
              </Link>
              <Link href='/services/booking' className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'>
                Book now
              </Link>
            </div>
          </div>

          <div className='grid gap-4 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur'>
            <div className='rounded-3xl border border-white/10 bg-slate-900/70 p-6'>
              <p className='text-xs uppercase tracking-[0.3em] text-red-200'>What you can do</p>
              <div className='mt-5 grid gap-4 sm:grid-cols-2'>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <p className='text-sm font-semibold text-white'>Browse services</p>
                  <p className='mt-2 text-sm leading-6 text-slate-300'>Return to the service catalog and choose another package.</p>
                </div>
                <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                  <p className='text-sm font-semibold text-white'>Book a slot</p>
                  <p className='mt-2 text-sm leading-6 text-slate-300'>Go directly to the booking form if you already know what you want.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className='relative overflow-hidden bg-slate-950 text-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]' />
      <div className='absolute inset-x-0 top-0 h-80 bg-linear-to-b from-red-500/15 to-transparent' />
              {/* HERO */}
      <section className='relative'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url(${serviceImage})`,
          }}
        />

        <div className='absolute inset-0 bg-black/70 backdrop-blur-[2px]' />

        <div className='relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2'>
          {/* LEFT */}
          <div>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-200 backdrop-blur'>
              <Sparkles className='h-4 w-4' />
              {categoryLabel}
            </div>

            <h1 className='max-w-3xl text-5xl font-black leading-tight md:text-7xl'>
              {service.name}
            </h1>

            <p className='mt-8 max-w-2xl text-lg leading-8 text-slate-300'>
              {service.description}
            </p>

            <div className='mt-10 flex flex-wrap gap-4'>
              <div className='rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur'>
                <p className='text-sm text-slate-400'>Starting From</p>
                <h3 className='mt-1 text-2xl font-bold'>{priceLabel}</h3>
              </div>

              <div className='rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur'>
                <p className='text-sm text-slate-400'>Estimated Time</p>
                <h3 className='mt-1 text-2xl font-bold'>{durationLabel}</h3>
              </div>
            </div>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <Link
                href='/services/booking'
                className='inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-4 font-semibold transition hover:bg-red-600'
              >
                Book Service
                <ArrowRight className='h-5 w-5' />
              </Link>

              <Link
                href='/services'
                className='inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10'
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className='relative'>
            <div className='rounded-[40px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl'>
              <img
                src={serviceImage}
                alt={service.name}
                className='h-[500px] w-full rounded-[30px] object-cover'
              />

              <div className='mt-6 grid gap-4 sm:grid-cols-3'>
                {quickStats.map((item, index) => (
                  <div
                    key={index}
                    className='rounded-2xl border border-white/10 bg-black/30 p-4 text-center'
                  >
                    <div className='mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-300'>
                      {item.icon}
                    </div>

                    <p className='mt-3 text-sm text-slate-400'>
                      {item.label}
                    </p>

                    <h4 className='mt-1 font-bold'>{item.value}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative bg-white text-slate-900'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='space-y-8'>
            <div className='rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
              <div className='flex items-end justify-between gap-4'>
                <div>
                  <p className='text-sm uppercase tracking-[0.35em] text-red-500'>Included</p>
                  <h2 className='mt-2 text-3xl font-bold'>What is included</h2>
                </div>
                <p className='text-sm text-slate-500'>Selected steps for this package</p>
              </div>

              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500 text-sm font-bold text-white'>
                        0{index + 1}
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900'>{feature}</p>
                        <p className='mt-2 text-sm leading-6 text-slate-500'>
                          {featureDetails[index] || 'Designed to leave the vehicle looking sharp and well cared for.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='grid gap-6 md:grid-cols-[0.95fr_1.05fr]'>
              <div className='rounded-4xl bg-slate-950 p-6 text-white shadow-xl sm:p-8'>
                <p className='text-sm uppercase tracking-[0.35em] text-red-200'>Why it works</p>
                <h3 className='mt-3 text-2xl font-bold'>Balanced for quality and speed</h3>
                <p className='mt-4 leading-7 text-slate-300'>
                  This package is shaped to give you a clean, premium result without making the process complicated. It is a practical choice when you want the car to look ready without overthinking the options.
                </p>
              </div>

              <div className='rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
                <p className='text-sm uppercase tracking-[0.35em] text-red-500'>Quick facts</p>
                <div className='mt-5 grid gap-4'>
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className='flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3'>
                      <span className='text-sm font-medium text-slate-500'>{fact.label}</span>
                      <span className='text-sm font-semibold text-slate-900'>{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className='lg:sticky lg:top-24 h-fit space-y-6'>
            <div className='rounded-4xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl sm:p-8'>
              <p className='text-sm uppercase tracking-[0.35em] text-red-200'>Book now</p>
              <h3 className='mt-3 text-3xl font-bold'>Ready to reserve this service?</h3>
              <p className='mt-4 leading-7 text-slate-300'>
                Book directly or compare with the rest of the services before you choose a slot.
              </p>

              <div className='mt-8 grid gap-3'>
                {quickFacts.map((fact) => (
                  <div key={fact.label} className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3'>
                    <p className='text-xs uppercase tracking-[0.3em] text-red-200'>{fact.label}</p>
                    <p className='mt-1 text-base font-semibold text-white'>{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className='mt-8 flex flex-col gap-3'>
                <Link
                  href='/services/booking'
                  className='inline-flex items-center justify-center rounded-full bg-red-500 px-7 py-3.5 font-semibold text-white transition hover:bg-red-600'
                >
                  Book now
                </Link>
                <Link
                  href='/services'
                  className='inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'
                >
                  Browse services
                </Link>
              </div>
            </div>

            <div className='rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8'>
              <p className='text-sm uppercase tracking-[0.35em] text-red-500'>Need help?</p>
              <h3 className='mt-3 text-2xl font-bold text-slate-900'>Want a quick recommendation?</h3>
              <p className='mt-4 leading-7 text-slate-600'>
                If you are not sure which package fits best, start with the booking form or contact the team for guidance.
              </p>
              <Link
                href='/contact'
                className='mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500'
              >
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </section>

     
    </main>
  )
}

export default ServiceDetailsPage