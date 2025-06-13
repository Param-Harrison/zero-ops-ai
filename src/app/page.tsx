import Link from 'next/link';
import TransformCTA from '@/components/sections/TransformCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center py-20 sm:py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 mb-6 sm:mb-8">
              AI Solutions Agency
              <br />
              <span className="text-emerald-600">From Concept to Production</span>
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              We transform your AI ideas into production-ready solutions. From rapid MVPs to enterprise-grade AI systems, we deliver results that drive business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-lg px-8 py-4"
              >
                Explore Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-emerald-700">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Rapid Development
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Enterprise Ready
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                Custom Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title">
              Our Services
            </h2>
            <p className="section-subtitle">
              End-to-end AI solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'MVP as a Service',
                description: 'Transform your idea into a production-ready AI product in weeks, not months.',
                features: ['Rapid prototyping', 'Production deployment', 'Ongoing support'],
                link: '/services/mvp-as-a-service',
                icon: (
                  <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                name: 'RAG as a Service',
                description: 'Build intelligent document processing and knowledge management systems.',
                features: ['Document processing', 'Knowledge base creation', 'Custom embeddings'],
                link: '/services/rag-as-a-service',
                icon: (
                  <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                name: 'AI Agents',
                description: 'Deploy autonomous AI agents that integrate with your existing tools and workflows.',
                features: ['Multi-platform integration', 'Custom workflows', 'Real-time monitoring'],
                link: '/services/ai-agent-solutions',
                icon: (
                  <svg className="w-12 h-12 text-emerald-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <Link key={index} href={service.link} className="card p-8 hover-lift group">
                <div className="flex flex-col items-center">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-700">
                    {service.name}
                  </h3>
                  <p className="text-emerald-700 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-3 w-full">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-emerald-700">
                        <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-emerald-50">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title">
              Our Process
            </h2>
            <p className="section-subtitle">
              From concept to production in weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                name: 'Discovery',
                description: 'We understand your requirements and define success metrics.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                name: 'Design',
                description: 'We create a detailed solution architecture and implementation plan.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                name: 'Development',
                description: 'We build and test your solution with regular progress updates.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                name: 'Deployment',
                description: 'We deploy to production and provide ongoing support.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{step.name}</h3>
                <p className="text-emerald-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Replace the existing CTA section with the new component */}
      <TransformCTA
        variant="dark"
        title="Ready to Transform Your Business?"
        description="Let's discuss how our enterprise AI solutions can help you achieve your goals. Schedule a consultation with our experts today."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Use Cases"
        secondaryButtonLink="/use-cases"
      />
    </div>
  );
}
