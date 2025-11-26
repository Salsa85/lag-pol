import { Metadata } from 'next';
import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { productOwnerCourse, productOwnerMetadata } from '../../data/courses';

export const metadata: Metadata = {
  title: productOwnerMetadata.title,
  description: productOwnerMetadata.description,
  keywords: productOwnerMetadata.keywords,
  openGraph: productOwnerMetadata.openGraph,
};

export default function ProductOwnerPage() {
  const courses = [productOwnerCourse];

  const relatedTraining = {
    title: "Vervolg je Agile reis",
    description: "Ontdek andere trainingen die perfect aansluiten bij jouw ontwikkeling.",
    links: [
      {
        href: "/product-owner-vervolg",
        text: "Product Owner Verdiept",
        variant: "accent" as const
      },
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
      heroTitle="Product Owner Basis"
      heroSubtitle="Ontwikkel je tot richtinggevende en waardegedreven leider met faciliterend leiderschap. Leer hoe je als Product Owner teams kunt helpen om effectiever samen te werken en betere resultaten te behalen."
      preselectedCourse="Product Owner Basis / Beginner"
      relatedTraining={relatedTraining}
    />
  );
}