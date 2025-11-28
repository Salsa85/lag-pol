import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import ClientSignupSection from '../../components/ClientSignupSection';
import Footer from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Team Trajecten - Agile Trainingen voor de Politie',
  description: 'Naast individuele inschrijvingen voor Agile trainingen kunnen teams ook een teamtraject starten. We coachen teams om Agile te leren werken in hun eigen werkomgeving.',
  keywords: [
    'team trajecten politie',
    'Agile team coaching',
    'team training politie',
    'Agile implementatie',
    'team begeleiding'
  ],
  openGraph: {
    title: 'Team Trajecten - Agile Trainingen voor de Politie',
    description: 'Naast individuele inschrijvingen voor Agile trainingen kunnen teams ook een teamtraject starten.',
    type: 'website',
  },
};

export default function TeamTrajectenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation showMargin={false} />

      {/* Hero Section */}
      <HeroSection 
        title="Team trajecten"
        subtitle="Naast de individuele inschrijvingen voor een Agile training kan er ook een teamtraject gestart worden. Bij deze trajecten coachen we een team om Agile te leren werken in de eigen werkomgeving."
      />

      {/* Main Content */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="space-y-6">
            <div className="text-xl text-gray-600 leading-relaxed">
              Wanneer deze vraag leeft kunnen we langskomen om een offerte op maat te maken. Vaak starten we dan met een Triage Startbekwaamheid waarbij we in kaart brengen wat het doel precies is en wat er nodig is om Agile te gaan werken. Vervolgens kan het traject bestaan uit opleidingen voor specifieke deelnemers en coaching on the job.
            </div>
          </div>

          {/* Coaching on the job */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Coaching on the job</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              Dit helpt deelnemers om wat zij in de training leren, meteen goed toe te passen in hun dagelijkse werk op een specifieke situatie. De coach ondersteunt hen in de eerste periode, zodat nieuw gedrag sneller eigen wordt en werken op een wendbare manier vanzelfsprekender voelt. Dit geeft deelnemers meer zekerheid, duidelijkheid en vertrouwen in hun rol.

Deelnemers ervaren directe begeleiding bij uitdagingen die ze tegenkomen en krijgen praktische handvatten om hun werk slimmer te organiseren, samen beter besluiten te nemen en duidelijker met elkaar te communiceren. Hierdoor groeit het team sneller naar een effectieve, transparante en professionele manier van samenwerken.
            </div>
          </div>

          {/* Het opstarten van een team */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Het opstarten van een team</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              Nadat de Triage Startbekwaamheid zijn doorlopen worden eventuele Product Owners en Scrum Masters opgeleid en start het team met wendbaar werken. We spreken hiervoor coachingsmomenten af om in de werksituatie de invoer van Agile werken te begeleiden. Hierbij zorgen we ervoor dat PO&apos;s, SM&apos;s en Agile Coaches de vertaalslag naar de praktijk maken. We begeleiden hen hierbij vanaf de eerste stappen met hun team tot Agile werken de nieuwe manier van werken is geworden.
            </div>
          </div>

          {/* Voortdurende ontwikkeling */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Voortdurende ontwikkeling in de eerste sprints</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              De coach is in de afgesproken periode zichtbaar en beschikbaar. Deelnemers krijgen ondersteuning in hun overleggen, leren hoe zij samen problemen oplossen en oefenen met een gezonde manier van feedback geven. Dit helpt hen om nieuwe werkwijzen sneller op te pakken en onzekerheden weg te nemen. Deelnemers krijgen desgewenst persoonlijke coaching, waarin zij kunnen reflecteren op hun eigen aanpak en steun krijgen bij lastige situaties. Hierdoor groeit niet alleen het team, maar ook iedere professional individueel in vakmanschap en zelfvertrouwen.
            </div>
          </div>

          {/* Feedback op gedrag */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Feedback op gedrag</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              Feedback geven we op basis van gedrag, niet op basis van mening of stijl. We spiegelen welk effect gedrag heeft op een team, het proces en de resultaten. Dat kan soms haaks staan op persoonlijke intenties. Zo ontstaat bewustwording, wat nodig is voor duurzame verbetering. We baseren onze feedback op het Politiemanifest en de gedeelde kernwaarden.
            </div>
          </div>

          {/* De Agile Coach als vast contactpersoon */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">De Agile Coach als vast contactpersoon</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              Onze Agile Coaches zijn mensen die de politie omgeving goed leren kennen en hierin dus goed kunnen begeleiden. Ieder team krijgt vanuit ons 1 of 2 vaste trainers/coaches. Deze coaches bouwen een vertrouwensrelatie op met hun coachees in het team. De teamleden maken rechtstreeks met deze coaches afspraken voor coachmomenten. Agile Leads van de Politie zijn ook betrokken.
            </div>
          </div>

          {/* Voor doen, samen doen, zelf doen */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Voor doen, samen doen, zelf doen</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
{`Tijdens de vaste contactmomenten hanteren we de Shu-Ha-Ri principes:

Shu: We laten de teams en teamleden eerst de regels volgen (en daarmee ook onze coach). Onze coach doet vooral voor 'hoe het hoort' en doet stap naar voren.

Ha: Wanneer dit een routine is, dagen we ze uit om de regels te breken en uit de comfortzone te stappen en zo hun eigen regels te maken. Onze coach laat de teams nu vooral fouten maken en doet een stap opzij.

Ri: Het team leert nu aan andere teams uit 'hoe zij het doen'. Ze zijn een voorbeeld geworden voor anderen en zijn wellicht een nieuwe standaard. Na deze contactmomenten zijn Basisteams in staat om samen met de interne Scrum Masters en Agile Coaches vervolgstappen te zetten. Onze coach doet nu een stap naar achter en is op afroep beschikbaar.`}
            </div>
          </div>
        </div>
      </section>

      {/* Community investment note */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto bg-primary-50 border border-primary-100 rounded-3xl p-8">
          <div className="w-12 h-1 bg-primary-500 rounded-full mb-4"></div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Community vorming door Lean Agile Groep <span className="text-primary-500 text-base font-normal">(uitleg op Blue thema)</span>
          </h3>
          <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {`In het nieuwe contract is gevraagd om te investeren op leren & ontwikkelen met de hele Agile community.

Hierdoor zit in de prijs van training en coaching een kleine verplichte opslag zitten van 1%. Voor dit bedrag worden bijvoorbeeld extra bijeenkomsten, intervisie, workshops en leermomenten georganiseerd die iedereen kan bijwonen. Je wordt namelijk niet Agile of een goede Scrum master door een training te volgen. Het kost tijd en aandacht om je rol goed te kunnen uitvoeren of om met je team wendbaarder te ontwikkelen. Op deze manier wordt het leren naast je training laagdrempelig beschikbaar gemaakt.`}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <ClientSignupSection preselectedCourse="Team trajecten" variant="team" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

