'use client'

import { useState } from 'react'
import { LayoutGrid, Menu, X } from 'lucide-react'

interface NavSelectorProps {
     navStyle: '' | 'glass' | 'bottom' | 'sidebar'
     setNavStyle: (val: '' | 'glass' | 'bottom' | 'sidebar') => void
     showDropdown: boolean
}

const options = [
     { value: '', label: 'Default' },
     { value: 'glass', label: 'GlassGlow' },
     { value: 'bottom', label: 'Bottom' },
     { value: 'sidebar', label: 'Sidebar' },
]

export function NavSelector({ navStyle, setNavStyle, showDropdown }: NavSelectorProps) {
     const [open, setOpen] = useState(false)

     return (
          <div
               className={`fixed top-3 right-5 z-50 flex flex-col gap-3 items-center 
                    justify-center transition-all duration-500 ease-in-out
                    ${!showDropdown ? 'opacity-0 pointer-events-none' : 'opacity-100'} text-dark`}
               >
               {/* Icon trigger */}
               <div
                    onClick={() => setOpen(!open)}
                    className="p-2 rounded-full bg-dark text-dark-800 dark:text-gray-200 
                    hover:bg-dark-200 light:hover:bg-gray-700 cursor-pointer transition-all"
               >
                    {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
               </div>

               {/* Dropdown style options */}
               {open && (
                    <div className="flex flex-col gap-2 mt-4">
                         {options.map((opt) => (
                              <div
                                   key={opt.value}
                                   onClick={() => setNavStyle(opt.value as '' | 'glass' | 'bottom' | 'sidebar')}
                                   className={`text-sm px-4 py-2 rounded-full cursor-pointer bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${navStyle === opt.value ? 'bg-primary text-white' : 'text-gray-700 dark:text-gray-300'
                                        }`}
                              >
                                   {opt.label}
                              </div>
                         ))}
                    </div>
               )}
          </div>
     )
}
