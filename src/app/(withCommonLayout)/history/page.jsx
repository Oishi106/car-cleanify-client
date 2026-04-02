'use client'

import React, { useEffect } from 'react'

const HistoryPage = () => {
    const timelineEvents = [
        {
            year: '2021',
            title: 'Contactless Washing',
            description:
                'Contactless car washing, also known as "touchless" car washing, is a method of cleaning a vehicle\'s exterior without any physical contact between the cleaning equipment and the car\'s surface. This is achieved through the use of high-pressure water jets and specialized detergents.',
            imageUrl:
                'https://images.unsplash.com/photo-1711982583856-616ed8e9fb76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNhciUyMHdhc2h8ZW58MHx8MHx8fDA%3D',
            side: 'left',
        },
        {
            year: '2022',
            title: 'Safety Materials',
            description:
                'When considering "safety materials" in the context of car washing and detailing, it\'s important to differentiate between chemical and other substances involved in car washing and detailing. Here\'s a breakdown of the role these materials play.',
            imageUrl:
                'https://images.unsplash.com/photo-1599398003405-e651ad75f141?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwU2FmZXR5JTIwTWF0ZXJpYWxzfGVufDB8fDB8fHww',
            side: 'right',
        },
        {
            year: '2023',
            title: 'Modern Equipment',
            description:
                'Modern car wash equipment has advanced significantly, offering more efficient, effective, and environmentally friendly cleaning solutions. Here\'s a look at some key pieces of modern car wash technology.',
            imageUrl:
                'https://media.istockphoto.com/id/1373210791/photo/rearview-of-parked-cars.webp?a=1&b=1&s=612x612&w=0&k=20&c=HGi1i0Mg_Vv3iCyquIC3TZF-2VN0hAa73Bfb1uKseE0=',
            side: 'left',
        },
        {
            year: '2024',
            title: 'Extensive Cleaning',
            description:
                'When referring to "extensive cleaning" in the context of car washes, it typically goes beyond a basic wash and includes a more thorough, detailed approach. Here\'s what extensive cleaning usually entails.',
            imageUrl:
                'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&h=400&q=80',
            side: 'right',
        },
        {
            year: '2025',
            title: 'Premium Finish',
            description:
                'We elevated our service to deliver a true premium finish—more shine, better protection, and consistent results. With refined processes and quality products, every vehicle leaves looking its best.',
            imageUrl:
                'https://plus.unsplash.com/premium_photo-1694345199645-1d2935028f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwUHJlbWl1bSUyMEZpbmlzaHxlbnwwfHwwfHx8MA%3D%3D',
            side: 'left',
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )
        document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
				.timeline-line {
					position: absolute;
					left: 50%;
					top: 0;
					bottom: 0;
					width: 2px;
					transform: translateX(-50%);
					background: #ef4444;
				}

				.timeline-diamond {
					width: 14px;
					height: 14px;
					background: white;
					border: 2px solid #ef4444;
					transform: rotate(45deg);
				}

				.timeline-card {
					background: white;
					border: 1px solid #ef4444;
					border-radius: 18px;
					box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
				}

				.timeline-hr {
					height: 2px;
					background: #ef4444;
				}

				@media (max-width: 768px) {
					.timeline-line {
						left: 18px;
						transform: none;
					}
				}

				/* Hero entrance */
				@keyframes heroFadeDown {
					from { opacity: 0; transform: translateY(-24px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				.hero-title {
					animation: heroFadeDown 0.8s ease both;
				}
				.hero-subtitle {
					animation: heroFadeDown 0.8s ease 0.35s both;
				}
				.hero-bar {
					animation: heroFadeDown 0.8s ease 0.2s both;
				}

				/* Scroll-triggered base */
				.scroll-animate {
					opacity: 0;
					transition: opacity 0.65s ease, transform 0.65s ease;
				}
				.scroll-animate.from-left  { transform: translateX(-45px); }
				.scroll-animate.from-right { transform: translateX(45px); }
				.scroll-animate.from-bottom { transform: translateY(32px); }
				.scroll-animate.scale-in   { transform: scale(0.72); }
				.scroll-animate.animate-in {
					opacity: 1;
					transform: translate(0) scale(1);
				}
			`}</style>

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
                            Our History
                        </h1>
                        <div className='hero-bar w-20 h-1 bg-red-500 mb-6'></div>
                        <p className='hero-subtitle text-xl text-gray-200'>
                            From a small beginning, we have grown into a trusted car cleaning service dedicated to quality and customer satisfaction.                        </p>
                    </div>
                </div>
            </div>
            {/* Timeline */}
            <section className='py-20 px-6 bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className='relative'>
                        <div className='timeline-line' />

                        <div className='space-y-20'>
                            {timelineEvents.map((event, index) => {
                                const isLeft = event.side === 'left'
                                const delay = `${index * 0.1}s`
                                return (
                                    <div key={event.year} className='relative'>
                                        {/* Desktop layout */}
                                        <div className='hidden md:block'>
                                            <div className='relative flex items-center'>
                                                {/* Center diamond */}
                                                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                    <div className='timeline-diamond' />
                                                </div>

                                                {/* Center connector line to year */}
                                                <div
                                                    className={`absolute top-1/2 left-1/2 -translate-y-1/2 ${
                                                        isLeft ? 'translate-x-0' : '-translate-x-full'
                                                    }`}
                                                >
                                                    <div className='timeline-hr w-20' />
                                                </div>

                                                {isLeft ? (
                                                    <>
                                                        {/* Card (left) */}
                                                        <div className='w-1/2 pr-16'>
                                                            <div className='timeline-card scroll-animate from-left px-10 py-12 text-center' style={{ transitionDelay: delay }}>
                                                                <div className='flex justify-center mb-8'>
                                                                    <div className='w-37.5 h-37.5 rounded-full border border-red-500 p-1'>
                                                                        <img
                                                                            src={event.imageUrl}
                                                                            alt={event.title}
                                                                            className='w-full h-full rounded-full object-cover'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-2xl font-bold text-gray-900 mb-5'>{event.title}</h3>
                                                                <p className='text-gray-500 leading-relaxed text-sm max-w-md mx-auto'>
                                                                    {event.description}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Year (right) */}
                                                        <div className='w-1/2 pl-24 flex items-center'>
                                                            <div className='scroll-animate scale-in text-5xl font-extrabold text-gray-900' style={{ transitionDelay: `calc(${delay} + 0.15s)` }}>{event.year}</div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {/* Year (left) */}
                                                        <div className='w-1/2 pr-24 flex items-center justify-end'>
                                                            <div className='scroll-animate scale-in text-5xl font-extrabold text-gray-900' style={{ transitionDelay: `calc(${delay} + 0.15s)` }}>{event.year}</div>
                                                        </div>

                                                        {/* Card (right) */}
                                                        <div className='w-1/2 pl-16'>
                                                            <div className='timeline-card scroll-animate from-right px-10 py-12 text-center' style={{ transitionDelay: delay }}>
                                                                <div className='flex justify-center mb-8'>
                                                                    <div className='w-37.5 h-37.5 rounded-full border border-red-500 p-1'>
                                                                        <img
                                                                            src={event.imageUrl}
                                                                            alt={event.title}
                                                                            className='w-full h-full rounded-full object-cover'
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <h3 className='text-2xl font-bold text-gray-900 mb-5'>{event.title}</h3>
                                                                <p className='text-gray-500 leading-relaxed text-sm max-w-md mx-auto'>
                                                                    {event.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Mobile layout */}
                                        <div className='md:hidden pl-12 relative'>
                                            <div className='absolute left-3 top-8'>
                                                <div className='timeline-diamond' />
                                            </div>
                                            <div className='scroll-animate scale-in text-3xl font-extrabold text-gray-900 mb-6' style={{ transitionDelay: delay }}>{event.year}</div>
                                            <div className='timeline-card scroll-animate from-bottom px-8 py-10 text-center' style={{ transitionDelay: `calc(${delay} + 0.15s)` }}>
                                                <div className='flex justify-center mb-6'>
                                                    <div className='w-30 h-30 rounded-full border border-red-500 p-1'>
                                                        <img
                                                            src={event.imageUrl}
                                                            alt={event.title}
                                                            className='w-full h-full rounded-full object-cover'
                                                        />
                                                    </div>
                                                </div>
                                                <h3 className='text-xl font-bold text-gray-900 mb-4'>{event.title}</h3>
                                                <p className='text-gray-500 leading-relaxed text-sm'>{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HistoryPage

