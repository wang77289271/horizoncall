import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Horizoncall',
  description: 'Video Calling App',
  icons: {
    icon: '/icons/logo.png',
  },
}

const signinLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      {children}
    </main>
  )
}

export default signinLayout
