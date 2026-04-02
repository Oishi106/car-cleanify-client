import React from 'react'
import Link from 'next/link'

const DashboardSidebar = () => {
    return ( 
        <div className='fixed top-0 left-0 w-[200px] bg-amber-400 px-3 py-4  h-screen text-black'>
            <div className='flex gap-3'>
                <Link href={"/"}><img className='w-[35px] h-[35px]' src="logo.png" alt="" /></Link>
                <h2>Car Cleanify</h2>
            </div>

            <div className='flex flex-col gap-2 mt-7 '>
                <Link href={"/dashboard/profile"}>Profile</Link>
                <Link href={"/dashboard/my-bookings"}>My Bookings</Link>
            </div>
        </div>
    )
}

export default DashboardSidebar