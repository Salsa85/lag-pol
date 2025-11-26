import { Course } from '../../data/courses';

interface LearningOutcomesSectionProps {
  courses: Course[];
}

export default function LearningOutcomesSection({ courses }: LearningOutcomesSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
            <h2 className="text-4xl font-bold text-gray-900">Wat leer je</h2>
          </div>
        </div>
        
        {courses.map((course) => (
          <div key={course.id} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(course.topics || []).map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
