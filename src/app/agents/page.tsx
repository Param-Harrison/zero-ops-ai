import Link from 'next/link';

const agents = [
  {
    name: 'Agent Assistant',
    description:
      'Real-time AI assistance for contact center agents, providing instant answers and guidance during customer interactions.',
    what: 'An AI agent that provides real-time assistance to contact center agents during customer interactions.',
    why: [
      'Reduce average handle time by 40%',
      'Improve first-call resolution by 60%',
      'Enhance agent confidence and performance',
      'Reduce training time by 50%'
    ],
    how: [
      'Connect to your contact center platform',
      'Configure knowledge base and guidelines',
      'Set up real-time assistance rules',
      'Monitor and optimize performance'
    ]
  },
  {
    name: 'Communication Recorder',
    description:
      'Enterprise-grade communication recording and analysis platform for comprehensive interaction management.',
    what: 'An AI agent that records, stores, and analyzes all customer communications across channels.',
    why: [
      'Ensure 100% compliance with regulations',
      'Reduce storage costs by 70%',
      'Enable advanced analytics and insights',
      'Improve quality monitoring efficiency'
    ],
    how: [
      'Integrate with communication channels',
      'Configure recording policies',
      'Set up secure storage and retention',
      'Enable analytics and reporting'
    ]
  },
  {
    name: 'Conversation Intelligence',
    description:
      'GenAI-powered platform for analyzing customer conversations and extracting actionable insights.',
    what: 'An AI agent that analyzes customer conversations to provide deep insights and intelligence.',
    why: [
      'Identify customer sentiment trends',
      'Discover product improvement opportunities',
      'Optimize customer journey touchpoints',
      'Enable data-driven decision making'
    ],
    how: [
      'Connect conversation data sources',
      'Configure analysis parameters',
      'Set up insight generation rules',
      'Create automated reporting'
    ]
  },
  {
    name: 'Virtual Assistant',
    description:
      'Intelligent self-service solution that handles customer queries and tasks automatically.',
    what: 'An AI agent that provides automated customer service through natural conversations.',
    why: [
      'Handle 70% of routine inquiries',
      'Reduce support costs by 50%',
      'Provide 24/7 customer service',
      'Improve customer satisfaction'
    ],
    how: [
      'Configure conversation flows',
      'Integrate with knowledge base',
      'Set up escalation rules',
      'Monitor and improve performance'
    ]
  },
  {
    name: 'Sales Assistant',
    description:
      'AI-powered sales copilot that helps sales teams close more deals and improve productivity.',
    what: 'An AI agent that assists sales teams throughout the sales process.',
    why: [
      'Increase win rates by 35%',
      'Reduce sales cycle time by 40%',
      'Improve deal forecasting accuracy',
      'Enhance sales team productivity'
    ],
    how: [
      'Connect to CRM and data sources',
      'Configure sales playbooks',
      'Set up opportunity scoring',
      'Enable real-time assistance'
    ]
  },
  {
    name: 'Knowledge Manager',
    description:
      'AI-ready knowledge fabric that organizes and delivers information across your organization.',
    what: 'An AI agent that manages and optimizes organizational knowledge.',
    why: [
      'Reduce information search time by 80%',
      'Improve knowledge accuracy by 90%',
      'Enable faster onboarding',
      'Enhance collaboration efficiency'
    ],
    how: [
      'Index organizational knowledge',
      'Configure access controls',
      'Set up update workflows',
      'Enable AI-powered search'
    ]
  },
  {
    name: 'Recruiting Assistant',
    description:
      'AI-powered recruiting copilot that streamlines the hiring process and improves candidate experience.',
    what: 'An AI agent that assists HR teams in the recruitment process.',
    why: [
      'Reduce time-to-hire by 45%',
      'Improve candidate quality',
      'Reduce hiring costs by 30%',
      'Enhance candidate experience'
    ],
    how: [
      'Configure job requirements',
      'Set up screening criteria',
      'Enable automated scheduling',
      'Monitor hiring metrics'
    ]
  }
];

export default function Agents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
              AI Agents for Every Business Need
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Our suite of specialized AI agents can be deployed individually or
              combined to create powerful solutions for your specific business
              challenges.
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
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="card group hover:border-emerald-200 flex flex-col h-full bg-white/50 backdrop-blur-sm"
              >
                <div className="flex-grow p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
                    {agent.name}
                  </h2>
                  <p className="text-emerald-700 mb-6">{agent.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      What It Is
                    </h3>
                    <p className="text-emerald-700">{agent.what}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Why Use It
                    </h3>
                    <ul className="space-y-2">
                      {agent.why.map((reason, reasonIndex) => (
                        <li
                          key={reasonIndex}
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
                          <span className="text-sm sm:text-base">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      How It Works
                    </h3>
                    <ul className="space-y-2">
                      {agent.how.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
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
                          <span className="text-sm sm:text-base">{step}</span>
                        </li>
                      ))}
                    </ul>
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
                  Ready to Deploy AI Agents?
                </h2>
                <p className="text-base sm:text-lg text-emerald-700 mb-8 sm:mb-12 max-w-2xl mx-auto">
                  Let&apos;s discuss how our AI agents can help you achieve your
                  business goals. Our team will guide you through the deployment
                  process.
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
      </section>
    </div>
  );
} 