import HomeHero from '@/components/HomeHero'
import HomeUpcomingMeeting from '@/components/HomeUpcomingMeeting'
import MeetingTypeList from '@/components/MeetingTypeList'
import React from 'react'

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-5 text-white'>
      <HomeHero />
      <MeetingTypeList />
      <HomeUpcomingMeeting />
    </section>
  )
}

export default Home
