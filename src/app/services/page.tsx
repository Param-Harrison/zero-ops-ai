import Link from 'next/link';

const services = [
  {
    name: 'Implementation & Integration',
    description: 'End-to-end implementation and integration of our AI products into your existing systems.',
    features: [
      'Custom deployment architecture',
      'System integration',
      'Data migration',
      'Security configuration'
    ],
    benefits: [
      'Faster time to value',
      'Reduced implementation risk',
      'Seamless integration',
      'Enterprise-grade security'
    ],
    industries: ['Enterprise', 'Healthcare', 'Finance', 'Legal']
  },
  {
    name: 'Custom Development',
    description: 'Custom development and fine-tuning of AI models for your specific use cases.',
    features: [
      'Model fine-tuning',
      'Custom feature development',
      'Integration customization',
      'Performance optimization'
    ],
    benefits: [
      'Tailored solutions',
      'Higher accuracy',
      'Better performance',
      'Competitive advantage'
    ],
    industries: ['Technology', 'Manufacturing', 'Retail', 'Insurance']
  },
  {
    name: 'Training & Support',
    description: 'Comprehensive training and ongoing support to ensure successful AI adoption.',
    features: [
      'User training programs',
      'Technical documentation',
      '24/7 support',
      'Regular updates'
    ],
    benefits: [
      'Faster user adoption',
      'Reduced support tickets',
      'Continuous improvement',
      'Peace of mind'
    ],
    industries: ['All Industries']
  },
  {
    name: 'Data Engineering',
    description: 'Data pipeline development and optimization for AI model training and deployment.',
    features: [
      'Data pipeline design',
      'ETL development',
      'Data quality assurance',
      'Performance optimization'
    ],
    benefits: [
      'Clean, reliable data',
      'Faster processing',
      'Reduced costs',
      'Better insights'
    ],
    industries: ['Technology', 'Finance', 'Healthcare', 'Manufacturing']
  },
  {
    name: 'AI Strategy & Consulting',
    description: 'Strategic guidance and consulting to maximize the value of your AI investments.',
    features: [
      'AI readiness assessment',
      'ROI analysis',
      'Implementation planning',
      'Change management'
    ],
    benefits: [
      'Clear AI roadmap',
      'Measurable outcomes',
      'Reduced risk',
      'Faster adoption'
    ],
    industries: ['Enterprise', 'Healthcare', 'Finance', 'Legal']
  },
  {
    name: 'Managed Services',
    description: 'Fully managed AI operations and maintenance for worry-free deployment.',
    features: [
      '24/7 monitoring',
      'Proactive maintenance',
      'Performance optimization',
      'Security management'
    ],
    benefits: [
      'Reduced operational burden',
      'Consistent performance',
      'Lower total cost',
      'Focus on core business'
    ],
    industries: ['All Industries']
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
              Professional Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Our comprehensive services ensure successful implementation and ongoing success of your AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto"
              >
                Book a Consultation
              </Link>
              <Link
                href="/products"
                className="btn-secondary w-full sm:w-auto"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group hover:border-emerald-200 flex flex-col h-full bg-white/50 backdrop-blur-sm"
              >
                <div className="flex-grow p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
                    {service.name}
                  </h2>
                  <p className="text-emerald-700 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Service Features
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
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
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
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
                          <span className="text-sm sm:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Ideal For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span
                          key={industryIndex}
                          className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-emerald-100">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card bg-emerald-50 border-emerald-200">
              <div className="text-center p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-emerald-700 mb-8">
                  Our team of AI experts is ready to help you implement and optimize your AI solutions. From initial setup to ongoing support, we&apos;ll ensure your success every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/products"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    View Products
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