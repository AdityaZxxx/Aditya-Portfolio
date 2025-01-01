'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`absolute z-10 top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl  bg-transparent duration-500  flex justify-center items-center py-2 px-5  md:rounded-b-xl sm:rounded-none`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/favicon_io/android-chrome-192x192.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map(
            (item) =>
              pathname !== item.href && ( // Hide current page link
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-800 dark:text-gray-300 flex items-center duration-500 hover:scale-110 ${
                    pathname === item.href
                      ? 'underline text-gray-900 dark:text-white' // Highlight active link
                      : 'relative text-black hover:text-gray-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
                  }`}
                >
                  {item.label}
                </Link>
              ),
          )}
          {/* Theme Switcher */}
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 duration-500">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden h-screen absolute flex top-full font-semibold mt-0 left-0 w-full flex-col items-center  bg-white dark:bg-gray-950 p-4 rounded-lg transition-transform duration-500 ease-in-out py-6 pt-20 ${
          isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-75 opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-gray-500 dark:text-gray-300 text-xl duration-500 hover:scale-110 flex items-center py-2 ${
              pathname === item.href
                ? ' text-black underline underline-offset-8 dark:text-white scale-100' // Highlight active link
                : 'relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
