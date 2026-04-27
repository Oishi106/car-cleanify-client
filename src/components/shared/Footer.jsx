import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-gray-300'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>

          {/* Logo & Contact Info */}
          <div>
            <div className='flex items-center gap-2 mb-8'>
              <img
                src='/logo.png'
                alt='Logo'
                className='w-12 h-12 object-contain'
              />
              <span className='text-2xl font-bold text-white'>CarCleanify</span>
            </div>

            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-red-500 shrink-0 mt-1' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z' />
                </svg>
                <div>
                  <p className='text-sm text-gray-400'>Address
                    Level 3, House 12, Road 7
                    Uttara, Dhaka </p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <svg className='w-6 h-6 text-red-500' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
                <p className='text-gray-400'>support@carcleanify.com</p>
              </div>

              <div className='flex items-center gap-3'>
                <svg className='w-6 h-6 text-red-500' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                </svg>
                <p className='text-gray-400'>+880 1812-456789</p>
              </div>
            </div>
          </div>

          {/* Our Info */}
          <div>
            <h3 className='text-xl font-bold text-red-500 mb-6'>Our Info</h3>
            <ul className='space-y-3'>
              <li><Link href='/about' className='hover:text-red-500 transition'>About Us</Link></li>
              <li><Link href='/services' className='hover:text-red-500 transition'>Our Services</Link></li>
              <li><Link href='/services' className='hover:text-red-500 transition'>Service details</Link></li>
              <li><Link href='/blog' className='hover:text-red-500 transition'>Blog</Link></li>
              <li><Link href='/contact' className='hover:text-red-500 transition'>Contact us</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold text-red-500 mb-6'>Quick Links</h3>
            <ul className='space-y-3'>
              <li><Link href='/finance' className='hover:text-red-500 transition'>Finance</Link></li>
              <li><Link href='/compare' className='hover:text-red-500 transition'>Compare Vehicles</Link></li>
              <li><Link href='/faq' className='hover:text-red-500 transition'>General FAQ</Link></li>
              <li><Link href='/testimonial' className='hover:text-red-500 transition'>Testimonial</Link></li>
            </ul>
          </div>

          {/* Subscribe Us */}
          <div>
            <h3 className='text-xl font-bold text-red-500 mb-6'>Subscribe Us</h3>

            <div className='flex mb-8'>
              <input
                type='email'
                placeholder='Email'
                className='grow px-4 py-3 rounded-l-lg bg-blue-900 text-white placeholder-gray-500 focus:outline-none'
              />
              <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-r-lg transition'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className='flex gap-3'>
              <a href='#' className='w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a href='#' className='w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z' />
                </svg>
              </a>
              <a href='#' className='w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded flex items-center justify-center transition'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z' />
                </svg>
              </a>
              <a href='#' className='w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition'>
                <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.925-4.917 2.925v-5.85z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className='border-gray-700 my-12' />

        {/* Copyright */}
        <div className='text-center text-gray-400'>
          <p>©2026 CarCleanify <span className='text-red-500'>❤</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer