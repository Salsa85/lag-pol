import { Course } from '../../data/courses';

interface LearningOutcomesSectionProps {
  courses: Course[];
}

export default function LearningOutcomesSection({ courses }: LearningOutcomesSectionProps) {
  return (
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
            {(course.topics || []).map((topic, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-100 leading-relaxed text-lg">{topic}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
