'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTimes, FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'

const About: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [selectedTransformation, setSelectedTransformation] = useState<number | null>(null)

  const credentials = [
    {
      icon: '💪',
      title: 'Al meer dan 10 jaar actief in de sportschool, waarvan de laatste 2,5 jaar serieus bezig met bodybuilding en het optimaliseren van prestaties.',
      description: 'Actief in de sportschool met focus op bodybuilding en prestatieoptimalisatie'
    },
    {
      icon: '🎓',
      title: 'Student fysiotherapie, werkzaam als personal trainer, sportmasseur en verzorger bij Excelsior Vrouwen.',
      description: 'Wetenschappelijke kennis van het menselijk lichaam'
    },
    {
      icon: '⚽',
      title: 'Momenteel stage bij Fysiotherapie van Feyenoord Academy.',
      description: 'Stage bij de fysiotherapie van Feyenoord Academy'
    },
    {
      icon: '📜',
      title: 'Gecertificeerd Trainer',
      description: 'Meerdere certificaten op het gebied van training en coaching'
    }
  ]

  const transformations = [
    {
      id: 1,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59.jpg',
      title: 'Robin\'s Transformatie',
      story: 'Robin, 32 jaar, wilde werken aan zijn kracht en spieropbouw. Met een gericht trainingsschema en voedingsadvies heeft hij indrukwekkende resultaten behaald. "Luca zit er erg kort op en is niet bang om je de waarheid te vertellen. Dit werkt voor mij erg goed, omdat ik soms de harde waarheid nodig heb om de volgende stappen te kunnen zetten in mijn proces."',
      results: '• +8kg spiermassa\n• Vetpercentage gereduceerd\n• Aanzienlijke krachttoename\n• Betere discipline en mindset'
    },
    {
      id: 2,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59_5.jpg',
      title: 'Cerezo\'s Transformatie',
      story: 'Cerezo, 29 jaar, wilde zijn doelen bereiken en zijn lichaam transformeren. Met intensieve training en persoonlijke begeleiding heeft hij fantastische resultaten geboekt. "De coaching met Luca heb ik als erg professioneel ervaren, hij heeft kennis en passie voor wat hij doet en dit droeg hij ook over aan mij. Ik ben mede-dankzij Luca in me beste shape ooit gekomen."',
      results: '• 15kg lichaamsgewicht verloren\n• Strakke en gespierde physique\n• Extreme krachttoename\n• Professionele mindset'
    },
    {
      id: 3,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59_2.jpg',
      title: 'Simone\'s Transformatie',
      story: 'Simone, 26 jaar, wilde als vrouw sterker en fitter worden. Ze zocht een coach waar ze zich volledig op haar gemak bij voelde. "Luca neemt de tijd, geeft heldere uitleg en motiveert je op een fijne manier. Als vrouw voel ik me volledig op mijn gemak bij hem. Ik kan hem zeker aanraden aan andere vrouwen die goed en prettig willen trainen!"',
      results: '• 7kg vetverlies\n• +4kg spiermassa\n• Feminijn en gespierd lichaam\n• Meer zelfvertrouwen'
    },
    {
      id: 4,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59_3.jpg',
      title: 'Patrick\'s Transformatie',
      story: 'Patrick, 38 jaar, wilde terug in shape komen na een periode van weinig beweging. Met een stapsgewijs plan heeft hij zijn doelen overtroffen. "De persoonlijke aanpak van Luca heeft mij geholpen om consistent te blijven. Ik voel me nu fitter dan 10 jaar geleden en heb veel geleerd over correcte uitvoering."',
      results: '• 18kg afgevallen\n• Aanzienlijke spieropbouw\n• Betere gezondheidswaarden\n• Duurzame levensstijlverandering'
    },
    {
      id: 5,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59_4.jpg',
      title: 'Fleur\'s Transformatie',
      story: 'Fleur, 30 jaar, wilde werken aan haar conditie en kracht. Met een gebalanceerd programma heeft ze indrukwekkende resultaten behaald. "Luca\'s expertise als fysiotherapeut in opleiding gaf mij het vertrouwen om te trainen zonder blessures. Ik ben sterker dan ooit en voel me geweldig!"',
      results: '• 10kg vetverlies\n• +6kg spiermassa\n• Uitstekende conditie\n• Blessurevrij en energiek'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#090c45] mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-[#0066ff] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 text-lg leading-relaxed text-gray-700 max-w-3xl"
          >
            <p>
              Ik ben Luca (24), online fitness & lifestyle coach met focus op krachttraining en duurzame progressie.
            </p>
            <p>
              Met ruim 10 jaar trainingservaring en een achtergrond in bodybuilding help ik mensen slimmer trainen en beter herstellen.
            </p>
            <p>
              Daarnaast studeer ik fysiotherapie, werk ik als personal trainer en loop ik stage bij de Feyenoord Academy.
            </p>
            <p className="italic text-[#090c45]">
              "Alles wat ik doe komt samen in mijn coaching: een combinatie van praktijkervaring, kennis van het menselijk lichaam en persoonlijke begeleiding, zodat jij slimmer traint, beter herstelt en duurzaam resultaat behaalt."
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl mb-4">{cred.icon}</div>
                  <h3 className="text-sm font-semibold text-[#090c45] mb-2">
                    {cred.title}
                  </h3>
                  <p className="text-gray-600 text-xs">
                    {cred.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Transformations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#090c45] mb-8 text-center">
            Transformaties
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedTransformation(transformation.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={transformation.image}
                    alt={transformation.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">
                        {transformation.title}
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        Klik om te lezen
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal for Transformation Story */}
        <AnimatePresence>
          {selectedTransformation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedTransformation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {transformations.find(t => t.id === selectedTransformation) && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[600px] rounded-l-2xl overflow-hidden">
                      <Image
                        src={transformations.find(t => t.id === selectedTransformation)!.image}
                        alt={transformations.find(t => t.id === selectedTransformation)!.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-bold text-[#090c45]">
                          {transformations.find(t => t.id === selectedTransformation)!.title}
                        </h3>
                        <button
                          onClick={() => setSelectedTransformation(null)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <FaTimes size={24} />
                        </button>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-semibold text-[#090c45] mb-3 flex items-center gap-2">
                            <FaQuoteLeft className="text-[#0066ff]" />
                            Het Verhaal
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {transformations.find(t => t.id === selectedTransformation)!.story}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-[#090c45] mb-3">
                            Behaalde Resultaten
                          </h4>
                          <p className="text-gray-700 whitespace-pre-line font-medium">
                            {transformations.find(t => t.id === selectedTransformation)!.results}
                          </p>
                        </div>
                        
                        <motion.button
                          onClick={() => {
                            setSelectedTransformation(null)
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="w-full px-8 py-4 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Start Jouw Transformatie
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default About
