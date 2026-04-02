'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const AboutPage = () => {
  const [visibleItems, setVisibleItems] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll-animate]')
      elements.forEach((el) => {
        const key = el.getAttribute('data-scroll-key') || el.className
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75
        
        if (isVisible) {
          setVisibleItems(prev => ({ ...prev, [key]: true }))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const values = [
    {
      icon: '1',
      title: 'Expert Team',
      description: 'Our certified technicians bring years of experience and training to every project. We know how to handle all vehicle types with precision and care, ensuring your car receives the best treatment.'
    },
    {
      icon: '2',
      title: 'Quality Service',
      description: 'We use premium, eco-friendly products and latest technology to deliver showroom-quality results. Every detail matters, and we take pride in making your car shine like new.'
    },
    {
      icon: '3',
      title: 'Fast & Reliable',
      description: 'Time is precious. We work efficiently without compromising quality, ensuring your car is ready when you need it. You can count on us to deliver consistent, dependable service every time.'
    },
    {
      icon: '4',
      title: 'Affordable Pricing',
      description: 'Premium car care doesn\'t have to break the bank. We offer competitive pricing without sacrificing quality, making professional detailing accessible to everyone.'
    }
  ]

  const renderIcon = (num) => {
    const iconPaths = {
      '1': (
        <svg viewBox="0 0 100 100" width="60" height="60" className="stroke-red-500 fill-none">
          <circle cx="50" cy="40" r="20" strokeWidth="3"/>
          <path d="M 30 70 Q 30 80 50 85 Q 70 80 70 70" strokeWidth="3"/>
          <path d="M 35 50 L 50 65 L 65 50" strokeWidth="3"/>
        </svg>
      ),
      '2': (
        <svg viewBox="0 0 100 100" width="60" height="60" className="stroke-red-500 fill-none">
          <rect x="20" y="25" width="60" height="50" rx="5" strokeWidth="3"/>
          <circle cx="35" cy="65" r="6" strokeWidth="3"/>
          <circle cx="65" cy="65" r="6" strokeWidth="3"/>
          <path d="M 30 40 L 70 40" strokeWidth="2"/>
        </svg>
      ),
      '3': (
        <svg viewBox="0 0 100 100" width="60" height="60" className="stroke-red-500 fill-none">
          <path d="M 25 50 L 50 70 L 75 50 M 50 70 L 50 25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 35 40 L 50 25 L 65 40" strokeWidth="3" fill="none"/>
        </svg>
      ),
      '4': (
        <svg viewBox="0 0 100 100" width="60" height="60" className="stroke-red-500 fill-none">
          <circle cx="50" cy="50" r="35" strokeWidth="3"/>
          <path d="M 50 25 L 50 50 L 70 65" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="50" cy="10" r="4" fill="currentColor" className="fill-red-500"/>
        </svg>
      )
    }
    return iconPaths[num]
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .scroll-item {
          opacity: 0;
        }

        .scroll-item.visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .scroll-item-right {
          opacity: 0;
        }

        .scroll-item-right.visible {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .scroll-item-scale {
          opacity: 0;
        }

        .scroll-item-scale.visible {
          animation: slideInScale 0.6s ease-out forwards;
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
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
              About Us
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
              We are dedicated to providing high-quality car washing and cleaning services to keep your vehicle clean, shiny, and well-maintained.
            </p>
          </div>
        </div>
      </div>

      {/* About Section with Cards and Image */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            {/* Left - Content */}
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>Why We&apos;re The Best Choice</h2>
              <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                With over 15 years of experience in professional car care, we&apos;ve built our reputation on delivering exceptional results and outstanding customer service. Our team is dedicated to keeping your vehicle looking pristine while using eco-friendly products and techniques.
              </p>
              
              {/* Cards Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
              {values.map((value, index) => {
                const bgColors = ['bg-red-50', 'bg-orange-50', 'bg-yellow-50', 'bg-pink-50']
                return (
                <div
                  key={index}
                  data-scroll-animate
                  data-scroll-key={`card-${index}`}
                  className={`scroll-item-scale ${visibleItems[`card-${index}`] ? 'visible' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`${bgColors[index]} border-2 border-red-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 rounded-xl h-64 sm:h-72 flex flex-col items-center justify-center cursor-pointer`}>
                    <div className='mb-4 sm:mb-6 flex justify-center'>
                      {renderIcon(value.icon)}
                    </div>
                    <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center'>{value.title}</h3>
                    <p className='text-gray-600 text-center leading-relaxed text-xs sm:text-sm'>{value.description}</p>
                  </div>
                </div>
              )
              })}
              </div>
            </div>

            {/* Right - Image */}
            <div 
              data-scroll-animate
              data-scroll-key='aboutImage'
              className={`scroll-item-right ${visibleItems['aboutImage'] ? 'visible' : ''} mt-20`}
            >
              <div className='relative'>
                <img
                  src='/ab1.jpeg'
                  alt='Professional Car Wash'
                  className='rounded-xl shadow-2xl w-full h-auto object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t  rounded-xl'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className='py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className={`max-w-4xl mx-auto text-center scroll-item ${visibleItems['cta'] ? 'visible' : ''}`} data-scroll-animate data-scroll-key='cta'>
          <h2 className='text-4xl font-bold text-white mb-6'>Ready to Experience Excellence?</h2>
          <p className='text-xl text-gray-300 mb-10'>
            Contact us today to schedule your car care appointment
          </p>
          <Link href='/contact'>
            <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-lg transition transform hover:scale-105 text-lg'>
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
