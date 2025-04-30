'use client'

import Link from 'next/link'
import { Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react'

interface NavbarProps {
     theme: 'dark' | 'light'
     toggleTheme: () => void
}

export const BottomAppNav = ({ theme, toggleTheme }: NavbarProps) => {
     return (
          <nav className="fixed bottom-0 w-full z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-inner flex justify-around items-center py-3">
               {[
                    { href: '/', icon: <Home size={22} />, label: 'Home' },
                    { href: '/#about', icon: <User size={22} />, label: 'About' },
                    { href: '/#portfolio', icon: <Briefcase size={22} />, label: 'Work' },
                    { href: '/#contact', icon: <Mail size={22} />, label: 'Contact' },
               ].map(({ href, icon, label }) => (
                    <Link key={href} href={href} className="flex flex-col items-center text-xs text-gray-700 dark:text-gray-300 hover:text-primary transition">
                         {icon}
                         <span>{label}</span>
                    </Link>
               ))}
               {/* Theme toggle */}
               <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow hover:scale-105 transition" aria-label="Toggle Theme">
                    {theme === 'light' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-400" />}
               </button>
          </nav>
     )
}
