import Link from 'next/link'

const serviceDetails = {
  'car-wash-lift': {
    title: 'Car wash lift',
    tag: 'Exterior wash',
    summary: 'High-pressure cleaning that removes road film, dust, and surface grime while protecting your finish.',
    price: 'From $19',
    duration: '30-45 min',
    idealFor: 'Everyday drivers',
    accent: 'from-red-500/20 via-red-500/10 to-transparent',
    features: ['Foam pre-soak', 'Wheel and tire cleaning', 'Careful hand drying'],
    process: ['Pre-rinse and foam application', 'Targeted wheel and body cleaning', 'Final dry and finish check'],
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80'
  },
  'hand-car-wash': {
    title: 'Hand car wash',                       
    tag: 'Gentle care',                   
    summary: 'A swirl-safe hand wash for owners who want a more careful finish and attention to detail.',
    price: 'From $25',
    duration: '40-60 min',
    idealFor: 'Paint-conscious owners',                      
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    features: ['Two-bucket wash method', 'Soft mitt cleaning', 'Spot-free wipe down'],
    process: ['Protective rinse and pre-soak', 'Hand wash with microfiber mitts', 'Detail dry and trim wipe'],
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80'
  },
  'tunnel-washes': {
    title: 'Tunnel washes',
    tag: 'Fast service',
    summary: 'Efficient tunnel wash packages designed for quick turnaround without compromising consistency.',
    price: 'From $15',
    duration: '10-20 min',
    idealFor: 'Busy schedules',
    accent: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    features: ['Fast entry and exit', 'Consistent wash cycles', 'Fleet-friendly workflow'],
    process: ['Quick queue check-in', 'Automated wash cycle', 'Dry-off and exit inspection'],
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1200&q=80'
  },
  'chemical-car-wash': {
    title: 'Chemical car wash',
    tag: 'Deep clean',
    summary: 'Specialized cleaning agents break down tough buildup, salt, and residue safely and effectively.',
    price: 'From $29',
    duration: '45-70 min',
    idealFor: 'Stubborn grime',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    features: ['Targeted surface cleaning', 'Safe product selection', 'Finish conditioning'],
    process: ['Surface assessment', 'Purpose-built chemical treatment', 'Neutral rinse and conditioning'],
    image: 'https://images.unsplash.com/photo-1515923242043-6a4a1c3f9c12?auto=format&fit=crop&w=1200&q=80'
  },
  'premium-detailing': {
    title: 'Premium detailing',
    tag: 'Showroom finish',
    summary: 'Full-service detailing with interior refresh, exterior polish, and protective finishing steps.',
    price: 'From $79',
    duration: '2-4 hrs',
    idealFor: 'Owners who want the best finish',
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    features: ['Interior deep clean', 'Exterior polish', 'Detail inspection'],
    process: ['Interior vacuum and surface refresh', 'Exterior decontamination and polish', 'Final inspection and handover'],
    image: 'https://images.unsplash.com/photo-1605315267130-6b3c1c9a0b11?auto=format&fit=crop&w=1200&q=80'
  },
  'ceramic-coating': {
    title: 'Ceramic coating',
    tag: 'Paint protection',
    summary: 'Long-lasting ceramic protection that adds gloss, hydrophobic behavior, and easier maintenance.',
    price: 'From $149',
    duration: '1 day',
    idealFor: 'Long-term protection',
    accent: 'from-slate-500/20 via-slate-400/10 to-transparent',
    features: ['Paint prep and decontamination', 'Professional coating application', 'Aftercare guidance'],
    process: ['Paint correction and prep', 'Controlled coating application', 'Cure time and aftercare briefing'],
    image: 'https://images.unsplash.com/photo-1621877193119-1ed25e7e39a5?auto=format&fit=crop&w=1200&q=80'
  }
}

