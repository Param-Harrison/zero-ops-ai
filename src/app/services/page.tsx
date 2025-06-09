import Link from 'next/link';

const services = [
  {
    name: 'Private AI Chatbot Deployment',
    description: 'Deploy PrivateGPT for internal knowledge search and document Q&A',
    features: [
      'Secure deployment',
      'Custom training',
      'Ongoing support',
    ],
    benefits: [
      'Faster knowledge access',
      'Reduced search time',
      'Secure document handling',
      'Custom knowledge base'
    ],
    industries: ['Enterprise', 'Legal', 'Healthcare', 'Finance']
  },
  {
    name: 'Enterprise AI Assistant Service',
    description: 'Manage Onyx for real-time access to Google Drive, Slack, Jira, and more',
    features: [
      'Multi-platform integration',
      'Custom workflows',
      '24/7 monitoring',
      'Security controls'
    ],
    benefits: [
      'Unified workspace access',
      'Automated workflows',
      'Enhanced productivity',
      'Enterprise security'
    ],
    industries: ['Enterprise', 'Technology', 'Consulting', 'Professional Services']
  },
  {
    name: 'Document ETL Pipeline Service',
    description: 'Extract and clean document sets using Unstructured.io',
    features: [
      'Automated processing',
      'Data validation',
      'Custom pipelines',
      'Format conversion'
    ],
    benefits: [
      'Clean, structured data',
      'Reduced manual work',
      'Consistent formatting',
      'Scalable processing'
    ],
    industries: ['Finance', 'Legal', 'Healthcare', 'Insurance']
  },
  {
    name: 'Meeting Intelligence Service',
    description: 'Transcribe and summarize client meetings with Meetily',
    features: [
      'Real-time transcription',
      'Action item extraction',
      'Meeting analytics',
      'Custom summaries'
    ],
    benefits: [
      'Automated note-taking',
      'Action item tracking',
      'Meeting insights',
      'Time savings'
    ],
    industries: ['Consulting', 'Professional Services', 'Enterprise', 'Legal']
  },
  {
    name: 'Resume Filtering as a Service',
    description: 'Rank hundreds of resumes per job automatically',
    features: [
      'Automated screening',
      'Custom criteria',
      'Candidate ranking',
      'Skill matching'
    ],
    benefits: [
      'Faster hiring',
      'Reduced bias',
      'Better matches',
      'Scalable screening'
    ],
    industries: ['HR', 'Recruitment', 'Enterprise', 'Professional Services']
  },
  {
    name: 'Legal Risk Flagging Agent',
    description: 'Scan contracts for compliance and risk patterns',
    features: [
      'Risk detection',
      'Compliance checking',
      'Custom rules',
      'Automated review'
    ],
    benefits: [
      'Faster review',
      'Risk reduction',
      'Consistent checking',
      'Cost savings'
    ],
    industries: ['Legal', 'Finance', 'Real Estate', 'Healthcare']
  },
  {
    name: 'Invoice Processing Automation',
    description: 'OCR and JSON output of invoices for accounting APIs',
    features: [
      'Automated extraction',
      'API integration',
      'Data validation',
      'Format conversion'
    ],
    benefits: [
      'Faster processing',
      'Reduced errors',
      'Automated entry',
      'Cost savings'
    ],
    industries: ['Finance', 'Accounting', 'Enterprise', 'Retail']
  },
  {
    name: 'Financial Analysis Bot',
    description: 'Chat with FinGPT about company reports and stock data',
    features: [
      'Financial analysis',
      'Market insights',
      'Custom reporting',
      'Data visualization'
    ],
    benefits: [
      'Faster analysis',
      'Better insights',
      'Automated reporting',
      'Data-driven decisions'
    ],
    industries: ['Finance', 'Investment', 'Banking', 'Consulting']
  },
  {
    name: 'Marketing Research Agent',
    description: 'Auto-GPT to research competitors or generate insights',
    features: [
      'Competitor analysis',
      'Market research',
      'Insight generation',
      'Trend tracking'
    ],
    benefits: [
      'Faster research',
      'Better insights',
      'Automated analysis',
      'Competitive advantage'
    ],
    industries: ['Marketing', 'Consulting', 'Enterprise', 'Agency']
  },
  {
    name: 'Natural Language BI Agent',
    description: 'NL to SQL bot to query client dashboards and data',
    features: [
      'Query generation',
      'Dashboard integration',
      'Custom analytics',
      'Data visualization'
    ],
    benefits: [
      'Easier data access',
      'Faster insights',
      'Reduced SQL knowledge needed',
      'Better decisions'
    ],
    industries: ['Enterprise', 'Finance', 'Healthcare', 'Retail']
  },
  {
    name: 'Voice QA Dashboard',
    description: 'Transcribe support calls and detect tone/compliance issues',
    features: [
      'Call analysis',
      'Compliance monitoring',
      'Performance metrics',
      'Quality scoring'
    ],
    benefits: [
      'Better quality control',
      'Compliance assurance',
      'Performance insights',
      'Training opportunities'
    ],
    industries: ['Customer Support', 'Healthcare', 'Finance', 'Insurance']
  },
  {
    name: 'Custom Support Chatbot Hosting',
    description: 'Host and train Haystack chatbot for client FAQs or docs',
    features: [
      'Custom training',
      'Multi-channel support',
      'Analytics dashboard',
      'Continuous learning'
    ],
    benefits: [
      '24/7 support',
      'Reduced response time',
      'Cost savings',
      'Scalable support'
    ],
    industries: ['E-commerce', 'SaaS', 'Enterprise', 'Healthcare']
  },
  {
    name: 'Data Redaction Pipeline',
    description: 'PII detection and anonymization via Presidio for compliance',
    features: [
      'PII detection',
      'Data redaction',
      'Compliance reporting',
      'Custom rules'
    ],
    benefits: [
      'Compliance assurance',
      'Data protection',
      'Automated processing',
      'Risk reduction'
    ],
    industries: ['Healthcare', 'Finance', 'Legal', 'Insurance']
  },
  {
    name: 'AI Coding Assistant Setup',
    description: 'Local Copilot alternative, secured to private repos',
    features: [
      'Code assistance',
      'Security controls',
      'Custom training',
      'Private deployment'
    ],
    benefits: [
      'Faster development',
      'Code quality',
      'Security assurance',
      'Cost savings'
    ],
    industries: ['Technology', 'Enterprise', 'Startups', 'Agency']
  },
  {
    name: 'Creative Asset Generation',
    description: 'Use Stable Diffusion to generate visuals for campaigns',
    features: [
      'Image generation',
      'Style customization',
      'Batch processing',
      'Brand consistency'
    ],
    benefits: [
      'Faster creation',
      'Cost savings',
      'Consistent branding',
      'Scalable production'
    ],
    industries: ['Marketing', 'E-commerce', 'Agency', 'Retail']
  },
  {
    name: 'Branded Voice Agent Creator',
    description: 'Clone CEO/brand voice with Coqui and deploy in IVRs or content',
    features: [
      'Voice cloning',
      'Content generation',
      'Multi-platform deployment',
      'Custom training'
    ],
    benefits: [
      'Brand consistency',
      'Content automation',
      'Multi-channel presence',
      'Cost savings'
    ],
    industries: ['Marketing', 'Entertainment', 'Agency', 'Enterprise']
  },
  {
    name: 'Auto-Tag & Caption Media',
    description: 'Use BLIP to auto-tag product photos or stock libraries',
    features: [
      'Image analysis',
      'Auto-tagging',
      'Content organization',
      'Metadata generation'
    ],
    benefits: [
      'Faster organization',
      'Better searchability',
      'Consistent tagging',
      'Time savings'
    ],
    industries: ['E-commerce', 'Media', 'Retail', 'Agency']
  },
  {
    name: 'Visual QA Automation',
    description: 'AI defect detector on assembly line footage or images',
    features: [
      'Defect detection',
      'Quality control',
      'Real-time monitoring',
      'Custom thresholds'
    ],
    benefits: [
      'Better quality',
      'Cost reduction',
      'Faster inspection',
      '24/7 monitoring'
    ],
    industries: ['Manufacturing', 'Automotive', 'Electronics', 'Pharmaceuticals']
  },
  {
    name: 'Inbox Zero AI Agent',
    description: 'Auto-email generator for leads, support, recruiting',
    features: [
      'Email automation',
      'Response generation',
      'Template management',
      'Custom workflows'
    ],
    benefits: [
      'Faster responses',
      'Better organization',
      'Time savings',
      'Consistent communication'
    ],
    industries: ['Sales', 'HR', 'Customer Support', 'Enterprise']
  },
  {
    name: 'Auto Social Publishing Bot',
    description: 'Scheduled LinkedIn/X/IG post generator from prompts or RSS',
    features: [
      'Content generation',
      'Multi-platform posting',
      'Analytics tracking',
      'Schedule management'
    ],
    benefits: [
      'Consistent posting',
      'Time savings',
      'Better engagement',
      'Content automation'
    ],
    industries: ['Marketing', 'Agency', 'Enterprise', 'E-commerce']
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