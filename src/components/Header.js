'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const animals = [
    'Cattle',
    'Dairy Cows',
    'Goats',
    'Sheep',
    'Chickens',
    'Ducks',
    'Camels',
    'Other Livestock',
  ]

  return (
    <header className="bg-farm-green text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">🐄 Yakbee Farm</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-farm-accent transition">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-farm-accent transition">Animals</button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-farm-green rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                {animals.map((animal) => (
                  <Link
                    key={animal}
                    href={`/#${animal.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:bg-farm-accent hover:text-white transition first:rounded-t-lg last:rounded-b-lg"
                  >
                    {animal}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/#contact" className="hover:text-farm-accent transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-farm-accent transition">
              Home
            </Link>
            <div className="py-2">
              <p className="text-farm-accent font-semibold mb-2">Animals</p>
              <div className="space-y-1 ml-4">
                {animals.map((animal) => (
                  <Link
                    key={animal}
                    href={`/#${animal.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-1 hover:text-farm-accent transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {animal}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/#contact" className="block py-2 hover:text-farm-accent transition">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
