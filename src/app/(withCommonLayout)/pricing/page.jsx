import Link from 'next/link'

const plans = [
  {
    name: 'Basic Wash',
    price: '$25',
    features: ['Exterior foam wash', 'Wheel cleaning', 'Quick dry finish']
  },
  {
    name: 'Premium Detail',
    price: '$79',
    features: ['Deep interior cleaning', 'Exterior polish', 'Tire shine and protection'],
    featured: true
  },
  {
    name: 'Ultimate Care',
    price: '$149',
    features: ['Full detail package', 'Ceramic protection', 'Engine bay cleaning']
  }
]

const PricingPage = () => {
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
              Pricing
            </h1>
            <div className='w-20 h-1 bg-red-500 mb-6'></div>
            <p className='hero-subtitle text-xl text-gray-200'>
            Pick a package that fits your vehicle, or contact us for a custom fleet plan.
            </p>
          </div>
        </div>
      </div>
            
     
     

      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 grid gap-8 lg:grid-cols-3'>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-4xl border p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.featured ? 'border-red-500 bg-slate-950 text-white' : 'border-slate-200 bg-slate-50'}`}
            >
              {plan.featured && (
                <div className='mb-5 inline-flex rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white'>Most Popular</div>
              )}
              <h2 className={`text-3xl font-bold mb-3 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h2>
              <p className={`text-5xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.price}</p>
              <ul className='space-y-4 mb-8'>
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 ${plan.featured ? 'text-slate-200' : 'text-slate-600'}`}>
                    <span className='flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-sm'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href='/contact'
                className={`inline-flex w-full justify-center rounded-full px-6 py-3 font-semibold transition ${plan.featured ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-950 text-white hover:bg-red-600'}`}
              >
                Book now
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className='py-20 bg-slate-50'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Need a custom quote?</h2>
          <p className='text-slate-600 text-lg mb-8'>
            We handle fleets, specialty vehicles, and recurring maintenance plans.
          </p>
          <Link href='/contact' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            Contact Sales
          </Link>
        </div>
      </section>
    </>
  )
}

export default PricingPage