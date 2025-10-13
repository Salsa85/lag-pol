'use client';

import Link from 'next/link';
import Navigation from '../../components/Navigation';
import SignupSection from '../../components/SignupSection';
import HeroSection from '../../components/HeroSection';

export default function ScrumMasterPage() {

  const courses = [
    {
      id: 'basis',
      title: 'Scrum Master Basis',
      duration: '4 dagdelen van 3,5 uur',
      description: 'In deze training ontwikkelen startende Scrum Masters de vaardigheden om één of meerdere teams te begeleiden in een veeleisende praktijk. Vaak doen ze dat deels vanuit een meewerkende rol.',
      detailedDescription: 'Ze leren hoe agile werken niet alleen wordt toegepast, maar duurzaam toegepast wordt in de samenwerking, structuur en cultuur van het team. De nadruk ligt op praktisch handelen, reflecteren en het versterken van teamdynamiek. Deelnemers groeien in hun rol, zodat ze uiteindelijk zelfstandig en met vertrouwen teams kunnen begeleiden, zonder afhankelijk te zijn van externe begeleiding.',
      topics: [
        'Introductie Agile mindset en waarden',
        'Scrum theorie en simulatieoefeningen',
        'Uitleg van Scrum framework; overbrengen op collega\'s van het basisteam',
        'Omgaan met procesmatige valkuilen',
        'Communicatiestijlen en omgaan met weerstand',
        'Faciliteren van retrospectives, reviews, stand-ups, etc.',
        'Ondersteuning van de Product Owner (backlog, prioritering)'
      ],
      target: 'Startende Scrum Masters die teams willen begeleiden in een veeleisende praktijk',
      uniqueFeatures: [
        'Deelnemers faciliteren het meeste zelf (Check-in, Retrospective, Daily etc.)',
        'Slide-vrij (Powerpoint-vrij)',
        'Ontwikkeld o.b.v. Politie-context',
        'Begrijpelijke metaforen uit het dagelijks leven',
        'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
      ],
      details: {
        duration: '2 dagen',
        certificate: 'PSM1',
        trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
        materials: 'Toolkit met coachkaarten en markers, overzichtskaarten met termen en schema\'s'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation 
        buttonText="AANMELDEN" 
        buttonLink="/#signup-section" 
        showMargin={false} 
      />

      {/* Hero Section */}
      <HeroSection 
        title="Scrum Master Trainingen"
        subtitle="Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk. Leer hoe je als Scrum Master teams kunt helpen om effectiever samen te werken en betere resultaten te behalen."
      />

      {/* Course Overview Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {courses.map((course) => (
            <div key={course.id}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{course.title}</h2>
              <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                {course.description}
              </div>
              <div className="text-lg text-gray-700 leading-relaxed">
                {course.detailedDescription}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-20 px-6 lg:px-8 bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-4xl font-bold text-white">Wat leer je</h2>
              <div className="w-8 h-8 bg-primary-100 rounded-lg ml-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
              </div>
            </div>
          </div>
          
          {courses.map((course) => (
            <div key={course.id} className="grid md:grid-cols-2 gap-8">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100 leading-relaxed text-lg">{topic}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-accent-100 rounded-lg mr-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-accent-500 rounded-sm rotate-45"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Wat maakt deze training uniek</h2>
              <div className="w-12 h-1 bg-accent-500 rounded-full ml-4"></div>
            </div>
          </div>
          
          {courses.map((course) => (
            <div key={course.id} className="grid md:grid-cols-2 gap-8">
              {course.uniqueFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Practical Details Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-primary-100 rounded-lg mr-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-500 rounded-sm rotate-45"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Praktische details</h2>
              <div className="w-12 h-1 bg-primary-500 rounded-full ml-4"></div>
            </div>
          </div>
          
          {courses.map((course) => (
            <div key={course.id} className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-lg font-semibold text-gray-700">Tijdsduur</span>
                  <span className="text-lg text-gray-600">{course.details.duration}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-lg font-semibold text-gray-700">Certificaat</span>
                  <span className="text-lg text-gray-600">{course.details.certificate}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-lg font-semibold text-gray-700">Trainers</span>
                  <span className="text-lg text-gray-600">{course.details.trainers}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-lg font-semibold text-gray-700">Materialen</span>
                  <span className="text-lg text-gray-600 text-right max-w-md">{course.details.materials}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signup Section */}
      <SignupSection preselectedCourse="Scrum Master Basis / Beginner" />

      {/* Related Training Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vervolg je Agile reis</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/scrum-master-vervolg"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Scrum Master Vervolg
            </Link>
            <Link 
              href="/product-owner"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Product Owner Training
            </Link>
            <Link 
              href="/"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Alle trainingen
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
              <p className="text-gray-100 mb-4">Praktijkgerichte Agile trainingen voor de politie.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-100 mb-2">📞 088-5326720</p>
              <p className="text-gray-100">info@leanagilegroep.nl</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Trainingen</h3>
              <ul className="text-gray-100 space-y-2">
                <li><Link href="/scrum-master" className="hover:text-white">Scrum Master Basis</Link></li>
                <li><Link href="/scrum-master-vervolg" className="hover:text-white">Scrum Master Vervolg</Link></li>
                <li><Link href="/product-owner" className="hover:text-white">Product Owner</Link></li>
                <li><Link href="/agile-coach" className="hover:text-white">Agile Coach</Link></li>
                <li><Link href="/obeya" className="hover:text-white">Obeya</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-200">
              Lean Agile Groep is onderdeel van Lean Six Sigma Groep ©2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
