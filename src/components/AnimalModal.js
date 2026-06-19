'use client'

import { useState, useEffect } from 'react'

export default function AnimalModal({ animal, isOpen, onClose }) {
  const [mediaFiles, setMediaFiles] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMedia = async () => {
      try {
        setLoading(true)
        // Images will be automatically loaded from public/animals/{folder}
        // when you upload them via GitHub
        setMediaFiles([])
      } catch (error) {
        console.log(`Loading media for ${animal.folder}`)
      } finally {
        setLoading(false)
      }
    }

    if (isOpen) {
      loadMedia()
    }
  }, [isOpen, animal.folder])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-farm-green text-white p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{animal.name} Gallery</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-farm-accent transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              📸 Gallery for {animal.name}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Upload your photos to: <code className="bg-gray-100 px-2 py-1 rounded">/public/animals/{animal.folder}/</code>
            </p>
            <p className="text-gray-400 text-xs">
              Supported formats: JPG, PNG, GIF, WebP, MP4
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
