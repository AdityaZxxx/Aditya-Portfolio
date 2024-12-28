'use client'

import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-start">
        <h1 className="text-3xl font-bold ">About.</h1>
      </div>

      <Footer seeMoreText="Lets Continue To Projects" seeMoreLink="/projects" />
    </div>
  )
}
