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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Ready-to-Deploy Solutions
          </h1>
          <p className="section-subtitle">
            Our pre-built solution bundles address specific business challenges
            with proven results. Each solution can be customized to your unique
            requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200"
            >
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">
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
                        className="w-5 h-5 text-emerald-500 mr-2"
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
                      {feature}
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
                        className="w-5 h-5 text-emerald-500 mr-2"
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
                      {benefit}
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

              <div className="button-container">
                <Link
                  href="/contact"
                  className="btn-primary w-full"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="section-title">
            Need a Custom Solution?
          </h2>
          <p className="section-subtitle">
            We can create a tailored solution that perfectly matches your
            business requirements.
          </p>
          <div className="flex justify-center mt-8">
            <Link
              href="/contact"
              className="btn-primary w-auto"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 