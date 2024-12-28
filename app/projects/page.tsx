'use client'

import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-start">
        <h1 className="text-3xl font-bold ">Projects.</h1>
      </div>

      <Footer seeMoreText="Let's Go To My Resume." seeMoreLink="/resume" />
    </div>
  )
}
