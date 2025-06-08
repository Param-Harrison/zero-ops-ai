import Link from 'next/link';

const useCases = [
  {
    title: 'Reduce Support Ticket Volume',
    description:
      'Automate common support queries and provide instant answers to customer questions using your product documentation.',
    problem: 'High support ticket volume leading to slow response times and customer dissatisfaction.',
    solution: [
      'Deploy Product Knowledge Agent',
      'Index product documentation',
      'Integrate with support channels',
    ],
    results: [
      '60% reduction in support tickets',
      '90% faster response times',
      'Improved customer satisfaction',
    ],
  },
  {
    title: 'Improve Sales Team Productivity',
    description:
      'Automate research and briefing preparation, allowing sales teams to focus on building relationships and closing deals.',
    problem: 'Sales teams spend too much time on research and preparation instead of selling.',
    solution: [
      'Deploy Sales Discovery Agent',
      'Connect to CRM and data sources',
      'Configure briefing templates',
    ],
    results: [
      '40% increase in sales productivity',
      '50% reduction in research time',
      'More consistent sales briefings',
    ],
  },
  {
    title: 'Ensure Call Center Compliance',
    description:
      'Automatically monitor calls for compliance issues and provide real-time feedback to agents.',
    problem: 'Manual call monitoring is time-consuming and often misses compliance issues.',
    solution: [
      'Deploy Call QA Agent',
      'Configure compliance rules',
      'Set up real-time alerts',
    ],
    results: [
      '90% reduction in compliance violations',
      '70% faster QA review process',
      'Improved agent training',
    ],
  },
  {
    title: 'Streamline Document Processing',
    description:
      'Automatically process and analyze documents, extracting key information and preparing them for AI use.',
    problem: 'Manual document processing is slow, error-prone, and resource-intensive.',
    solution: [
      'Deploy Document Preprocessing Agent',
      'Configure document types',
      'Set up processing rules',
    ],
    results: [
      '75% reduction in processing time',
      '90% accuracy in data extraction',
      'Reduced manual errors',
    ],
  },
  {
    title: 'Accelerate Employee Onboarding',
    description:
      'Provide instant answers to new hire questions and automate the onboarding process.',
    problem: 'Slow onboarding process leads to delayed productivity and poor employee experience.',
    solution: [
      'Deploy Onboarding Assistant Agent',
      'Index HR documentation',
      'Configure onboarding workflows',
    ],
    results: [
      '50% faster onboarding process',
      '80% reduction in HR queries',
      'Improved employee satisfaction',
    ],
  },
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Real Business Problems, AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI agents solve specific business challenges and
            deliver measurable results across different industries.
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      The Problem
                    </h3>
                    <p className="text-gray-600">{useCase.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      The Solution
                    </h3>
                    <ul className="space-y-2">
                      {useCase.solution.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-2">
                            {stepIndex + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Results
                    </h3>
                    <ul className="space-y-4">
                      {useCase.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Different Challenge?
          </h2>
          <p className="text-gray-600 mb-8">
            We can create custom AI solutions for your specific business
            challenges. Let&apos;s discuss your needs.
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