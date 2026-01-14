'use client'

import React from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDumbbell, FaGraduationCap, FaHeartbeat, FaAward } from 'react-icons/fa'

const About: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const credentials = [
    {
      icon: <FaDumbbell />,
      title: t('aboutExperience', '10+ Jaar Ervaring'),
      description: t('aboutExperienceDetail', 'Actief in de sportschool met focus op bodybuilding en prestatieoptimalisatie')
    },
    {
      icon: <FaGraduationCap />,
      title: t('aboutEducation', 'Student Fysiotherapie'),
      description: t('aboutEducationDetail', 'Wetenschappelijke kennis van het menselijk lichaam')
    },
    {
      icon: <FaHeartbeat />,
      title: t('aboutCurrent', 'Feyenoord Academy'),
      description: t('aboutCurrentDetail', 'Stage bij de fysiotherafie van Feyenoord Academy')
    },
    {
      icon: <FaAward />,
      title: t('aboutCertifications', 'Gecertificeerd Trainer'),
      description: t('aboutCertificationsDetail', 'Meerdere certificaten op het gebied van training en coaching')
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
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('aboutIntro')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutExperience')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutEducation')} {t('aboutEducationDetail', 'Naast mijn online coaching werk ik ook als personal trainer, waar ik dagelijks mensen begeleid in het verbeteren van techniek, kracht en belastbaarheid.')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('aboutCurrent')} {t('aboutCurrentDetail', 'waar ik dagelijks werk met sporters op prestatie- en herstelniveau.')}
              </p>
              <p className="text-xl text-gray-700 font-semibold mt-6">
                {t('aboutPhilosophy', 'Alles wat ik doe komt samen in mijn coaching: een combinatie van praktijkervaring, kennis van het menselijk lichaam en persoonlijke begeleiding, zodat jij slimmer traint, beter herstelt en duurzaam resultaat behaalt.')}
              </p>
            </div>
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
                  className="bg-[#f8f9fa] p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                >
                  <div className="text-[#0066ff] text-3xl mb-4">
                    {cred.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#090c45] mb-2">
                    {cred.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {cred.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Progress Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-[#090c45] text-center mb-8">
            {t('progressionTitle', 'Transformaties')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={num}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`/images/progression-images/PHOTO-2026-01-14-15-42-59${num > 1 ? ' ' + num : ''}.jpg`}
                  alt={`Progression ${num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c45]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
