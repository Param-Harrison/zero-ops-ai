import Link from 'next/link';

const products = [
  {
    name: 'ZeroDocs AI',
    description: 'Enterprise-grade document intelligence platform that enables secure, local Q&A across PDFs, Word docs, and internal knowledge bases with advanced semantic search and context-aware responses.',
    features: [
      'Secure document processing',
      'Local deployment',
      'Custom knowledge base',
      'Multi-format support'
    ],
    problem: 'Organizations struggle with finding information across thousands of documents, leading to wasted time and missed insights.',
    useCase: 'Deploy a secure, local AI assistant that can instantly answer questions about your internal documents, policies, and knowledge base.'
  },
  {
    name: 'ZeroWork AI',
    description: 'Enterprise workflow automation platform that seamlessly integrates with Google Drive, Slack, Jira, and other enterprise tools, providing a unified AI assistant for cross-platform operations.',
    features: [
      'Enterprise security',
      'Multi-platform access',
      'Custom workflows',
      'Real-time integration'
    ],
    problem: 'Teams waste time switching between different tools and platforms, leading to fragmented information and reduced productivity.',
    useCase: 'Provide a unified AI assistant that works across Google Drive, Slack, Jira, and other enterprise tools, streamlining workflows and improving efficiency.'
  },
  {
    name: 'ZeroParse AI',
    description: 'Advanced document processing engine that transforms PDFs, HTML, and other formats into clean, structured text chunks optimized for AI processing and analysis.',
    features: [
      'Multi-format support',
      'Clean text extraction',
      'Structured output',
      'Batch processing'
    ],
    problem: 'Organizations struggle to extract usable data from various document formats, making it difficult to leverage AI for document analysis.',
    useCase: 'Transform messy documents into clean, structured data ready for AI processing, enabling better document understanding and analysis.'
  },
  {
    name: 'ZeroMeet AI',
    description: 'Enterprise meeting intelligence platform that provides real-time transcription, speaker identification, action item extraction, and automated meeting summaries with AI-powered insights.',
    features: [
      'Real-time transcription',
      'Action item extraction',
      'Meeting summaries',
      'Speaker diarization'
    ],
    problem: 'Important meeting insights and action items are often lost or forgotten, leading to missed opportunities and follow-ups.',
    useCase: 'Automatically capture, transcribe, and summarize meetings, ensuring no important information or action items are missed.'
  },
  {
    name: 'ZeroHire AI',
    description: 'AI-powered recruitment platform that analyzes resumes against job requirements, providing intelligent candidate matching, skill assessment, and automated screening with customizable criteria.',
    features: [
      'Automated screening',
      'Skill matching',
      'Candidate ranking',
      'Custom criteria'
    ],
    problem: 'HR teams spend countless hours manually screening resumes, leading to slow hiring processes and potential bias.',
    useCase: 'Automatically screen and rank resumes against job requirements, significantly reducing hiring time and improving candidate matching.'
  },
  {
    name: 'ZeroLegal AI',
    description: 'Enterprise legal document analysis platform that identifies risky clauses, compliance issues, and potential legal risks in contracts using advanced NLP and legal expertise.',
    features: [
      'Risk detection',
      'Compliance checking',
      'Custom rules',
      'Automated review'
    ],
    problem: 'Legal teams struggle to review contracts quickly while ensuring all risks and compliance requirements are caught.',
    useCase: 'Automatically identify potential risks and compliance issues in contracts, enabling faster and more thorough legal reviews.'
  },
  {
    name: 'ZeroInvoice AI',
    description: 'Enterprise invoice processing platform that combines advanced OCR with AI to extract, validate, and process invoice data with high accuracy and automated reconciliation.',
    features: [
      'Automated extraction',
      'Multi-format support',
      'Data validation',
      'API integration'
    ],
    problem: 'Manual invoice processing is time-consuming, error-prone, and delays financial operations.',
    useCase: 'Automatically extract and validate invoice data, streamlining accounting processes and reducing errors.'
  },
  {
    name: 'ZeroFinance AI',
    description: 'Financial intelligence platform that analyzes reports, market data, and financial statements to provide actionable insights through natural language queries and automated reporting.',
    features: [
      'Financial analysis',
      'Market insights',
      'Custom reporting',
      'Data visualization'
    ],
    problem: 'Financial teams need quick access to insights from complex reports and market data.',
    useCase: 'Enable natural language queries about financial data, making complex information easily accessible and actionable.'
  },
  {
    name: 'ZeroTask AI',
    description: 'Enterprise task automation platform that combines AI planning with autonomous execution to handle complex, multi-step tasks and research processes.',
    features: [
      'Task automation',
      'Goal-oriented actions',
      'Multi-step planning',
      'Self-improvement'
    ],
    problem: 'Teams spend too much time on repetitive tasks and research, reducing focus on strategic work.',
    useCase: 'Automate complex tasks and research processes, freeing up time for more valuable work.'
  },
  {
    name: 'ZeroQuery AI',
    description: 'Natural language to SQL conversion platform that enables business users to query databases using plain English, with advanced query optimization and data visualization.',
    features: [
      'Query generation',
      'Database integration',
      'Custom analytics',
      'Data visualization'
    ],
    problem: 'Business users struggle to access data due to technical SQL knowledge requirements.',
    useCase: 'Enable anyone to query databases using natural language, democratizing data access across the organization.'
  },
  {
    name: 'ZeroCall AI',
    description: 'Enterprise call analysis platform that provides real-time speaker identification, sentiment analysis, and quality scoring for customer service and sales calls.',
    features: [
      'Call analysis',
      'Speaker identification',
      'Quality scoring',
      'Compliance monitoring'
    ],
    problem: 'Call centers struggle to monitor and improve call quality while ensuring compliance.',
    useCase: 'Automatically analyze calls for quality, compliance, and improvement opportunities.'
  },
  {
    name: 'ZeroSupport AI',
    description: 'Enterprise support automation platform that combines GPT with custom knowledge bases to provide instant, accurate responses to customer inquiries across multiple channels.',
    features: [
      'Custom training',
      'Multi-channel support',
      'Analytics dashboard',
      'Continuous learning'
    ],
    problem: 'Customer support teams are overwhelmed with repetitive questions, leading to slow response times.',
    useCase: 'Provide instant, accurate responses to common questions, improving customer satisfaction and reducing support costs.'
  },
  {
    name: 'ZeroPrivacy AI',
    description: 'Enterprise privacy compliance platform that automatically detects and redacts sensitive information across documents, emails, and data streams.',
    features: [
      'PII detection',
      'Data redaction',
      'Compliance reporting',
      'Custom rules'
    ],
    problem: 'Organizations risk privacy violations when handling sensitive data across systems.',
    useCase: 'Automatically detect and redact sensitive information, ensuring privacy compliance across all data.'
  },
  {
    name: 'ZeroCode AI',
    description: 'Enterprise development platform that provides secure, private AI coding assistance with deep understanding of your codebase and security requirements.',
    features: [
      'Code assistance',
      'Security controls',
      'Custom training',
      'Private deployment'
    ],
    problem: 'Development teams need AI assistance while maintaining code security and privacy.',
    useCase: 'Provide secure, private AI coding assistance that understands your codebase and security requirements.'
  },
  {
    name: 'ZeroImage AI',
    description: 'Enterprise image generation platform that creates custom visuals based on text descriptions, with brand consistency and style customization.',
    features: [
      'Image generation',
      'Style customization',
      'Batch processing',
      'Brand consistency'
    ],
    problem: 'Creating custom visuals is time-consuming and expensive, limiting marketing and design capabilities.',
    useCase: 'Generate custom visuals on demand, reducing design costs and accelerating content creation.'
  },
  {
    name: 'ZeroVoice AI',
    description: 'Enterprise voice synthesis platform that creates and deploys custom voice clones for consistent brand communication across channels.',
    features: [
      'Voice cloning',
      'Content generation',
      'Multi-platform deployment',
      'Custom training'
    ],
    problem: 'Creating consistent voice content across channels is challenging and resource-intensive.',
    useCase: 'Clone and deploy brand voices across various platforms, ensuring consistent communication.'
  },
  {
    name: 'ZeroMedia AI',
    description: 'Enterprise media management platform that automatically analyzes, tags, and organizes images with AI-powered metadata generation.',
    features: [
      'Image analysis',
      'Auto-tagging',
      'Content organization',
      'Metadata generation'
    ],
    problem: 'Managing large image libraries is time-consuming and often leads to poor organization.',
    useCase: 'Automatically tag and organize images, making them easily searchable and manageable.'
  },
  {
    name: 'ZeroQuality AI',
    description: 'Enterprise quality control platform that uses computer vision to detect defects and ensure product quality in manufacturing processes.',
    features: [
      'Defect detection',
      'Quality control',
      'Real-time monitoring',
      'Custom thresholds'
    ],
    problem: 'Manual quality inspection is slow, inconsistent, and can miss defects.',
    useCase: 'Automatically detect defects in products, improving quality control and reducing costs.'
  },
  {
    name: 'ZeroMail AI',
    description: 'Enterprise email automation platform that generates context-aware responses and manages email workflows with AI-powered intelligence.',
    features: [
      'Email automation',
      'Response generation',
      'Template management',
      'Custom workflows'
    ],
    problem: 'Teams spend too much time on email management, leading to delayed responses and missed opportunities.',
    useCase: 'Automatically handle routine emails, ensuring quick responses and better communication.'
  },
  {
    name: 'ZeroSocial AI',
    description: 'Enterprise social media platform that generates and manages content across channels with AI-powered scheduling and analytics.',
    features: [
      'Content generation',
      'Multi-platform posting',
      'Analytics tracking',
      'Schedule management'
    ],
    problem: 'Maintaining consistent social media presence is time-consuming and resource-intensive.',
    useCase: 'Automatically generate and post social content, maintaining consistent brand presence across platforms.'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">Enterprise AI Products</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Deploy proven AI solutions in your environment. Get started in days, not months.
            From document analysis to customer support, our products deliver immediate value.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Book a Demo
            </Link>
            <Link
              href="/services"
              className="btn-secondary w-full sm:w-auto"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold text-emerald-900 mb-4">
                  {product.name}
                </h2>
                <p className="text-emerald-700 mb-6">{product.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
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
                    Problem Solved
                  </h3>
                  <p className="text-emerald-700">{product.problem}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    Use Case
                  </h3>
                  <p className="text-emerald-700">{product.useCase}</p>
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
          ))}
        </div>

        <div className="mt-16">
          <div className="card bg-emerald-50 border-emerald-200">
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Need a Custom AI Solution?
              </h2>
              <p className="text-emerald-700 mb-8">
                We can customize any of our products to your specific needs or build a completely new solution.
                Our team handles everything from deployment to ongoing support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary w-full sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 