import { Metadata } from 'next';
import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { productOwnerVervolgCourse, productOwnerVervolgMetadata } from '../../data/courses';

export const metadata: Metadata = {
  title: productOwnerVervolgMetadata.title,
  description: productOwnerVervolgMetadata.description,
  keywords: productOwnerVervolgMetadata.keywords,
  openGraph: productOwnerVervolgMetadata.openGraph,
};

export default function ProductOwnerVervolgPage() {
  const courses = [productOwnerVervolgCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/agile-leiderschap",
        text: "Agile Leiderschap Opleiding",
        variant: "primary" as const
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
      heroTitle="Product Owner Verdiept"
      heroSubtitle="Ontwikkel je tot ervaren procesverantwoordelijke en waardegedreven leider. Leer hoe je waarde helder kunt definiëren, meten en vergroten binnen een complexe en dynamische omgeving."
      preselectedCourse="Product Owner Verdiept / Gevorderd"
      relatedTraining={relatedTraining}
    />
  );
}
