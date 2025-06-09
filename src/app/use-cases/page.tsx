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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">Use Cases</h1>
          <p className="section-subtitle">
            Discover how ZeroOpsAI can solve your specific business challenges
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                    {useCase.title}
                  </h2>
                  <p className="text-emerald-700 mb-6">{useCase.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      The Problem
                    </h3>
                    <p className="text-emerald-700">{useCase.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Our Solution
                    </h3>
                    <ul className="space-y-2">
                      {useCase.solution.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
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
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Measurable Results
                    </h3>
                    <ul className="space-y-2">
                      {useCase.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
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
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="btn-primary w-full"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="card bg-emerald-50 border-emerald-200">
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-emerald-700 mb-8">
                Let&apos;s discuss how ZeroOpsAI can help you achieve similar results.
                Our team will work with you to create a customized solution that
                addresses your specific challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/solutions"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 