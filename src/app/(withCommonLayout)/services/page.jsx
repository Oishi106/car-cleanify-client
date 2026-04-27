'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const ServicesPage = () => {
  const [visibleItems, setVisibleItems] = useState({})

  const services = [
    {
      slug: 'car-wash-lift',
      icon: '🚗',
      title: 'Car wash lift',
      description: 'High-pressure exterior cleaning with careful finish protection.'
    },
    {
      slug: 'hand-car-wash',
      icon: '🛞',
      title: 'Hand car wash',
      description: 'Gentle hand wash service for a spotless, swirl-safe result.'
    },
    {
      slug: 'tunnel-washes',
      icon: '🏢',
      title: 'Tunnel washes',
      description: 'Fast, efficient wash tunnel service for busy schedules and fleets.'
    },
    {
      slug: 'chemical-car-wash',
      icon: '⚗️',
      title: 'Chemical car wash',
      description: 'Safe, purpose-built cleaning agents for stubborn grime and residue.'
    },
    {
      slug: 'premium-detailing',
      icon: '✨',
      title: 'Premium Detailing',
      description: 'Professional detailing for a showroom quality finish.'
    },
    {
      slug: 'ceramic-coating',
      icon: '🛡️',
      title: 'Ceramic Coating',
      description: 'Long-lasting ceramic coating for ultimate protection.'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll-animate]')
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75

        if (isVisible) {
          setVisibleItems(prev => ({ ...prev, [index]: true }))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    // Check on mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-on-scroll {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-on-scroll.delay-1 {
          animation-delay: 0.1s;
        }
        .animate-on-scroll.delay-2 {
          animation-delay: 0.2s;
        }
        .animate-on-scroll.delay-3 {
          animation-delay: 0.3s;
        }
        .animate-on-scroll.delay-4 {
          animation-delay: 0.4s;
        }
        .animate-on-scroll.delay-5 {
          animation-delay: 0.5s;
        }
        .animate-on-scroll.delay-6 {
          animation-delay: 0.6s;
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero-desc {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .service-card {
          opacity: 0;
        }

        .service-card.visible {
          animation: slideInScale 0.6s ease-out forwards;
        }

        .img-section {
          opacity: 0;
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 0.3s;
        }
      `}</style>



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
              Service Details
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
              Explore each service, compare what is included, and jump straight to booking when you are ready.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Left - Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  data-scroll-animate
                  className={`service-card ${visibleItems[index] ? 'visible' : ''} delay-${index + 1}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className='bg-gray-50 hover:bg-red-50 rounded-lg p-8 transition duration-300 h-full border border-transparent hover:border-red-200'>
                    <div className='text-5xl mb-4'>{service.icon}</div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                    <p className='text-gray-600 leading-relaxed mb-5'>{service.description}</p>
                    <span className='font-semibold text-red-500'>View details</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right - Image */}
            <div className='img-section'>
              <img
                src='https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=500&fit=crop'
                alt='Car Wash'
                className='rounded-lg shadow-2xl w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 bg-linear-to-r from-gray-900 to-gray-800'>
        <div className='max-w-4xl mx-auto text-center' data-scroll-animate>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Experience Excellence?</h2>
          <p className='text-xl text-gray-300 mb-10'>
            Book your service today and see the difference we can make to your vehicle
          </p>
          <Link href='/services/booking' className='inline-flex bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-lg transition transform hover:scale-105'>
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServicesPage