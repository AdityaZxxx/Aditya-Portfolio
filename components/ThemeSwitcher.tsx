'use client'

import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Cek tema yang disimpan di localStorage
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-600 dark:text-gray-300 text-xl hover:underline duration-500 hover:scale-110 hover:text-gray-900 dark:hover:text-white flex items-center py-2"
    >
      {theme === 'light' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  )
}
