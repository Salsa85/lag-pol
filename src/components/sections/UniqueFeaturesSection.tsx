import { Course } from '../../data/courses';

interface UniqueFeaturesSectionProps {
  courses: Course[];
}

export default function UniqueFeaturesSection({ courses }: UniqueFeaturesSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-scrum-500 rounded-full mr-4"></div>
            <h2 className="text-4xl font-bold text-gray-900">Wat maakt deze training uniek</h2>
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
  );
}
