import Link from 'next/link';

const solutions = [
  {
    name: 'Data Processing Suite',
    description:
      'Streamline your AI data pipeline with automated data processing, cleaning, and preparation tools.',
    features: [
      'Automated data cleaning',
      'Format standardization',
      'Data validation',
      'Quality assurance'
    ],
    benefits: [
      '80% reduction in data prep time',
      '90% improvement in data quality',
      '70% faster AI model deployment'
    ],
    industries: ['High Tech', 'Healthcare', 'Banking']
  },
  {
    name: 'Agent Assistant',
    description:
      'Empower your support agents with real-time assistance, knowledge access, and performance insights.',
    features: [
      'Real-time agent guidance',
      'Knowledge base integration',
      'Performance analytics',
      'Training recommendations'
    ],
    benefits: [
      '60% reduction in resolution time',
      '40% increase in first-call resolution',
      '50% reduction in training time'
    ],
    industries: ['B2B Tech Support', 'Healthcare', 'Telecom']
  },
  {
    name: 'Communication Recorder',
    description:
      'Capture, analyze, and optimize all customer interactions with enterprise-grade recording and analytics.',
    features: [
      'Multi-channel recording',
      'Compliance monitoring',
      'Quality assurance',
      'Performance analytics'
    ],
    benefits: [
      '90% reduction in compliance violations',
      '70% faster quality reviews',
      '80% improvement in agent performance'
    ],
    industries: ['Banking', 'Telecom', 'Healthcare']
  },
  {
    name: 'Conversation Intelligence',
    description:
      'Transform customer interactions into actionable insights with GenAI-powered conversation analysis.',
    features: [
      'Sentiment analysis',
      'Topic detection',
      'Customer journey mapping',
      'Predictive analytics'
    ],
    benefits: [
      '45% increase in customer satisfaction',
      '60% reduction in churn',
      '70% improvement in sales conversion'
    ],
    industries: ['High Tech', 'Travel & Hospitality', 'Banking']
  },
  {
    name: 'Knowledge Manager',
    description:
      'Centralize and optimize your organization&apos;s knowledge with AI-powered content management.',
    features: [
      'Content organization',
      'Smart search',
      'Version control',
      'Access management'
    ],
    benefits: [
      '50% reduction in content creation time',
      '70% faster information retrieval',
      '90% improvement in content accuracy'
    ],
    industries: ['B2B Tech Support', 'Healthcare', 'High Tech']
  },
  {
    name: 'Sales Assistant',
    description:
      'Boost sales performance with AI-powered tools for research, qualification, and deal management.',
    features: [
      'Lead qualification',
      'Deal intelligence',
      'Competitor analysis',
      'Sales coaching'
    ],
    benefits: [
      '45% increase in sales productivity',
      '60% reduction in research time',
      '70% improvement in win rates'
    ],
    industries: ['High Tech', 'B2B Tech Support', 'Banking']
  },
  {
    name: 'Virtual Assistant',
    description:
      'Deliver exceptional self-service experiences with intelligent virtual assistants.',
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Contextual understanding',
      'Seamless handoff'
    ],
    benefits: [
      '60% reduction in response time',
      '45% increase in self-service resolution',
      '50% improvement in customer satisfaction'
    ],
    industries: ['Travel & Hospitality', 'Healthcare', 'Banking']
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
              Ready-to-Deploy Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Our pre-built solution bundles address specific business challenges
              with proven results. Each solution can be customized to your unique
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto"
              >
                Book a Demo
              </Link>
              <Link
                href="/use-cases"
                className="btn-secondary w-full sm:w-auto"
              >
                View Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="card group hover:border-emerald-200 flex flex-col h-full bg-white/50 backdrop-blur-sm"
              >
                <div className="flex-grow p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
                    {solution.name}
                  </h2>
                  <p className="text-emerald-700 mb-6">{solution.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-emerald-700"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Measurable Benefits
                    </h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-emerald-700"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          <span className="text-sm sm:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Ideal For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, industryIndex) => (
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

                <div className="p-6 sm:p-8 border-t border-emerald-100">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-white border-emerald-200">
              <div className="text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4 sm:mb-6">
                  Need a Custom Solution?
                </h2>
                <p className="text-base sm:text-lg text-emerald-700 mb-8 sm:mb-12 max-w-2xl mx-auto">
                  We can create a tailored solution that perfectly matches your
                  business requirements. Let&apos;s discuss your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="/industries"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    View Industries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 