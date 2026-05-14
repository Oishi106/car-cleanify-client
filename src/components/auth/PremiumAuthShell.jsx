'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const roleThemes = {
  user: {
    badge: 'bg-red-500/15 text-red-200 border-red-400/20',
    accent: 'bg-linear-to-r from-red-500 to-orange-400',
    button: 'bg-red-500 hover:bg-red-600',
    outline: 'border-red-400/30 hover:border-red-300 hover:text-red-200',
    glow: 'bg-red-500/20'
  },
  admin: {
    badge: 'bg-cyan-500/15 text-cyan-200 border-cyan-400/20',
    accent: 'bg-linear-to-r from-cyan-500 to-indigo-500',
    button: 'bg-cyan-500 hover:bg-cyan-600',
    outline: 'border-cyan-400/30 hover:border-cyan-300 hover:text-cyan-200',
    glow: 'bg-cyan-500/20'
  }
}

const PremiumAuthShell = ({
  role,
  allowSignup,
  roleToggle,
  badge,
  title,
  description,
  highlights,
  primaryLink,
  primaryLinkLabel,
  secondaryLink,
  secondaryLinkLabel
}) => {
  const theme = roleThemes[role]
  const [mode, setMode] = useState('signin')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({})

  const isSignup = allowSignup && mode === 'signup'

  const fields = role === 'admin'
    ? isSignup
      ? [
          { name: 'fullName', label: 'Full name', type: 'text', placeholder: 'Admin full name' },
          { name: 'email', label: 'Admin email', type: 'email', placeholder: 'admin@carcleanify.com' },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
          { name: 'confirmPassword', label: 'Confirm password', type: 'password', placeholder: 'Repeat your password' },
          { name: 'accessCode', label: 'Access code', type: 'text', placeholder: 'Enter your admin code', fullWidth: true }
        ]
      : [
          { name: 'email', label: 'Admin email', type: 'email', placeholder: 'admin@carcleanify.com', fullWidth: true },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', fullWidth: true }
        ]
    : isSignup
      ? [
          { name: 'fullName', label: 'Full name', type: 'text', placeholder: 'Your full name' },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
          { name: 'phone', label: 'Phone number', type: 'tel', placeholder: '+880 1XXXXXXXXX' },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
          { name: 'confirmPassword', label: 'Confirm password', type: 'password', placeholder: 'Repeat your password' },
          { name: 'vehicle', label: 'Vehicle type', type: 'text', placeholder: 'Sedan, SUV, van...', fullWidth: true }
        ]
      : [
          { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', fullWidth: true },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', fullWidth: true }
        ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <div className='text-white'>
      <div className='mb-6 flex items-center justify-between gap-4'>
        <div>
          <p className='text-sm uppercase tracking-[0.25em] text-slate-400'>Secure access</p>
          <h2 className='text-2xl font-bold text-white mt-2'>
            {role === 'admin'
              ? isSignup ? 'Create admin account' : 'Admin portal'
              : isSignup ? 'Create member account' : 'Member account'}
          </h2>
        </div>

        {allowSignup ? (
          <div className='inline-flex rounded-full border border-white/10 bg-white/5 p-1'>
            <button
              type='button'
              onClick={() => setMode('signin')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'signin' ? `${theme.accent} text-white` : 'text-slate-300'}`}
            >
              Sign in
            </button>
            <button
              type='button'
              onClick={() => setMode('signup')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${mode === 'signup' ? `${theme.accent} text-white` : 'text-slate-300'}`}
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className={`rounded-full border px-4 py-2 text-sm font-semibold ${theme.badge}`}>
            Sign in only
          </div>
        )}
      </div>

      {submitted && (
        <div className='mb-6 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-100'>
          {role === 'admin'
            ? 'Admin credentials submitted. Continue to the control panel.'
            : isSignup
              ? 'Your account request has been captured. Continue to explore services.'
              : 'You are signed in. Continue to the services area.'}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid gap-5 md:grid-cols-2'>
          {fields.map((field) => (
            <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
              <label htmlFor={field.name} className='mb-2 block text-sm font-semibold text-slate-300'>
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ''}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 ${role === 'admin' ? 'focus:border-cyan-500/50' : 'focus:border-red-500/50'}`}
                required
              />
            </div>
          ))}
        </div>

        {role !== 'admin' && !isSignup && (
          <div className='flex items-center justify-between gap-4 text-sm text-slate-300'>
            <label className='flex items-center gap-2'>
              <input type='checkbox' className={`h-4 w-4 rounded border-white/20 bg-transparent ${role === 'admin' ? 'accent-cyan-500' : 'accent-red-500'}`} />
              Remember me
            </label>
            <Link href='/contact' className={`font-semibold ${role === 'admin' ? 'text-cyan-300 hover:text-cyan-200' : 'text-red-300 hover:text-red-200'}`}>
              Forgot password?
            </Link>
          </div>
        )}

        <button type='submit' className={`w-full rounded-full px-6 py-4 font-semibold text-white transition ${theme.button}`}>
          {role === 'admin'
            ? isSignup
              ? 'Create admin account'
              : 'Enter admin dashboard'
            : isSignup
              ? 'Create account'
              : 'Sign in'}
        </button>
      </form>

      <div className='mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-slate-300'>
        {role === 'admin' ? (
          isSignup ? (
            <>
              Create a staff account to manage bookings, service flow, and operational access.
            </>
          ) : (
            <>
              This portal is reserved for staff management, booking oversight, and service control.
            </>
          )
        ) : isSignup ? (
          <>
            Create a member profile to save your service history, bookings, and vehicle preferences.
          </>
        ) : (
          <>
            Sign in to track appointments, view offers, and manage your car care experience.
          </>
        )}
      </div>
    </div>
  )
}

export default PremiumAuthShell