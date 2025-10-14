export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  detailedDescription?: string;
  topics?: string[];
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

export const agileCoachCourse: Course = {
  id: 'agile-coach',
  title: 'Agile Coach Opleiding',
  description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden. Leer hoe je teams en organisaties kunt helpen om wendbaar te worden en betere resultaten te behalen.',
  duration: '8 dagdelen van 3,5 uur',
  detailedDescription: 'Een Agile Coach helpt teams met het toepassen van Agile in het werk. De nadruk ligt vooral op het coachingsaspect. Als Agile Coach leer je niet alleen een productievere omgeving te creëren, maar help je ook (Scrum) teams om alles uit zichzelf te halen en maak je ze bewust van hoe Agile het team kan helpen om tot betere resultaten te komen.',
  topics: [
    'Je introduceert of verbetert Agile methodieken en technieken',
    'Je brengt mensen in beweging om te veranderen',
    'Van de Lean filosofie de Agile principes doorvoeren binnen de gehele organisatie',
    'Werken op individueel, team-, afdeling- en managementniveau',
    'Aan de slag als Agile Coach in heel veel organisaties'
  ],
  target: 'Ervaren Scrum Masters, Product Owners en Agile professionals die teams willen begeleiden bij Agile transformaties',
  uniqueFeatures: [
    'Aandacht voor opschaling van wendbaar werken',
    'Competentie-gericht ("Kun je het?" i.p.v. "Weet je het?")',
    'Aandacht voor 1-op-1 coaching volgens de Coachingsboog van Lyssa Adkins',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '8 dagdelen, 3,5 uur per dagdeel',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met uitgebreide facilitatie materialen, markers en coachkaarten'
  }
};

export const agileLeiderschapCourse: Course = {
  id: 'agile-leiderschap',
  title: 'Agile Leiderschap Opleiding',
  description: 'Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. Leer hoe je als leidinggevende teams kunt helpen om effectiever samen te werken en betere resultaten te behalen.',
  duration: '3 dagdelen van 3,5 uur',
  detailedDescription: 'De Agile Leadership opleiding biedt leidinggevenden helderheid in nieuwe begrippen, rollen en verantwoordelijkheden. Tevens ontdekken zij hoe het leidinggeven aan agile professionals anders is dan aan traditionele professionals. Onze trainers combineren training en coaching en zijn zelf actief in transities op onder andere C-level. Zo ontstaat een goede mix van theorie en praktijk. Door de opleiding ontwikkelen leiders een mindset die past bij faciliterend leiderschap. Deze is gericht op vertrouwen, wendbaarheid en resultaat. Daarmee leggen we een stevig fundament onder een toekomstbestendige manier van werken, waarin leiders samen met teams waarde creëren voor organisatie én klant. Voor de Politie is deze opleiding van extra belang, gezien de -vanuit historie logische- hiërarchische aansturing niet altijd aansluit bij een veranderende werkomgeving.',
  topics: [
    'Agile leiderschap; wat levert het op?',
    'Van controle naar vertrouwen',
    'Faciliteren van zelforganiserende teams',
    'Ontwikkeling van zelfbewustzijn',
    'Leidinggevende vaardigheden in Agile context',
    'Coachen van Agile professionals'
  ],
  target: 'Leidinggevenden en managers die hun teams willen begeleiden in een Agile omgeving. Specifiek ontwikkeld voor de Politie waar hiërarchische aansturing niet altijd aansluit bij een veranderende werkomgeving.',
  uniqueFeatures: [
    'Aandacht voor zelfbewustzijn',
    'Deelnemers worden naast agile leiders betere leidinggevenden (aandacht voor leidinggevende vaardigheden)',
    'Slide-vrij (Powerpoint-vrij)',
    'Ontwikkeld o.b.v. Politie-context',
    'Begrijpelijke metaforen uit het dagelijks leven',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '3 dagdelen, 3,5 uur per dagdeel',
    certificate: 'Bewijs van deelname',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht',
    materials: 'Toolkit met leiderschapsmaterialen en coachkaarten'
  }
};

