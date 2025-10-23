import Link from 'next/link';

interface RelatedTrainingSectionProps {
  title: string;
  description: string;
  links: {
    href: string;
    text: string;
    variant: 'primary' | 'accent' | 'gray';
  }[];
}

export default function RelatedTrainingSection({ title, description, links }: RelatedTrainingSectionProps) {
  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case 'accent':
        return 'bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl';
      case 'primary':
        return 'bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl';
      case 'gray':
      default:
        return 'bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200';
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-1 bg-scrum-500 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-xl text-gray-600 mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className={getButtonClasses(link.variant)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
