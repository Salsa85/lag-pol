import DarkVeil from './DarkVeil';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  className = "" 
}: HeroSectionProps) {
  return (
    <section className={`relative text-white overflow-hidden py-24 flex items-center ${className}`}>
      {/* DarkVeil as background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 1 }}>
        <DarkVeil 
          hueShift={280}
          speed={1}
          noiseIntensity={0}
          scanlineIntensity={0.9}
          scanlineFrequency={0}
          warpAmount={1}
          resolutionScale={1.5}
        />
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            <span className="font-black italic tracking-wider text-scrum-400 drop-shadow-lg">
              {title.split(' ')[0]}
            </span>
            {' ' + title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
