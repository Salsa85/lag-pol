import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { agileCoachCourse, agileCoachMetadata } from '../../data/courses';
import { Metadata } from 'next';

export const metadata: Metadata = agileCoachMetadata;

export default function AgileCoachPage() {
  const courses = [agileCoachCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/scrum-master",
        text: "Scrum Master Training",
        variant: "primary" as const
      },
      {
        href: "/product-owner",
        text: "Product Owner Training",
        variant: "primary" as const
      },
      {
        href: "/agile-leiderschap",
        text: "Agile Leiderschap Opleiding",
        variant: "accent" as const
      },
      {
        href: "/",
        text: "Alle trainingen",
        variant: "gray" as const
      }
    ]
  };

  return (
    <CoursePageLayout
      courses={courses}
      heroTitle="Agile Coach Training"
      heroSubtitle="Word een ervaren Agile Coach die duurzame verandering kan begeleiden. Leer hoe je teams en organisaties kunt helpen om wendbaar te worden en betere resultaten te behalen."
      preselectedCourse="Agile Coach Opleiding"
      relatedTraining={relatedTraining}
    />
  );
}
