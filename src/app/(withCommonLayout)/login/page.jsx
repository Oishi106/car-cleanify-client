'use client'

import React, { useState } from 'react'
import PremiumAuthShell from '@/components/auth/PremiumAuthShell'
import {
  ShieldCheck,
  CarFront,
  Sparkles,
  Users
} from 'lucide-react'

const roleContent = {
  user: {
    badge: 'Member Access',
    title: 'Access for car owners.',
    description:
      'Sign in to manage bookings, save vehicle details, and keep your service history in one elegant dashboard.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1974&auto=format&fit=crop',
    highlights: [
      {
        icon: <CarFront size={18} />,
        title: 'Track bookings',
        description:
          'Manage appointments and receive instant service updates.'
      },
      {
        icon: <Sparkles size={18} />,
        title: 'Save preferences',
        description:
          'Store vehicle details and favorite cleaning packages.'
      },
      {
        icon: <ShieldCheck size={18} />,
        title: 'Fast & secure',
        description:
          'Enjoy secure authentication with smooth booking flow.'
      },
      {
        icon: <Users size={18} />,
        title: 'Priority support',
        description:
          'Get quick help for reschedules and premium services.'
      }
    ],
    primaryLink: '/services',
    primaryLinkLabel: 'Browse services',
    secondaryLink: '/contact',
    secondaryLinkLabel: 'Contact support'
  },

  admin: {
    badge: 'Admin Access',
    title: 'Secure access for the CarCleanify team.',
    description:
      'Manage bookings, monitor services, and coordinate your team with a modern admin experience.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop',
    highlights: [
      {
        icon: <ShieldCheck size={18} />,
        title: 'Booking control',
        description:
          'Review requests and manage schedules efficiently.'
      },
      {
        icon: <Sparkles size={18} />,
        title: 'Service oversight',
        description:
          'Track packages, payments, and customer activity.'
      },
      {
        icon: <Users size={18} />,
        title: 'Team coordination',
        description:
          'Assign work and monitor staff productivity.'
      },
      {
        icon: <CarFront size={18} />,
        title: 'Professional dashboard',
        description:
          'Built for secure staff-only management access.'
      }
    ],
    primaryLink: '/admin',
    primaryLinkLabel: 'Open admin page',
    secondaryLink: '/dashboard',
    secondaryLinkLabel: 'Open dashboard'
  }
}

const themeColors = {
  user: {
    primary: 'red',
    secondary: 'orange',
    accentGlow: 'bg-red-500/20',
    primaryGlow: 'bg-red-500/20',
    secondaryGlow: 'bg-orange-500/20',
    badgeColor: 'bg-red-500',
    iconGradient: 'from-red-600 to-orange-500',
    buttonGradient: 'from-red-600 to-orange-500',
    toggleGradient: 'from-red-600 to-orange-500'
  },
  admin: {
    primary: 'cyan',                   
    secondary: 'indigo',
    accentGlow: 'bg-cyan-500/20',
    primaryGlow: 'bg-cyan-500/20',
    secondaryGlow: 'bg-indigo-500/20',
    badgeColor: 'bg-cyan-500',
    iconGradient: 'from-cyan-500 to-indigo-500',
    buttonGradient: 'from-cyan-900 to-indigo-700',
    toggleGradient: 'from-cyan-500 to-indigo-500'
  }
}

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState('user')

  const content = roleContent[selectedRole]
  const theme = themeColors[selectedRole]

  return (
    <div className='relative min-h-screen overflow-hidden bg-black/70'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center scale-105 transition-all duration-700'
        style={{
          backgroundImage: `url(${content.image})`
        }}
      />

      {/* Dark Overlay */}                                   
      <div className='absolute inset-0 bg-black/23' />
                                                 
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/50' />
                         
      {/* Blur Effects */}
      <div className={`absolute top-0 left-0 w-96 h-96 ${theme.primaryGlow} rounded-full blur-3xl animate-pulse transition-all duration-700`} />
      <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] ${theme.secondaryGlow} rounded-full blur-3xl animate-pulse transition-all duration-700`} />

      {/* Main Section */}
      <div className='relative z-10 min-h-screen flex items-center px-6 py-20'>
        <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>

          {/* LEFT CONTENT */}
          <div className='text-white'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-6'>
              <span className={`w-2 h-2 rounded-full ${theme.badgeColor} animate-pulse`}></span>
              <p className='text-sm font-medium tracking-wide'>
                {content.badge}
              </p>
            </div>

            {/* Heading */}
            <h1 className='text-5xl md:text-6xl font-black leading-tight mb-6'>
              {content.title}
            </h1>

            {/* Description */}
            <p className='text-slate-300 text-lg leading-relaxed max-w-xl mb-10'>
              {content.description}
            </p>

            {/* Toggle */}
            <div className='inline-flex rounded-full border border-white/10 bg-white/5 p-1 shadow-lg backdrop-blur-xl mb-12'>
              <button
                type='button'
                onClick={() => setSelectedRole('user')}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedRole === 'user'
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                User Login
              </button>

              <button
                type='button'
                onClick={() => setSelectedRole('admin')}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  selectedRole === 'admin'
                    ? 'bg-gradient-to-r from-cyan-900 to-indigo-700 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Admin Login
              </button>
            </div>

            {/* Features */}
            <div className='grid sm:grid-cols-2 gap-5'>
              {content.highlights.map((item, index) => (
                <div
                  key={index}
                  className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 hover:bg-white/10 transition-all duration-300'
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${theme.iconGradient} flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>

                  <h3 className='text-lg font-bold mb-2'>
                    {item.title}
                  </h3>

                  <p className='text-slate-400 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT AUTH CARD */}
          <div className='w-full flex justify-center lg:justify-end'>
            <div className='w-full max-w-[540px]'>
              <div className='bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[32px] shadow-2xl p-6 md:p-8'>
              <PremiumAuthShell
                 key={selectedRole}
                 role={selectedRole}
                 allowSignup
                 badge=''
                 title=''
                 description=''
                 highlights={[]}
                 primaryLink=''
                 primaryLinkLabel=''
                 secondaryLink=''
                 secondaryLinkLabel=''
              />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage