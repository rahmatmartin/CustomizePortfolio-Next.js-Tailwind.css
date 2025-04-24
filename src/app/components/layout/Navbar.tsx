'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

interface NavbarProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isHidden, setIsHidden] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 80)
      setShowScrollTop(currentScrollY > 300)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-2 
        bg-white text-gray-900 
        dark:bg-gray-900 dark:text-white 
        border border-gray-200 
        rounded-2xl shadow-xl 
        transition-all duration-500 
        ${isHidden ? '-translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}
        onMouseEnter={() => setIsHidden(false)}
      >

        <div className="flex items-center justify-between gap-8">
          <div className="text-xl font-bold tracking-tight text-dark-900 dark:text-white">
            Still<span className="text-primary">Matt</span>
          </div>
          <div className="flex gap-4 items-center">
            {[
              { href: '/', label: 'Home' },
              { href: '/#about', label: 'About' },
              { href: '/#portfolio', label: 'Portfolio' },
              { href: '/#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-sm font-medium text-dark-800 dark:text-white hover:text-primary transition-all after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2v2m0 12v2m-9-9h2m12 0h2M4.22 4.22l1.42 1.42m12.72 0l1.42 1.42M4.22 19.78l1.42-1.42m12.72 0l1.42-1.42M12 6a6 6 0 100 12 6 6 0 000-12z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v3m0 12v3m-9-9h3m12 0h3M4.22 4.22l2.12 2.12m12.72 0l2.12 2.12M4.22 19.78l2.12-2.12m12.72 0l2.12-2.12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-300 dark:bg-gray-700 shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-800 dark:text-white" />
        </button>
        
      )}
    </>
  )
}
