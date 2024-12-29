import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Set kondisi mobile jika lebar layar < 768px
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (ref.current) {
      const childElements = ref.current.querySelectorAll<HTMLElement>('[data-timeline-entry]')
      const totalHeight = Array.from(childElements).reduce(
        (acc, element) => acc + element.offsetHeight + (isMobile ? 20 : 40), // 20px untuk margin di mobile
        0,
      )
      setContentHeight(totalHeight)
    }
  }, [data, isMobile])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 100%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, contentHeight])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Menambahkan efek perubahan warna garis berdasarkan scroll
  const colorTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['transparent', '#6C63FF', '#FF6347'],
  )

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto sm:pb-5 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-timeline-entry
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: isMobile ? contentHeight / 1 : contentHeight, // Sesuaikan tinggi untuk mobile
          }}
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              backgroundColor: colorTransform, // Ganti warna garis sesuai scroll
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
