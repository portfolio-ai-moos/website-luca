'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'nl' | 'en'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
}

const translations = {
  nl: {
    // Navigation
    home: 'Home',
    about: 'Over mij',
    services: 'Diensten',
    testimonials: 'Succesverhalen',
    contact: 'Contact',
    
    // Hero Section
    tagline: 'Transformeer je lichaam én je leven.',
    heroSubtitle: 'Welkom bij Luscombe Lifestyle Coaching, waar ik je begeleid naar een leven in balans en vol energie.',
    heroDescription: 'Ik help je jouw persoonlijke doelen te bereiken door middel van professionele online coaching en/of personal training. Klaar om de eerste stap te zetten?',
    ctaStart: 'Laten we beginnen',
    
    // About Section
    aboutTitle: 'Over mij',
    aboutIntro: 'Ik ben Luca, 24 jaar, online fitness & lifestyle coach met een sterke focus op krachttraining en duurzame progressie.',
    aboutExperience: 'Al meer dan 10 jaar actief in de sportschool, waarvan de laatste 2,5 jaar serieus bezig met bodybuilding en het optimaliseren van prestaties.',
    aboutEducation: 'Student fysiotherapie, werkzaam als personal trainer, sportmasseur en verzorger bij Excelsior Vrouwen.',
    aboutCurrent: 'Momenteel stage bij Fysiotherapie van Feyenoord Academy.',
    
    // Services
    servicesTitle: 'Mijn Diensten',
    onlineCoaching: 'Online Coaching',
    personalTraining: 'Personal Training',
    coachingIncludes: 'Wat je kunt verwachten tijdens het coachingstraject:',
    trainingIncludes: 'Wat je kunt verwachten tijdens de personal training:',
    
    // Service Features
    nutritionPlan: 'Voedingsschema op maat',
    nutritionPlanDesc: 'Afgestemd op jouw doel, voorkeuren en dagelijkse leven.',
    trainingPlan: 'Gepersonaliseerd trainingsschema',
    trainingPlanDesc: 'Gericht op jouw niveau, doelen en belastbaarheid, met focus op techniek en progressie.',
    videoAnalysis: 'Video-analyse van je uitvoering',
    videoAnalysisDesc: 'Persoonlijke feedback op jouw oefeningen zodat je effectiever en veiliger traint.',
    support247: '24/7 app-contact voor support',
    support247Desc: 'Voor vragen, aanpassingen, motivatie en snelle feedback wanneer jij die nodig hebt.',
    
    intake: 'Intake & bewegingsscreening',
    intakeDesc: 'We brengen jouw doelen, belastbaarheid, trainingsgeschiedenis en eventuele klachten zorgvuldig in kaart.',
    customTraining: 'Training op maat',
    customTrainingDesc: 'Elke sessie wordt afgestemd op jouw niveau, doelen en hoe je je op dat moment voelt.',
    technique: 'Focus op techniek en uitvoering',
    techniqueDesc: 'Correct en efficiënt bewegen staat centraal om progressie te maken en blessures te voorkomen.',
    progressive: 'Progressieve opbouw',
    progressiveDesc: 'We bouwen kracht, conditie en belastbaarheid stapsgewijs en verantwoord op.',
    feedback: 'Directe feedback en begeleiding',
    feedbackDesc: 'Je krijgt continu coaching tijdens de oefeningen zodat je veilig en effectief traint.',
    physioKnowledge: 'Koppeling van fysiotherapeutische kennis',
    physioKnowledgeDesc: 'Extra aandacht voor herstel, mobiliteit en blessurepreventie.',
    
    // Testimonials
    testimonialsTitle: 'Succesverhalen',
    testimonialsSubtitle: 'Lees en zie hoe Luscombe Lifestyle anderen heeft geholpen hun doelen te bereiken.',
    
    // Contact
    contactTitle: 'Plan je gratis consult in',
    contactSubtitle: 'Klaar om te beginnen met jouw transformatie? Laten we samen werken aan jouw doelen.',
    name: 'Naam',
    email: 'E-mail',
    phone: 'Telefoonnummer',
    message: 'Bericht',
    send: 'Verstuur bericht',
    
    // Footer
    rights: 'Alle rechten voorbehouden',
    privacy: 'Privacy verklaring',
    terms: 'Algemene voorwaarden',
    
    // WhatsApp
    whatsappMessage: 'Hallo! Ik heb een vraag over de personal training/coaching.'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    testimonials: 'Success Stories',
    contact: 'Contact',
    
    // Hero Section
    tagline: 'Transform your body and your life.',
    heroSubtitle: 'Welcome to Luscombe Lifestyle Coaching, where I guide you to a life in balance and full of energy.',
    heroDescription: 'I help you achieve your personal goals through professional online coaching and/or personal training. Ready to take the first step?',
    ctaStart: "Let's start",
    
    // About Section
    aboutTitle: 'About me',
    aboutIntro: "I'm Luca, 24 years old, online fitness & lifestyle coach with a strong focus on strength training and sustainable progress.",
    aboutExperience: 'Active in the gym for over 10 years, with the last 2.5 years seriously focused on bodybuilding and performance optimization.',
    aboutEducation: 'Physical therapy student, working as personal trainer, sports masseur, and caretaker for Excelsior Women.',
    aboutCurrent: 'Currently doing an internship at Feyenoord Academy Physical Therapy.',
    
    // Services
    servicesTitle: 'My Services',
    onlineCoaching: 'Online Coaching',
    personalTraining: 'Personal Training',
    coachingIncludes: 'What you can expect during the coaching trajectory:',
    trainingIncludes: 'What you can expect during personal training:',
    
    // Service Features
    nutritionPlan: 'Custom nutrition plan',
    nutritionPlanDesc: 'Tailored to your goals, preferences and daily life.',
    trainingPlan: 'Personalized training schedule',
    trainingPlanDesc: 'Focused on your level, goals and capacity, with attention to technique and progression.',
    videoAnalysis: 'Video analysis of your execution',
    videoAnalysisDesc: 'Personal feedback on your exercises so you can train more effectively and safely.',
    support247: '24/7 app contact for support',
    support247Desc: 'For questions, adjustments, motivation and quick feedback when you need it.',
    
    intake: 'Intake & movement screening',
    intakeDesc: 'We carefully map your goals, capacity, training history and any complaints.',
    customTraining: 'Custom training',
    customTrainingDesc: 'Each session is tailored to your level, goals and how you feel at that moment.',
    technique: 'Focus on technique and execution',
    techniqueDesc: 'Correct and efficient movement is central to making progress and preventing injuries.',
    progressive: 'Progressive build-up',
    progressiveDesc: 'We build strength, fitness and capacity step by step and responsibly.',
    feedback: 'Direct feedback and guidance',
    feedbackDesc: 'You receive continuous coaching during exercises so you train safely and effectively.',
    physioKnowledge: 'Connection to physiotherapy knowledge',
    physioKnowledgeDesc: 'Extra attention to recovery, mobility and injury prevention.',
    
    // Testimonials
    testimonialsTitle: 'Success Stories',
    testimonialsSubtitle: 'Read and see how Luscombe Lifestyle has helped others achieve their goals.',
    
    // Contact
    contactTitle: 'Book your free consultation',
    contactSubtitle: 'Ready to start your transformation? Let\'s work together on your goals.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone number',
    message: 'Message',
    send: 'Send message',
    
    // Footer
    rights: 'All rights reserved',
    privacy: 'Privacy statement',
    terms: 'Terms and conditions',
    
    // WhatsApp
    whatsappMessage: 'Hello! I have a question about the personal training/coaching.'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl')

  const t = (key: string, fallback?: string): string => {
    const translation = translations[language][key as keyof typeof translations.nl]
    return translation || fallback || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
