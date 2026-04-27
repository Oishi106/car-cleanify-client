import PremiumAuthShell from '@/components/auth/PremiumAuthShell'

const AdminPage = () => {
  return (
    <section className='relative min-h-screen overflow-hidden bg-slate-950 pt-28 pb-16 text-white'>
      <div className='absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800'></div>
      <div className='absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl'></div>
      <div className='absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto px-6'>
        <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start'>
          <div className='space-y-8'>
            <span className='inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200'>
              Admin Portal
            </span>

            <div className='space-y-5'>
              <h1 className='text-5xl md:text-7xl font-bold leading-tight'>Secure access for the CarCleanify team.</h1>
              <p className='text-lg md:text-xl text-slate-300 max-w-2xl'>
                Manage bookings, monitor service flow, and keep operations moving from a clean, premium control panel.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {adminBenefits.map((item) => (
                <div key={item.title} className='rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl'>
                  <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-lg'>
                    {item.icon}
                  </div>
                  <h2 className='text-xl font-bold text-white mb-2'>{item.title}</h2>
                  <p className='text-sm leading-relaxed text-slate-300'>{item.description}</p>
                </div>
              ))}
            </div>

            <div className='flex flex-wrap gap-4'>
              <Link href='/dashboard' className='inline-flex rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600'>
                Open dashboard
              </Link>
              <Link href='/login' className='inline-flex rounded-full border border-cyan-400/30 px-6 py-3 font-semibold text-cyan-100 transition hover:border-cyan-300 hover:text-white'>
                User login
              </Link>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='grid gap-6 xl:grid-cols-2'>
              <div className='rounded-4xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl'>
                <div className='rounded-4xl bg-slate-950/70 p-6 md:p-8'>
                  <div className='mb-6'>
                    <p className='text-sm uppercase tracking-[0.25em] text-slate-400'>Secure access</p>
                    <h2 className='text-2xl font-bold text-white mt-2'>Admin login</h2>
                  </div>

                  {loginSubmitted && (
                    <div className='mb-6 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-100'>
                      Admin credentials submitted. Continue to the control panel.
                    </div>
                  )}

                  <form onSubmit={handleLoginSubmit} className='space-y-5'>
                    <div>
                      <label htmlFor='admin-login-email' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Admin email
                      </label>
                      <input
                        id='admin-login-email'
                        name='email'
                        type='email'
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder='admin@carcleanify.com'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='admin-login-password' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Password
                      </label>
                      <input
                        id='admin-login-password'
                        name='password'
                        type='password'
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder='Enter your password'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='admin-login-code' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Access code
                      </label>
                      <input
                        id='admin-login-code'
                        name='accessCode'
                        type='text'
                        value={loginData.accessCode}
                        onChange={handleLoginChange}
                        placeholder='Enter your admin code'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <button type='submit' className='w-full rounded-full bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-600'>
                      Enter admin dashboard
                    </button>
                  </form>
                </div>
              </div>

              <div className='rounded-4xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl'>
                <div className='rounded-4xl bg-slate-950/70 p-6 md:p-8'>
                  <div className='mb-6'>
                    <p className='text-sm uppercase tracking-[0.25em] text-slate-400'>New staff</p>
                    <h2 className='text-2xl font-bold text-white mt-2'>Admin sign up</h2>
                  </div>

                  {signupSubmitted && (
                    <div className='mb-6 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-100'>
                      Admin account request captured. Continue to the dashboard setup.
                    </div>
                  )}

                  <form onSubmit={handleSignupSubmit} className='space-y-5'>
                    <div>
                      <label htmlFor='admin-signup-name' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Full name
                      </label>
                      <input
                        id='admin-signup-name'
                        name='fullName'
                        type='text'
                        value={signupData.fullName}
                        onChange={handleSignupChange}
                        placeholder='Admin full name'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='admin-signup-email' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Admin email
                      </label>
                      <input
                        id='admin-signup-email'
                        name='email'
                        type='email'
                        value={signupData.email}
                        onChange={handleSignupChange}
                        placeholder='admin@carcleanify.com'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='admin-signup-password' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Password
                      </label>
                      <input
                        id='admin-signup-password'
                        name='password'
                        type='password'
                        value={signupData.password}
                        onChange={handleSignupChange}
                        placeholder='Create a password'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='admin-signup-confirm' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Confirm password
                      </label>
                      <input
                        id='admin-signup-confirm'
                        name='confirmPassword'
                        type='password'
                        value={signupData.confirmPassword}
                        onChange={handleSignupChange}
                        placeholder='Repeat your password'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor='admin-signup-code' className='mb-2 block text-sm font-semibold text-slate-300'>
                        Access code
                      </label>
                      <input
                        id='admin-signup-code'
                        name='accessCode'
                        type='text'
                        value={signupData.accessCode}
                        onChange={handleSignupChange}
                        placeholder='Enter your admin code'
                        className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30'
                        required
                      />
                    </div>

                    <button type='submit' className='w-full rounded-full bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-600'>
                      Create admin account
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className='rounded-4xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl'>
              <div className='rounded-4xl bg-slate-950/70 p-6 md:p-8 text-sm leading-relaxed text-slate-300'>
                Admin login and admin sign up are shown together here so staff can access either flow without switching tabs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPage