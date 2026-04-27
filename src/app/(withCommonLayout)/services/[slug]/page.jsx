import Link from 'next/link'

const serviceDetails = {
  'car-wash-lift': {
    title: 'Car wash lift',
    tag: 'Exterior wash',
    summary: 'High-pressure cleaning that removes road film, dust, and surface grime while protecting your finish.',
    features: ['Foam pre-soak', 'Wheel and tire cleaning', 'Careful hand drying'],
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80'
  },
  'hand-car-wash': {
    title: 'Hand car wash',
    tag: 'Gentle care',
    summary: 'A swirl-safe hand wash for owners who want a more careful finish and attention to detail.',
    features: ['Two-bucket wash method', 'Soft mitt cleaning', 'Spot-free wipe down'],
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  'tunnel-washes': {
    title: 'Tunnel washes',
    tag: 'Fast service',
    summary: 'Efficient tunnel wash packages designed for quick turnaround without compromising consistency.',
    features: ['Fast entry and exit', 'Consistent wash cycles', 'Fleet-friendly workflow'],
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1200&q=80'
  },
  'chemical-car-wash': {
    title: 'Chemical car wash',
    tag: 'Deep clean',
    summary: 'Specialized cleaning agents break down tough buildup, salt, and residue safely and effectively.',
    features: ['Targeted surface cleaning', 'Safe product selection', 'Finish conditioning'],
    image: 'https://images.unsplash.com/photo-1515923242043-6a4a1c3f9c12?auto=format&fit=crop&w=1200&q=80'
  },
  'premium-detailing': {
    title: 'Premium detailing',
    tag: 'Showroom finish',
    summary: 'Full-service detailing with interior refresh, exterior polish, and protective finishing steps.',
    features: ['Interior deep clean', 'Exterior polish', 'Detail inspection'],
    image: 'https://images.unsplash.com/photo-1605315267130-6b3c1c9a0b11?auto=format&fit=crop&w=1200&q=80'
  },
  'ceramic-coating': {
    title: 'Ceramic coating',
    tag: 'Paint protection',
    summary: 'Long-lasting ceramic protection that adds gloss, hydrophobic behavior, and easier maintenance.',
    features: ['Paint prep and decontamination', 'Professional coating application', 'Aftercare guidance'],
    image: 'https://images.unsplash.com/photo-1621877193119-1ed25e7e39a5?auto=format&fit=crop&w=1200&q=80'
  }
}

const ServiceDetailsPage = ({ params }) => {
  const slug = params?.slug
  const service = serviceDetails[slug]

  if (!service) {
    return (
      <section className='pt-28 pb-20 bg-slate-950 text-white'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
          <p className='uppercase tracking-[0.35em] text-sm text-red-300 mb-4'>Service Details</p>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Service not found</h1>
          <p className='text-slate-300 mb-8'>The requested service page does not exist yet.</p>
          <Link href='/services' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            Back to services
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='pt-28 pb-16 bg-slate-950 text-white'>
        <div className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center'>
          <div>
            <p className='uppercase tracking-[0.35em] text-sm text-red-300 mb-4'>{service.tag}</p>
            <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-6'>{service.title}</h1>
            <p className='text-lg text-slate-300 max-w-2xl'>{service.summary}</p>
          </div>

          <div className='rounded-4xl overflow-hidden border border-white/10 shadow-2xl'>
            <img src={service.image} alt={service.title} className='h-[420px] w-full object-cover' />
          </div>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2'>
          <div className='rounded-4xl bg-slate-50 border border-slate-200 p-8'>
            <h2 className='text-3xl font-bold text-slate-900 mb-6'>What is included</h2>
            <div className='space-y-4'>
              {service.features.map((feature) => (
                <div key={feature} className='flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white font-bold'>✓</div>
                  <p className='text-slate-700 font-medium'>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-4xl bg-slate-950 text-white p-8'>
            <h2 className='text-3xl font-bold mb-6'>Why this service works</h2>
            <p className='text-slate-300 leading-relaxed mb-6'>
              This package is designed to balance finish quality, time, and overall vehicle care so you can choose the right level of service for your needs.
            </p>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-2xl bg-white/5 p-4'>
                <p className='text-sm uppercase tracking-[0.2em] text-red-300 mb-2'>Duration</p>
                <p className='font-semibold'>30 to 120 minutes</p>
              </div>
              <div className='rounded-2xl bg-white/5 p-4'>
                <p className='text-sm uppercase tracking-[0.2em] text-red-300 mb-2'>Best for</p>
                <p className='font-semibold'>Daily drivers and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-50'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Ready to book this service?</h2>
          <p className='text-slate-600 text-lg mb-8'>
            Move straight to the booking form and choose a date that works for you.
          </p>
          <Link href='/services/booking' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            Book now
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsPage