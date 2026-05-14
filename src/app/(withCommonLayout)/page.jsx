'use client'

import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'

const HomePage = () => {
  const [sliderPosition, setSliderPosition] = useState(100)
  const [isDragging, setIsDragging] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)
  const [displayNumbers, setDisplayNumbers] = useState({ num1: 0, num2: 0, num3: 0 })
  const [activeVideoId, setActiveVideoId] = useState(null)
  const sliderRef = useRef(null)
  const statsRef = useRef(null)
  const videoId1 = 'RQ1YwgMtaGo'

  const services = [
    'Exterior Washing',
    'Engine Cleaning',
    'Crystal Shine',
    'Diagnostic Tests',
    'Interior Cleaning'
  ]

  const stats = [
    { number: '5K+', label: 'Happy Customers' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' }
  ]

  const featuredServices = [
    {
      title: 'Exterior detailing',
      desc: 'Restore gloss, remove road film, and protect paint with a careful exterior treatment.',
      href: '/services/car-wash-lift'
    },
    {
      title: 'Interior refresh',
      desc: 'Deep vacuuming, cabin wipe-downs, and a cleaner feel from front to back.',
      href: '/services/hand-car-wash'
    },
    {
      title: 'Paint protection',
      desc: 'Ceramic coating and finish protection made for longer-lasting shine.',
      href: '/services/ceramic-coating'
    }
  ]

  const reasons = [
    {
      title: 'Careful handling',
      desc: 'We use safe tools and proven methods to protect surfaces, trim, and finishes.'
    },
    {
      title: 'Fast turnaround',
      desc: 'The workflow is organized so service stays efficient without losing quality.'
    },
    {
      title: 'Clear support',
      desc: 'You always know what is included, what is recommended, and what happens next.'
    },
    {
      title: 'Premium results',
      desc: 'Every step is designed to leave your vehicle cleaner, brighter, and sharper.'
    }
  ]

  const packages = [
    {
      name: 'Basic Shine',
      price: '$19',
      features: ['Exterior wash', 'Hand dry', 'Tire wipe']
    },
    {
      name: 'Deep Clean',
      price: '$39',
      features: ['Full wash', 'Interior vacuum', 'Dashboard wipe']
    },
    {
      name: 'Premium Detail',
      price: '$79',
      features: ['Deep clean', 'Polish', 'Protection layer']
    }
  ]

  const testimonials = [
    {
      name: 'Rashed Khan',
      role: 'SUV owner',
      quote: 'The finish was better than I expected and the team explained everything clearly.'
    },
    {
      name: 'Nadia Akter',
      role: 'Regular customer',
      quote: 'Booking was easy and the car came back spotless. The service felt very professional.'
    },
    {
      name: 'Imran Hossain',
      role: 'Fleet manager',
      quote: 'They keep our vehicles consistent, clean, and ready without disrupting the schedule.'
    }
  ]

  const faqs = [
    {
      q: 'How long does a service usually take?',
      a: 'Most services take between 30 minutes and 2 hours depending on the package and vehicle condition.'
    },
    {
      q: 'Do you offer premium protection?',
      a: 'Yes, we offer detailing and ceramic coating options for longer-lasting finish protection.'
    },
    {
      q: 'Can I book ahead?',
      a: 'You can book ahead through the booking page and choose a time that works best for you.'
    }
  ]

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = (x / rect.width) * 100

    if (percent >= 0 && percent <= 100) {
      setSliderPosition(percent)
    }
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const percent = (x / rect.width) * 100

    if (percent >= 0 && percent <= 100) {
      setSliderPosition(percent)
    }
  }

  // Animation for stats counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateStats) {
          setAnimateStats(true)
          
          // Counter animation
          let num1 = 0, num2 = 0, num3 = 0
          const interval = setInterval(() => {
            if (num1 < 5) num1++
            if (num2 < 100) num2 += 10
            if (num3 < 15) num3++
            
            setDisplayNumbers({ num1, num2, num3 })
            
            if (num1 >= 5 && num2 >= 100 && num3 >= 15) {
              clearInterval(interval)
            }
          }, 50)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [animateStats])

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrolling-container {
          animation: scroll 30s linear infinite;
        }
        @keyframes countUp {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .stat-number {
          animation: countUp 0.5s ease-out forwards;
        }
      `}</style>
      
      {/* Hero Section */}
<section className="relative h-screen w-full overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/car.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
    <div className="max-w-3xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        <p className="text-white text-sm font-medium tracking-wide">
           Car Detailing Service
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
         Car Wash <br />
        <span className="text-red-500">& Detailing Service</span>                    
      </h1>

      {/* Description */}
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
        Experience high-quality car cleaning and detailing with modern                          
        technology, expert care, and fast service that keeps your vehicle
        shining like brand new.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-14">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 hover:scale-105 shadow-lg shadow-red-500/30">
          Book Appointment
        </button>

        <button className="border border-white/30 hover:border-white text-white py-4 px-8 rounded-xl backdrop-blur-md bg-white/10 transition duration-300 hover:bg-white hover:text-black">
          Explore Services
        </button>
      </div>

      {/* Bottom Info */}
      <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
        {/* Rating */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <div>
            <p className="text-white font-semibold">200+ Happy Clients</p>
            <p className="text-gray-400 text-sm">Top Rated Service</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-12 bg-white/20" />

        {/* Contact */}
        <div className="flex items-center gap-4">
          <div className="bg-red-500 p-3 rounded-full">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Call Anytime</p>
            <p className="text-white text-xl font-bold">
              +880 1812-456789
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Down */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
    <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center">
      <div className="w-2 h-2 bg-white rounded-full mt-3 animate-bounce"></div>
    </div>
  </div>
</section>

      {/* Scrolling Services Section */}
      <div className='w-full bg-gray-900 py-8 overflow-hidden'>
        <div className='scrolling-container flex whitespace-nowrap'>
          {/* Original Services */}
          {services.map((service, index) => (
            <div key={`original-${index}`} className='flex items-center gap-8 px-8 min-w-max'>
              <span className='text-white font-semibold text-lg'>{service}</span>
              {index < services.length - 1 && (
                <svg className='w-6 h-6 text-red-500 flex-shrink-0' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                </svg>
              )}
            </div>
          ))}
          
          {/* Duplicate for seamless loop */}
          {services.map((service, index) => (
            <div key={`duplicate-${index}`} className='flex items-center gap-8 px-8 min-w-max'>
              <span className='text-white font-semibold text-lg'>{service}</span>
              {index < services.length - 1 && (
                <svg className='w-6 h-6 text-red-500 flex-shrink-0' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* About Us Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            
            {/* Left Side - Before and After Slider */}
            <div 
              ref={sliderRef}
              className='relative w-full overflow-hidden rounded-lg shadow-lg cursor-col-resize select-none'
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              style={{ userSelect: 'none' }}
            >
              {/* After Image (Clean Car) - Behind */}
              <img 
                src='/car1.png'
                alt='After - Clean Car'
                className='w-full h-auto block'
                draggable={false}
              />

              {/* Before Image (Dirty Car) - In Front */}
              <div 
                className='absolute top-0 left-0 h-full overflow-hidden'
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src='/car2.png'
                  alt='Before - Dirty Car'
                  className='w-full h-full object-cover'
                  draggable={false}
                />
              </div>

              {/* Divider Line */}
              <div 
                className='absolute top-0 h-full w-1 bg-white'
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Arrow Buttons */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <div className='bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg cursor-col-resize'>
                    <svg className='w-6 h-6 text-gray-900' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                    <svg className='w-6 h-6 text-gray-900' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div 
                onClick={() => setSliderPosition(100)}
                className='absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-xs font-bold cursor-pointer hover:bg-red-500 transition'
              >
                BEFORE
              </div>
              <div 
                onClick={() => setSliderPosition(0)}
                className='absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-xs font-bold cursor-pointer hover:bg-red-500 transition'
              >
                AFTER
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Label */}
              <p className='text-red-500 font-bold text-sm mb-4 tracking-widest'>[ ABOUT US ]</p>
              
              {/* Heading */}
              <h2 className='text-4xl font-bold text-gray-900 mb-6 leading-tight'>
                Professional Car Cleaning You Can Trust
              </h2>
              
              {/* Description */}
              <p className='text-gray-600 text-lg mb-8 leading-relaxed'>
                Booking a car wash has become increasingly convenient, with various options available to suit different preferences.
              </p>

              {/* Features */}
              <div className='space-y-4 mb-8'>
                <div className='flex items-start gap-3'>
                  <svg className='w-6 h-6 text-red-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                  </svg>
                  <p className='text-gray-700'>Specialized treatments like ceramic coatings.</p>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className='w-6 h-6 text-red-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                  </svg>
                  <p className='text-gray-700'>They may also state their mission to provide the best car care services.</p>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className='w-6 h-6 text-red-500 flex-shrink-0 mt-1' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                  </svg>
                  <p className='text-gray-700'>This can build trust and confidence in their services.</p>
                </div>
              </div>

              {/* Buttons and Contact */}
              <div className='flex flex-col sm:flex-row gap-6 items-start sm:items-center'>
                <button className='bg-black hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full transition'>
                  READ MORE
                </button>
                
                <div className='flex items-center gap-3 ml-4'>
                  <div className='w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-500 text-sm font-semibold'>CALL FOR INQUIRY</p>
                    <p className='text-gray-900 text-xl font-bold'>+880 1812-456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Stats Section */}
      <section ref={statsRef} className='py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-white text-center mb-16'>Our Achievements</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='stat-number text-5xl lg:text-6xl font-bold text-red-500 mb-2'>
                  {index === 0 ? `${displayNumbers.num1}K+` : index === 1 ? `${displayNumbers.num2}%` : index === 2 ? `${displayNumbers.num3}+` : stat.number}
                </div>
                <p className='text-xl text-gray-300'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* Our Process Section */}
      <section 
        className='py-20 px-6 relative'
        style={{
          backgroundImage: 'url(/pro.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className='absolute inset-0 '></div>
        
        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Left - Content */}
            <div>
              <p className='text-red-500 font-bold text-lg mb-4'>OUR PROCESS</p>
              <h2 className='text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight'>
                Easy and sure process towards clean cars
              </h2>
              <p className='text-gray-300 text-lg mb-12 leading-relaxed'>
                There are many variations passages of Lorem Ipsum available, but the main majority have suffered alteration.
              </p>

              {/* Process Steps */}
              <div className='space-y-8'>
                {[
                  {
                    num: '01',
                    title: 'Book an appointment',
                    desc: 'Schedule your car service at a convenient time.'
                  },
                  {
                    num: '02',
                    title: 'Deliver car on schedule',
                    desc: 'Bring your car in at the appointed time.'
                  },
                  {
                    num: '03',
                    title: 'Receive serviced car',
                    desc: 'Pick up your car after it’s fully serviced.'
                  }
                ].map((step, index) => (
                  <div key={index} className='flex gap-6'>
                    <div className='w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-red-500'>
                      <span className='text-2xl font-bold text-red-500'>{step.num}</span>
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white mb-2'>{step.title}</h3>
                      <p className='text-gray-400'>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwd2FzaHxlbnwwfHwwfHx8MA%3D%3D'
                alt='Car Washing Process'
                className='rounded-xl shadow-2xl w-full h-[500px] mt-18'
              />
              {/* Play Button */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <button 
                  onClick={() => setActiveVideoId(videoId1)}
                  className='w-20 h-20 mt-15 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition transform'
                >
                  <svg className='w-8 h-8 text-red-500 ml-1' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M8 5v14l11-7z'/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12'>
            <div className='max-w-2xl'>
              <p className='text-red-500 font-bold text-sm tracking-[0.3em] uppercase mb-4'>Featured Services</p>
              <h2 className='text-4xl font-bold text-gray-900 leading-tight'>Choose the right service for your vehicle</h2>
            </div>
            <Link href='/services' className='inline-flex w-fit items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-500'>
              View all services
            </Link>
          </div>

          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {featuredServices.map((service) => (
              <Link key={service.title} href={service.href} className='group rounded-4xl border border-gray-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-xl'>
                <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-2xl'>
                  ✦
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                <p className='text-gray-600 leading-7 mb-6'>{service.desc}</p>
                <span className='font-semibold text-red-500 group-hover:underline'>Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 px-6 bg-gradient-to-br from-slate-50 to-white'>
        <div className='max-w-7xl mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center'>
          <div>
            <p className='text-red-500 font-bold text-sm tracking-[0.3em] uppercase mb-4'>Why Choose Us</p>
            <h2 className='text-4xl font-bold text-gray-900 leading-tight mb-6'>Built for customers who want clean results without extra hassle</h2>
            <p className='text-gray-600 text-lg leading-8 mb-8'>
              Our workflow focuses on convenience, consistent quality, and careful detailing so every visit feels straightforward and worth the time.
            </p>
            <Link href='/contact' className='inline-flex rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-red-500'>
              Talk to the team
            </Link>
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            {reasons.map((reason, index) => (
              <div key={reason.title} className='rounded-3xl border border-gray-200 bg-white p-6 shadow-sm'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white font-bold'>
                  0{index + 1}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{reason.title}</h3>
                <p className='text-gray-600 leading-7'>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className='py-20 px-6 bg-slate-900 text-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center max-w-3xl mx-auto mb-14'>
            <p className='text-red-300 font-bold text-sm tracking-[0.3em] uppercase mb-4'>Packages</p>
            <h2 className='text-4xl font-bold mb-4'>Simple pricing for different levels of care</h2>
            <p className='text-slate-300 text-lg leading-8'>
              Pick a package that fits your vehicle and schedule, then book a slot in a few quick steps.
            </p>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            {packages.map((pkg) => (
              <div key={pkg.name} className='rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm'>
                <p className='text-sm uppercase tracking-[0.25em] text-red-300 mb-3'>{pkg.name}</p>
                <div className='text-5xl font-bold mb-6'>{pkg.price}</div>
                <div className='space-y-3 mb-8'>
                  {pkg.features.map((feature) => (
                    <div key={feature} className='flex items-center gap-3 text-slate-200'>
                      <span className='text-red-300'>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href='/services/booking' className='inline-flex w-full justify-center rounded-full bg-red-500 px-6 py-3.5 font-semibold text-white transition hover:bg-red-600'>
                  Book this package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12'>
            <div className='max-w-2xl'>
              <p className='text-red-500 font-bold text-sm tracking-[0.3em] uppercase mb-4'>Testimonials</p>
              <h2 className='text-4xl font-bold text-gray-900 leading-tight'>What customers say after the wash</h2>
            </div>
            <p className='max-w-xl text-gray-600 text-lg leading-8'>Real feedback from drivers who wanted a cleaner car and a smoother service experience.</p>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className='rounded-4xl border border-gray-200 bg-slate-50 p-8 shadow-sm'>
                <div className='mb-5 flex gap-1 text-yellow-400'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className='text-gray-700 leading-8 mb-8'>“{testimonial.quote}”</p>
                <div>
                  <p className='font-bold text-gray-900'>{testimonial.name}</p>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ and CTA Section */}
      <section className='py-20 px-6 bg-gradient-to-b from-slate-50 to-white'>
        <div className='max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start'>
          <div className='rounded-4xl border border-gray-200 bg-white p-8 shadow-sm'>
            <p className='text-red-500 font-bold text-sm tracking-[0.3em] uppercase mb-4'>Quick Answers</p>
            <h2 className='text-4xl font-bold text-gray-900 mb-8'>Common questions before booking</h2>
            <div className='space-y-5'>
              {faqs.map((item) => (
                <div key={item.q} className='rounded-3xl border border-gray-200 bg-slate-50 p-5'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>{item.q}</h3>
                  <p className='text-gray-600 leading-7'>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-4xl bg-slate-950 text-white p-8 shadow-xl'>
            <p className='text-red-300 font-bold text-sm tracking-[0.3em] uppercase mb-4'>Ready to book</p>
            <h2 className='text-4xl font-bold leading-tight mb-6'>Schedule your next clean in just a few clicks</h2>
            <p className='text-slate-300 text-lg leading-8 mb-8'>
              Choose a service, pick a time, and we will handle the rest with a smooth confirmation process.
            </p>
            <div className='grid gap-4 sm:grid-cols-2 mb-8'>
              <div className='rounded-3xl bg-white/5 p-5'>
                <p className='text-sm uppercase tracking-[0.2em] text-red-300 mb-2'>Support</p>
                <p className='font-semibold'>Fast response team</p>
              </div>
              <div className='rounded-3xl bg-white/5 p-5'>
                <p className='text-sm uppercase tracking-[0.2em] text-red-300 mb-2'>Timing</p>
                <p className='font-semibold'>Flexible booking slots</p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link href='/services/booking' className='inline-flex justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
                Book now
              </Link>
              <Link href='/contact' className='inline-flex justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      {activeVideoId && (
        <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
          <div className='relative w-full max-w-4xl'>
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className='absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-500 transition'
            >
              ✕
            </button>
            
            {/* Video Container */}
            <div className='w-full aspect-video bg-black rounded-lg overflow-hidden'>
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title='Car Washing Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default HomePage