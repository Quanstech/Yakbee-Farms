'use client'

import { useState } from 'react'
import AnimalCard from './AnimalCard'

export default function AnimalSections() {
  const animals = [
    {
      name: 'Cattle',
      icon: '🐄',
      folder: 'cattle',
      description: 'Quality cattle for dairy and meat production',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Dairy Cows',
      icon: '🥛',
      folder: 'dairy-cows',
      description: 'Premium dairy cows for milk production',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Goats',
      icon: '🐐',
      folder: 'goats',
      description: 'Healthy and productive goat herd',
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Sheep',
      icon: '🐑',
      folder: 'sheep',
      description: 'Quality sheep for wool and meat',
      color: 'from-yellow-400 to-yellow-500',
    },
    {
      name: 'Chickens',
      icon: '🐔',
      folder: 'chickens',
      description: 'Healthy chickens for eggs and meat',
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Ducks',
      icon: '🦆',
      folder: 'ducks',
      description: 'Farm ducks for eggs and meat',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      name: 'Camels',
      icon: '🐪',
      folder: 'camels',
      description: 'Strong and resilient camels',
      color: 'from-amber-600 to-amber-700',
    },
    {
      name: 'Other Livestock',
      icon: '🐾',
      folder: 'other',
      description: 'Various other farm animals and livestock',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-farm-green mb-12">
          Our Livestock
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.name} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  )
}
