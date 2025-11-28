import { Metadata } from 'next';
import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { scrumMasterCourse, scrumMasterMetadata } from '../../data/courses';

export const metadata: Metadata = {
  title: scrumMasterMetadata.title,
  description: scrumMasterMetadata.description,
  keywords: scrumMasterMetadata.keywords,
  openGraph: scrumMasterMetadata.openGraph,
};

export default function ScrumMasterPage() {
  const courses = [scrumMasterCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/scrum-master-vervolg",
        text: "Scrum Master Verdiept",
        variant: "primary" as const
      }
    ]
  };

  return (
    <CoursePageLayout
      courses={courses}
      heroTitle="Scrum Master Basis"
      heroSubtitle="Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk. Leer hoe je als Scrum Master teams kunt helpen om effectiever samen te werken en betere resultaten te behalen."
      preselectedCourse="Scrum Master Basis / Beginner"
      relatedTraining={relatedTraining}
    />
  );
}