'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  smallScreenCursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
  smallScreenCursorClassName?: string
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }))

  const textRef = useRef<HTMLDivElement>(null)
  const [cursorHeight, setCursorHeight] = useState<number>(0)

  // Update cursor height dynamically based on text height
  useEffect(() => {
    if (textRef.current) {
      const textHeight = textRef.current.offsetHeight
      setCursorHeight(textHeight + 4) // Tambahkan sedikit margin untuk menghindari gantung
    }
  }, [wordsArray])

  const renderWords = () => (
    <div ref={textRef}>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(`dark:text-white text-black `, word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  )

  return (
    <div className={cn('flex space-x-1 my-6', className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          height: `${cursorHeight}px`, // Style default untuk layar besar
        }}
        className={cn(
          'block rounded-sm w-[4px] bg-blue-600', // Default classes
          cursorClassName, // Tambahkan kelas custom untuk layar besar
          smallScreenCursorClassName && 'sm:!h-auto sm:!w-[6px]', // Manual styling untuk layar kecil
        )}
      ></motion.span>
    </div>
  )
}
