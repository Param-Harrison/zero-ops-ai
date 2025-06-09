import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Symbolic Logo */}
      <div className="relative w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity={1} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={1} />
            </linearGradient>
          </defs>
          
          {/* Background circle */}
          <circle cx="16" cy="16" r="16" fill="url(#logoGrad)"/>
          
          {/* Infinity symbol representing zero operations */}
          <path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" 
                stroke="white" 
                strokeWidth="2.5" 
                fill="none"/>
          
          {/* AI circuit pattern */}
          <path d="M8 8l4 4M24 8l-4 4M8 24l4-4M24 24l-4-4" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round"/>
          
          {/* Central dot representing AI core */}
          <circle cx="16" cy="16" r="2" fill="white"/>
        </svg>
      </div>
      
      {/* Text Logo */}
      <span className="text-2xl font-bold">
        <span className="gradient-text">ZeroOps</span>
        <span className="text-emerald-600">AI</span>
      </span>
    </Link>
  );
} 