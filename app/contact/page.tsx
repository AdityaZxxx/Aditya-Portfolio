'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import ShinyButton from '@/components/ui/shiny-button'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true)

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          to: 'adityaofficial714@gmail.com',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      toast.success('Message sent successfully!')
      reset() // Reset form after successful submission
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="w-full max-w-xl mt-20">
        <h1 className="text-3xl font-bold">Contact.</h1>
        <p className="text-neutral-600 dark:text-neutral-200 mt-2">
          Get in touch or shoot me an email directly on{' '}
          <span className="font-semibold">adityaofficial714@gmail.com</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-neutral-600 dark:text-neutral-200">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-1 p-2 text-black dark:text-neutral-400 bg-white dark:bg-neutral-900  border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-neutral-600 dark:text-neutral-200">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 p-2 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-sky-600 focus:border-transparent"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-neutral-600 dark:text-neutral-200">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              id="message"
              rows={4}
              placeholder="Your Message"
              className="w-full mt-1 p-2 dark:text-neutral-400 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-2 focus:ring-sky-600 focus:border-transparent resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <ShinyButton type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </ShinyButton>
        </form>
      </div>

      <Footer seeMoreText="Go Back Home" seeMoreLink="/" />
    </div>
  )
}
