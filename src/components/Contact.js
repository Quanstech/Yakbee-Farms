'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const contactInfo = {
    phone: '0542831214',
    email: 'Hamzamarco101@gmail.com',
    location: 'Dansoman Tunga',
    facebook: 'https://facebook.com/Yakbee-Farms',
    instagram: 'https://instagram.com/Yakbee-Farms',
    tiktok: 'https://tiktok.com/@yakbeefarms',
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${contactInfo.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16 px-4 bg-farm-green text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="flex items-start space-x-4">
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-farm-accent font-semibold">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg hover:text-farm-accent transition"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-3xl">📧</span>
              <div>
                <p className="text-farm-accent font-semibold">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg hover:text-farm-accent transition"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-3xl">📍</span>
              <div>
                <p className="text-farm-accent font-semibold">Location</p>
                <p className="text-lg">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="space-y-4">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition"
              >
                <span className="text-2xl">f</span>
                <span className="text-lg font-semibold">Facebook - Yakbee Farms</span>
              </a>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition"
              >
                <span className="text-2xl">📷</span>
                <span className="text-lg font-semibold">Instagram - Yakbee Farms</span>
              </a>

              <a
                href={contactInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition"
              >
                <span className="text-2xl">🎵</span>
                <span className="text-lg font-semibold">TikTok - @yakbeefarms</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="bg-white bg-opacity-10 rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white text-farm-green placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-farm-accent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white text-farm-green placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-farm-accent"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white text-farm-green placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-farm-accent"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-farm-accent hover:bg-yellow-600 text-farm-green font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
