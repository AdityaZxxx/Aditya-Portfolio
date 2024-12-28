'use client'

import React, { useState } from 'react'
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaTools } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`absolute z-10 top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl shadow-lg duration-500  dark:shadow-[#060911] flex justify-center items-center bg-opacity-[4%] py-2 pr-5 pl-4 
    ${
      isOpen
        ? 'rounded-xl md:rounded-full dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-700 z-50'
        : 'rounded-full border border-gray-200 dark:border-gray-700'
    }
    transition-all duration-300`}
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
          <Link
            href="/about"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center duration-500 hover:scale-110"
          >
            <FaInfoCircle className="mr-1" /> About
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 dark:text-gray-300 duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white flex items-center"
          >
            <FaTools className="mr-1" /> Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 dark:text-gray-300 duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white flex items-center"
          >
            <FaEnvelope className="mr-1" /> Contact
          </Link>
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
        className={` md:hidden absolute flex top-full mt-0 left-0 w-full flex-col items-center dark:backdrop-blur-lg backdrop-blur-md shadow-b-lg dark:shadow-b-sm dark:shadow-gray-500 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-transform duration-500 ease-in-out 
        ${
          isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-75 opacity-0 pointer-events-none'
        }`}
      >
        <Link
          href="/"
          className="text-gray-600 dark:text-gray-300 text-xl hover:underline duration-500 hover:scale-110 flex items-center py-2"
        >
          <FaHome size={20} className="mr-2" /> Home
        </Link>
        <Link
          href="/about"
          className="text-gray-600 dark:text-gray-300 text-xl hover:underline duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white flex items-center py-2"
        >
          <FaInfoCircle size={20} className="mr-2" /> About
        </Link>
        <Link
          href="/projects"
          className="text-gray-600 dark:text-gray-300 text-xl hover:underline duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white flex items-center py-2"
        >
          <FaTools size={20} className="mr-2" /> Projects
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 dark:text-gray-300 text-xl hover:underline duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white flex items-center py-2"
        >
          <FaEnvelope size={20} className="mr-2" /> Contact
        </Link>
        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
