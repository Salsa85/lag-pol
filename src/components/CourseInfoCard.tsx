interface CourseInfoCardProps {
  courseName: string;
  price?: string;
  startDate?: string;
  duration?: string;
  locations?: string;
  rating?: number;
  certification?: string;
  className?: string;
}

export default function CourseInfoCard({
  courseName,
  price,
  startDate,
  duration,
  locations,
  rating = 4.8,
  certification,
  className = ""
}: CourseInfoCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor"/>
                <stop offset="50%" stopColor="transparent"/>
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
      <div className="flex items-start space-x-6">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div className="text-center mt-2">
            <span className="text-sm font-semibold text-primary-600">{courseName}</span>
          </div>
        </div>

        {/* Course Details */}
        <div className="flex-1 space-y-3">
          {price && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Prijs:</span>
              <span className="text-lg font-bold text-primary-600 underline">{price}</span>
            </div>
          )}
          {startDate && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Start:</span>
              <span className="text-gray-900 underline">{startDate}</span>
            </div>
          )}
          {duration && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Duur:</span>
              <span className="text-gray-900">{duration}</span>
            </div>
          )}
          {locations && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Locaties:</span>
              <span className="text-gray-900 underline">{locations}</span>
            </div>
          )}
          {certification && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Certificaat:</span>
              <span className="text-gray-900 font-semibold">{certification}</span>
            </div>
          )}
          
          {/* Reviews */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-gray-600 font-medium">Reviews:</span>
            <div className="flex items-center space-x-2">
              {renderStars(rating)}
              <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
