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
        href: "/product-owner",
        text: "Product Owner Basis",
        variant: "accent" as const
      },
      {
        href: "/scrum-master",
        text: "Scrum Master Training",
        variant: "primary" as const
      },
      {
        href: "/agile-coach",
        text: "Agile Coach Opleiding",
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
      heroTitle="Product Owner Vervolg Training"
      heroSubtitle="Ontwikkel je tot ervaren procesverantwoordelijke en strategische waardecreërende leider. Leer hoe je waarde helder kunt definiëren, meten en vergroten binnen een complexe en dynamische omgeving."
      preselectedCourse="Product Owner Vervolg / Gevorderd"
      relatedTraining={relatedTraining}
    />
  );
}
