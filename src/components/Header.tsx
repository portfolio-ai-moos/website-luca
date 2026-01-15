'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { FaGlobe, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#090c45] shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/images/logo.png"
              alt="Luscombe Lifestyle Logo"
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-[#0066ff] transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 text-white hover:text-[#0066ff] transition-colors duration-200"
              >
                <FaGlobe />
                <span className="font-medium">{language === 'nl' ? 'NL' : 'EN'}</span>
                <FaChevronDown className={`transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <button
                    onClick={() => {
                      setLanguage('nl')
                      setIsLangDropdownOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-left hover:bg-[#f0f0f0] transition-colors ${language === 'nl' ? 'bg-[#0066ff] text-white' : 'text-[#090c45]'}`}
                  >
                    NL
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setIsLangDropdownOpen(false)
                    }}
                    className={`block w-full px-4 py-2 text-left hover:bg-[#f0f0f0] transition-colors ${language === 'en' ? 'bg-[#0066ff] text-white' : 'text-[#090c45]'}`}
                  >
                    EN
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 bg-[#090c45] rounded-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-2 text-white hover:text-[#0066ff] transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex space-x-4 mt-4 pt-4 border-t border-white/20">
              <button
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1 rounded ${language === 'nl' ? 'bg-[#0066ff] text-white' : 'text-white'}`}
              >
                NL
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded ${language === 'en' ? 'bg-[#0066ff] text-white' : 'text-white'}`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