const ServiceDetailsPage = ({ params }) => {
  const slug = params?.slug
  const service = serviceDetails[slug]

  if (!service) {
    return (
      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(248,250,252,0.08),transparent_32%)]' />
        <div className='relative mx-auto max-w-3xl px-6 py-28 text-center'>
          <p className='mb-4 text-sm uppercase tracking-[0.35em] text-red-300'>Service details</p>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>Service not found</h1>
          <p className='mb-8 text-slate-300'>The requested service page does not exist yet.</p>
          <div className='flex flex-col justify-center gap-3 sm:flex-row'>
            <Link href='/services' className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
              Back to services
            </Link>
            <Link href='/services/booking' className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-red-400 hover:text-red-200'>
              Book now
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <div className={`absolute inset-0 bg-linear-to-br ${service.accent}`} />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_24%)]' />
        <div className='relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28'>
          <div className='max-w-2xl'>
            <p className='mb-4 text-sm uppercase tracking-[0.35em] text-red-200'>{service.tag}</p>
            <h1 className='text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl'>{service.title}</h1>
            <p className='mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg'>{service.summary}</p>

            <div className='mt-8 flex flex-wrap gap-3'>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90'>
                {service.price}
              </span>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90'>
                {service.duration}
              </span>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90'>
                Best for {service.idealFor}
              </span>
            </div>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <Link href='/services/booking' className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
                Book this service
              </Link>
              <Link href='/services' className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'>
                Explore all services
              </Link>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -left-4 -top-4 h-24 w-24 rounded-full bg-red-500/20 blur-2xl sm:-left-8 sm:-top-8 sm:h-32 sm:w-32' />
            <div className='overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm'>
              <img src={service.image} alt={service.title} className='h-85 w-full object-cover sm:h-105' />
            </div>

            <div className='-mt-16 grid gap-4 px-4 sm:grid-cols-3 sm:px-6'>
              <div className='rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur'>
                <p className='text-xs uppercase tracking-[0.25em] text-red-300'>Finish</p>
                <p className='mt-2 text-lg font-semibold'>Detailed care</p>
              </div>
              <div className='rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur'>
                <p className='text-xs uppercase tracking-[0.25em] text-red-300'>Focus</p>
                <p className='mt-2 text-lg font-semibold'>Safe process</p>
              </div>
              <div className='rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-xl backdrop-blur'>
                <p className='text-xs uppercase tracking-[0.25em] text-red-300'>Result</p>
                <p className='mt-2 text-lg font-semibold'>Cleaner finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-20'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]'>
          <div className='rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
            <div className='mb-8 flex items-end justify-between gap-4'>
              <div>
                <p className='text-sm uppercase tracking-[0.3em] text-red-500'>Included</p>
                <h2 className='mt-2 text-3xl font-bold text-slate-900'>What is included</h2>
              </div>
              <p className='hidden max-w-xs text-right text-sm leading-6 text-slate-500 sm:block'>
                Every package is tuned for quality, speed, and vehicle safety.
              </p>
            </div>

            <div className='grid gap-4'>
              {service.features.map((feature) => (
                <div key={feature} className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'>
                  <div className='mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-500 text-white font-bold'>
                    ✓
                  </div>
                  <div>
                    <p className='font-semibold text-slate-900'>{feature}</p>
                    <p className='mt-1 text-sm leading-6 text-slate-500'>Professional steps designed to protect the surface and improve the final finish.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='grid gap-6'>
            <div className='rounded-4xl bg-slate-950 p-6 text-white shadow-xl sm:p-8'>
              <div className='mb-8 flex flex-wrap gap-4'>
                <div className='rounded-2xl bg-white/5 px-4 py-3'>
                  <p className='text-xs uppercase tracking-[0.25em] text-red-300'>Duration</p>
                  <p className='mt-1 text-lg font-semibold'>{service.duration}</p>
                </div>
                <div className='rounded-2xl bg-white/5 px-4 py-3'>
                  <p className='text-xs uppercase tracking-[0.25em] text-red-300'>Price</p>
                  <p className='mt-1 text-lg font-semibold'>{service.price}</p>
                </div>
                <div className='rounded-2xl bg-white/5 px-4 py-3'>
                  <p className='text-xs uppercase tracking-[0.25em] text-red-300'>Best for</p>
                  <p className='mt-1 text-lg font-semibold'>{service.idealFor}</p>
                </div>
              </div>

              <h2 className='text-3xl font-bold'>Why this service works</h2>
              <p className='mt-5 max-w-2xl text-slate-300 leading-7'>
                This package balances finish quality, turnaround time, and day-to-day vehicle care so you can choose the right level of service without guessing.
              </p>

              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {service.process.map((step, index) => (
                  <div key={step} className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                    <p className='text-sm uppercase tracking-[0.25em] text-red-300'>Step {index + 1}</p>
                    <p className='mt-2 font-semibold text-white'>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8'>
              <p className='text-sm uppercase tracking-[0.3em] text-red-500'>Next step</p>
              <h3 className='mt-2 text-2xl font-bold text-slate-900'>Need help choosing a package?</h3>
              <p className='mt-4 text-slate-600 leading-7'>
                Book the service now and we will confirm the best slot, or explore the full list of options before you decide.
              </p>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <Link href='/services/booking' className='inline-flex items-center justify-center rounded-full bg-red-500 px-7 py-3.5 font-semibold text-white transition hover:bg-red-600'>
                  Book now
                </Link>
                <Link href='/services' className='inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500'>
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 py-20 text-white'>
        <div className='mx-auto max-w-5xl px-6 text-center'>
          <p className='text-sm uppercase tracking-[0.3em] text-red-300'>Ready to go</p>
          <h2 className='mt-3 text-3xl font-bold md:text-4xl'>Ready to book this service?</h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-7 text-slate-300'>
            Move straight to the booking form and choose a date that works for you. We will handle the rest with a quick confirmation.
          </p>
          <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
            <Link href='/services/booking' className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
              Book now
            </Link>
            <Link href='/contact' className='inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/5'>
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailsPage