import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLongArrowAltRight, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="flex flex-col items-start justify-start space-y-4 pb-5">
      {/* Section See More About Me */}
      <div className="flex flex-col items-start space-y-4">
        <Link href="/about" className="flex items-center">
          <p className="underline font-bold decoration-sky-600">See More About Me</p>
          <FaLongArrowAltRight size={25} className="ml-2 mt-0 animate-move-back-and-forth" />
        </Link>

        {/* Section Social Media Icons */}
        <div className="flex space-x-8">
          <Link href="https://instagram.com/adxxya30">
            <FaInstagram className="text-2xl text-neutral-700 dark:text-neutral-400 hover:scale-110 hover:text-neutral-500" />
          </Link>
          <Link href="https://x.com/adxxya30">
            <FaXTwitter className="text-2xl text-neutral-700 dark:text-neutral-400 hover:scale-110 hover:text-neutral-500" />
          </Link>
          <Link href="https://github.com/AdityaZxxx">
            <FaGithub className="text-2xl text-neutral-700 dark:text-neutral-400 hover:scale-110 hover:text-neutral-500" />
          </Link>
          <Link href="https://tiktok.com/adxxlenathea">
            <FaTiktok className="text-2xl text-neutral-700 dark:text-neutral-400 hover:scale-110 hover:text-neutral-500" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
