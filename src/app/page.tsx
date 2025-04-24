'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/Hero'
import { AboutSection } from './components/sections/AboutSection'
import { Parallax } from './components/sections/Works'
import { PortfolioGrid } from './components/sections/PortfolioGrid'
import { ContactForm } from './components/sections/ContactForm'


export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'
    if (savedTheme) setTheme(savedTheme)

    // Init AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </header>

      <main>
        <section data-aos="fade-up">
          <HeroSection />
        </section>
        <section data-aos="fade-left">
          <AboutSection />
        </section>
        <section data-aos="fade-left">
          <Parallax />
        </section>
        <section data-aos="zoom-in-up">
          <PortfolioGrid />
        </section>
        <section data-aos="fade-up">
          <ContactForm />
        </section>
      </main>

      <footer className="p-4 bg-gray-200 dark:bg-gray-800">
        <p className="text-center">© 2025 My Portfolio</p>
      </footer>
    </div>
  )
}
