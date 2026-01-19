'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center text-[#0066ff] hover:text-[#0052cc] mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Terug naar home
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#090c45] mb-4">
            Privacyverklaring
          </h1>
          <div className="w-24 h-1 bg-[#0066ff] mb-8"></div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-[#090c45] mb-4">1. Inleiding</h2>
              <p className="text-gray-700 mb-6">
                Welkom bij Luscombe Lifestyle. Deze privacyverklaring is opgesteld om te laten zien hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen. Wij hechten veel waarde aan uw privacy en doen er alles aan om uw persoonsgegevens zorgvuldig te behandelen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">2. Gegevens die wij verzamelen</h2>
              <p className="text-gray-700 mb-4">
                Wanneer u onze diensten gebruikt of contact met ons opneemt, kunnen wij de volgende persoonsgegevens verzamelen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
                <li>Gezondheids- en fitnessgerelateerde informatie</li>
                <li>Trainingsdata en voortgangsinformatie</li>
                <li>Betalingsgegevens</li>
                <li>IP-adres en browsergegevens</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">3. Doeleinden van gegevensverwerking</h2>
              <p className="text-gray-700 mb-4">
                Wij gebruiken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Het leveren van persoonlijke coaching en trainingsschema's</li>
                <li>Het bijhouden van uw voortgang en resultaten</li>
                <li>Communicatie en planning van afspraken</li>
                <li>Facturatie en betalingsafhandeling</li>
                <li>Het verbeteren van onze dienstverlening</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">4. Bewaartermijn</h2>
              <p className="text-gray-700 mb-6">
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld. De bewaartermijn is afhankelijk van het type gegevens en de wettelijke vereisten.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">5. Delen van gegevens</h2>
              <p className="text-gray-700 mb-6">
                Wij delen uw persoonsgegevens alleen met derden indien dit noodzakelijk is voor de uitvoering van onze diensten of wanneer wij wettelijk verplicht zijn. Wij werken samen met betalingsverwerkers en andere dienstverleners die uw gegevens vertrouwelijk behandelen.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">6. Uw rechten</h2>
              <p className="text-gray-700 mb-4">
                U heeft het recht om:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Uw persoonsgegevens in te zien</li>
                <li>Onjuiste gegevens te laten corrigeren</li>
                <li>Gegevens te laten verwijderen</li>
                <li>Gegevensoverdracht te vragen</li>
                <li>Bezwaar te maken tegen verwerking</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">7. Beveiliging</h2>
              <p className="text-gray-700 mb-6">
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen verlies, onbevoegde toegang, ongewenste openbaarmaking of ongeoorloofde wijziging.
              </p>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">8. Contact</h2>
              <p className="text-gray-700 mb-6">
                Heeft u vragen over deze privacyverklaring of de manier waarop wij uw gegevens verwerken? Neem dan contact met ons op:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>E-mail:</strong> luscombe.training@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefoon:</strong> +31 6 146 292 17
                </p>
                <p className="text-gray-700">
                  <strong>Adres:</strong> First Class Sports Papendrecht
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#090c45] mb-4 mt-8">9. Wijzigingen</h2>
              <p className="text-gray-700 mb-6">
                Deze privacyverklaring kan worden gewijzigd. Wij adviseren u om regelmatig deze pagina te raadplegen voor de meest actuele versie.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Deze privacyverklaring is laatst bijgewerkt op {new Date().toLocaleDateString('nl-NL')}.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
