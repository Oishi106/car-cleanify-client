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
      

      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>What this role covers</h2>
            <div className='grid gap-4'>
              {highlights.map((item) => (
                <div key={item} className='flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white font-bold'>✓</div>
                  <p className='text-slate-700 font-medium'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-[2rem] bg-slate-50 p-8 border border-slate-200'>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>Service values</h2>
            <div className='grid gap-6 sm:grid-cols-2'>
              <div>
                <p className='text-sm uppercase tracking-[0.25em] text-red-500 mb-2'>Quality</p>
                <p className='text-slate-600'>Every car gets a final inspection before handover.</p>
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.25em] text-red-500 mb-2'>Trust</p>
                <p className='text-slate-600'>Clear communication and honest service recommendations.</p>
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.25em] text-red-500 mb-2'>Speed</p>
                <p className='text-slate-600'>Efficient workflow without compromising the finish.</p>
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.25em] text-red-500 mb-2'>Care</p>
                <p className='text-slate-600'>Safe products and careful handling for every vehicle type.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Want to book with the team?</h2>
          <p className='text-slate-300 text-lg mb-8'>
            Choose a package and we will match the right specialist to your vehicle.
          </p>
          <Link href='/pricing' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            View Pricing
          </Link>
        </div>
      </section>
    </>
  )
}

export default TeamDetailsPage