'use client'

import React, { useState } from 'react'
import PremiumAuthShell from '@/components/auth/PremiumAuthShell'

const roleContent = {
  user: {
    badge: 'Member Access',
    title: 'Premium access for car owners.',
    description: 'Sign in to manage your bookings, save vehicle details, and keep your service history in one place. New members can create an account instantly.',
    highlights: [
      {
        icon: '1',
        title: 'Track bookings',
        description: 'See appointments, reminders, and service updates from one place.'
      },
      {
        icon: '2',
        title: 'Save preferences',
        description: 'Store vehicle details, favorite services, and repeat instructions.'
      },
      {
        icon: '3',
        title: 'Get faster checkouts',
        description: 'Reuse profile details and move through booking faster.'
      },
      {
        icon: '4',
        title: 'Member support',
        description: 'Access priority help for questions, reschedules, and custom plans.'
      }
    ],
    primaryLink: '/services',
    primaryLinkLabel: 'Browse services',
    secondaryLink: '/contact',
    secondaryLinkLabel: 'Contact support'
  },
  admin: {
    badge: 'Admin Access',
    title: 'Premium access for the CarCleanify team.',
    description: 'Use the same page to switch into admin login or sign up when staff access is needed.',
    highlights: [
      {
        icon: 'A',
        title: 'Booking control',
        description: 'Review incoming requests and keep the schedule organized.'
      },
      {
        icon: 'B',
        title: 'Service oversight',
        description: 'Track services, packages, and customer priorities in one place.'
      },
      {
        icon: 'C',
        title: 'Team coordination',
        description: 'Assign work and keep the service flow aligned across the team.'
      },
      {
        icon: 'D',
        title: 'Trusted access',
        description: 'Built for staff-only access with a polished, secure interface.'
      }
    ],
    primaryLink: '/admin',
    primaryLinkLabel: 'Open admin page',
    secondaryLink: '/dashboard',
    secondaryLinkLabel: 'Open dashboard'
  }
}

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState('user')
  const content = roleContent[selectedRole]

  return (
    <PremiumAuthShell
        key={selectedRole}
        role={selectedRole}
        allowSignup
        roleToggle={(
          <div className='inline-flex rounded-full border border-white/10 bg-white/5 p-1 shadow-lg backdrop-blur-xl'>
            <button
              type='button'
              onClick={() => setSelectedRole('user')}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${selectedRole === 'user' ? 'bg-linear-to-r from-red-500 to-orange-400 text-white' : 'text-slate-300'}`}
            >
              User Login
            </button>
            <button
              type='button'
              onClick={() => setSelectedRole('admin')}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${selectedRole === 'admin' ? 'bg-linear-to-r from-cyan-500 to-indigo-500 text-white' : 'text-slate-300'}`}
            >
              Admin Login
            </button>
          </div>
        )}
        badge={content.badge}
        title={content.title}
        description={content.description}
        highlights={content.highlights}
        primaryLink={content.primaryLink}
        primaryLinkLabel={content.primaryLinkLabel}
        secondaryLink={content.secondaryLink}
        secondaryLinkLabel={content.secondaryLinkLabel}
      />
  )
}

export default LoginPage