'use client'

import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'

const HomeHero = () => {
  const [upcomingMeeting, setUpcomingMeeting] = useState<Date | null>(null)
  const { upcomingCalls } = useGetCalls()

  useEffect(() => {
    if (upcomingCalls && upcomingCalls.length > 0) {
      const sortedCalls = upcomingCalls?.sort(
        (mostRecentMeeting: Call, nextMeeting: Call) => {
          const mostRecentDate = (mostRecentMeeting as Call)?.state?.startsAt
          const nextDate = (nextMeeting as Call)?.state?.startsAt
          return (
            new Date(mostRecentDate!).getTime() - new Date(nextDate!).getTime()
          )
        }
      )

      const mostRecentMeeting = sortedCalls[0]
      const mostRecentDate = (mostRecentMeeting as Call)?.state?.startsAt
      setUpcomingMeeting(mostRecentDate!)
    }
  }, [upcomingCalls])

  const formatMeetingTime = (date: Date | null) => {
    if (!date) return ''
    const timeString = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    })
    const dateString = date.toLocaleDateString([], {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    return `Next meeting at ${timeString}, ${dateString}`
  }

  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
    now
  )
  return (
    <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
      <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
        <h2 className='glassmorphism max-w-[403px] rounded py-2 text-center text-base font-normal mb-4'>
          {!!upcomingMeeting
            ? formatMeetingTime(upcomingMeeting)
            : 'No upcoming Meeting'}
        </h2>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
          <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
