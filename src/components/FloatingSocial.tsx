'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

const FloatingSocial: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/luca.luscombe',
      color: 'hover:bg-pink-500',
      label: 'Instagram'
    },
    {
      icon: <FaTiktok />,
      href: 'https://tiktok.com/@luca.luscombe',
      color: 'hover:bg-black',
      label: 'TikTok'
    }
  ]

  return (
    <>
      {/* Desktop - Left Side */}
      <motion.div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="flex flex-col gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 transition-all duration-300 ${social.color} text-white group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-xl">{social.icon}</span>
              <span className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile - Bottom */}
      <motion.div
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="flex gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                social.label === 'Instagram' ? 'bg-pink-500 text-white' : 'bg-black text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-lg">{social.icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default FloatingSocial
