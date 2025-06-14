import Link from 'next/link';
import React from 'react';

const benefits = [
  {
    title: "Rapid Development",
    description: "Launch your MVP in weeks, not months",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Cost-Effective",
    description: "Start with essential features, scale as you grow",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Work with experienced developers and designers",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business needs",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "Thorough testing and quality checks",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance and updates",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function MVPServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in">
              Transform Your Ideas into Market-Ready Products
            </h1>
            <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in-delay">
              Launch your MVP in weeks, not months. Validate your product with real users and gather valuable feedback to guide your next steps.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
              >
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We help startups and businesses validate their ideas quickly and efficiently through rapid MVP development
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Idea Validation</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Test your concept with real users before full-scale development
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Rapid Development</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Launch your MVP in weeks, not months, with our agile process
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Market Insights</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Gather valuable feedback to guide your product roadmap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to bring your MVP to market quickly
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">1. Discovery</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Define requirements and create a detailed roadmap
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">2. Design</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Create intuitive UI/UX and technical architecture
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">3. Development</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Build core features with modern tech stack
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">4. Launch</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Deploy and gather user feedback for iteration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Tech Stack
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Modern technologies for rapid development
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Frontend</h3>
                <p className="mt-2 text-base text-emerald-700">
                  React, Next.js, Tailwind CSS
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Backend</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Node.js, Python, FastAPI
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">Database</h3>
                <p className="mt-2 text-base text-emerald-700">
                  PostgreSQL, MongoDB, Redis
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">DevOps</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Docker, AWS, CI/CD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tech Stack Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              AI Technologies
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge AI capabilities for your MVP
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">LLMs</h3>
                <p className="mt-2 text-base text-emerald-700">
                  GPT-4, Claude, LLaMA
                </p>
              </div>
            </div>
            <div className="card p-8 hover-lift group">
              <div className="flex flex-col">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">RAG</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Vector DBs, Embeddings
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
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">AI Agents</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Autonomous agents, Tool use
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
                <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">ML Models</h3>
                <p className="mt-2 text-base text-emerald-700">
                  Custom models, Fine-tuning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section with Interactive Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our MVP Service?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, reliable, and scalable MVP development
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 hover-lift group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700">{benefit.title}</h3>
                  <p className="mt-2 text-base text-emerald-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center py-20 sm:py-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6 sm:mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Join successful startups who have launched their products with our MVP service.
              Let&apos;s turn your idea into a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule a Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-lg px-8 py-4"
              >
                Explore All Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 