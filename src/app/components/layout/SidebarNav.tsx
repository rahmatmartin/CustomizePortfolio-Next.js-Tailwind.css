'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, User, Briefcase, Mail, Sun, Moon, SignalZero } from 'lucide-react'
import { label } from 'framer-motion/client'

interface NavbarProps {
     theme: 'dark' | 'light'
     toggleTheme: () => void
}

export const SidebarNav = ({ theme, toggleTheme }: NavbarProps) => {
     const [isExpanded, setIsExpanded] = useState(false)

     return (
          <aside
               className={`fixed top-0 left-0 h-full z-50 text-white 
               bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-600 
               flex flex-col justify-between py-6 px-4 shadow-xl transition-all duration-300 
               ${isExpanded ? 'w-64' : 'w-20'}`}

               onMouseEnter={() => setIsExpanded(true)}
               onMouseLeave={() => setIsExpanded(false)}
          >
               <div>
                    {/* Logo / Judul */}
                    <div className={`text-2xl font-bold mb-6 ${!isExpanded && 'text-center rotate-90 text-sm'}`}>
                         {isExpanded ? 'StillMatt</>' : 'SM'}
                    </div>
                    <hr className="border-white/30 mb-6" />

                    {/* Menu Items */}
                    <div className="flex flex-col">
                         {[
                              { href: '/', icon: <Home size={20} />, label: 'Home' },
                              { href: '/#about', icon: <User size={20} />, label: 'About' },
                              { href: '/#portfolio', icon: <Briefcase size={20} />, label: 'Portfolio' },
                              { href: '/#contact', icon: <Mail size={20} />, label: 'Contact' }
                         ].map(({ href, icon, label }) => (
                              <div key={href} className="border-b border-white/20 last:border-none">
                                   <Link
                                        href={href}
                                        className="flex items-center gap-3 px-4 py-4 hover:bg-white/10 transition"
                                   >
                                        {icon}
                                        {isExpanded && <span className="text-lg">{label}</span>}
                                   </Link>
                              </div>
                         ))}
                    </div>
               </div>

               {/* Theme Toggle Button */}
               <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition"
                    aria-label="Toggle Theme"
               >
                    {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
                    {isExpanded && <span className="text-sm">Settings</span>}
               </button>
          </aside>
     )
}
