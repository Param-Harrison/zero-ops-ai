import Link from 'next/link';

interface TransformCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'light' | 'dark';
}

export default function TransformCTA({
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how our enterprise AI solutions can help you achieve your goals. Schedule a consultation with our experts today.",
  primaryButtonText = "Schedule a Consultation",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Use Cases",
  secondaryButtonLink = "/use-cases",
  variant = "light"
}: TransformCTAProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-emerald-600 to-emerald-700' : 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50'}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-16 md:py-20">
          {isDark && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 text-white mb-6 sm:mb-8">
              <span className="animate-pulse mr-2">✨</span>
              Start Your AI Journey
            </div>
          )}
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-emerald-900'}`}>
            {title}
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto ${isDark ? 'text-emerald-100' : 'text-emerald-700'}`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href={primaryButtonLink}
              className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                isDark 
                  ? 'bg-white text-emerald-600 hover:bg-emerald-50' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {primaryButtonText}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href={secondaryButtonLink}
              className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 ${
                isDark 
                  ? 'border-2 border-white text-white hover:bg-white/10' 
                  : 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              {secondaryButtonText}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 