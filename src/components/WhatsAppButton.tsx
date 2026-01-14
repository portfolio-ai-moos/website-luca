'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage()

  const handleClick = () => {
    const message = t('whatsappMessage')
    const phoneNumber = '31614629217'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 bg-[#25d366] text-white p-4 rounded-full shadow-2xl hover:bg-[#22c65f] transition-all duration-300 lg:bottom-8 lg:right-8 sm:bottom-32"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <FaWhatsapp size={28} />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
        {t('whatsappUs', 'WhatsApp ons')}
      </span>
    </motion.button>
  )
}

export default WhatsAppButton
