'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Navbar } from './components/layout/Navbar'
import { GlassGlowNavbar } from './components/layout/GlassGlowNavbar'
import { BottomAppNav } from './components/layout/BottomAppNav'
import { SidebarNav } from './components/layout/SidebarNav'

import { HeroSection } from './components/sections/Hero'
import { AboutSection } from './components/sections/AboutSection'
import { Works } from './components/sections/Works'
import { PortfolioGrid } from './components/sections/PortfolioGrid'
import { ContactForm } from './components/sections/ContactForm'

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [navStyle, setNavStyle] = useState<'glass' | 'bottom' | 'sidebar' | ''>('')

  const [showDropdown, setShowDropdown] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    if (savedTheme) setTheme(savedTheme)

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })

    // Event listener untuk mendeteksi scroll
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Jika scroll ke bawah
        setShowDropdown(false)
      } else {
        // Jika scroll ke atas
        setShowDropdown(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const renderCustomNavbar = () => {
    switch (navStyle) {
      case 'glass':
        return <GlassGlowNavbar theme={theme} toggleTheme={toggleTheme} />
      case 'bottom':
        return <BottomAppNav theme={theme} toggleTheme={toggleTheme} />
      case 'sidebar':
        return <SidebarNav theme={theme} toggleTheme={toggleTheme} />
      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>

      <header>
        {/* Show Default Navbar if no custom nav is selected */}
        {navStyle === '' && <Navbar theme={theme} toggleTheme={toggleTheme} />}
        {navStyle !== '' && renderCustomNavbar()}
      </header>

      <main
        className={`transition-all duration-300 pt-0 
        ${navStyle === 'sidebar' ? 'ml-20 hover:ml-64' : ''}`}
      >

        <section data-aos="fade-up">
          <HeroSection />
        </section>

        <section
          data-aos="fade-left"
          className="shadow-2xl bg-gradient-to-br from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mt-10"
        >
          <AboutSection />
        </section>

        <section
          data-aos="fade-left"
          className="shadow-2xl bg-gradient-to-tr from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mt-10"
        >
          <Works />
        </section>

        <section
          data-aos="zoom-in-up"
          className="shadow-2xl bg-gradient-to-b from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mt-10"
        >
          <PortfolioGrid />
        </section>

        <section
          data-aos="zoom-in-up"
          className="shadow-2xl bg-gradient-to-b from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mt-10"
        >
          <ContactForm />
        </section>

        {/* Modern Dropdown Selector with Scroll Hide Effect */}
        <div className={`fixed top-0 right-0 -translate-x-1 z-10 px-2 py-1 
        transition-all duration-500 ease-in-out ${!showDropdown ? 'opacity-100 pointer-events-none' : ''}`}>
          <select
            value={navStyle}
            onChange={(e) => setNavStyle(e.target.value as 'glass' | 'bottom' | 'sidebar' | '')}
            className="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700 text-sm rounded-md px-3 py-2 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-200 text-gray-800 dark:text-gray-200"
          >
            <option value="">Default Nav</option>
            <option value="glass">GlassGlow Nav</option>
            <option value="bottom">Bottom Nav</option>
            <option value="sidebar">Sidebar Nav</option>
          </select>
        </div>


      </main>

      <footer className="p-4 mt-10 bg-gray-200 dark:bg-gray-800">
        <p className="text-center">© 2025 My Portfolio</p>
      </footer>
    </div>
  )
}
