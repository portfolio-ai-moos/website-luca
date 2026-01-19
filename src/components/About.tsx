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
      image: '/images/progression-images/Levi-transformation.jpg',
      title: 'Levi\'s Transformatie',
      story: 'Toen ik begon met personal training wist ik eigenlijk niet goed wat ik deed in de sportschool. Ik deed maar wat en twijfelde vaak of het wel effect had. Door de begeleiding heb ik niet alleen zichtbaar resultaat behaald, maar ook écht leren trainen. Ik begrijp nu waarom ik bepaalde oefeningen doe, hoe mijn houding moet zijn en hoe ik mezelf kan blijven uitdagen. Mijn kracht en zelfvertrouwen zijn enorm gegroeid. Ik voel me fitter dan ooit en ga nu met plezier en zekerheid naar de training.',
      results: '• Spiergroei en krachttoename\n• Vetverlies en strakkere physique\n• Betere trainingsdiscipline\n• Duurzame levensstijlverandering'
    },
    {
      id: 2,
      image: '/images/progression-images/Cerezo-transformation.jpg',
      title: 'Cerezo\'s Transformatie',
      story: 'De coaching met Luca heb ik als erg professioneel ervaren, hij heeft kennis en passie voor wat hij doet en dit droeg hij ook over aan mij. Ik ben mede-dankzij Luca in me beste shape ooit gekomen.',
      results: '• Aanzienlijke spieropbouw\n• Vetpercentage verlaagd\n• Extreme krachttoename\n• Professionele mindset'
    },
    {
      id: 3,
      image: '/images/progression-images/Parsa-transformation.jpg',
      title: 'Parsa\'s Transformatie',
      story: 'Ik train nu met een plan en met vertrouwen. Ik weet hoe ik mijn lichaam moet prikkelen, wanneer ik gas moet geven en wanneer ik moet herstellen. Geen twijfel meer, geen willekeur.\n\nDoor de online coaching heb ik consistentie opgebouwd en geleerd wat écht werkt voor mij. Ik voel me fitter, energieker en sterker dan ooit. Dit is geen tijdelijke fase, dit is een levensstijl geworden.',
      results: '• Structuur en consistentie\n• Fysieke transformatie\n• Energieker en sterker\n• Duurzame levensstijl'
    },
    {
      id: 4,
      image: '/images/progression-images/Sadjad-transformation.jpg',
      title: 'Sadjad\'s Transformatie',
      story: '1,5 jaar geleden begon ik aan een online coachingstraject zonder precies te weten waar het me zou brengen. Inmiddels ben ik 33 kilo afgevallen. Niet door extreme diëten of korte oplossingen, maar door een aanpak die vol te houden is.\n\nDankzij de online coaching heb ik structuur, kennis en discipline opgebouwd. Ik heb geleerd hoe ik mijn voeding kan aanpassen aan mijn leven en hoe ik training op de juiste manier inzet. Ook op momenten dat het lastig was, stond er altijd begeleiding klaar.\n\nDit traject heeft me niet alleen fysiek veranderd, maar ook mentaal sterker gemaakt. Wat ooit onmogelijk leek, voelt nu als mijn nieuwe normaal. En dit is pas het begin.',
      results: '• 33 kilo afgevallen\n• Structuur en discipline\n• Kennis van voeding en training\n• Mentale kracht toegenomen'
    },
    {
      id: 5,
      image: '/images/progression-images/Jesper-transformation.jpeg',
      title: 'Jesper\'s Transformatie',
      story: 'Luca is echt een fijne trainer om mee te werken. Wekelijkse check-ins en elke dag WhatsApp contact, waarin door middel van video\'s van mijzelf naar mijn vorm wordt gekeken. Echt een aanrader voor iedereen die serieus aan de slag wil met zijn doelen!',
      results: '• meer dan 10 kilo vetmassa verloren\n• aanzienlijk meer spiermassa gecreëerd\n• echt leren trainen\n• discipline op meerdere vlakken in zijn leven'
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
                  <>
                    {/* Mobile Layout: Text first, then image */}
                    <div className="md:hidden">
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-[#090c45]">
                            {transformations.find(t => t.id === selectedTransformation)!.title}
                          </h3>
                          <button
                            onClick={() => setSelectedTransformation(null)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <FaTimes size={20} />
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-[#090c45] mb-2 flex items-center gap-2">
                              <FaQuoteLeft className="text-[#0066ff]" />
                              Het Verhaal
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {transformations.find(t => t.id === selectedTransformation)!.story}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-[#090c45] mb-2">
                              Behaalde Resultaten
                            </h4>
                            <p className="text-gray-700 whitespace-pre-line font-medium text-sm">
                              {transformations.find(t => t.id === selectedTransformation)!.results}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Image */}
                      <div className="relative h-64 w-full">
                        <Image
                          src={transformations.find(t => t.id === selectedTransformation)!.image}
                          alt={transformations.find(t => t.id === selectedTransformation)!.title}
                          fill
                          className="object-contain bg-gray-100"
                          sizes="100vw"
                        />
                      </div>
                      
                      <div className="p-6 pt-0">
                        <motion.button
                          onClick={() => {
                            setSelectedTransformation(null)
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="w-full px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Start Jouw Transformatie
                        </motion.button>
                      </div>
                    </div>

                    {/* Desktop Layout: Side by side */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8">
                      <div className="relative min-h-[500px] max-h-[700px] rounded-l-2xl overflow-hidden bg-gray-100">
                        <Image
                          src={transformations.find(t => t.id === selectedTransformation)!.image}
                          alt={transformations.find(t => t.id === selectedTransformation)!.title}
                          fill
                          className="object-contain p-4"
                          sizes="50vw"
                          priority
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
                  </>
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
