import { Course } from '../../data/courses';

interface UniqueFeaturesSectionProps {
  courses: Course[];
}

export default function UniqueFeaturesSection({ courses }: UniqueFeaturesSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
            <h2 className="text-4xl font-bold text-gray-900">Wat maakt deze training uniek</h2>
          </div>
        </div>
        
        {courses.map((course) => (
          <div key={course.id} className="grid md:grid-cols-2 gap-6">
            {course.uniqueFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 border border-accent-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
