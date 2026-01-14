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
      icon: '⚕️',
      title: 'Momenteel stage bij Fysiotherapie van Feyenoord Academy.',
      description: 'Stage bij de fysiotherafie van Feyenoord Academy'
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
      title: 'Sarah\'s Transformatie',
      story: 'Sarah, 28 jaar, begon haar reis met het doel om sterker en zelfverzekerder te worden. In 6 maanden tijd heeft ze niet alleen fysiek enorme stappen gezet, maar ook mentaal veel groei doorgemaakt. "Luca\'s aanpak was perfect voor mij - de combinatie van persoonlijke begeleiding en de flexibiliteit van online coaching maakte het mogelijk om het te combineren met mijn drukke baan."',
      results: '• 8kg vetverlies\n• +3kg spiermassa\n• Personal records op alle lifts\n• Meer energie en zelfvertrouwen'
    },
    {
      id: 2,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59 5.jpg',
      title: 'Mike\'s Transformatie',
      story: 'Mike, 35 jaar, wilde terug in vorm komen na jarenlang weinig aan sport te hebben gedaan. Met een focus op duurzame progressie en blessurepreventie hebben we gewerkt aan het opbouwen van een sterke basis. "Ik had nooit gedacht dat ik op mijn leeftijd nog zo resultaten kon behalen. Luca\'s kennis als fysiotherapeut in opleiding maakte echt het verschil."',
      results: '• 12kg lichaamsgewicht verloren\n• Aanzienlijke toename in kracht\n• Geen blessures meer\n• Betere houding en mobiliteit'
    },
    {
      id: 3,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59 2.jpg',
      title: 'Emma\'s Transformatie',
      story: 'Emma, 24 jaar, studeerde en wilde fitter en gezonder worden. We hebben een plan gemaakt dat perfect paste bij haar drukke studierooster. "De online coaching gaf me de vrijheid om te trainen wanneer het mij uitkwam, met de persoonlijke aandacht die ik nodig had. Ik voel me sterker dan ooit!"',
      results: '• 6kg vetverlies\n• Verbeterde conditie\n• Meer spierdefinitie\n• Gezondere relatie met voeding'
    },
    {
      id: 4,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59 3.jpg',
      title: 'David\'s Transformatie',
      story: 'David, 42 jaar, ervaren sporter die een plateau wilde doorbreken. Met geavanceerde trainingstechnieken en voedingsstrategieën hebben we nieuwe doelen bereikt. "Luca\'s expertise op het gebied van bodybuilding heeft me geholpen om door mijn plateau te breken en doelen te bereiken die ik voor onmogelijk hield."',
      results: '• +5kg spiermassa\n• Vetpercentage naar beneden\n• Nieuwe personal records\n• Betere trainingstechniek'
    },
    {
      id: 5,
      image: '/images/progression-images/PHOTO-2026-01-14-15-42-59 4.jpg',
      title: 'Lisa\'s Transformatie',
      story: 'Lisa, 31 jaar, moeder van twee die weer in vorm wilde komen. We hebben een realistisch plan gemaakt dat paste bij haar drukke leven als moeder en professional. "Dankzij Luca\'s flexibele aanpak heb ik weer tijd gevonden voor mezelf en voel ik me fitter dan ooit tevoren."',
      results: '• 10kg afgevallen\n• Meer energie dagelijks\n• Sterker en fitter gevoel\n• Goed voorbeeld voor kinderen'
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
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg leading-relaxed text-gray-700 md:text-xl"
          >
            <p className="text-xl md:text-2xl">
              Ik ben Luca, 24 jaar, online fitness & lifestyle coach met een sterke focus op krachttraining en duurzame progressie.
            </p>
            <p className="text-xl md:text-2xl">
              Ik train al meer dan 10 jaar in de sportschool en ben de afgelopen 2,5 jaar intensief bezig met bodybuilding en het optimaliseren van prestaties.
            </p>
            <p className="text-xl md:text-2xl">
              Naast mijn online coaching ben ik student fysiotherapie en werk ik als personal trainer en sportmasseur. In mijn werk begeleid ik mensen dagelijks bij het verbeteren van techniek, kracht en belastbaarheid.
            </p>
            <p className="text-xl md:text-2xl">
              Daarnaast loop ik stage binnen de fysiotherapieomgeving van de Feyenoord Academy, waar ik sporters ondersteun rondom prestatie, herstel en het verantwoord opbouwen van belastbaarheid.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#090c45]">
              Alles wat ik doe komt samen in mijn coaching: een combinatie van praktijkervaring, kennis van het menselijk lichaam en persoonlijke begeleiding, zodat jij slimmer traint, beter herstelt en duurzaam resultaat behaalt.
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
                className="relative group cursor-pointer"
                onClick={() => setSelectedTransformation(transformation.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={transformation.image}
                    alt={transformation.title}
                    width={300}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
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
                    <div className="relative">
                      <Image
                        src={transformations.find(t => t.id === selectedTransformation)!.image}
                        alt={transformations.find(t => t.id === selectedTransformation)!.title}
                        width={600}
                        height={800}
                        className="w-full h-full object-cover rounded-l-2xl"
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
