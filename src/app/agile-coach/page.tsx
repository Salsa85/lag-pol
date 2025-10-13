'use client';

import Link from 'next/link';
import Image from 'next/image';
import Image from 'next/image';

export default function AgileCoachPage() {

  const courses = [
    {
      id: 'coach',
      title: 'Agile Coach Opleiding',
      duration: '4 dagen',
      price: '€2.495',
      description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden en teams kan helpen groeien.',
      topics: [
        'Coaching fundamentals en technieken',
        'Agile mindset en waarden',
        'Team dynamics en groepsprocessen',
        'Change management en transformatie',
        'Facilitation en workshop design',
        'Metrics en measurement',
        'Organisatie coaching',
        'Conflict resolution en mediation'
      ],
      target: 'Ervaren Scrum Masters, teamleiders en Agile professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center relative">
              <Image 
                src="/images/lag-logo.png" 
                alt="Lean Agile Groep Logo" 
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
            </Link>
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="font-medium">Contact:</span> 
                <span className="text-primary-600 font-semibold">088-5326720</span>
              </div>
              
              <Link 
                href="/#signup-section"
                className="relative group bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="relative z-10">AANMELDEN</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-200"></div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-white/30 rounded-full mr-4"></div>
              <h1 className="text-4xl md:text-5xl font-bold">Agile Coach Training</h1>
              <div className="w-8 h-8 bg-white/20 rounded-lg ml-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white/50 rounded-sm rotate-45"></div>
              </div>
            </div>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl">
              Word een ervaren Agile Coach die duurzame verandering kan begeleiden. 
              Leer hoe je teams en organisaties kunt helpen om wendbaar te worden en betere resultaten te behalen.
            </p>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agile Coach Opleiding</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een intensieve 4-daagse opleiding die je voorbereidt op het begeleiden van Agile transformaties.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Course Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Agile Coach Opleiding</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">€2.495</div>
                  <div className="text-sm text-gray-500">4 dagen</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{courses[0].description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Wat leer je:</h4>
                <ul className="space-y-2">
                  {courses[0].topics.map((topic, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Doelgroep:</h4>
                <p className="text-gray-600">{courses[0].target}</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Programma Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duur:</span>
                    <span className="font-medium">4 dagen (32 uur)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Groepsgrootte:</span>
                    <span className="font-medium">Max 12 deelnemers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificering:</span>
                    <span className="font-medium">Agile Coach Certificate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Locatie:</span>
                    <span className="font-medium">Amsterdam of incompany</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Wat krijg je?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Officieel certificaat
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Praktijkgerichte oefeningen
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Coaching toolkit
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    6 maanden follow-up support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Klaar om Agile Coach te worden?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Meld je aan voor de Agile Coach opleiding en word een expert in het begeleiden van Agile transformaties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#signup-section"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Aanmelden voor opleiding
            </Link>
            <Link 
              href="/"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Terug naar overzicht
            </Link>
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
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-300 mb-2">📞 088-5326720</p>
              <p className="text-gray-300">info@leanagilegroep.nl</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Trainingen</h3>
              <ul className="text-gray-300 space-y-2">
                <li><Link href="/scrum-master" className="hover:text-white">Scrum Master</Link></li>
                <li><Link href="/product-owner" className="hover:text-white">Product Owner</Link></li>
                <li><Link href="/agile-coach" className="hover:text-white">Agile Coach</Link></li>
                <li><Link href="/obeya" className="hover:text-white">Obeya</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              Lean Agile Groep is onderdeel van Lean Six Sigma Groep ©2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
