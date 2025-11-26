import { Course } from '../../data/courses';

interface PriceSectionProps {
  courses: Course[];
}

export default function PriceSection({ courses }: PriceSectionProps) {
  const coursesWithPrice = courses.filter(course => course.price);

  if (coursesWithPrice.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
            <h2 className="text-4xl font-bold text-gray-900">Prijs</h2>
          </div>
        </div>
        
        {coursesWithPrice.map((course) => (
          <div key={course.id} className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary-500 mb-2">
                  € {course.price!.basePrice.toLocaleString('nl-NL')},-
                </div>
                <div className="text-lg text-gray-600">
                  op basis van {course.price!.baseParticipants} deelnemers
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-gray-700">
                    Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-700">
                    Maximaal {course.price!.maxParticipants} deelnemers per training
                  </p>
                </div>
                {course.price!.note && (
                  <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                    <p className="text-sm text-gray-600">{course.price!.note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