export const agileLeiderschapMetadata: CourseMetadata = {
  title: 'Agile Leiderschap Opleiding - Politie',
  description: 'Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. 3 dagdelen praktijkgerichte Agile Leiderschap training speciaal voor de politie.',
  keywords: [
    'Agile Leiderschap opleiding politie',
    'Agile Leadership training',
    'leiderschap politie',
    'agile management',
    'faciliterend leiderschap'
  ],
  openGraph: {
    title: 'Agile Leiderschap Opleiding - Politie',
    description: 'Ontwikkel je tot een wendbare leider die teams kan begeleiden in een veranderende wereld. 3 dagdelen praktijkgerichte Agile Leiderschap training.',
    type: 'website',
  },
};

export const leadingWithObeyaCourse: Course = {
  id: 'leading-with-obeya',
  title: 'Leading with Obeya',
  description: 'Leer hoe je als managementteam effectief kunt werken met Obeya. Ontwikkel vaardigheden om strategie naar tactiek te vertalen en teams te begeleiden naar betere resultaten.',
  duration: '4 dagdelen van 3,5 uur',
  detailedDescription: 'De Leading with Obeya team kick start opleiding is bedoeld voor MT\'s die met Obeya gaan werken. Als start wordt de theorie van Obeya uitgelegd. Vervolgens wordt het team begeleid om zelf een Obeya bord vorm te geven. Hierna wordt de Obeya dialoog gevoerd en wordt geoefend samen deze gesprekken te blijven voeren. Hierbij betrekken we, indien mogelijk, de facilitator. Zo is het team na de training uitgerust om met Obeya te werken. Onze trainers combineren training en coaching en zijn zelf actief in het implementeren van Obeya op alle organisatieniveaus. Zo ontstaat een krachtige mix van theorie en praktijk. De opleiding helpt leiders om strategie naar tactiek te vertalen en echt praktisch te maken: in de praktijk stuurbaar. Zo worden resultaten bereikt en wordt er bijgestuurd waar dat nodig is. Hierdoor worden teams enthousiast en krijgen ze het vertrouwen om zelf resultaten te behalen.',
  topics: [
    'Herkomst Obeya en theoretische kennis onderdelen: strategie, doelen, prestaties, taken en moeilijke problemen, LWO referentiemodel',
    'Inrichting Obeya voor eigen werksituatie en executie naar eigen team',
    'Toepassing Obeya: benodigde en invulling rollen en hoe werken we ermee als team?',
    'Voeren prestatie-dialoog en gedragsverandering naar sturen op proces en eigenaarschap',
    'SMART formuleren van OKR\'s en kort-cyclische doelen en sturen hierop',
    'Doorvertaling naar de rest van de organisatie'
  ],
  target: 'Managementteams (MT\'s) die met Obeya gaan werken. Specifiek ontwikkeld voor de Politie om strategie naar tactiek te vertalen en teams te begeleiden naar betere resultaten.',
  uniqueFeatures: [
    'Het werkend krijgen van de Obeya, specifiek per MT',
    'Ontwikkeld o.b.v. Politie-context',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '4 dagdelen, 3.5 uur per dagdeel met tijd tussen dag 1 en 2 voor toepassing',
    certificate: 'LCS certificering 1a',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht in de toepassing van Obeya',
    materials: 'Obeya toolkit en implementatie materialen'
  }
};

export const leadingWithObeyaMetadata: CourseMetadata = {
  title: 'Leading with Obeya - Politie',
  description: 'Leer hoe je als managementteam effectief kunt werken met Obeya. 4 dagdelen praktijkgerichte Obeya training speciaal voor de politie.',
  keywords: [
    'Leading with Obeya politie',
    'Obeya training',
    'management team training',
    'strategie naar tactiek',
    'LCS certificering'
  ],
  openGraph: {
    title: 'Leading with Obeya - Politie',
    description: 'Leer hoe je als managementteam effectief kunt werken met Obeya. 4 dagdelen praktijkgerichte Obeya training.',
    type: 'website',
  },
};

export const facilitatorInObeyaCourse: Course = {
  id: 'facilitator-in-obeya',
  title: 'Facilitator in Obeya',
  description: 'Leer hoe je Obeya teams effectief kunt faciliteren. Ontwikkel vaardigheden om teams te begeleiden in het werken met Obeya en de dialoog goed te voeren.',
  duration: '4 dagdelen van 3,5 uur',
  detailedDescription: 'Deze opleiding is bedoeld voor mensen die Obeya teams gaan faciliteren in het werken met Obeya. Als start wordt de theorie van Obeya uitgelegd en vervolgens wordt de rol van facilitator verheldert: het is meer dan een voorzitter van een overleg zijn. Er wordt geleerd hoe het team een Obeya opzet, welke technieken hiervoor zijn, hoe je het team leert de Obeya dialoog goed te voeren en er wordt geoefend dit te faciliteren. Facilitators leren eerst de lead te pakken en deze daarna over te geven aan het team. Zij doen dit d.m.v. Voordoen, Samen doen, Zelf doen. De facilitators oefenen direct in de praktijk en ze worden begeleid door ons. Onze trainers combineren training en coaching en zijn zelf actief in het implementeren van Obeya op alle organisatieniveaus. Zo ontstaat een krachtige mix van theorie en praktijk. De opleiding zorgt ervoor dat Obeya facilitators in staat zijn een MT te begeleiden om Leading with Obeya in de praktijk werkend te krijgen. Hierdoor worden teams enthousiast en krijgen zij het vertrouwen om dit uiteindelijk zelf te doen.',
  topics: [
    'Herkomst Obeya en theoretische kennis onderdelen: strategie, doelen, prestaties, taken en moeilijke problemen, LWO referentiemodel',
    'Rollen en routines bij de inrichting Obeya en executie naar eigen team',
    'Toepassing Obeya: benodigde en invulling rollen en hoe mensen in hun rol te zetten',
    'Voeren prestatie-dialoog en gedragsverandering bewerkstelligen: onderstroom en bovenstroom, mogelijke interventies en hoe in te zetten',
    'SMART formuleren van OKR\'s en kort-cyclische doelen en inzetten verbeteringen',
    'Faciliteren van Obeya dialoog en team begeleiding'
  ],
  target: 'Mensen die Obeya teams gaan faciliteren in het werken met Obeya. Specifiek ontwikkeld voor de Politie om teams te begeleiden in het implementeren van Obeya.',
  uniqueFeatures: [
    'Deelnemers leren een MT op proces te begeleiden i.p.v. op inhoud',
    'Deelnemers leren wat neutraliteit is: \'Wat in deze kamer gebeurt, blijft in deze kamer\'',
    'Ontwikkeld o.b.v. Politie-context',
    'Gebaseerd op \'Training from the Back of the Room\': deelnemers leren actief en ervaringsgericht door zelf te ontdekken, te doen en samen te werken, i.p.v. passief kennis te ontvangen'
  ],
  details: {
    duration: '4 dagdelen, 3.5 uur per dagdeel met tijd tussen dag 1 en 2 voor toepassing',
    certificate: 'LCS certificering 1b',
    trainers: '1 vaste trainer die deelnemers ook na de opleiding coacht in de toepassing van Obeya',
    materials: 'Obeya facilitator toolkit en implementatie materialen'
  }
};

export const facilitatorInObeyaMetadata: CourseMetadata = {
  title: 'Facilitator in Obeya - Politie',
  description: 'Leer hoe je Obeya teams effectief kunt faciliteren. 4 dagdelen praktijkgerichte Obeya facilitator training speciaal voor de politie.',
  keywords: [
    'Facilitator in Obeya politie',
    'Obeya facilitator training',
    'team faciliteren',
    'Obeya dialoog',
    'LCS certificering 1b'
  ],
  openGraph: {
    title: 'Facilitator in Obeya - Politie',
    description: 'Leer hoe je Obeya teams effectief kunt faciliteren. 4 dagdelen praktijkgerichte Obeya facilitator training.',
    type: 'website',
  },
};

export const agileCoachMetadata: CourseMetadata = {
  title: 'Agile Coach Opleiding - Politie',
  description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden. 8 dagdelen praktijkgerichte Agile Coach training speciaal voor de politie.',
  keywords: [
    'Agile Coach opleiding politie',
    'Agile Coach training',
    'ICAgile coaching',
    'team coaching politie',
    'agile transformatie'
  ],
  openGraph: {
    title: 'Agile Coach Opleiding - Politie',
    description: 'Word een ervaren Agile Coach die duurzame verandering kan begeleiden. 8 dagdelen praktijkgerichte Agile Coach training.',
    type: 'website',
  },
};
