import { Course } from '../../data/courses';

interface PracticalDetailsSectionProps {
  courses: Course[];
}

export default function PracticalDetailsSection({ courses }: PracticalDetailsSectionProps) {
  return (
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
  );
}
