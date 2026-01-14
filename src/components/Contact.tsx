'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaShareAlt, FaFacebook, FaInstagram, FaLinkedin, FaCheck } from 'react-icons/fa'

const Contact: React.FC = () => {
  const { t, language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = language === 'nl' 
    ? 'Bekijk Luscombe Lifestyle - Transformeer je lichaam én je leven'
    : 'Check out Luscombe Lifestyle - Transform your body and your life'

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
    }
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#090c45] mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contactSubtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0066ff] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066ff] transition-colors"
                  placeholder={t('namePlaceholder', 'Jouw naam')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066ff] transition-colors"
                  placeholder={t('emailPlaceholder', 'jouw@email.com')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066ff] transition-colors"
                  placeholder={t('phonePlaceholder', '+31 6 12345678')}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066ff] transition-colors resize-none"
                  placeholder={t('messagePlaceholder', 'Vertel me over je doelen...')}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <FaCheck className="mr-2" />
                    {t('sent', 'Verstuurd!')}
                  </span>
                ) : (
                  t('send')
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#090c45] mb-6">
                {t('contactInfo', 'Contactinformatie')}
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+31614629217"
                  className="flex items-center text-gray-700 hover:text-[#0066ff] transition-colors"
                >
                  <FaPhone className="mr-4 text-[#0066ff]" />
                  <span>+31 6 146 292 17</span>
                </a>
                
                <a
                  href="mailto:luscombe.training@gmail.com"
                  className="flex items-center text-gray-700 hover:text-[#0066ff] transition-colors"
                >
                  <FaEnvelope className="mr-4 text-[#0066ff]" />
                  <span>luscombe.training@gmail.com</span>
                </a>
                
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-4 text-[#0066ff]" />
                  <span>First Class Sports Papendrecht</span>
                </div>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#090c45] mb-6">
                {t('shareTitle', 'Deel deze pagina')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center justify-center px-4 py-3 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook className="mr-2" />
                  Facebook
                </motion.button>
                
                <motion.button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center justify-center px-4 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#00669d] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </motion.button>
                
                <motion.button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center justify-center px-4 py-3 bg-[#1da1f2] text-white rounded-lg hover:bg-[#1a91da] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShareAlt className="mr-2" />
                  Twitter
                </motion.button>
                
                <motion.button
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center justify-center px-4 py-3 bg-[#25d366] text-white rounded-lg hover:bg-[#22c65f] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShareAlt className="mr-2" />
                  WhatsApp
                </motion.button>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t('quickFacts', 'Snelle Feiten')}
              </h3>
              <ul className="space-y-2">
                <li>✓ {t('fact1', '10+ jaar ervaring in fitness')}</li>
                <li>✓ {t('fact2', 'Gecertificeerd personal trainer')}</li>
                <li>✓ {t('fact3', 'Student fysiotherapie')}</li>
                <li>✓ {t('fact4', '100+ tevreden klanten')}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
