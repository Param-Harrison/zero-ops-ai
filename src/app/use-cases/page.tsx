import Link from 'next/link';

const useCases = [
  {
    industry: 'Healthcare',
    title: 'Medical Records Analysis & Compliance',
    description: 'Automate medical record analysis, ensure HIPAA compliance, and improve patient care coordination.',
    problem: 'Healthcare providers struggle with manual medical record review, compliance monitoring, and care coordination across departments.',
    solution: [
      'Deploy Medical Records Analysis Agent',
      'Implement HIPAA Compliance Monitor',
      'Set up Care Coordination Assistant',
    ],
    results: [
      '85% reduction in record review time',
      '99.9% HIPAA compliance rate',
      '40% improvement in care coordination',
    ],
  },
  {
    industry: 'Legal',
    title: 'Contract Analysis & Due Diligence',
    description: 'Automate contract review, risk assessment, and due diligence processes for legal teams.',
    problem: 'Legal teams spend excessive time on manual contract review and risk assessment, leading to delays and potential oversights.',
    solution: [
      'Deploy Contract Analysis Agent',
      'Implement Risk Assessment Engine',
      'Set up Due Diligence Assistant',
    ],
    results: [
      '75% faster contract review',
      '90% accuracy in risk detection',
      '60% reduction in due diligence time',
    ],
  },
  {
    industry: 'Financial Services',
    title: 'Fraud Detection & Compliance',
    description: 'Real-time transaction monitoring, fraud detection, and regulatory compliance automation.',
    problem: 'Financial institutions face increasing fraud risks and complex regulatory requirements, requiring constant monitoring.',
    solution: [
      'Deploy Fraud Detection Agent',
      'Implement Compliance Monitor',
      'Set up Transaction Analysis Engine',
    ],
    results: [
      '95% fraud detection accuracy',
      '80% reduction in false positives',
      '70% faster compliance reporting',
    ],
  },
  {
    industry: 'Manufacturing',
    title: 'Quality Control & Predictive Maintenance',
    description: 'Automate quality control processes and implement predictive maintenance for manufacturing equipment.',
    problem: 'Manufacturers struggle with quality control consistency and unexpected equipment failures.',
    solution: [
      'Deploy Quality Control Agent',
      'Implement Predictive Maintenance System',
      'Set up Production Analytics Engine',
    ],
    results: [
      '90% reduction in quality defects',
      '60% decrease in unplanned downtime',
      '40% improvement in production efficiency',
    ],
  },
  {
    industry: 'Retail',
    title: 'Customer Experience & Inventory Management',
    description: 'Enhance customer experience and optimize inventory management with AI-powered insights.',
    problem: 'Retailers face challenges in personalizing customer experiences and maintaining optimal inventory levels.',
    solution: [
      'Deploy Customer Experience Agent',
      'Implement Inventory Optimization System',
      'Set up Demand Forecasting Engine',
    ],
    results: [
      '45% increase in customer satisfaction',
      '30% reduction in inventory costs',
      '50% improvement in demand forecasting',
    ],
  },
  {
    industry: 'Insurance',
    title: 'Claims Processing & Risk Assessment',
    description: 'Automate claims processing and enhance risk assessment with AI-powered analysis.',
    problem: 'Insurance companies struggle with slow claims processing and inaccurate risk assessment.',
    solution: [
      'Deploy Claims Processing Agent',
      'Implement Risk Assessment Engine',
      'Set up Fraud Detection System',
    ],
    results: [
      '70% faster claims processing',
      '85% accuracy in risk assessment',
      '60% reduction in fraudulent claims',
    ],
  },
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">Industry Solutions</h1>
          <p className="section-subtitle">
            Discover how ZeroOpsAI solves real-world challenges across industries
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
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                      {useCase.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                    {useCase.title}
                  </h2>
                  <p className="text-emerald-700 mb-6">{useCase.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      The Challenge
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
                Ready to Transform Your Industry?
              </h2>
              <p className="text-emerald-700 mb-8">
                Let&apos;s discuss how ZeroOpsAI can help you achieve similar results in your industry.
                Our team will work with you to create a customized solution that addresses your specific challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/products"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 