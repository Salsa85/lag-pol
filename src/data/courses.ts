export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  detailedDescription: string;
  topics: string[];
  target: string;
  uniqueFeatures: string[];
  details: {
    duration: string;
    certificate: string;
    trainers: string;
    materials: string;
  };
}

export interface CourseMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
  };
}

export const scrumMasterCourse: Course = {
  id: 'basis',
  title: 'Scrum Master Basis',
  duration: '2 dagen van 3,5 uur',
  description: 'In deze training ontwikkelen startende Scrum Masters de vaardigheden om één of meerdere teams te begeleiden in een veeleisende praktijk. Vaak doen ze dat deels vanuit een meewerkende rol.',
  detailedDescription: 'Ze leren hoe agile werken niet alleen wordt toegepast, maar duurzaam toegepast wordt in de samenwerking, structuur en cultuur van het team. De nadruk ligt op praktisch handelen, reflecteren en het versterken van teamdynamiek. Deelnemers groeien in hun rol, zodat ze uiteindelijk zelfstandig en met vertrouwen teams kunnen begeleiden, zonder afhankelijk te zijn van externe begeleiding.',
  topics: [
    'Introductie Agile mindset en waarden',
    'Scrum theorie en simulatieoefeningen',
    'Uitleg van Scrum framework; overbrengen op collega\'s van het basisteam',
    'Omgaan met procesmatige valkuilen',
    'Communicatiestijlen en omgaan met weerstand',
    'Faciliteren van retrospectives, reviews, stand-ups, etc.',
    'Ondersteuning van de Product Owner (backlog, prioritering)'
  ],
  target: 'Startende Scrum Masters die teams willen begeleiden in een veeleisende praktijk',
  uniqueFeatures: [
    'Deelnemers faciliteren het meeste zelf (Check-in, Retrospective, Daily etc.)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
  ],
  details: {
    duration: '2 dagen',
    certificate: 'PSM1',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met coachkaarten en markers, overzichtskaarten met termen en schema\'s'
  }
};

export const productOwnerCourse: Course = {
  id: 'basis',
  title: 'Product Owner Basis',
  duration: '2 dagen van 3,5 uur',
  description: 'In deze training ontwikkelen Product Owners zich tot richtinggevende en waardegedreven leiders binnen hun team. Ze leren hoe wendbaar werken geen doel op zich is, maar een middel om sneller en beter bij te dragen aan resultaten die er écht toe doen.',
  detailedDescription: 'De focus ligt op het herkennen en realiseren van waarde in een complexe praktijk, waar prioriteiten constant verschuiven en samenwerken cruciaal is. Denk aan het versnellen van besluitvorming, het vergroten van eigenaarschap en het versterken van vertrouwen, binnen én buiten het team.',
  topics: [
    'Introductie Agile mindset en waarden',
    'Scrum theorie en simulatieoefeningen',
    'Visie op toegevoegde waarde vertalen naar de backlog',
    'Faciliterend leiderschap, samenwerken met Scrum Master: rolduidelijkheid',
    'Stakeholder management en Backlog Refinement',
    'Forecasting en sprint planning en gebruik story en features points',
    'Effectief backlog-beheer en prioritering',
    'Feedback geven en teamfocus creëren'
  ],
  target: 'Product Owners die richtinggevende en waardegedreven leiders willen worden',
  uniqueFeatures: [
    'Deelnemers werken aan hun eigen Product Backlog (praktijk gaat altijd boven theorie)',
    'Deelnemers brengen hun eigen stakeholders in beeld (dus géén simulatie)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
  ],
  details: {
    duration: '2 dagen',
    certificate: 'PSPO1',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met markers en kaarten met termen en schema\'s'
  }
};

