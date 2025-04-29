'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUp, Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react'

interface NavbarProps {
     theme: 'dark' | 'light'
     toggleTheme: () => void
}

export const GlassGlowNavbar = ({ theme, toggleTheme }: NavbarProps) => {
     const [hasScrolled, setHasScrolled] = useState(false)
     const [showScrollTop, setShowScrollTop] = useState(false)

     useEffect(() => {
          const onScroll = () => {
               const y = window.scrollY
               setHasScrolled(y > 50)
               setShowScrollTop(y > 300)
          }
          window.addEventListener('scroll', onScroll)
          return () => window.removeEventListener('scroll', onScroll)
     }, [])

     return (
          <>
               <nav className={`top-0 left-2 lg:left-0 z-20 px-6 py-4 
                    bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg 
                    border-b border-white/10 dark:border-gray-700 
                    shadow-md transition-all duration-500 
                    ${hasScrolled ? 'backdrop-blur-md' : 'backdrop-blur-lg'}`}>


                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                         {/* Branding */}
                         <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                              StillMatt
                         </div>

                         {/* Menu */}
                         <div className="flex gap-6 items-center">
                              {[
                                   { href: '/', label: 'Home', icon: <Home size={18} /> },
                                   { href: '/#about', label: 'About', icon: <User size={18} /> },
                                   { href: '/#portfolio', label: 'Portfolio', icon: <Briefcase size={18} /> },
                                   { href: '/#contact', label: 'Contact', icon: <Mail size={18} /> },
                              ].map(({ href, label, icon }) => (
                                   <Link key={href} href={href} className="group relative flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-all">
                                        {icon}
                                        <span>{label}</span>
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                                   </Link>
                              ))}

                              {/* Theme toggle */}
                              <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow hover:scale-105 transition" aria-label="Toggle Theme">
                                   {theme === 'light' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-400" />}
                              </button>
                         </div>
                    </div>
               </nav>

               {showScrollTop && (
                    <button
                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                         className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition"
                    >
                         <ArrowUp className="w-5 h-5 text-gray-800 dark:text-white" />
                    </button>
               )}
          </>
     )
}
