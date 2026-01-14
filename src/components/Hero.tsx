'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { FaArrowDown, FaPlay, FaInstagram, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

const Hero: React.FC = () => {
  const { t } = useLanguage()

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#090c45] via-[#0a0e52] to-[#0d1159] overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#0066ff] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0066ff] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('tagline')}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.p
              className="text-lg text-white/80 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t('heroDescription')}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('ctaStart')}
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#090c45] transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="text-sm" />
                {t('watchVideo')}
              </motion.button>
            </motion.div>
            
            {/* Social Media Follow */}
            <motion.div
              className="flex items-center gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="text-white/80">{t('followMe', 'Volg mij')}:</span>
              <motion.a
                href="https://instagram.com/luca.luscombe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram size={28} />
              </motion.a>
              <motion.a
                href="https://tiktok.com/@luca.luscombe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTiktok size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/luca-profile-picture/PHOTO-2026-01-14-15-44-01.jpg"
                alt="Luca - Luscombe Lifestyle"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c45]/50 to-transparent"></div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white text-[#090c45] px-4 py-2 rounded-lg shadow-lg font-semibold"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              10+ Jaar Ervaring
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-[#0066ff] text-white px-4 py-2 rounded-lg shadow-lg font-semibold"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              Fysiotherapeut in opleiding
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaArrowDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
