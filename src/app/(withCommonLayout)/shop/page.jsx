'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const fallbackImage =
  'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80'
const cartStorageKey = 'car-cleanify-cart'

const formatPrice = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'Contact for price'
  }

  if (typeof value === 'number') {
    return `৳${value.toLocaleString()}`
  }

  const numericValue = Number(value)

  return Number.isFinite(numericValue)
    ? `৳${numericValue.toLocaleString()}`
    : String(value)
}

const toNumericPrice = (value) => {
  if (typeof value === 'number') return value

  if (typeof value === 'string') {
    const numericValue = Number(value)

    return Number.isFinite(numericValue) ? numericValue : null
  }

  return null
}

const normalizeCategory = (category) => {
  if (!category) return 'All Products'

  if (typeof category === 'string') return category

  return category.name || category.title || 'All Products'
}

const normalizeProduct = (item) => ({
  id: item._id || item.id || item.slug || item.name,
  name: item.name || item.title || 'Untitled product',
  priceLabel: formatPrice(item.discountPrice || item.price),
  priceValue: toNumericPrice(item.discountPrice || item.price),
  category: normalizeCategory(item.category),
  description:
    item.description ||
    'Product details are available from our team.',
  image: item.image || fallbackImage,
  badge: item.badge || (item.isFeatured ? 'Featured' : ''),
  rating: item.rating,
  reviews: item.numReviews,
})

const extractProducts = (data) => {
  const candidates = [
    data?.products,
    data?.shopProducts,
    data?.shopproducts,
    data?.items,
    data?.data,
    Array.isArray(data) ? data : null,
  ]

  return candidates.find((value) => Array.isArray(value)) || []
}

const readCartFromStorage = () => {
  if (typeof window === 'undefined') return []

  try {
    const storedCart = window.localStorage.getItem(cartStorageKey)

    return storedCart ? JSON.parse(storedCart) : []
  } catch (error) {
    console.error('Failed to read cart from storage:', error)

    return []
  }
}

const ShopPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeCategory, setActiveCategory] =
    useState('All Products')
  const [cartItems, setCartItems] = useState([])
  const [recentlyAddedId, setRecentlyAddedId] = useState('')

  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

        if (!baseUrl) {
          throw new Error(
            'NEXT_PUBLIC_BACKEND_URL is not configured'
          )
        }

        const endpoints = [
          `${baseUrl}/api/shopproducts?limit=50`,
          `${baseUrl}/api/products?limit=50`,
        ]

        let payload = null

        for (const endpoint of endpoints) {
          const response = await fetch(endpoint)

          if (!response.ok) continue

          payload = await response.json()
          break
        }

        const rawProducts = extractProducts(payload)

        setProducts(rawProducts.map(normalizeProduct))
        setError('')
      } catch (err) {
        console.error(
          'Failed to fetch shop products:',
          err
        )

        setError(
          'We could not load the shop items right now. Please try again later.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchShopProducts()
  }, [])

  useEffect(() => {
    setCartItems(readCartFromStorage())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    window.localStorage.setItem(
      cartStorageKey,
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      )
    )

    return ['All Products', ...uniqueCategories]
  }, [products])

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      ),
    [cartItems]
  )

  const cartTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const quantity = item.quantity || 1
        const priceValue = item.priceValue || 0

        return total + priceValue * quantity
      }, 0),
    [cartItems]
  )

  const handleAddToCart = (product) => {
    setCartItems((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      )

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      }

      return [
        ...currentCart,
        {
          id: product.id,
          name: product.name,
          priceLabel: product.priceLabel,
          priceValue: product.priceValue,
          image: product.image,
          category: product.category,
          quantity: 1,
        },
      ]
    })

    setRecentlyAddedId(product.id)
  }

  useEffect(() => {
    if (!recentlyAddedId) return

    const timer = window.setTimeout(() => {
      setRecentlyAddedId('')
    }, 1600)

    return () => window.clearTimeout(timer)
  }, [recentlyAddedId])

  const filteredProducts =
    activeCategory === 'All Products'
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        )

  return (
    <>
      {/* ── Hero Section ───────────────────────────── */}
      <section className='relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-3xl' />
          <div className='absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl' />
        </div>

        <div className='relative max-w-7xl mx-auto px-6'>
          <div className='max-w-3xl'>
            <span className='inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300 backdrop-blur-md'>
              Premium Car Care
            </span>

            <h1 className='mt-8 text-5xl md:text-7xl font-black leading-tight'>
              Upgrade Your
              <span className='block text-red-500'>
                Car Cleaning Experience
              </span>
            </h1>

            <p className='mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl'>
              Discover premium-quality cleaning products,
              accessories, detailing tools, and protection
              essentials designed to keep your vehicle spotless
              and showroom-ready.
            </p>

            <div className='mt-10 flex flex-wrap gap-4'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'
              >
                Shop Now
              </Link>

              <Link
                href='/services'
                className='inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900'
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Section ───────────────────── */}
      <section className='sticky top-0 z-20 border-b border-white/10 bg-white/80 backdrop-blur-xl'>
        <div className='max-w-7xl mx-auto px-6 py-5'>
          <div className='flex items-center justify-between flex-wrap gap-4 mb-5'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-red-500 mb-1'>
                Product Categories
              </p>

              <h2 className='text-2xl font-bold text-slate-900'>
                Explore Our Collection
              </h2>
            </div>

            <div className='hidden md:flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2'>
              <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse' />

              <span className='text-sm font-medium text-slate-600'>
                {filteredProducts.length} Products Available
              </span>
            </div>
          </div>

          <div className='mb-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
            <div className='rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-red-500'>
                Cart Status
              </p>

              <div className='mt-2 flex items-end justify-between gap-4'>
                <div>
                  <p className='text-3xl font-black text-slate-900'>
                    {cartCount}
                  </p>

                  <p className='text-sm text-slate-500'>
                    items saved in cart
                  </p>
                </div>

                <div className='text-right'>
                  <p className='text-sm text-slate-500'>
                    Estimated total
                  </p>

                  <p className='text-xl font-bold text-slate-900'>
                    {cartTotal > 0 ? `৳${cartTotal.toLocaleString()}` : '৳0'}
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm md:col-span-1 xl:col-span-2'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-red-500'>
                Quick Action
              </p>

              <div className='mt-2 flex flex-wrap items-center justify-between gap-3'>
                <p className='text-slate-600'>
                  Click any product below to add it to your cart and keep the selection saved in this browser.
                </p>

                <span className='inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white'>
                  {recentlyAddedId ? 'Added to cart' : 'Ready to add'}
                </span>
              </div>
            </div>
          </div>

          <div className='overflow-x-auto scrollbar-hide'>
            <div className='flex gap-3 min-w-max pb-1'>
              {categories.map((category) => (
                <button
                  key={category}
                  type='button'
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`group relative overflow-hidden rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-slate-950 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <span className='relative z-10'>
                    {category}
                  </span>

                  {activeCategory === category && (
                    <span className='absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-90' />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Section ─────────────────────── */}
      <section className='py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100'>
        <div className='max-w-7xl mx-auto px-6'>
          {loading ? (
            <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className='overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm'
                >
                  <div className='h-72 w-full animate-pulse bg-slate-200' />

                  <div className='p-6 space-y-5'>
                    <div className='h-5 w-24 rounded-full bg-slate-200' />

                    <div className='h-8 w-3/4 rounded-xl bg-slate-200' />

                    <div className='space-y-2'>
                      <div className='h-4 w-full rounded bg-slate-200' />

                      <div className='h-4 w-5/6 rounded bg-slate-200' />
                    </div>

                    <div className='flex gap-3 pt-3'>
                      <div className='h-12 flex-1 rounded-full bg-slate-200' />

                      <div className='h-12 w-28 rounded-full bg-slate-200' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className='rounded-[32px] border border-rose-200 bg-rose-50 p-10 text-center'>
              <h3 className='text-2xl font-bold text-rose-600 mb-3'>
                Something went wrong
              </h3>

              <p className='text-rose-500'>{error}</p>
            </div>
          ) : (
            <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className='group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl'
                >
                  {/* Image */}
                  <div className='relative h-72 overflow-hidden'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                      className='object-cover transition duration-700 group-hover:scale-110'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />

                    {/* Badge */}
                    <div className='absolute left-5 top-5'>
                      <span className='rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow-lg'>
                        {product.badge || product.category}
                      </span>
                    </div>

                    {/* Price */}
                    <div className='absolute bottom-5 right-5 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-lg'>
                      <p className='text-2xl font-black text-slate-900'>
                        {product.price}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-7'>
                    <div className='mb-4 flex items-center justify-between'>
                      <span className='text-sm font-semibold uppercase tracking-[0.18em] text-red-500'>
                        {product.category}
                      </span>

                      {product.rating ? (
                        <div className='flex items-center gap-1 text-sm font-medium text-amber-500'>
                          <span>★</span>

                          <span>
                            {Number(product.rating).toFixed(
                              1
                            )}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    <h2 className='mb-3 text-2xl font-black leading-tight text-slate-900 transition group-hover:text-red-500'>
                      {product.name}
                    </h2>

                    <p className='mb-6 line-clamp-3 text-slate-600 leading-relaxed'>
                      {product.description}
                    </p>

                    {/* Reviews */}
                    {product.reviews ? (
                      <div className='mb-6 flex items-center gap-2 text-sm text-slate-500'>
                        <div className='flex text-amber-400'>
                          ★★★★★
                        </div>

                        <span>
                          {product.reviews} customer reviews
                        </span>
                      </div>
                    ) : null}

                    {/* Buttons */}
                    <div className='flex gap-3'>
                      <button
                        type='button'
                        onClick={() => handleAddToCart(product)}
                        className='inline-flex flex-1 items-center justify-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-500'
                      >
                        {recentlyAddedId === product.id
                          ? 'Added to Cart'
                          : 'Add to Cart'}
                      </button>

                      <Link
                        href='/contact'
                        className='inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-red-500 hover:text-red-500'
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}

              {filteredProducts.length === 0 && (
                <div className='col-span-full rounded-[32px] border border-dashed border-slate-300 bg-white p-16 text-center'>
                  <h3 className='text-2xl font-bold text-slate-800 mb-3'>
                    No Products Found
                  </h3>

                  <p className='text-slate-500'>
                    Try selecting another category.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────── */}
      <section className='relative overflow-hidden bg-slate-950 py-28 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.25),transparent_30%)]' />

        <div className='relative max-w-5xl mx-auto px-6 text-center'>
          <span className='inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300 backdrop-blur-md'>
            Premium Support
          </span>

          <h2 className='mt-8 text-4xl md:text-6xl font-black leading-tight'>
            Need Help Choosing
            <span className='block text-red-500'>
              The Right Product?
            </span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300'>
            Our experts can help you pick the best products
            and detailing solutions for your car maintenance
            routine.
          </p>

          <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition hover:bg-red-600'
            >
              Contact Experts
            </Link>

            <Link
              href='/services'
              className='inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900'
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage