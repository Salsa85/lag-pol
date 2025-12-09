import { Metadata } from 'next';
import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { poPlusSmCourse, poPlusSmMetadata } from '../../data/courses';

export const metadata: Metadata = {
  title: poPlusSmMetadata.title,
  description: poPlusSmMetadata.description,
  keywords: poPlusSmMetadata.keywords,
  openGraph: poPlusSmMetadata.openGraph,
};

export default function PoPlusSmPage() {
  const courses = [poPlusSmCourse];

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
      heroTitle="Product Owner Basis & Samenwerking Scrum Master"
      heroSubtitle="Ontwikkel je tot richtinggevende en waardegedreven leider met faciliterend leiderschap. Leer hoe je als Product Owner teams kunt helpen om effectiever samen te werken en betere resultaten te behalen. Vervolgens ga je aan de slag met je Scrum Master om dezelfde taal te leren spreken en te zorgen dat jullie hetzelfde beeld hebben van jullie rol in het team"
      preselectedCourse="PO + SM / Beginner"
      relatedTraining={relatedTraining}
    />
  );
}

