'use client'

import React, { useState, useEffect } from 'react'

const ServicesPage = () => {
  const [visibleItems, setVisibleItems] = useState({})

  const services = [
    {
      icon: '🚗',
      title: 'Car wash lift',
      description: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      icon: '🛞',
      title: 'Hand car wash',
      description: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      icon: '🏢',
      title: 'Tunnel washes',
      description: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      icon: '⚗️',
      title: 'Chemical car wash',
      description: 'There are many variations of passages of Lorem Ipsum available.'
    },
    {
      icon: '✨',
      title: 'Premium Detailing',
      description: 'Professional detailing for a showroom quality finish.'
    },
    {
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
              Our Services
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
              We provide professional car washing, cleaning, and maintenance services to keep your vehicle looking fresh and spotless.             </p>
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
                <div
                  key={index}
                  data-scroll-animate
                  className={`service-card ${visibleItems[index] ? 'visible' : ''} delay-${index + 1}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className='bg-gray-50 hover:bg-red-50 rounded-lg p-8 transition duration-300 h-full'>
                    <div className='text-5xl mb-4'>{service.icon}</div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                    <p className='text-gray-600 leading-relaxed'>{service.description}</p>
                  </div>
                </div>
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

      {/* Additional Services Section */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16' data-scroll-animate>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>Why Choose Our Services?</h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              We provide professional car care solutions with trained experts and premium products
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {['Expert Team', 'Quality Products', 'Affordable Pricing'].map((item, idx) => (
              <div
                key={idx}
                data-scroll-animate
                className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition'
                style={{ opacity: 0 }}
              >
                <div className='w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4'>
                  <span className='text-white text-xl'>✓</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{item}</h3>
                <p className='text-gray-600'>
                  Professional team ensuring quality service with best products at competitive rates.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-4xl mx-auto text-center' data-scroll-animate>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Experience Excellence?</h2>
          <p className='text-xl text-gray-300 mb-10'>
            Book your service today and see the difference we can make to your vehicle
          </p>
          <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-lg transition transform hover:scale-105'>
            Book Now
          </button>
        </div>
      </section>
    </>
  )
}

export default ServicesPage