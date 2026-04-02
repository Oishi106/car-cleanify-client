'use client'

import React, { useState, useEffect } from 'react'

// Bangladesh Districts with coordinates - All 64 Districts
const bangladeshDistricts = [
  // Dhaka Division
  { name: 'Dhaka', lat: 23.8103, lng: 90.4125 },
  { name: 'Gazipur', lat: 23.9934, lng: 90.4269 },
  { name: 'Narayanganj', lat: 23.6064, lng: 90.5000 },
  { name: 'Tangail', lat: 24.2513, lng: 89.9168 },
  { name: 'Faridpur', lat: 23.6122, lng: 89.8445 },
  { name: 'Rajbari', lat: 23.7465, lng: 89.3441 },
  { name: 'Madaripur', lat: 23.1967, lng: 90.1878 },
  { name: 'Munshiganj', lat: 23.5418, lng: 90.5047 },
  
  // Chittagong Division
  { name: 'Chittagong', lat: 22.3569, lng: 91.7832 },
  { name: 'Cox\'s Bazar', lat: 21.4435, lng: 91.9694 },
  { name: 'Bandarban', lat: 22.1936, lng: 92.2163 },
  { name: 'Rangamati', lat: 23.1615, lng: 91.9455 },
  { name: 'Comilla', lat: 23.4607, lng: 91.1809 },
  { name: 'Chandpur', lat: 22.7147, lng: 91.6948 },
  { name: 'Noakhali', lat: 22.8269, lng: 91.0955 },
  { name: 'Feni', lat: 23.0189, lng: 91.3840 },
  
  // Khulna Division
  { name: 'Khulna', lat: 22.8456, lng: 89.5648 },
  { name: 'Barisal', lat: 22.7010, lng: 90.3535 },
  { name: 'Patuakhali', lat: 22.3596, lng: 90.3289 },
  { name: 'Bhola', lat: 22.5653, lng: 90.6597 },
  { name: 'Jhalokati', lat: 22.5368, lng: 90.1974 },
  { name: 'Pirojpur', lat: 22.5787, lng: 89.7815 },
  { name: 'Jessore', lat: 23.1690, lng: 89.0155 },
  { name: 'Satkhira', lat: 22.7185, lng: 89.0705 },
  
  // Rajshahi Division
  { name: 'Rajshahi', lat: 24.3745, lng: 88.5671 },
  { name: 'Bogra', lat: 24.8949, lng: 89.3772 },
  { name: 'Pabna', lat: 24.0094, lng: 89.2332 },
  { name: 'Naogaon', lat: 24.8360, lng: 88.4618 },
  { name: 'Natore', lat: 24.4204, lng: 88.9744 },
  { name: 'Sirajganj', lat: 24.4533, lng: 89.7008 },
  { name: 'Chapainawabganj', lat: 24.5478, lng: 88.2766 },
  { name: 'Kushtia', lat: 23.9010, lng: 88.9717 },
  
  // Sylhet Division
  { name: 'Sylhet', lat: 24.9250, lng: 91.8699 },
  { name: 'Habiganj', lat: 24.5217, lng: 91.4147 },
  { name: 'Moulvibazar', lat: 24.4829, lng: 91.5452 },
  { name: 'Sunamganj', lat: 25.4615, lng: 91.3958 },
  
  // Rangpur Division
  { name: 'Rangpur', lat: 25.7439, lng: 89.2752 },
  { name: 'Dinajpur', lat: 25.6281, lng: 88.6140 },
  { name: 'Lalmonirhat', lat: 25.9132, lng: 89.6893 },
  { name: 'Nilphamari', lat: 25.8317, lng: 89.6287 },
  { name: 'Thakurgaon', lat: 26.1316, lng: 88.4616 },
  { name: 'Panchagarh', lat: 26.5347, lng: 88.5540 },
  
  // Mymensingh Division
  { name: 'Mymensingh', lat: 24.7471, lng: 90.4203 },
  { name: 'Jamalpur', lat: 24.9250, lng: 89.9376 },
  { name: 'Sherpur', lat: 25.1641, lng: 90.0144 },
  { name: 'Netrokona', lat: 24.8797, lng: 90.7273 },
  
  // Barisal Division (additional)
  { name: 'Barguna', lat: 22.0953, lng: 90.8108 },
  { name: 'Jhalokati', lat: 22.5368, lng: 90.1974 },
  
  // Additional important cities
  { name: 'Kurigram', lat: 25.8044, lng: 89.6376 },
  { name: 'Gaibandha', lat: 25.3281, lng: 89.5271 },
  { name: 'Kishoreganj', lat: 24.4456, lng: 90.7769 },
  { name: 'Moulavibazar', lat: 24.4829, lng: 91.5452 },
  { name: 'Madhupur', lat: 24.6422, lng: 90.0669 },
  { name: 'Mymensingh City', lat: 24.7465, lng: 90.4088 },
  { name: 'Dinajpur City', lat: 25.6281, lng: 88.6140 },
  { name: 'Bagerhat', lat: 22.6509, lng: 89.7845 },
  { name: 'Meherpur', lat: 23.7689, lng: 88.4826 },
  { name: 'Chuadanga', lat: 23.6401, lng: 88.8241 },
  { name: 'Bagerhat', lat: 22.6509, lng: 89.7845 },
  { name: 'Gopalganj', lat: 23.0050, lng: 90.6648 },
  { name: 'Jhenaidah', lat: 23.5410, lng: 89.1577 },
  { name: 'Magura', lat: 23.4831, lng: 89.4119 },
  { name: 'Narail', lat: 23.8944, lng: 89.5128 },
  { name: 'Jashore', lat: 23.1690, lng: 89.0155 },
  { name: 'Khulna City', lat: 22.8456, lng: 89.5648 },
]

