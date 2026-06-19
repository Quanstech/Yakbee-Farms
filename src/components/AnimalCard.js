'use client'

import { useState } from 'react'
import AnimalModal from './AnimalModal'

export default function AnimalCard({ animal }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`bg-gradient-to-br ${animal.color} rounded-lg shadow-lg p-6 text-white cursor-pointer transform hover:scale-105 transition duration-300`}
        onClick={() => setIsOpen(true)}
      >
        <div className="text-5xl mb-4">{animal.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
        <p className="text-sm opacity-90">{animal.description}</p>
        <button className="mt-4 bg-white text-farm-green font-bold py-2 px-4 rounded hover:bg-gray-100 transition">
          View Gallery
        </button>
      </div>

      {isOpen && (
        <AnimalModal
          animal={animal}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
