import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Red Top Bar */}
      <div className='w-full h-2 bg-red-500' />

      {/* Header Section with Background */}
      <div 
        className='relative w-full py-32 bg-cover bg-center overflow-hidden'
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/60' />

        {/* Content */}
        <div className='relative max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-7xl lg:text-8xl font-bold text-white mb-4'>404 Not Found</h1>
          <div className='flex justify-center items-center gap-2 text-white'>
            <Link href='/' className='hover:text-red-500 transition'>Home</Link>
            <span>/</span>
            <span className='text-red-500'>404</span>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg viewBox='0 0 1200 60' preserveAspectRatio='none' className='w-full h-auto'>
            <path d='M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z' fill='white' />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className='flex-grow flex items-center justify-center px-6 py-20 bg-white'>
        <div className='max-w-2xl text-center'>
          <h2 className='text-5xl lg:text-6xl font-bold text-red-500 mb-6'>
            Oops! Page Not Found
          </h2>
          
          <p className='text-gray-600 text-lg mb-12 leading-relaxed'>
            The page you are looking for was moved, removed, renamed or might never existed.
          </p>

          {/* Home Button */}
          <Link 
            href='/'
            className='inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105'
          >
            <span>Home Page</span>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound