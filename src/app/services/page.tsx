import Link from 'next/link';
import TransformCTA from '@/components/sections/TransformCTA';

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
    link: '/services/rag-as-a-service',
    icon: (
      <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
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
    link: '/services/ai-agents',
    icon: (
      <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
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
    link: '/services/mvp-as-a-service',
    icon: (
      <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
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
    link: '/services/training',
    icon: (
      <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
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
    link: '/services/custom-apps',
    icon: (
      <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center py-20 sm:py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 sm:mb-8">
              Our Services
              <br />
              <span className="text-emerald-600">Comprehensive AI Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help businesses transform and grow.
              From AI-powered automation to custom software development, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="card p-8 hover-lift group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-center mb-6">
                    {service.icon}
                    <h2 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-700">
                      {service.name}
                    </h2>
                    <p className="text-emerald-700 text-center mb-6">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-800 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-emerald-700">
                          <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-800 mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-emerald-700">
                          <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-sm font-semibold text-emerald-800 mb-3">Ideal For</h3>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <TransformCTA
        variant="light"
        title="Ready to Transform Your Business?"
        description="Choose from our comprehensive suite of AI services and start your transformation journey today. Let&apos;s build your future together."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Use Cases"
        secondaryButtonLink="/use-cases"
      />
    </div>
  );
} 