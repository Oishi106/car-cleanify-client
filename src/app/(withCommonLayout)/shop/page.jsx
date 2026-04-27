import Link from 'next/link'

const categories = ['All Products', 'Wash Kits', 'Interior Care', 'Protection', 'Accessories']

const products = [
  {
    name: 'Premium Wash Kit',
    price: '$34',
    category: 'Wash Kits',
    description: 'Complete starter kit for safe weekly washing and quick exterior upkeep.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Interior Care Bundle',
    price: '$29',
    category: 'Interior Care',
    description: 'A practical set for dashboards, leather, fabric, and trim cleaning.',
    image: 'https://images.unsplash.com/photo-1621877193119-1ed25e7e39a5?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Ceramic Spray Sealant',
    price: '$42',
    category: 'Protection',
    description: 'Boost gloss and add short-term protection with an easy spray application.',
    image: 'https://images.unsplash.com/photo-1605315267130-6b3c1c9a0b11?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Microfiber Pro Pack',
    price: '$18',
    category: 'Accessories',
    description: 'Soft, reusable towels for drying, polishing, and interior dusting.',
    image: 'https://images.unsplash.com/photo-1515923242043-6a4a1c3f9c12?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Wheel & Tire Care Set',
    price: '$26',
    category: 'Protection',
    description: 'Everything you need to clean, dress, and protect wheels and tires.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Quick Detail Spray',
    price: '$16',
    category: 'Wash Kits',
    description: 'Fast touch-up spray for maintaining shine between full washes.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80'
  }
]

const ShopPage = () => {
  return (
    <>
      <section className='pt-28 pb-16 bg-slate-950 text-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <p className='uppercase tracking-[0.35em] text-sm text-red-300 mb-4'>Shop</p>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-6'>Products that help you keep the shine going.</h1>
          <p className='text-lg text-slate-300 max-w-2xl'>
            Browse our recommended wash kits, protection products, and care accessories for your vehicle.
          </p>
        </div>
      </section>

      <section className='py-8 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 overflow-x-auto'>
          <div className='flex gap-3 min-w-max pb-2'>
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${index === 0 ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-3'>
          {products.map((product) => (
            <article key={product.name} className='overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <img src={product.image} alt={product.name} className='h-64 w-full object-cover' />
              <div className='p-6'>
                <div className='mb-4 flex items-center justify-between gap-4'>
                  <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700'>{product.category}</span>
                  <span className='text-2xl font-bold text-slate-950'>{product.price}</span>
                </div>
                <h2 className='text-2xl font-bold text-slate-900 mb-3'>{product.name}</h2>
                <p className='text-slate-600 leading-relaxed mb-6'>{product.description}</p>
                <div className='flex items-center gap-3'>
                  <Link href='/contact' className='inline-flex flex-1 justify-center rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-red-600'>
                    Buy now
                  </Link>
                  <Link href='/pricing' className='inline-flex rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-red-500 hover:text-red-500'>
                    Services
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='py-20 bg-slate-900 text-white'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Need help choosing products?</h2>
          <p className='text-slate-300 text-lg mb-8'>
            Our team can recommend the right tools and products for your vehicle and maintenance routine.
          </p>
          <Link href='/contact' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            Ask the team
          </Link>
        </div>
      </section>
    </>
  )
}

export default ShopPage