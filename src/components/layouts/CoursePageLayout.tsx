import { Course } from '../../data/courses';
import Navigation from '../Navigation';
import ClientSignupSection from '../ClientSignupSection';
import HeroSection from '../HeroSection';
import LearningOutcomesSection from '../sections/LearningOutcomesSection';
import UniqueFeaturesSection from '../sections/UniqueFeaturesSection';
import PracticalDetailsSection from '../sections/PracticalDetailsSection';
import RelatedTrainingSection from '../sections/RelatedTrainingSection';
import Footer from '../sections/Footer';

interface CoursePageLayoutProps {
  courses: Course[];
  heroTitle: string;
  heroSubtitle: string;
  preselectedCourse: string;
  relatedTraining: {
    title: string;
    description: string;
    links: {
      href: string;
      text: string;
      variant: 'primary' | 'accent' | 'gray';
    }[];
  };
}

export default function CoursePageLayout({
  courses,
  heroTitle,
  heroSubtitle,
  preselectedCourse,
  relatedTraining
}: CoursePageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation showMargin={false} />

      {/* Hero Section */}
      <HeroSection 
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* Course Overview Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {courses.map((course) => (
            <div key={course.id}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-scrum-500 rounded-full mr-4"></div>
                <h2 className="text-4xl font-bold text-gray-900">{course.title}</h2>
              </div>
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
      <LearningOutcomesSection courses={courses} />

      {/* Unique Features Section */}
      <UniqueFeaturesSection courses={courses} />

      {/* Practical Details Section */}
      <PracticalDetailsSection courses={courses} />

      {/* Signup Section */}
      <ClientSignupSection preselectedCourse={preselectedCourse} />

      {/* Related Training Section */}
      <RelatedTrainingSection 
        title={relatedTraining.title}
        description={relatedTraining.description}
        links={relatedTraining.links}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
