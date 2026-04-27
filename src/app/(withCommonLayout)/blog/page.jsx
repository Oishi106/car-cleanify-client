import Link from 'next/link'

const featuredPost = {
  title: '5 ways to keep your car looking freshly detailed between visits',
  excerpt:
    'Small habits make a big difference. These quick routines help protect paint, preserve interior surfaces, and extend the life of professional detailing.',
  image:
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
  category: 'Care Tips',
  readTime: '6 min read'
}

const posts = [
  {
    title: 'Why ceramic coating is worth it for daily drivers',
    category: 'Protection',
    readTime: '4 min read',
    excerpt: 'A practical look at how ceramic coating helps with gloss, water behavior, and long-term paint protection.'
  },
  {
    title: 'Interior cleaning mistakes that quietly damage your car',
    category: 'Interior Care',
    readTime: '5 min read',
    excerpt: 'Learn which products and habits can harm leather, fabric, and trim over time.'
  },
  {
    title: 'How often should you wash your vehicle in summer?',
    category: 'Maintenance',
    readTime: '3 min read',
    excerpt: 'Heat, dust, and road film all affect the ideal washing schedule. Here is a simple guide.'
  },
  {
    title: 'Fleet detailing: keeping business vehicles consistent',
    category: 'Fleet Care',
    readTime: '7 min read',
    excerpt: 'A repeatable maintenance plan helps business vehicles stay clean, professional, and reliable.'
  }
]

const categories = ['All', 'Care Tips', 'Protection', 'Interior Care', 'Maintenance', 'Fleet Care']

const BlogPage = () => {
  return (
    <>
      <section className='pt-28 pb-16 bg-slate-950 text-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <p className='uppercase tracking-[0.35em] text-sm text-red-300 mb-4'>Blog</p>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-6'>Tips, updates, and car care stories.</h1>
          <p className='text-lg text-slate-300 max-w-2xl'>
            Practical guides and service insights to help you keep every vehicle in better shape.
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
        <div className='max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start'>
          <article className='rounded-4xl overflow-hidden bg-white shadow-xl border border-slate-200'>
            <img src={featuredPost.image} alt={featuredPost.title} className='h-80 w-full object-cover' />
            <div className='p-8 md:p-10'>
              <div className='mb-4 flex flex-wrap items-center gap-3 text-sm font-semibold'>
                <span className='rounded-full bg-red-500 px-4 py-1 text-white'>{featuredPost.category}</span>
                <span className='text-slate-500'>{featuredPost.readTime}</span>
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>{featuredPost.title}</h2>
              <p className='text-slate-600 text-lg leading-relaxed mb-8'>{featuredPost.excerpt}</p>
              <Link href='/contact' className='inline-flex rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
                Read more
              </Link>
            </div>
          </article>

          <div className='space-y-6'>
            {posts.map((post) => (
              <article key={post.title} className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
                <div className='mb-4 flex items-center gap-3 text-sm font-semibold'>
                  <span className='rounded-full bg-slate-900 px-3 py-1 text-white'>{post.category}</span>
                  <span className='text-slate-500'>{post.readTime}</span>
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3'>{post.title}</h3>
                <p className='text-slate-600 leading-relaxed mb-5'>{post.excerpt}</p>
                <Link href='/contact' className='font-semibold text-red-500 hover:text-red-600'>
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-900 text-white'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Want help with your car care plan?</h2>
          <p className='text-slate-300 text-lg mb-8'>
            Browse our services or talk to the team for a package recommendation.
          </p>
          <Link href='/services' className='inline-flex rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'>
            View Services
          </Link>
        </div>
      </section>
    </>
  )
}

export default BlogPage