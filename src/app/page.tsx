'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Navbar } from './components/layout/Navbar'
import { GlassGlowNavbar } from './components/layout/GlassGlowNavbar'
import { BottomAppNav } from './components/layout/BottomAppNav'
import { SidebarNav } from './components/layout/SidebarNav'
import { NavSelector } from './components/layout/NavSelector'

import { HeroSection } from './components/sections/Hero'
import { AboutSection } from './components/sections/AboutSection'
import { Works } from './components/sections/Works'
import { PortfolioGrid } from './components/sections/PortfolioGrid'
import { ContactForm } from './components/sections/ContactForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [navStyle, setNavStyle] = useState<'glass' | 'bottom' | 'sidebar' | ''>('')

  const [showDropdown, setShowDropdown] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Init + restore theme & navStyle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    const savedNav = localStorage.getItem('navStyle') as 'glass' | 'bottom' | 'sidebar' | ''

    if (savedTheme) setTheme(savedTheme)
    if (savedNav) setNavStyle(savedNav)

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowDropdown(false)
      } else {
        setShowDropdown(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Persist navStyle ke localStorage
  useEffect(() => {
    localStorage.setItem('navStyle', navStyle)
  }, [navStyle])

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
        {navStyle === '' && <Navbar theme={theme} toggleTheme={toggleTheme} />}
        {navStyle !== '' && renderCustomNavbar()}
      </header>

      <main className={`transition-all duration-300 pt-0 ${navStyle === 'sidebar' ? 'ml-20 hover:ml-64' : ''}`}>
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

        {/* Stylish Nav Selector */}
        <NavSelector
          navStyle={navStyle}
          setNavStyle={setNavStyle}
          showDropdown={showDropdown}
        />
      </main>

      <footer className="relative mt-20 px-6 py-10 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-inner rounded-t-3xl">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-10 text-center text-sm text-gray-700 dark:text-gray-300">

          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">My Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400">Showcasing creativity, code, and passion.</p>
          </div>

          <div className="md:w-1/3">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Links</h4>
            <ul className="flex justify-center gap-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#works" className="hover:underline">Works</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Connect</h4>
            <div className="flex justify-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-blue-500 transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-gray-800 dark:hover:text-white transition">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-blue-700 transition">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-300/40 dark:border-gray-600/30 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          © 2025 My Portfolio. Built with passion & React.
        </div>
      </footer>



    </div>
  )
}
