'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FloatingSocial from '@/components/FloatingSocial'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <FloatingSocial />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
