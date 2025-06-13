import Link from 'next/link';

const services = [
  {
    name: 'RAG-as-a-Service',
    description: 'Transform your business with enterprise-grade Retrieval Augmented Generation solutions.',
    features: [
      'Custom knowledge base integration',
      'Advanced RAG capabilities',
      'Enterprise-grade security',
      '24/7 support'
    ],
    benefits: [
      'Quick access to company knowledge',
      'Instant answers to customer queries',
      'Accelerated research capabilities'
    ],
    industries: ['Legal', 'Healthcare', 'Financial Services', 'SaaS'],
    link: '/services/rag-as-a-service'
  },
  {
    name: 'AI Agents',
    description: 'Deploy intelligent AI agents to automate and enhance your business operations.',
    features: [
      'Custom AI agent development',
      'Multi-agent orchestration',
      'Process automation',
      'Real-time monitoring'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual workload',
      'Enhanced decision-making'
    ],
    industries: ['Manufacturing', 'Healthcare', 'Finance', 'Technology'],
    link: '/services/ai-agents'
  },
  {
    name: 'MVP as a Service',
    description: 'Launch your product faster with our comprehensive MVP development service.',
    features: [
      'Rapid prototyping',
      'Market validation',
      'Scalable architecture',
      'User feedback integration'
    ],
    benefits: [
      'Faster time to market',
      'Reduced development costs',
      'Validated product-market fit'
    ],
    industries: ['Startups', 'SaaS', 'E-commerce', 'FinTech'],
    link: '/services/mvp-as-a-service'
  },
  {
    name: 'Custom AI Model Development',
    description: 'Build cutting-edge AI models tailored to your specific business needs.',
    features: [
      'State-of-the-art algorithms',
      'MLOps integration',
      'Model optimization',
      'Continuous monitoring'
    ],
    benefits: [
      'Competitive advantage',
      'Improved accuracy',
      'Scalable solutions'
    ],
    industries: ['Healthcare', 'Finance', 'Manufacturing', 'Technology'],
    link: '/services/custom-ai-models'
  },
  {
    name: 'LLM Integration & Customization',
    description: 'Integrate and customize large language models to enhance your operations.',
    features: [
      'GPT-4 integration',
      'Custom fine-tuning',
      'Multi-language support',
      'Cloud deployment'
    ],
    benefits: [
      'Enhanced customer support',
      'Automated content generation',
      'Improved text analysis'
    ],
    industries: ['Customer Support', 'Marketing', 'Education', 'Legal'],
    link: '/services/llm-integration'
  },
  {
    name: 'AI Research & Development',
    description: 'Explore cutting-edge AI research and frontier technologies.',
    features: [
      'AGI research',
      'Novel algorithm development',
      'Prototype development',
      'Experimental design'
    ],
    benefits: [
      'Technology leadership',
      'Innovation acceleration',
      'Future-proof solutions'
    ],
    industries: ['Research', 'Technology', 'Healthcare', 'Finance'],
    link: '/services/ai-research'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help businesses transform and grow.
            From AI-powered automation to custom software development, we've got you covered.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold text-emerald-900 mb-4">
                  {service.name}
                </h2>
                <p className="text-emerald-700 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-emerald-800 mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-emerald-700">
                        <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-emerald-800 mb-2">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-emerald-700">
                        <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-800 mb-2">Ideal For</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, industryIndex) => (
                      <span
                        key={industryIndex}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                Choose from our comprehensive suite of AI services and start your transformation journey today.
                Let&apos;s build your future together.
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
                  href="/use-cases"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View Use Cases
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