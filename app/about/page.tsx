'use client'

import Footer from '@/components/Footer'
import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image'

const timelineData = [
  {
    title: '2024',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className="grid grid-cols-2 gap-4">
          {['startup-1.webp', 'startup-2.webp', 'startup-3.webp', 'startup-4.webp'].map(
            (src, index) => (
              <Image
                key={index}
                src={`https://assets.aceternity.com/templates/${src}`}
                alt={`startup template ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
              />
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    title: 'Early 2023',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I usually run out of copy, but when I see content this big, I try to integrate lorem
          ipsum.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some
          more examples of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {['hero-sections.png', 'features-section.png', 'bento-grids.png', 'cards.png'].map(
            (src, index) => (
              <Image
                key={index}
                src={`https://assets.aceternity.com/${src}`}
                alt={`design template ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
              />
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    title: 'Changelog',
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Deployed 5 new components on Aceternity today
        </p>
        <ul className="mb-8 space-y-2 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
          {[
            '✅ Card grid component',
            '✅ Startup template Aceternity',
            '✅ Random file upload lol',
            '✅ Himesh Reshammiya Music CD',
            '✅ Salman Bhai Fan Club registrations open',
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-4">
          {['hero-sections.png', 'features-section.png', 'bento-grids.png', 'cards.png'].map(
            (src, index) => (
              <Image
                key={index}
                src={`https://assets.aceternity.com/${src}`}
                alt={`component preview ${index + 1}`}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
              />
            ),
          )}
        </div>
      </div>
    ),
  },
]

export default function About() {
  return (
    <div className="flex pt-32 flex-col items-center justify-center min-h-screen px-0 sm:px-4 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl font-bold text-left mb-8 md:ml-20 ml-5">About.</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <Timeline data={timelineData} />
      </div>
      <Footer seeMoreText="Lets Continue To Projects" seeMoreLink="/projects" />
    </div>
  )
}
