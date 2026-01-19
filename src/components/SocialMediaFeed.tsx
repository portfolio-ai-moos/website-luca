'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaTiktok, FaExternalLinkAlt, FaHeart, FaComment, FaPlay } from 'react-icons/fa'

// Mock data for demonstration - replace with actual API calls
const mockInstagramPosts = [
  {
    id: 1,
    imageUrl: '/images/progression-images/PHOTO-2026-01-14-15-42-59.jpg',
    caption: 'Morning workout complete! 💪 Who else trained today?',
    likes: 245,
    comments: 32,
    url: 'https://instagram.com/p/example1'
  },
  {
    id: 2,
    imageUrl: '/images/progression-images/PHOTO-2026-01-14-15-42-59 5.jpg',
    caption: 'Client transformation alert! 🚀 3 months of hard work paying off',
    likes: 189,
    comments: 28,
    url: 'https://instagram.com/p/example2'
  },
  {
    id: 3,
    imageUrl: '/images/progression-images/PHOTO-2026-01-14-15-42-59 3.jpg',
    caption: 'Nutrition tip: Protein is king! 🥩 Here\'s why...',
    likes: 156,
    comments: 19,
    url: 'https://instagram.com/p/example3'
  },
  {
    id: 4,
    imageUrl: '/images/progression-images/PHOTO-2026-01-14-15-42-59 4.jpg',
    caption: 'Form over everything! Proper technique prevents injuries',
    likes: 203,
    comments: 24,
    url: 'https://instagram.com/p/example4'
  },
  {
    id: 5,
    imageUrl: '/images/progression-images/PHOTO-2026-01-14-15-42-59 5.jpg',
    caption: 'Sunday prep = successful week 📋 Meal prep done!',
    likes: 167,
    comments: 21,
    url: 'https://instagram.com/p/example5'
  },
  {
    id: 6,
    imageUrl: '/images/luca-profile-picture/PHOTO-2026-01-14-15-44-01.jpg',
    caption: 'New client spots available! DM me for details 🔥',
    likes: 298,
    comments: 45,
    url: 'https://instagram.com/p/example6'
  }
]

const SocialMediaFeed: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [activeTab, setActiveTab] = useState<'instagram' | 'tiktok'>('instagram')

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#090c45] mb-4">
            {t('followOnSocial', 'Volg mij op Social Media')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('socialDesc', 'Dagelijkse tips, workouts en inspiratie voor jouw fitnessreis')}
          </p>
          <div className="w-24 h-1 bg-[#0066ff] mx-auto mt-4"></div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setActiveTab('instagram')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-[#090c45]'
              }`}
            >
              <FaInstagram className="text-xl" />
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'tiktok'
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-[#090c45]'
              }`}
            >
              <FaPlay className="text-lg" />
              TikTok
            </button>
          </div>
        </motion.div>

        {/* Instagram Feed */}
        {activeTab === 'instagram' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mockInstagramPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                onClick={() => window.open(post.url, '_blank')}
              >
                <div className="relative aspect-square">
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm line-clamp-2 mb-2">{post.caption}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center gap-1">
                            <FaHeart className="text-sm" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaComment className="text-sm" />
                            {post.comments}
                          </span>
                        </div>
                        <FaExternalLinkAlt className="text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* TikTok Feed */}
        {activeTab === 'tiktok' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="bg-black rounded-xl aspect-[9/16] relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + item * 0.1, duration: 0.5 }}
                onClick={() => window.open('https://tiktok.com/@luca.luscombe', '_blank')}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlay className="text-white text-4xl opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold">
                    {t('tikTokVideo', 'Workout Tip')} #{item}
                  </p>
                  <p className="text-white/80 text-sm">
                    {item * 12}.3K views
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('followForMore', 'Volg voor dagelijkse content!')}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('followPromise', 'Krijg elke dag gratis tips, workouts en motivatie')}
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://instagram.com/luca.luscombe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
                @luca.luscombe
              </motion.a>
              <motion.a
                href="https://tiktok.com/@luca.luscombe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay />
                @luca.luscombe
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialMediaFeed
