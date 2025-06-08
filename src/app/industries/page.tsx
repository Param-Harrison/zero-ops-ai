import Link from 'next/link';

const industries = [
  {
    name: 'B2B Tech Support',
    description:
      'Enhance technical support operations with AI-powered tools for faster issue resolution and improved customer satisfaction.',
    challenges: [
      'Complex technical issue resolution',
      'High support ticket volume',
      'Knowledge management across teams',
      'Training and onboarding efficiency'
    ],
    solutions: [
      'Agent Assistant',
      'Knowledge Manager',
      'Virtual Assistant'
    ],
    metrics: [
      '60% reduction in resolution time',
      '40% increase in first-call resolution',
      '50% reduction in training time'
    ]
  },
  {
    name: 'Banking',
    description:
      'Transform banking operations with AI-powered solutions for compliance, customer service, and operational efficiency.',
    challenges: [
      'Regulatory compliance',
      'Customer service automation',
      'Fraud detection',
      'Document processing'
    ],
    solutions: [
      'Communication Recorder',
      'Conversation Intelligence',
      'Data Processing Suite'
    ],
    metrics: [
      '90% reduction in compliance violations',
      '70% faster customer query resolution',
      '80% reduction in fraud cases'
    ]
  },
  {
    name: 'Healthcare',
    description:
      'Improve patient care and operational efficiency while maintaining strict compliance with healthcare regulations.',
    challenges: [
      'Patient data management',
      'Regulatory compliance',
      'Staff training',
      'Appointment scheduling'
    ],
    solutions: [
      'Agent Assistant',
      'Knowledge Manager',
      'Data Processing Suite'
    ],
    metrics: [
      '50% reduction in administrative tasks',
      '90% compliance with regulations',
      '40% improvement in patient satisfaction'
    ]
  },
  {
    name: 'High Tech',
    description:
      'Accelerate innovation and improve customer success with AI-powered tools for support and sales.',
    challenges: [
      'Product knowledge management',
      'Technical support efficiency',
      'Sales enablement',
      'Customer onboarding'
    ],
    solutions: [
      'Sales Assistant',
      'Knowledge Manager',
      'Data Processing Suite'
    ],
    metrics: [
      '45% increase in sales productivity',
      '60% reduction in support tickets',
      '70% faster customer onboarding'
    ]
  },
  {
    name: 'Telecom',
    description:
      'Enhance customer service and network operations with AI-powered solutions for support and monitoring.',
    challenges: [
      'Customer service automation',
      'Network issue resolution',
      'Service quality monitoring',
      'Customer retention'
    ],
    solutions: [
      'Agent Assistant',
      'Communication Recorder',
      'Virtual Assistant'
    ],
    metrics: [
      '50% reduction in call handling time',
      '40% improvement in customer satisfaction',
      '30% reduction in customer churn'
    ]
  },
  {
    name: 'Travel & Hospitality',
    description:
      'Transform guest experience and operational efficiency with AI-powered solutions for service and support.',
    challenges: [
      'Guest service automation',
      'Booking management',
      'Customer feedback analysis',
      'Staff training'
    ],
    solutions: [
      'Virtual Assistant',
      'Conversation Intelligence',
      'Agent Assistant'
    ],
    metrics: [
      '60% reduction in response time',
      '45% increase in booking conversion',
      '50% improvement in guest satisfaction'
    ]
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Industry-Specific Solutions
          </h1>
          <p className="section-subtitle">
            We understand the unique challenges of your industry. Our AI solutions
            are tailored to address specific pain points and drive measurable
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200"
            >
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                {industry.name}
              </h2>
              <p className="text-emerald-700 mb-6">{industry.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                  Key Challenges
                </h3>
                <ul className="space-y-2">
                  {industry.challenges.map((challenge, challengeIndex) => (
                    <li
                      key={challengeIndex}
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
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                  Our Solutions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <span
                      key={solutionIndex}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                  Measurable Results
                </h3>
                <ul className="space-y-2">
                  {industry.metrics.map((metric, metricIndex) => (
                    <li
                      key={metricIndex}
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
                      {metric}
                    </li>
                  ))}
                </ul>
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
            Don&apos;t See Your Industry?
          </h2>
          <p className="section-subtitle">
            We can create custom solutions for any industry. Let&apos;s discuss
            your specific challenges and requirements.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 