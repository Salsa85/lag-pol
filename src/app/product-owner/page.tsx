import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Owner Training - Politie',
  description: 'Leer richting en waarde creëren in een complexe praktijk. Praktijkgerichte Product Owner training voor de politieorganisatie.',
  keywords: [
    'Product Owner training politie',
    'Product Owner opleiding',
    'Agile product management',
    'waarde creatie politie',
    'product backlog management'
  ],
  openGraph: {
    title: 'Product Owner Training - Politie',
    description: 'Leer richting en waarde creëren in een complexe praktijk. Praktijkgerichte Product Owner training.',
    type: 'website',
  },
};

export default function ProductOwnerPage() {

  const courses = [
    {
      id: 'basis',
      title: 'Product Owner Basis',
      duration: '2 dagen',
      price: '€1.295',
      description: 'Leer de fundamenten van product ownership en ontwikkel je vaardigheden in waardecreatie.',
      topics: [
        'Product Owner rol en verantwoordelijkheden',
        'Product backlog management',
        'User stories en acceptance criteria',
        'Stakeholder management',
        'Prioriteringstechnieken',
        'Product vision en roadmap'
      ],
      target: 'Beginnende Product Owners en product managers'
    },
    {
      id: 'gevorderd',
      title: 'Product Owner Gevorderd',
      duration: '2 dagen',
      price: '€1.295',
      description: 'Verdiep je kennis en ontwikkel geavanceerde product ownership vaardigheden.',
      topics: [
        'Geavanceerde prioriteringstechnieken',
        'Data-driven besluitvorming',
        'Product strategy en positioning',
        'Cross-functional team leadership',
        'Metrics en OKR\'s',
        'Product discovery en experimentation'
      ],
      target: 'Ervaren Product Owners en senior product managers'
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
              <h1 className="text-4xl md:text-5xl font-bold">Product Owner Trainingen</h1>
              <div className="w-8 h-8 bg-white/20 rounded-lg ml-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white/50 rounded-sm rotate-45"></div>
              </div>
            </div>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl">
              Leer richting en waarde creëren in een complexe praktijk. 
              Ontwikkel de vaardigheden om als Product Owner teams te leiden en producten te bouwen die écht waarde toevoegen.
            </p>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kies je training</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selecteer de training die het beste past bij jouw ervaringsniveau en ontwikkelingsbehoeften.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 cursor-pointer border-gray-100 hover:border-primary-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{course.price}</div>
                    <div className="text-sm text-gray-500">{course.duration}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Wat leer je:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Doelgroep:</h4>
                  <p className="text-gray-600">{course.target}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Klaar om te beginnen?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Meld je aan voor de Product Owner training die het beste bij je past.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#signup-section"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Aanmelden voor training
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
