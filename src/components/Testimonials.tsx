'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const Testimonials: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Robin',
      text: {
        nl: 'Luca zit er erg kort op en is niet bang om je de waarheid te vertellen. Dit werkt voor mij erg goed, omdat ik soms de harde waarheid nodig heb om de volgende stappen te kunnen zetten in mijn proces.',
        en: "Luca is very direct and isn't afraid to tell you the truth. This works very well for me, because sometimes I need the harsh truth to take the next steps in my process."
      },
      rating: 5
    },
    {
      name: 'Cerezo',
      text: {
        nl: 'De coaching met Luca heb ik als erg professioneel ervaren, hij heeft kennis en passie voor wat hij doet en dit droeg hij ook over aan mij. Ik ben mede-dankzij Luca in me beste shape ooit gekomen.',
        en: 'I experienced the coaching with Luca as very professional, he has knowledge and passion for what he does and he also passed this on to me. Thanks to Luca, I got in the best shape of my life.'
      },
      rating: 5
    },
    {
      name: 'Simone',
      text: {
        nl: 'Luca neemt de tijd, geeft heldere uitleg en motiveert je op een fijne manier. Als vrouw voel ik me volledig op mijn gemak bij hem. Ik kan hem zeker aanraden aan andere vrouwen die goed en prettig willen trainen!',
        en: 'Luca takes his time, gives clear explanations and motivates you in a pleasant way. As a woman, I feel completely at ease with him. I can definitely recommend him to other women who want to train well and pleasantly!'
      },
      rating: 5
    },
    {
      name: 'Jesper',
      text: {
        nl: 'Luca is echt een fijne trainer om mee te werken. Wekelijkse check-ins en elke dag WhatsApp contact, waarin door middel van video\'s van mijzelf naar mijn vorm wordt gekeken. Echt een aanrader voor iedereen die serieus aan de slag wil met zijn doelen!',
        en: 'Luca is really a great trainer to work with. Weekly check-ins and daily WhatsApp contact, in which videos of myself are viewed for my form. Highly recommended for anyone who wants to get serious about their goals!'
      },
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-[#090c45]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-4">
            {t('testimonialsSubtitle')}
          </p>
          <div className="w-24 h-1 bg-[#0066ff] mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-start mb-6">
              <FaQuoteLeft className="text-[#0066ff] text-3xl mr-4" />
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  {testimonials[currentIndex].text[t('language') === 'nl' ? 'nl' : 'en']}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-[#090c45] mb-2">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl mr-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white text-[#090c45] w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#0066ff] hover:text-white transition-all duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white text-[#090c45] w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#0066ff] hover:text-white transition-all duration-300"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#0066ff] w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg mr-1" />
                ))}
              </div>
              <p className="text-white/90 text-sm mb-4 line-clamp-3">
                {testimonial.text[t('language') === 'nl' ? 'nl' : 'en']}
              </p>
              <p className="text-white font-semibold">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
