'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaTiktok, FaLinkedin, FaShareAlt } from 'react-icons/fa'

const FloatingSocial: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/luca-luscombe-83a6ab233',
      color: 'hover:bg-blue-600',
      label: 'LinkedIn'
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
              suppressHydrationWarning
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
                social.label === 'Instagram' ? 'bg-pink-500 hover:bg-pink-600' : 
                social.label === 'TikTok' ? 'bg-black hover:bg-gray-800' : 
                'bg-blue-600 hover:bg-blue-700'
              } group`}
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

      {/* Mobile - Left Sidebar with Toggle */}
      <div className="lg:hidden">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-[#0066ff] rounded-full shadow-lg flex items-center justify-center text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <FaShareAlt className="text-xl" />
        </motion.button>

        {/* Social Links Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-r-2xl shadow-xl p-4">
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      suppressHydrationWarning
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        social.label === 'Instagram' ? 'bg-pink-500 text-white' : 
                        social.label === 'TikTok' ? 'bg-black text-white' : 
                        'bg-blue-600 text-white'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}

export default FloatingSocial
