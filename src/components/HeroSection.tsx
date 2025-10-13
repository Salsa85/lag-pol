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
    <section className={`md:rounded-2xl md:mx-5 relative text-white overflow-hidden py-24 flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-primary-500 ${className}`}>
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-scrum-500/20 via-transparent to-primary-500/20 blur-3xl"></div>
      {/* DarkVeil as background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.8 }}>
        <DarkVeil 
          hueShift={280}
          speed={0.5}
          noiseIntensity={0}
          scanlineIntensity={0}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-dark-900/60 z-10"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-scrum-400/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary-400/25 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-scrum-500/30 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-500/20 rounded-lg rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-scrum-600/25 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-18 h-18 bg-primary-600/20 rounded-lg rotate-12 animate-bounce"></div>
      </div>
      
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
