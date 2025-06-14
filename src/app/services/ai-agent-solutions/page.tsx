import React from 'react';
import Link from 'next/link';

const features = [
  {
    name: 'Intelligent Task Automation',
    description: 'Automate complex workflows with AI agents that understand context and make smart decisions.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    name: 'Multi-Agent Collaboration',
    description: 'Enable multiple AI agents to work together seamlessly, solving complex problems through coordination.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    name: 'Continuous Learning',
    description: 'Agents that learn and improve from every interaction, adapting to your business needs.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    name: 'Real-time Monitoring',
    description: 'Track agent performance and system health with comprehensive analytics and alerts.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    name: 'Customizable Behavior',
    description: 'Tailor agent behavior to match your specific business requirements and workflows.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  },
  {
    name: 'Secure Integration',
    description: 'Seamlessly integrate AI agents with your existing systems while maintaining security.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
];

const useCases = [
  {
    name: 'Customer Service Automation',
    description: 'AI agents handle customer inquiries 24/7, providing instant responses and routing complex issues.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  },
  {
    name: 'Process Optimization',
    description: 'Automate and optimize business processes with intelligent agents that learn and improve over time.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    name: 'Data Analysis',
    description: 'Automated agents process and analyze data, generating actionable insights and reports.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  }
];

export default function AIAgents() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
              AI Agent Solutions
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in-delay">
              Deploy intelligent AI agents that work autonomously, understand context, and deliver results. Our solutions combine cutting-edge AI with practical business applications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
              >
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center text-center w-full sm:w-auto px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-500"
              >
                View Use Cases
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section with Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our AI Agents?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade autonomous AI solutions
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Autonomous Operation</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Self-learning agents that adapt to your needs
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Enterprise Security</h3>
                <p className="mt-2 text-base text-emerald-700">
                  SOC 2 compliant infrastructure for data protection
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Seamless Integration</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Ready-to-use with your existing tools and workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Gradient Cards */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for autonomous AI systems
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 hover-lift group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">{feature.name}</h3>
                  <p className="mt-2 text-base text-emerald-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section with Interactive Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Use Cases
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world applications of our AI agents
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-8 hover-lift group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">{useCase.name}</h3>
                  <p className="mt-2 text-base text-emerald-700">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to automate your business?
            </h2>
            <p className="mt-4 text-xl text-emerald-100 max-w-2xl mx-auto">
              Get started with our AI agent solutions today and transform your operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
              >
                Schedule a Demo
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-500"
              >
                View Use Cases
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 