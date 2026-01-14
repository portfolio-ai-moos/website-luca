'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTiktok } from 'react-icons/fa'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com/luca.luscombe', label: 'Instagram' },
    { icon: <FaTiktok />, href: 'https://tiktok.com/@luca.luscombe', label: 'TikTok' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/31614629217', label: 'WhatsApp' }
  ]

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#090c45] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">LUSCOMBE LIFESTYLE</h3>
            <p className="text-white/80 mb-4">
              {t('footerDesc', 'Transformeer je lichaam én je leven met professionele coaching en personal training.')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks', 'Snelle links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-[#0066ff] transition-colors duration-300"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('contactInfo', 'Contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white/60">
                <FaPhone className="mr-3 text-[#0066ff]" />
                <a href="tel:+31614629217" className="hover:text-white transition-colors">
                  +31 6 146 292 17
                </a>
              </li>
              <li className="flex items-center text-white/60">
                <FaEnvelope className="mr-3 text-[#0066ff]" />
                <a href="mailto:luscombe.training@gmail.com" className="hover:text-white transition-colors">
                  luscombe.training@gmail.com
                </a>
              </li>
              <li className="flex items-center text-white/60">
                <FaMapMarkerAlt className="mr-3 text-[#0066ff]" />
                <span>First Class Sports Papendrecht</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('newsletter', 'Nieuwsbrief')}</h4>
            <p className="text-white/60 mb-4">
              {t('newsletterDesc', 'Blijf op de hoogte van tips en updates')}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('emailPlaceholder', 'Jouw e-mail')}
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-[#0066ff] text-white placeholder-white/60"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#0066ff] text-white rounded-r-lg hover:bg-[#0052cc] transition-colors"
              >
                {t('subscribe', 'Aanmelden')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Luscombe Lifestyle. {t('rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#0066ff] transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="text-white/60 hover:text-[#0066ff] transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
