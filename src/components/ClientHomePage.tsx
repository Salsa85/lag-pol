'use client';

import ClickSpark from './ClickSpark';
import Navigation from './Navigation';
import SignupSection from './SignupSection';
import DarkVeil from './DarkVeil';

export default function ClientHomePage() {
  return (
    <ClickSpark
      sparkColor='red'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Navigation showMargin={false} />

        {/* Hero Section */}
        <section className="md:rounded-2xl md:mx-5 relative text-white overflow-hidden py-24 flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-500">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-scrum-500/20 via-transparent to-primary-500/20 blur-3xl"></div>
          
          {/* DarkVeil as background */}
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.8 }}>
            <DarkVeil 
              hueShift={280}
              speed={0.5}
              noiseIntensity={0}
              scanlineIntensity={0}
              scanlineFrequency={0}
              warpAmount={0}
            />
          </div>
          
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
          <div className="relative z-20 container mx-auto px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                 <span className="font-black italic tracking-wider text-scrum-400 drop-shadow-lg">Agile</span> Trainingen voor de politie operatie
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed max-w-3xl">
                Lean Agile Groep en Scrum Academy bundelen onze krachten om de politie te ondersteunen bij het versterken van wendbaarheid en samenwerking.
              </p>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-2xl">
                Met praktijkgerichte Agile trainingen helpen we teams binnen de politieorganisatie om sneller in te spelen op veranderingen, beter samen te werken en duurzame resultaten te behalen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('training-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Bekijk de trainingen
                </button>
                <button 
                  onClick={() => document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/20"
                >
                  Aanmelden
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-gray-900">Wie zijn wij?</h2>
                <div className="w-8 h-8 bg-primary-100 rounded-lg ml-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
                </div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Wij zijn Lean Agile Groep en Scrum Academy. Samen bundelen we onze expertise in Agile, Lean en Scrum om de Politie wendbaarder en effectiever te maken.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Onze trainingen zijn praktijkgericht, interactief en nuchter, zodat teams direct zelf aan de slag kunnen met meer samenwerking, werkplezier en resultaat.
              </p>

              <div className="font-bold text-gray-900 my-10">
              Doelgroep hier
            </div>
            </div>

          

            {/* Right Column: Grid of Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Praktijkgericht</h3>
                <p className="text-gray-600 leading-relaxed">Geen theoretische verhalen, maar concrete tools en technieken die direct toepasbaar zijn in jouw dagelijkse werk.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactief</h3>
                <p className="text-gray-600 leading-relaxed">Actieve workshops met veel oefenen, rollenspellen en praktijkcases uit de politieorganisatie.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-200 md:col-span-2">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nuchter</h3>
                <p className="text-gray-600 leading-relaxed">Geen marketingpraatjes, maar eerlijke, praktische aanpak die werkt in de realiteit van de politie.</p>
              </div>
            </div>
          </div>
       
        </section>

        {/* Training Types Section */}
        <section id="training-section" className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary-100 rounded-lg mr-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Onze trainingen</h2>
                <div className="w-12 h-1 bg-primary-500 rounded-full ml-4"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Kies de training die het beste past bij jouw rol en ontwikkelingsbehoeften binnen de politieorganisatie.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Scrum Master Trainingen */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scrum Master</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/scrum-master" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-primary-700">Scrum Master Basis</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">4 dagdelen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  <a href="/scrum-master-vervolg" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-accent-50 hover:border-accent-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-accent-700">Scrum Master Vervolg</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">4 dagdelen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Product Owner Trainingen */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Product Owner</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Leer richting en waarde creëren in een complexe praktijk.
                    </p>
                  </div>
                </div>
                
                
                <div className="space-y-3">
                  <a href="/product-owner" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-primary-700">Product Owner Basis</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  <a href="/product-owner" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-accent-50 hover:border-accent-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-accent-700">Product Owner Gevorderd</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Agile Coach Training */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Agile Coach</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Word een ervaren Agile Coach die duurzame verandering kan begeleiden.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/agile-coach" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-primary-700">Agile Coach Opleiding</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">4 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Agile Leiderschap */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Agile Leiderschap</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Ontwikkel een mindset gericht op vertrouwen, wendbaarheid en resultaat.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="/agile-leiderschap" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-primary-700">Agile Leiderschap Opleiding</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">1.5 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Obeya Trainingen */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 lg:col-span-2">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Obeya Trainingen</h3>
                  <div className="h-12 mb-6 flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Leer werken met de Obeya-methodiek voor effectief management en strategie-implementatie.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="/obeya" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-primary-700">Leading with Obeya</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                  <a href="/obeya" className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-accent-50 hover:border-accent-200 border border-transparent transition-all duration-200 group">
                    <span className="font-medium text-gray-900 group-hover:text-accent-700">Facilitator in Obeya</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm bg-accent-500 text-white px-3 py-1 rounded-full font-medium">2 dagen</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <SignupSection />

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary-100 rounded-lg mr-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Veelgestelde vragen</h2>
                <div className="w-12 h-1 bg-primary-500 rounded-full ml-4"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Alles wat je moet weten over onze Agile trainingen voor de politie.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zijn de trainingen specifiek voor de politie?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, alle trainingen zijn speciaal aangepast voor de politieorganisatie. We gebruiken praktijkcases uit de politie en houden rekening met jullie specifieke uitdagingen en werkprocessen.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hoe lang duren de trainingen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  De meeste trainingen duren 2 dagen, behalve de Agile Coach training (4 dagen) en Agile Leiderschap (1.5 dagen). Alle trainingen zijn intensief en praktijkgericht.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kan ik een training op locatie volgen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, we bieden zowel open trainingen als incompany trainingen aan. Voor grote groepen kunnen we de training op jullie locatie geven.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ik wil een snellere startdatum, kan dat?</h3>
                <p className="text-gray-700 leading-relaxed">
                  PENDING
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wat zijn de voorwaarden voor deelname?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Voor de meeste trainingen zijn geen specifieke vooropleidingen vereist. Wel verwachten we dat je werkzaam bent binnen de politieorganisatie en bereid bent om actief deel te nemen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Lean Agile Groep</h3>
                <p className="text-gray-300 mb-4">Praktijkgerichte Agile trainingen voor de politie.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-300 mb-2">📞 088-5326720</p>
                <p className="text-gray-300">info@leanagilegroep.nl</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Trainingen</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>Scrum Master</li>
                  <li>Product Owner</li>
                  <li>Agile Coach</li>
                  <li>Obeya</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 mb-4">
                Lean Agile Groep is onderdeel van Lean Six Sigma Groep ©2025
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">Contact: 088-5326720</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ClickSpark>
  );
}
