import { Metadata } from 'next';
import CoursePageLayout from '../../components/layouts/CoursePageLayout';
import { Course } from '../../data/courses';

export const metadata: Metadata = {
  title: 'Scrum Master Verdiept Training - Politie',
  description: 'Verdiep je Scrum Master vaardigheden voor ervaren professionals. 2 dagen gevorderde training voor complexe teamdynamiek en organisatieontwikkeling.',
  keywords: [
    'Scrum Master vervolg politie',
    'Agile gevorderd training',
    'Scrum Master gevorderd',
    'PSM2 certificering',
    'teamdynamiek politie'
  ],
  openGraph: {
    title: 'Scrum Master Verdiept Training - Politie',
    description: 'Verdiep je Scrum Master vaardigheden voor ervaren professionals. 2 dagen gevorderde training.',
    type: 'website',
  },
};

export default function ScrumMasterVervolgPage() {
  const courses: Course[] = [
    {
      id: 'gevorderd',
      title: 'Scrum Master Verdiept',
      duration: '2 dagen van 3,5 uur',
      description:
        'Deze training is bedoeld voor Scrum Masters met ervaring in meerdere teams die hun rol willen verdiepen. Deelnemers versterken hun vaardigheden in coachen, faciliteren, teamdynamiek, stakeholdermanagement en organisatieontwikkeling.',
      detailedDescription:
        'Zij zorgen voor meer wendbaarheid binnen en buiten de teams. De focus ligt op het ontwikkelen tot een stevige Scrum Master: iemand die effectief omgaat met weerstand, ondermijning en conflicten, en tegelijk betrokkenheid en productiviteit verhoogt. Ook is er aandacht voor het begeleiden van Product Owners, het beïnvloeden van management en het bouwen aan een wendbare organisatiecultuur.',
      topics: [
        'Herkenning en verdieping van succesvolle Scrum Master competenties',
        'Scrum-waarden inzetten als besluit- en coachingkompas',
        'Praktisch trainen van coachings-, luister- en feedbackvaardigheden',
        'Werken met conflicten, weerstand en ondermijning',
        "Ondersteunen van PO's en developers bij samenwerking, refinement en waardecreatie",
        'Omgevingen en stakeholders Agile bewust maken en betrekken',
        'Oefenen van interventies op team- en organisatieniveau',
        'Reflecteren op eigen rol en gedragsrepertoire',
      ],
      target:
        'Scrum Masters met ervaring in meerdere teams die hun rol willen verdiepen',
      uniqueFeatures: [
        "Aandacht voor weerstand in 'het echte leven'",
        'Deelnemers faciliteren het meeste zelf (Check-in, Retrospective, Daily etc.)',
        'Slide-vrij (Powerpoint-vrij)',
        'Ontwikkeld o.b.v. Politie-context',
        'Begrijpelijke metaforen uit het dagelijks leven',
        "Gebaseerd op 'Training from the Back of the Room': deelnemers leren actief en ervaringsgericht",
      ],
      details: {
        duration: '2 dagen, 3,5 uur per dagdeel',
        certificate: 'Bewijs van deelname',
        trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
        materials:
          'Toolkit met geavanceerde werkvormen, stakeholder- en teamdynamiekanalyses, coach formats',
      },
      practicalDetails: {
        additionalInfo: 'Na afloop van de training ontvang je een certificaat van deelname. Daarnaast ontvang je het trainingsmateriaal digitaal.\n\nBij de training zit de mogelijkheid om een Professional Scrum Master (PSM2) examen te doen. Het examen is in het Engels en niet verplicht voor de afronding van deze training. Wil je meer weten over dit certificaat neem dan contact op met ons.'
      },
      price: {
        basePrice: 1414,
        baseParticipants: 5,
        maxParticipants: 12,
        note: 'Wanneer er meer deelnemers zijn wordt de prijs lager, deze wordt namelijk doorgerekend voor het aantal deelnemers.'
      }
    },
  ];

  return (
    <CoursePageLayout
      courses={courses}
      heroTitle="Scrum Master Verdiept Training"
      heroSubtitle="Verdiep je Scrum Master vaardigheden en ontwikkel je tot een stevige Scrum Master die effectief omgaat met weerstand, conflicten en organisatieontwikkeling."
      preselectedCourse="Scrum Master Verdiept / Gevorderd"
    />
  );
}
