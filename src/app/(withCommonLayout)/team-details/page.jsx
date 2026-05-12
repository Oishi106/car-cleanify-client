import Link from 'next/link'

const highlights = [
  'Interior and exterior detailing',
  'Ceramic coating and paint protection',
  'Fleet and premium vehicle care',
  'Fast turnaround with quality checks'
]

const TeamDetailsPage = () => {
  return (
    <>

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
              Team Details
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
              Our senior detailer leads every premium service with a focus on finish quality, consistency, and customer trust.
            </p>
          </div>
        </div>
      </div>
      

          <section className='bg-white py-20'>
            <div className='mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'>
              <div className='rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
                <p className='text-sm uppercase tracking-[0.3em] text-red-500'>What we handle</p>
                <h2 className='mt-2 text-3xl font-bold text-slate-900'>What this role covers</h2>
                <p className='mt-4 max-w-2xl text-slate-600 leading-7'>
                  Our team keeps the workflow sharp from check-in to handover, with a focus on finish quality, safe products, and clear communication.
                </p>

                <div className='mt-8 grid gap-4'>
                  {highlights.map((item, index) => (
                    <div key={item} className='flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                      <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-white font-bold'>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900'>{item}</p>
                        <p className='mt-1 text-sm leading-6 text-slate-500'>A practical part of how the team keeps every vehicle moving through the process smoothly.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='grid gap-6'>
                <div className='rounded-4xl bg-slate-950 p-6 text-white shadow-xl sm:p-8'>
                  <p className='text-sm uppercase tracking-[0.3em] text-red-300'>Service values</p>
                  <h2 className='mt-2 text-3xl font-bold'>Service values</h2>
                  <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                    <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                      <p className='text-xs uppercase tracking-[0.25em] text-red-300 mb-2'>Quality</p>
                      <p className='text-slate-300 leading-7'>Every car gets a final inspection before handover.</p>
                    </div>
                    <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                      <p className='text-xs uppercase tracking-[0.25em] text-red-300 mb-2'>Trust</p>
                      <p className='text-slate-300 leading-7'>Clear communication and honest service recommendations.</p>
                    </div>
                    <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                      <p className='text-xs uppercase tracking-[0.25em] text-red-300 mb-2'>Speed</p>
                      <p className='text-slate-300 leading-7'>Efficient workflow without compromising the finish.</p>
                    </div>
                    <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                      <p className='text-xs uppercase tracking-[0.25em] text-red-300 mb-2'>Care</p>
                      <p className='text-slate-300 leading-7'>Safe products and careful handling for every vehicle type.</p>
                    </div>
                  </div>
                </div>

                <div className='rounded-4xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-6 shadow-sm sm:p-8'>
                  <p className='text-sm uppercase tracking-[0.3em] text-red-500'>Team promise</p>
                  <h3 className='mt-2 text-2xl font-bold text-slate-900'>Consistent results, every visit</h3>
                  <p className='mt-4 text-slate-600 leading-7'>
                    The process is built to remove guesswork, reduce delays, and give customers a clean, polished handover they can trust.
                  </p>
                  <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                    <div className='rounded-2xl border border-slate-200 bg-white p-4 text-center'>
                      <p className='text-2xl font-bold text-slate-900'>15+</p>
                      <p className='mt-1 text-sm text-slate-500'>years experience</p>
                    </div>
                    <div className='rounded-2xl border border-slate-200 bg-white p-4 text-center'>
                      <p className='text-2xl font-bold text-slate-900'>100%</p>
                      <p className='mt-1 text-sm text-slate-500'>quality check</p>
                    </div>
                    <div className='rounded-2xl border border-slate-200 bg-white p-4 text-center'>
                      <p className='text-2xl font-bold text-slate-900'>Fast</p>
                      <p className='mt-1 text-sm text-slate-500'>turnaround focus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-linear-to-r from-slate-900 to-slate-800 py-20 text-white'>
            <div className='mx-auto max-w-5xl px-6 text-center'>
              <h2 className='text-3xl font-bold md:text-4xl'>Want to book with the team?</h2>
              <p className='mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-300'>
                Choose a package and we will match the right specialist to your vehicle.
              </p>
              <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
                <Link href='/pricing' className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
                  View Pricing
                </Link>
                <Link href='/contact' className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'>
                  Contact team
                </Link>
              </div>
            </div>
          </section>
    </>
  )
}

export default TeamDetailsPage