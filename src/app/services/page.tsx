import Link from 'next/link';

const services = [
  {
    name: 'RAG-as-a-Service',
    description: 'Transform your business with practical Retrieval Augmented Generation solutions that make your company knowledge instantly accessible.',
    features: [
      'Advanced knowledge base integration',
      'Intelligent document processing',
      'Semantic search optimization',
      'Real-time API integration',
      'Custom embedding models',
      'Multi-format support'
    ],
    benefits: [
      'Faster access to company information',
      'Improved customer support',
      'Efficient research capabilities',
      'Enhanced decision making',
      'Reduced training time',
      'Better knowledge retention'
    ],
    industries: ['Legal', 'Healthcare', 'Financial Services', 'SaaS', 'Manufacturing', 'Education'],
    link: '/services/rag-as-a-service'
  },
  {
    name: 'AI Agents',
    description: 'Deploy practical AI agents that automate routine tasks and enhance your business operations.',
    features: [
      'Intelligent task automation',
      'Process optimization',
      'Advanced data processing',
      'Workflow integration',
      'Multi-agent orchestration',
      'Custom agent development'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual work',
      'Better data handling',
      'Improved accuracy',
      '24/7 operation',
      'Scalable automation'
    ],
    industries: ['Manufacturing', 'Healthcare', 'Finance', 'Technology', 'Retail', 'Logistics'],
    link: '/services/ai-agents'
  },
  {
    name: 'MVP as a Service',
    description: 'Launch your product faster with our streamlined MVP development service.',
    features: [
      'Rapid prototyping',
      'Market validation',
      'User feedback integration',
      'Scalable architecture',
      'Continuous deployment',
      'Performance monitoring'
    ],
    benefits: [
      'Faster time to market',
      'Cost-effective development',
      'Validated product-market fit',
      'Reduced development risk',
      'Early user feedback',
      'Foundation for scaling'
    ],
    industries: ['Startups', 'SaaS', 'E-commerce', 'FinTech', 'Healthcare', 'Education'],
    link: '/services/mvp-as-a-service'
  },
  {
    name: 'AI Training & Workshops',
    description: 'Empower your team with practical AI knowledge and skills through hands-on training.',
    features: [
      'Custom training programs',
      'Hands-on workshops',
      'Best practices implementation',
      'Technical deep-dives',
      'Use case development',
      'Integration guidance'
    ],
    benefits: [
      'Enhanced team capabilities',
      'Practical AI knowledge',
      'Better tool utilization',
      'Improved decision making',
      'Faster implementation',
      'Reduced dependency'
    ],
    industries: ['Technology', 'Education', 'Healthcare', 'Finance', 'Manufacturing', 'Retail'],
    link: '/services/training'
  },
  {
    name: 'Custom App Development',
    description: 'Build tailored applications that solve your specific business challenges.',
    features: [
      'Custom development',
      'Integration services',
      'UI/UX design',
      'Quality assurance',
      'Cloud deployment',
      'Maintenance & support'
    ],
    benefits: [
      'Tailored solutions',
      'Seamless integration',
      'Modern user experience',
      'Scalable architecture',
      'Ongoing support',
      'Future-proof technology'
    ],
    industries: ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education'],
    link: '/services/custom-apps'
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
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 mt-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center py-24 sm:py-32">
              <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-8 sm:mb-10">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl sm:text-2xl text-emerald-700 mb-10 sm:mb-14 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services and start your transformation journey today.
                Let&apos;s build your future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary text-lg px-10 py-5"
                >
                  Schedule a Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/use-cases"
                  className="btn-secondary text-lg px-10 py-5"
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