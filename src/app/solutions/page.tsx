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
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ready-to-Deploy Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pre-built solution bundles address specific business challenges
            with proven results. Each solution can be customized to your unique
            requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.name}
              </h2>
              <p className="text-gray-600 mb-6">{solution.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
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
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Measurable Benefits
                </h3>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
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
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Ideal For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((industry, industryIndex) => (
                    <span
                      key={industryIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Solution Details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-8">
            We can create a tailored solution that perfectly matches your
            business requirements.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full border border-blue-200 hover:border-blue-300 transition-colors text-lg font-medium inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 