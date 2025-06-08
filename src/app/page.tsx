import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section relative bg-gradient-to-b from-emerald-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title">
              Transform Your Business with{' '}
              <span className="gradient-text">Private AI Agents</span>
            </h1>
            <p className="section-subtitle">
              Deploy secure, private AI agents that automate your business processes.
              Built on open-source technology, perfect for B2B SaaS, Healthcare, Finance, and Call Centers.
            </p>
            <div className="button-container">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book a Demo
              </Link>
              <Link
                href="/solutions"
                className="btn-secondary"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-emerald-100 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 text-emerald-700">
            <span className="list-item">
              <svg className="list-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              Built on Open Source
            </span>
            <span className="list-item">
              <svg className="list-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              EU Private Cloud
            </span>
            <span className="list-item">
              <svg className="list-icon" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No Vendor Lock-in
            </span>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Ready-to-Deploy Solutions
            </h2>
            <p className="section-subtitle">
              Our pre-built solution bundles combine multiple AI agents to solve specific business challenges.
            </p>
          </div>

          <div className="grid-layout md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Sales Enablement Suite',
                description: 'Boost sales team productivity with AI-powered tools for discovery, knowledge access, and call analysis.',
                metrics: ['60% less research time', '40% more sales', '90% better prep'],
                link: '/solutions#sales',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: 'Support Automation Suite',
                description: 'Transform customer support with AI-powered tools for ticket handling, call analysis, and knowledge management.',
                metrics: ['70% fewer tickets', '90% faster response', '50% less training'],
                link: '/solutions#support',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Healthcare Ops AI',
                description: 'Enhance healthcare operations with AI-powered tools for compliance monitoring and patient support.',
                metrics: ['90% less violations', '70% faster processing', '50% less admin'],
                link: '/solutions#healthcare',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'Object Identification AI',
                description: 'Automate quality control and inventory management with AI-powered object detection.',
                metrics: ['95% accuracy', '80% faster inspection', '60% cost reduction'],
                link: '/solutions#object-id',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: 'Compliance LLM Suite',
                description: 'Ensure regulatory compliance with AI-powered document analysis and monitoring.',
                metrics: ['99% compliance rate', '85% faster audits', '70% risk reduction'],
                link: '/solutions#compliance',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((solution, index) => (
              <div
                key={index}
                className="card group hover-lift"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-emerald-700 mb-8">{solution.description}</p>
                <div className="space-y-3 mb-8">
                  {solution.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="list-item"
                    >
                      <svg
                        className="list-icon"
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
                      {metric}
                    </div>
                  ))}
                </div>
                <Link
                  href={solution.link}
                  className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-emerald-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Industry-Specific Solutions
            </h2>
            <p className="section-subtitle">
              We understand the unique challenges of your industry. Our AI solutions are tailored to address specific pain points.
            </p>
          </div>

          <div className="grid-layout md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'B2B SaaS',
                description: 'Accelerate growth and improve customer success with AI-powered tools.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Healthcare',
                description: 'Enhance patient care and operational efficiency while maintaining compliance.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: 'Financial Services',
                description: 'Streamline operations and enhance customer service while ensuring compliance.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Call Centers',
                description: 'Transform operations with AI-powered tools for quality assurance and training.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: 'Manufacturing',
                description: 'Optimize production and quality control with AI-powered automation.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              }
            ].map((industry, index) => (
              <div
                key={index}
                className="card group hover-lift"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-emerald-700">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">
            Why Choose ZeroOpsAI?
          </h2>
          <div className="grid-layout md:grid-cols-3">
            {[
              {
                title: 'Zero Data Risk',
                description:
                  'Deploy AI agents that never store or process sensitive data. Your data stays private and secure.',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                )
              },
              {
                title: 'Open Source',
                description:
                  'Built on open-source technology, giving you full control and transparency over your AI infrastructure.',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                )
              },
              {
                title: 'Enterprise Ready',
                description:
                  'Deploy in your private cloud with enterprise-grade security, compliance, and support.',
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card group hover-lift"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-emerald-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-emerald-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Ready to Transform Your Business?
            </h2>
            <p className="section-subtitle">
              Book a demo today and see how ZeroOpsAI can help you automate your business processes securely.
            </p>
            <div className="flex justify-center mt-8">
              <Link href="/contact" className="btn-primary w-auto">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
