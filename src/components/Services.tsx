'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/lib/language'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaNutritionix, FaDumbbell, FaVideo, FaComments, FaClipboardCheck, FaChartLine, FaUserMd, FaHeartbeat } from 'react-icons/fa'

const Services: React.FC = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [activeService, setActiveService] = useState<'coaching' | 'training'>('coaching')

  const coachingFeatures = [
    {
      icon: <FaNutritionix />,
      title: t('nutritionPlan'),
      description: t('nutritionPlanDesc')
    },
    {
      icon: <FaDumbbell />,
      title: t('trainingPlan'),
      description: t('trainingPlanDesc')
    },
    {
      icon: <FaVideo />,
      title: t('videoAnalysis'),
      description: t('videoAnalysisDesc')
    },
    {
      icon: <FaComments />,
      title: t('support247'),
      description: t('support247Desc')
    }
  ]

  const trainingFeatures = [
    {
      icon: <FaClipboardCheck />,
      title: t('intake'),
      description: t('intakeDesc')
    },
    {
      icon: <FaDumbbell />,
      title: t('customTraining'),
      description: t('customTrainingDesc')
    },
    {
      icon: <FaChartLine />,
      title: t('technique'),
      description: t('techniqueDesc')
    },
    {
      icon: <FaUserMd />,
      title: t('progressive'),
      description: t('progressiveDesc')
    },
    {
      icon: <FaComments />,
      title: t('feedback'),
      description: t('feedbackDesc')
    },
    {
      icon: <FaHeartbeat />,
      title: t('physioKnowledge'),
      description: t('physioKnowledgeDesc')
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#090c45] mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-[#0066ff] mx-auto"></div>
        </motion.div>

        {/* Service Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setActiveService('coaching')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeService === 'coaching'
                  ? 'bg-[#0066ff] text-white'
                  : 'text-gray-600 hover:text-[#090c45]'
              }`}
            >
              {t('onlineCoaching')}
            </button>
            <button
              onClick={() => setActiveService('training')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeService === 'training'
                  ? 'bg-[#0066ff] text-white'
                  : 'text-gray-600 hover:text-[#090c45]'
              }`}
            >
              {t('personalTraining')}
            </button>
          </div>
        </motion.div>

        {/* Service Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-[#090c45] mb-4">
              {activeService === 'coaching' ? t('onlineCoaching') : t('personalTraining')}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {activeService === 'coaching' ? t('coachingIncludes') : t('trainingIncludes')}
            </p>
            <p className="text-gray-700 mb-8">
              {activeService === 'coaching' 
                ? t('coachingDesc', 'Bij Luscombe Lifestyle Coaching geloof ik in een persoonlijke benadering. Ik bied je tools en inzichten die je helpen jouw potentieel te realiseren en een duurzame, positieve verandering te creëren.')
                : t('trainingDesc', 'Bij Luscombe Lifestyle staat personal training voor doelgericht trainen met een duidelijke lijn. Ik help je bouwen aan een sterker, fitter lichaam dat past bij jouw niveau, doelen en dagelijkse ritme.')
              }
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('ctaStart', 'Start vandaag nog')}
            </motion.button>
          </motion.div>

          <motion.div
            key={activeService + '-features'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {(activeService === 'coaching' ? coachingFeatures : trainingFeatures).map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-[#0066ff] text-3xl mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#090c45] mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-[#090c45] text-center mb-12">
            {t('processTitle', 'Jouw transformatie in stappen')}
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0066ff]"></div>
            {[
              { step: 1, title: t('step1', 'Intake'), desc: t('step1Desc', 'Persoonlijke kennismaking en doelbepaling') },
              { step: 2, title: t('step2', 'Plan'), desc: t('step2Desc', 'Maatwerk schema voor voeding en training') },
              { step: 3, title: t('step3', 'Uitvoering'), desc: t('step3Desc', 'Begeleiding en aanpassingen onderweg') },
              { step: 4, title: t('step4', 'Resultaat'), desc: t('step4Desc', 'Duurzame transformatie en nieuwe leefstijl') }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h4 className="text-xl font-semibold text-[#090c45] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
