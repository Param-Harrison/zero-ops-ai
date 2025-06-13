import Link from 'next/link';

const services = [
  {
    name: 'Private AI Chatbot Deployment',
    description: "Deploy a secure AI chatbot that instantly answers questions from your internal documents and knowledge bases while keeping your data private.",
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
    description: "Connect your team's tools with an AI assistant that automates tasks, finds information, and streamlines workflows with enterprise-grade security.",
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
    description: "Transform documents into structured data automatically. Extract, organize, and prepare information from PDFs, Word docs, and emails for analysis.",
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
    description: "Capture meeting insights automatically with real-time transcription, action item tracking, and smart summaries of key decisions.",
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
    description: "Streamline hiring by automatically analyzing and ranking candidates based on your specific requirements and job criteria.",
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
    description: "Review contracts with AI-powered risk detection to identify compliance issues and ensure agreements meet regulatory standards.",
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
    description: "Process invoices automatically from receipt to payment, extracting and validating data for seamless accounting integration.",
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
    description: "Get instant insights from financial data using natural language queries about reports, market trends, and stock information.",
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
    description: "Stay ahead with automated market research that analyzes competitors, trends, and customer behavior for strategic insights.",
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
    description: "Access business data using everyday language. Ask questions about your dashboards and get instant answers with visualizations.",
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
    description: "Monitor customer support calls in real-time with quality analysis, compliance checking, and training opportunity identification.",
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
    description: "Deploy an AI chatbot trained on your products and services to provide instant, accurate customer support 24/7.",
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
    description: "Protect sensitive information by automatically identifying and securely redacting personal data across your documents.",
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
    description: "Boost development productivity with a secure AI assistant that understands your codebase and helps with improvements.",
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
    description: "Create professional visuals for marketing campaigns automatically, matching your brand style without design team involvement.",
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
    description: "Create a consistent brand voice across channels by cloning your CEO's voice or developing a custom voice for various content.",
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
    description: "Organize media libraries automatically with smart tagging and captioning for easy search and retrieval of assets.",
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
    description: "Ensure product quality with AI-powered visual inspection that monitors production lines and detects defects in real-time.",
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
    description: "Keep your inbox organized with automated email handling, response drafting, and workflow management.",
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
    description: "Maintain a consistent social media presence with automated post generation and scheduling across platforms.",
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">AI Implementation Services</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Let our experts handle your AI deployment. We manage everything from setup to support,
            ensuring you get maximum value from your AI investment. Start seeing results in weeks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="card group hover:border-emerald-200"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold text-emerald-900 mb-4">
                  {service.name}
                </h2>
                <p className="text-emerald-700 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
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
                        {benefit}
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
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="card bg-emerald-50 border-emerald-200">
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-emerald-700 mb-8">
                Our team handles everything from deployment to ongoing support.
                We can customize any service to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Book a Call with Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 