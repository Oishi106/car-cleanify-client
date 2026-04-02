'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesMenuItems = [
    { label: 'Service Details', href: '/services' },
    { label: 'Service Booking Form', href: '/services/booking' }
  ]

  const pagesMenuItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Team Details', href: '/team-details' },
    { label: 'Our Pricing', href: '/pricing' },
    { label: 'History', href: '/history' },
    { label: 'FAQ', href: '/faq' }
  ]

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center gap-2 flex-shrink-0'>
            <img 
              src='/logo.png' 
              alt='Logo' 
              className='w-22 h-22 object-contain'
            />
            <span className={`text-xl sm:text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              CarCleanify
            </span>
          </div>

          {/* Desktop Menu Items */}
          <div className={`hidden lg:flex gap-4 xl:gap-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <Link href='/' className='font-semibold hover:text-red-500 transition text-sm xl:text-base'>Home</Link>
            <Link href='/about' className='font-semibold hover:text-red-500 transition text-sm xl:text-base'>About</Link>
            
            {/* Services Dropdown */}
            <div className='relative group'>
              <button 
                className='font-semibold hover:text-red-500 transition text-sm xl:text-base flex items-center gap-1'
              >
                Services
                <svg className='w-4 h-4 transition-transform group-hover:rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
              </button>
              <div className='absolute left-0 mt-0 w-48 bg-white text-gray-900 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2'>
                {servicesMenuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className='block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pages Dropdown */}
            <div className='relative group'>
              <button 
                className='font-semibold hover:text-red-500 transition text-sm xl:text-base flex items-center gap-1'
              >
                Pages
                <svg className='w-4 h-4 transition-transform group-hover:rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
              </button>
              <div className='absolute left-0 mt-0 w-48 bg-white text-gray-900 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2'>
                {pagesMenuItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className='block px-4 py-2 hover:bg-red-50 hover:text-red-500 transition'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href='/shop' className='font-semibold hover:text-red-500 transition text-sm xl:text-base'>Shop</Link>
            <Link href='/blog' className='font-semibold hover:text-red-500 transition text-sm xl:text-base'>Blog</Link>
            <Link href='/contact' className='font-semibold hover:text-red-500 transition text-sm xl:text-base'>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden'
          >
            <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 space-y-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            <Link href='/' className='block px-4 py-2 hover:text-red-500 transition'>Home</Link>
            <Link href='/about' className='block px-4 py-2 hover:text-red-500 transition'>About</Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('services')}
                className='w-full text-left px-4 py-2 hover:text-red-500 transition flex items-center justify-between'
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div className='bg-red-50 bg-opacity-10 pl-4'>
                  {servicesMenuItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className='block px-4 py-2 hover:text-red-500 transition text-sm'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Pages Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('pages')}
                className='w-full text-left px-4 py-2 hover:text-red-500 transition flex items-center justify-between'
              >
                Pages
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'pages' ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
              </button>
              {openDropdown === 'pages' && (
                <div className='bg-red-50 bg-opacity-10 pl-4'>
                  {pagesMenuItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className='block px-4 py-2 hover:text-red-500 transition text-sm'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href='/shop' className='block px-4 py-2 hover:text-red-500 transition'>Shop</Link>
            <Link href='/blog' className='block px-4 py-2 hover:text-red-500 transition'>Blog</Link>
            <Link href='/contact' className='block px-4 py-2 hover:text-red-500 transition'>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar