import React from 'react'
import CallList from './CallList'
import Link from 'next/link'

const HomeUpcomingMeeting = () => {
  return (
    <section className='flex size-full flex-col gap-5 text-white'>
      <div className='flex flex-col sm:flex-row justify-between'>
        <h1 className='text-xl font-bold'>Upcoming Meeting(s)</h1>
        <Link href='/upcoming' className='text-[#ADA8C3] cursor-pointer'>
          See all
        </Link>
      </div>

      <CallList type='upcoming' />
    </section>
  )
}

export default HomeUpcomingMeeting