const DistrictMap = () => {
  useEffect(() => {
    // Load Leaflet CSS if not already loaded
    if (!document.querySelector('link[href*="leaflet.min.css"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
      document.head.appendChild(link)
    }

    // Load Leaflet JS if not already loaded
    if (!window.L) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
      script.async = true
      script.onload = () => {
        initializeMap()
      }
      document.head.appendChild(script)
    } else {
      initializeMap()
    }
  }, [])

  const initializeMap = () => {
    if (!window.L || !document.querySelector('#district-map')) return

    const L = window.L
    
    // Clear existing map if it exists
    const mapElement = document.querySelector('#district-map')
    if (mapElement._leaflet_map) {
      mapElement._leaflet_map.remove()
    }
    
    const map = L.map('district-map').setView([23.6850, 90.3563], 8)
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    // Add markers for all districts
    bangladeshDistricts.forEach((district) => {
      const marker = L.circleMarker([district.lat, district.lng], {
        radius: 6,
        fillColor: '#4169E1',
        color: '#fff',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.8
      }).addTo(map)

      marker.bindPopup(`<strong>${district.name}</strong>`)
      
      // Hover effect
      marker.on('mouseover', function() {
        this.setRadius(10)
        this.setStyle({ fillColor: '#1a3a9e', weight: 3 })
      })
      
      marker.on('mouseout', function() {
        this.setRadius(6)
        this.setStyle({ fillColor: '#4169E1', weight: 2 })
      })
    })
  }

  return (
    <div 
      id='district-map' 
      style={{ 
        width: '100%', 
        height: '500px', 
        borderRadius: '0.75rem', 
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    ></div>
  )
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    website: '',
    date: '',
    time: '',
    subject: ''
  })
  const [submitted, setSubmitted] = useState(false)
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

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+880 1812-456789'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'support@carcleanify.com'
    },
    {
      icon: '📍',
      title: 'Address',
      value: 'Dhaka, Bangladesh'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      website: '',
      date: '',
      time: '',
      subject: ''
    })
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

        /* Style date and time inputs */
        input[type='date'],
        input[type='time'] {
          color-scheme: light;
          color: #9ca3af !important;
        }

        input[type='date']::-webkit-calendar-picker-indicator,
        input[type='time']::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.8) sepia(0.2);
        }

        input[type='date']::placeholder,
        input[type='time']::placeholder {
          color: #9ca3af !important;
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
              Contact Us
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
             Get in touch with us for any inquiries, bookings, or support—we’re always ready to help you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <p className='text-red-500 font-semibold mb-4'>[ CONTACT US ]</p>
            <h2 className='text-5xl font-bold text-gray-900 mb-6'>Get in Touch With us</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                data-scroll-animate
                data-scroll-key={`contact-${index}`}
                className={`scroll-item-scale ${visibleItems[`contact-${index}`] ? 'visible' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className='relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-red-500 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer group'>
                  <div className='absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative z-10'>
                    <div className='text-6xl mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300'>{info.icon}</div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors'>{info.title}</h3>
                    <p className='text-red-500 font-semibold text-lg'>{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Form */}
            <div
              data-scroll-animate
              data-scroll-key='contact-form'
              className={`scroll-item ${visibleItems['contact-form'] ? 'visible' : ''}`}
            >
              <p className='text-red-500 font-semibold mb-4'>[ FILL THE FORM ]</p>
              <h2 className='text-4xl font-bold text-gray-900 mb-10'>Would you like to <br /> discuss a Service?</h2>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 placeholder-gray-400 font-medium'
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 placeholder-gray-400 font-medium'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <input
                    type='tel'
                    name='phoneNumber'
                    placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 placeholder-gray-400 font-medium'
                  />
                  <input
                    type='url'
                    name='website'
                    placeholder='Website'
                    value={formData.website}
                    onChange={handleChange}
                    className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 placeholder-gray-400 font-medium'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <input
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 font-medium'
                  />
                  <input
                    type='time'
                    name='time'
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 font-medium'
                  />
                </div>

                <textarea
                  name='subject'
                  placeholder='Message'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  rows='6'
                  className='w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:shadow-lg focus:ring-2 focus:ring-red-500/20 transition-all duration-300 font-medium resize-none text-gray-900'
                />

                <button
                  type='submit'
                  className='w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105 mt-8'
                >
                  GET APPOINTMENT
                </button>

                {submitted && (
                  <div className='bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg text-center'>
                    Thank you! Your appointment request has been submitted.
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div
              data-scroll-animate
              data-scroll-key='contact-map'
              className={`scroll-item-right ${visibleItems['contact-map'] ? 'visible' : ''}`}
            >
              <DistrictMap />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div
          data-scroll-animate
          data-scroll-key='contact-cta'
          className={`max-w-4xl mx-auto text-center scroll-item ${visibleItems['contact-cta'] ? 'visible' : ''}`}
        >
          <h2 className='text-4xl font-bold text-white mb-6'>We Look Forward to Hearing From You!</h2>
          <p className='text-xl text-gray-300'>
            Our team is ready to assist you with any questions or service requests.
          </p>
        </div>
      </section>
    </>
  )
}

export default ContactPage
