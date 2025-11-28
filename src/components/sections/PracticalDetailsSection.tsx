import { Course } from '../../data/courses';

interface PracticalDetailsSectionProps {
  courses: Course[];
}

export default function PracticalDetailsSection({ courses }: PracticalDetailsSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
            <h2 className="text-4xl font-bold text-gray-900">Praktische details</h2>
          </div>
        </div>
        
        {courses.map((course) => (
          <div key={course.id} className="grid lg:grid-cols-2 gap-8">
            {/* Left column - Basic details */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Training informatie</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-base font-semibold text-gray-700">Tijdsduur</span>
                  <span className="text-base text-gray-600">{course.details.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-base font-semibold text-gray-700">Certificaat</span>
                  <span className="text-base text-gray-600">{course.details.certificate}</span>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-gray-100">
                  <span className="text-base font-semibold text-gray-700">Trainers</span>
                  <span className="text-base text-gray-600 text-right max-w-xs">{course.details.trainers}</span>
                </div>
                <div className="flex justify-between items-start py-3">
                  <span className="text-base font-semibold text-gray-700">Materialen</span>
                  <span className="text-base text-gray-600 text-right max-w-xs">{course.details.materials}</span>
                </div>
              </div>
            </div>

            {/* Right column - Requirements */}
            {course.practicalDetails && (
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {course.practicalDetails.requirementsTitle || 'Deze training is geschikt voor jou als:'}
                </h3>
                {course.practicalDetails.requirements && (
                  <ol className="space-y-4 mb-6">
                    {course.practicalDetails.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                          <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-base text-gray-700 leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {course.practicalDetails.preparationTime && (
                  <div className="bg-primary-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base font-semibold text-gray-700">Voorbereidingstijd: </span>
                      <span className="text-base text-gray-600 ml-2">{course.practicalDetails.preparationTime}</span>
                    </div>
                  </div>
                )}
                {course.practicalDetails.additionalInfo && (
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">{course.practicalDetails.additionalInfo}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
