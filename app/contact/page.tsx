'use client'

import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-start">
        <h1 className="text-3xl font-bold ">Contact.</h1>
        <p className=" text-neutral-600 dark:text-neutral-200 mt-2">
          Get in touch or shoot me an email directly on{' '}
          <span className="font-semibold">adityaofficial714@gmail.com</span>
        </p>
        {/* input column for name, email, message */}
        <div className="mt-6">
          <label htmlFor="name" className="block text-neutral-600 dark:text-neutral-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full mt-1 p-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
          <label htmlFor="email" className="block text-neutral-600 dark:text-neutral-200 mt-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full mt-1 p-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
          <label htmlFor="message" className="block text-neutral-600 dark:text-neutral-200 mt-4">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full mt-1 p-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>

      <Footer seeMoreText="Go Back Home" seeMoreLink="/" />
    </div>
  )
}
