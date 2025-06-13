import Link from 'next/link';

const features = [
  {
    name: 'Enterprise-Grade Infrastructure',
    description: 'Built on scalable, secure, and reliable infrastructure designed for enterprise workloads.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    name: 'Custom Knowledge Base Integration',
    description: 'Seamlessly integrate your company&apos;s documents, databases, and knowledge bases.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    name: 'Advanced RAG Capabilities',
    description: 'State-of-the-art retrieval and generation capabilities powered by the latest AI models.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    name: 'Security & Compliance',
    description: 'Enterprise-grade security with compliance certifications and data protection measures.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    name: 'Customizable Solutions',
    description: 'Tailored RAG solutions that fit your specific business needs and use cases.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance from our expert team.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
  }
];

const useCases = [
  {
    name: 'Enterprise Knowledge Management',
    description: 'Enable employees to quickly find and access relevant information from your company&apos;s knowledge base.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    name: 'Customer Support',
    description: 'Provide instant, accurate answers to customer queries using your product documentation and support materials.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  },
  {
    name: 'Research & Development',
    description: 'Accelerate research by quickly finding relevant information from scientific papers and technical documentation.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  }
];

export default function RAGService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">RAG-as-a-Service</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Transform your business with enterprise-grade Retrieval Augmented Generation solutions. 
            Our RAG-as-a-Service platform enables you to build, deploy, and scale AI applications 
            that understand and utilize your company&apos;s knowledge base.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 mb-8 text-center">
            Enterprise-Grade Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:border-emerald-200">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={feature.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-emerald-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-emerald-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-emerald-900 mb-8 text-center">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card group hover:border-emerald-200">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={useCase.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-emerald-900">
                      {useCase.name}
                    </h3>
                  </div>
                  <p className="text-emerald-700">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center py-20 sm:py-24">
              <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6 sm:mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl sm:text-2xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
                Get started with our enterprise RAG solution and unlock the full potential of your knowledge base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Schedule a Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Explore All Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 