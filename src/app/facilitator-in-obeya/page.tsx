import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { facilitatorInObeyaCourse, facilitatorInObeyaMetadata } from '../../data/courses';
import { Metadata } from 'next';

export const metadata: Metadata = facilitatorInObeyaMetadata;

export default function FacilitatorInObeyaPage() {
  const courses = [facilitatorInObeyaCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/leading-with-obeya",
        text: "Leading with Obeya",
        variant: "primary" as const
      },
      {
        href: "/agile-leiderschap",
        text: "Agile Leiderschap Opleiding",
        variant: "primary" as const
      },
      {
        href: "/agile-coach",
        text: "Agile Coach Opleiding",
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
      heroTitle="Facilitator in Obeya"
      heroSubtitle="Leer hoe je Obeya teams effectief kunt faciliteren. Ontwikkel vaardigheden om teams te begeleiden in het werken met Obeya en de dialoog goed te voeren."
      preselectedCourse="Facilitator in Obeya"
      relatedTraining={relatedTraining}
    />
  );
}
