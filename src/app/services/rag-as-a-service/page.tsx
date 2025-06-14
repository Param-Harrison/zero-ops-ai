import Link from 'next/link';

const features = [
  {
    name: 'Advanced Knowledge Base Integration',
    description: 'Seamlessly connect and index your existing documents, databases, and knowledge bases with support for multiple formats including PDFs, Word docs, and structured data.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    name: 'Intelligent Document Processing',
    description: 'Process and index your documents with advanced NLP capabilities, including entity recognition, key phrase extraction, and semantic understanding.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    name: 'Semantic Search Optimization',
    description: 'Enhanced search capabilities with semantic understanding, context-aware results, and relevance scoring for more accurate information retrieval.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    name: 'Real-time API Integration',
    description: 'Easy integration with your existing systems through RESTful APIs, webhooks, and SDKs for seamless data flow and updates.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  },
  {
    name: 'Custom Embedding Models',
    description: 'Train and deploy custom embedding models tailored to your specific domain and use case for improved accuracy and relevance.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    name: 'Multi-format Support',
    description: 'Support for various document formats, including PDFs, Word docs, Excel spreadsheets, and structured data sources.',
    icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
  }
];

const useCases = [
  {
    name: 'Legal Document Search',
    description: 'Quickly find relevant case law, contracts, and legal documents with semantic search. Enable lawyers to access precedents and legal information efficiently.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    name: 'Healthcare Knowledge Base',
    description: 'Access medical guidelines, research papers, and patient information efficiently. Help healthcare professionals make informed decisions quickly.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  },
  {
    name: 'Product Documentation',
    description: 'Help customers and support staff find product information and solutions quickly. Reduce support tickets and improve customer satisfaction.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    name: 'Research & Development',
    description: 'Accelerate research by quickly finding relevant information from technical documentation, patents, and research papers.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    name: 'Financial Services',
    description: 'Enable quick access to financial regulations, compliance documents, and market research for better decision-making.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    name: 'Manufacturing Knowledge Base',
    description: 'Provide quick access to technical specifications, maintenance procedures, and quality control guidelines for manufacturing teams.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  }
];

export default function RAGService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
              RAG-as-a-Service
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in-delay">
              Transform your knowledge base into an intelligent, conversational interface. Our RAG solutions make your company&apos;s information instantly accessible, accurate, and actionable.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
              >
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center text-center w-full sm:w-auto px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-500"
              >
                View Use Cases
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section with Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our RAG Solution?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade information retrieval platform
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Lightning-Fast Access</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Sub-second response times for instant knowledge retrieval
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Enterprise Security</h3>
                <p className="mt-2 text-base text-emerald-700">
                  SOC 2 compliant infrastructure for data protection
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Seamless Integration</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Ready-to-use with your existing tools and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Gradient Cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for intelligent knowledge systems
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 hover-lift group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">{feature.name}</h3>
                  <p className="mt-2 text-base text-emerald-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section with Interactive Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Use Cases
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications of our RAG solutions
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-8 hover-lift group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">{useCase.name}</h3>
                  <p className="mt-2 text-base text-emerald-700">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to transform your knowledge base?
            </h2>
            <p className="mt-4 text-xl text-emerald-100 max-w-2xl mx-auto">
              Get started with RAG-as-a-Service today and unlock the power of intelligent information retrieval.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
              >
                Schedule a Demo
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-500"
              >
                View Use Cases
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 