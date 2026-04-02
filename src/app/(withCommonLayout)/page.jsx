'use client'

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
      <div className='relative w-full h-screen overflow-hidden pt-20' style={{
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'scroll'
      }}>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/50' />

        {/* Content Container */}
        <div className='relative max-w-7xl mx-auto px-6 h-full flex items-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center'>
            {/* Left Content */}
            <div className='text-white z-10'>
              <h1 className='text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
                Best car wash & cleaning service
              </h1>
              <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
                A car wash is a facility used to clean the exterior and, in some cases, the motor vehicles. Car washes can be self-service.
              </p>

              {/* Buttons and Contact */}
              <div className='flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-12'>
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105'>
                  Book an appointment
                </button>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-red-500' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/>
                  </svg>
                  <div>
                    <p className='text-gray-400 text-sm'>Call us</p>
                    <p className='text-white text-xl font-bold'>+880 1812-456789</p>
                  </div>
                </div>
              </div>

              {/* Trustpilot Rating */}
              <div className='flex items-center gap-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className='w-6 h-6 fill-yellow-400' viewBox='0 0 24 24'>
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                    </svg>
                  ))}
                </div>
                <div>
                  <p className='text-white font-semibold'>200+ 5 Stars</p>
                  <p className='text-gray-400 text-sm'>Trustpilot</p>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>

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