'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ServicesPage = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleItems, setVisibleItems] = useState({})
  const router = useRouter()

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?limit=20`)
        const data = await res.json()
        setServices(data.products || [])
      } catch (err) {
        console.error('Failed to fetch services:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll-animate]')
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleItems(prev => ({ ...prev, [index]: true }))
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filtered = activeFilter === 'popular'
    ? services.filter(s => s.popular)
    : services

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .hero-title { animation: fadeInUp 0.8s ease-out forwards; }
        .hero-desc {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .img-section {
          opacity: 0;
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }
        .service-card { opacity: 0; }
        .service-card.visible { animation: slideInScale 0.6s ease-out forwards; }
        .card-hover { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.13);
        }
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .img-container { overflow: hidden; }
        .img-container img { transition: transform 0.5s ease; }
        .card-hover:hover .img-container img { transform: scale(1.08); }
        .feature-pill {
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.15);
        }
        .filter-btn { transition: all 0.2s ease; }
      `}</style>

      {/* ── Hero — আগের মতোই ─────────────────── */}
      <div
        className='relative w-full min-h-[70vh] flex items-center pt-20'
        style={{
          backgroundImage: 'url(/abouthero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative max-w-7xl mx-auto px-6 z-10 w-full'>
          <div className='max-w-2xl'>
            <h1 className='hero-title text-5xl lg:text-7xl font-bold text-white mb-6'>
              Service Details
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6' />
            <p className='hero-desc text-xl text-gray-200'>
              Explore each service, compare what is included, and jump straight to booking when you are ready.
            </p>
          </div>
        </div>
      </div>

      {/* ── Filter Bar ───────────────────────── */}
      <div className='sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap'>
          <p className='text-gray-500 text-sm'>
            Showing <span className='font-bold text-gray-900'>{filtered.length}</span> services
          </p>
          <div className='flex gap-2'>
            {[
              { key: 'all', label: 'All Services' },
              { key: 'popular', label: '🔥 Popular' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`filter-btn px-5 py-2 rounded-full text-sm font-semibold border ${
                  activeFilter === f.key
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-red-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Grid ─────────────────────── */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>

          {/* Skeleton */}
          {loading && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='bg-white rounded-2xl overflow-hidden border border-gray-100'>
                  <div className='shimmer h-52 w-full' />
                  <div className='p-5 space-y-3'>
                    <div className='shimmer h-4 w-3/4 rounded' />
                    <div className='shimmer h-3 w-full rounded' />
                    <div className='shimmer h-3 w-2/3 rounded' />
                    <div className='shimmer h-9 w-full rounded-xl' />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cards */}
          {!loading && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filtered.map((service, index) => (
                (() => {
                  const servicePath = service.slug || service._id

                  return (
                <div
                  key={service._id}
                  data-scroll-animate
                  role='link'
                  tabIndex={0}
                  onClick={() => router.push(`/services/${servicePath}`)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      router.push(`/services/${servicePath}`)
                    }
                  }}
                  className={`card-hover service-card ${visibleItems[index] ? 'visible' : ''} bg-gray-50 rounded-2xl overflow-hidden border border-transparent hover:border-red-200 flex flex-col`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Image */}
                  <div className='img-container relative h-52 bg-gray-100'>
                    <img
                      src={service.image}
                      alt={service.name}
                      className='w-full h-full object-cover'
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop'
                      }}
                    />
                    {service.popular && (
                      <span className='absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                        🔥 Popular
                      </span>
                    )}
                    <div className='absolute bottom-3 right-3 bg-gray-900 text-white px-3 py-1 rounded-lg'>
                      <span className='text-xs text-gray-400'>from </span>
                      <span className='font-bold text-sm'>৳{service.price.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6 flex flex-col flex-1'>
                    {/* Rating + Duration */}
                    <div className='flex items-center justify-between mb-3'>
                      <div className='flex items-center gap-1'>
                        <span className='text-amber-400 text-sm'>★</span>
                        <span className='text-sm font-semibold text-gray-800'>{service.rating}</span>
                      </div>
                      <div className='flex items-center gap-1 text-gray-400 text-xs'>
                        <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                        {service.duration}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>{service.name}</h3>

                    {/* Description */}
                    <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2'>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className='flex flex-wrap gap-1.5 mb-5'>
                      {service.features?.slice(0, 3).map((f) => (
                        <span key={f} className='feature-pill text-red-600 text-xs px-2.5 py-1 rounded-full font-medium'>
                          {f}
                        </span>
                      ))}
                      {service.features?.length > 3 && (
                        <span className='text-gray-400 text-xs px-2 py-1'>
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className='mt-auto flex gap-2'>
                      <Link
                        href={`/services/${servicePath}`}
                        onClick={(e) => e.stopPropagation()}
                        className='flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-lg text-center transition'
                      >
                        View Details
                      </Link>
                      <Link
                        href='/services/booking'
                        onClick={(e) => e.stopPropagation()}
                        className='px-4 py-2.5 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition text-sm font-semibold'
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
                  )
                })()
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && filtered.length === 0 && (
            <div className='text-center py-20'>
              <div className='text-6xl mb-4'>🚗</div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>No services found</h3>
              <p className='text-gray-500'>Try changing the filter</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA — আগের মতোই ─────────────────── */}
      <section className='py-20 px-6 bg-linear-to-r from-gray-900 to-gray-800'>
        <div className='max-w-4xl mx-auto text-center' data-scroll-animate>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Experience Excellence?</h2>
          <p className='text-xl text-gray-300 mb-10'>
            Book your service today and see the difference we can make to your vehicle
          </p>
          <Link
            href='/services/booking'
            className='inline-flex bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-lg transition transform hover:scale-105'
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServicesPage