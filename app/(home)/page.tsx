import Footer from '@/components/Footer'
import { TypewriterEffectSmooth } from '@/components/ui/typewritter-effect'
import Link from 'next/link'

const words = [
  {
    text: 'Hello,',
    className: 'text-2xl sm:text-4xl lg:text-5xl xl:text-6xl',
  },
  {
    text: 'I am',
    className: 'text-2xl sm:text-4xl lg:text-5xl xl:text-6xl',
  },
  {
    text: 'Aditya',
    className: 'text-2xl sm:text-4xl lg:text-5xl xl:text-6xl',
  },
  {
    text: 'Rahmad',
    className: 'text-2xl sm:text-4xl lg:text-5xl xl:text-6xl',
  },
]

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between px-6 sm:px-8 md:px-16 lg:px-24">
      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center sm:mb-10 sm:mt-28 md:pt-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-neutral-600 dark:text-neutral-200 text-base sm:text-lg">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} smallScreenCursorClassName="bg-red-500 h-8" />
        </div>

        {/* Text Content */}
        <div className="text-neutral-600 dark:text-neutral-200 text-base sm:text-lg max-w-3xl mx-auto">
          <p className="mb-2 mt-0">
            Get the best advice from our experts, including expert artists, painters, marathon
            enthusiasts, and RDX, totally free.
          </p>
          <p>
            Bona fide photochromic lens enthusiast - sunlight or indoors, I&apos;ve got it covered.
            I tread the path of minimalism, finding beauty in simplicity and order. When I&apos;m
            not crafting beautiful web experiences, you can find me reading articles or swaying to
            the rhythm of pop music & jazz, losing myself in the captivating flow of melodies. You
            can{' '}
            <Link href="/contact" className="underline font-bold decoration-sky-600">
              Contact Me
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