export const productOwnerVervolgCourse: Course = {
  id: 'vervolg',
  title: 'Product Owner Vervolg',
  duration: '2 dagen van 3,5 uur',
  description: 'In onze aanpak draait wendbaar werken niet alleen om snelheid en flexibiliteit, maar vooral om het creëren van waarde binnen een complexe en dynamische omgeving. De rol die de Product Owner vervult is niet simpelweg het organiseren van taken, maar juist het strategisch sturen van ontwikkelingen.',
  detailedDescription: 'In deze training ontwikkelen deelnemers zich tot ervaren procesverantwoordelijke en leggen ze helder uit waarom deze rol onmisbaar is. Zij ontdekken hoe het werken vanuit waarde en het stimuleren van innovatie elkaar versterkt. Ze leren waarde helder te definiëren, te meten en te vergroten. Dit gebeurt door experimenten, meetbare doelen en impactanalyse. Daarnaast ontwikkelen deelnemers communicatie- en visualisatietechnieken die collega\'s motiveren om effectiever samen te werken en betere resultaten te bereiken.',
  topics: [
    'PO-bestaansrecht en context duiden (o.a. via Cynefin)',
    'Visie, waarde en empirisch werken verbinden',
    'Stakeholderdialoog: van mening naar gedeelde waarde',
    'Productinnovatie en teamleren als continue cyclus',
    'Communicatievaardigheden die inspireren en beïnvloeden',
    'Agile Roadmapping, forecasting en waarde meten',
    'Samenwerking met Scrum Master en Developers versterken',
    'Leiderschap en innovatiekracht ontwikkelen'
  ],
  target: 'Ervaren Product Owners die zich willen ontwikkelen tot strategische waardecreërende leiders',
  uniqueFeatures: [
    'Aandacht voor overlap tussen de rol van PO en SM',
    'Deelnemers werken aan hun eigen Product Backlog (praktijk gaat altijd boven theorie)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht'
  ],
  details: {
    duration: '2 dagen, 3,5 uur per dagdeel',
    certificate: 'PSPO2',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met canvassen, visualisaties en templates (vision boards, impact maps, PDCA-schema\'s, Roadmaps, KPI-formats)'
  }
};

export const productOwnerVervolgMetadata: CourseMetadata = {
  title: 'Product Owner Vervolg Training - Politie',
  description: 'Ontwikkel je tot ervaren procesverantwoordelijke en strategische waardecreërende leider. 2 dagen praktijkgerichte Product Owner vervolg training speciaal voor de politie.',
  keywords: [
    'Product Owner vervolg training politie',
    'Product Owner gevorderd opleiding',
    'PSPO2 certificering',
    'strategische waardecreatie politie',
    'productinnovatie politie'
  ],
  openGraph: {
    title: 'Product Owner Vervolg Training - Politie',
    description: 'Ontwikkel je tot ervaren procesverantwoordelijke en strategische waardecreërende leider. 2 dagen praktijkgerichte Product Owner vervolg training.',
    type: 'website',
  },
};

export const scrumMasterMetadata: CourseMetadata = {
  title: 'Scrum Master Basis Training - Politie',
  description: 'Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk. 2 dagen praktijkgerichte Scrum Master training speciaal voor de politie.',
  keywords: [
    'Scrum Master training politie',
    'Agile training politie',
    'Scrum basis opleiding',
    'PSM1 certificering',
    'team begeleiding politie'
  ],
  openGraph: {
    title: 'Scrum Master Basis Training - Politie',
    description: 'Ontwikkel vaardigheden om teams te begeleiden in een veeleisende praktijk. 2 dagen praktijkgerichte Scrum Master training.',
    type: 'website',
  },
};

export const productOwnerMetadata: CourseMetadata = {
  title: 'Product Owner Basis Training - Politie',
  description: 'Ontwikkel je tot richtinggevende en waardegedreven leider. 2 dagen praktijkgerichte Product Owner training speciaal voor de politie.',
  keywords: [
    'Product Owner training politie',
    'Product Owner basis opleiding',
    'PSPO1 certificering',
    'waarde creatie politie',
    'stakeholder management'
  ],
  openGraph: {
    title: 'Product Owner Basis Training - Politie',
    description: 'Ontwikkel je tot richtinggevende en waardegedreven leider. 2 dagen praktijkgerichte Product Owner training.',
    type: 'website',
  },
};
