import Link from 'next/link';

const industries = [
  {
    name: 'Legal',
    description: 'Transform legal research and document analysis with AI.',
    features: [
      'Case law analysis',
      'Contract review',
      'Legal research automation'
    ],
    useCase: 'Auto-review of contracts to flag risks, clauses, deadlines',
    tools: ['ContractCheckGPT', 'PrivateGPT'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    name: 'Healthcare',
    description: 'Secure medical documentation, transcription, and compliance.',
    features: [
      'Medical record analysis',
      'Research automation',
      'Clinical documentation'
    ],
    useCase: 'Transcribe doctor-patient calls, summarize notes, redact PII',
    tools: ['WhisperX', 'Presidio', 'Meetily'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: 'Recruiting / HR',
    description: 'Intelligent resume screening and automated onboarding.',
    features: [
      'Resume screening',
      'Interview analysis',
      'Automated onboarding'
    ],
    useCase: 'Rank 100+ resumes per role, summarize interviews, onboard hires via chat',
    tools: ['ResumeGPT', 'Onboarding Agent', 'Meetily'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'Finance',
    description: 'Automated financial analysis and compliance monitoring.',
    features: [
      'Financial analysis',
      'Compliance monitoring',
      'Risk assessment'
    ],
    useCase: 'Analyze P&Ls, scrape earnings calls, redact sensitive financial info',
    tools: ['FinGPT', 'Presidio', 'Unstructured'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Customer Support',
    description: 'Intelligent call handling and automated responses.',
    features: [
      'Call transcription',
      'Sentiment analysis',
      'Automated responses'
    ],
    useCase: 'Transcribe calls, detect frustration, automate 1st-line answers',
    tools: ['WhisperX', 'Haystack Chatbot', 'Call QA Agent'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    name: 'SaaS (B2B)',
    description: 'Unified knowledge management and support automation.',
    features: [
      'Knowledge management',
      'Support automation',
      'Documentation search'
    ],
    useCase: 'Auto-search across docs, Notion, Confluence, Slack for onboarding and support',
    tools: ['Onyx', 'PrivateGPT'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    name: 'Marketing',
    description: 'Automated content creation and campaign management.',
    features: [
      'Content generation',
      'Campaign management',
      'Social media automation'
    ],
    useCase: 'Auto-generate social posts, schedule publishing, generate campaign images',
    tools: ['n8n Social Poster', 'Stable Diffusion UI'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    name: 'E-commerce',
    description: 'Intelligent product management and content generation.',
    features: [
      'Product tagging',
      'Content generation',
      'Visual asset creation'
    ],
    useCase: 'Auto-tag product images, write descriptions, generate visuals',
    tools: ['BLIP', 'Stable Diffusion', 'PrivateGPT'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: 'Call Centers',
    description: 'Real-time call analysis and performance monitoring.',
    features: [
      'Call transcription',
      'Performance monitoring',
      'Compliance alerts'
    ],
    useCase: 'Real-time call transcription, performance dashboard, compliance alerts',
    tools: ['WhisperX', 'Voice QA Agent'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    name: 'Education / EdTech',
    description: 'Automated content creation and student support.',
    features: [
      'Content summarization',
      'Student onboarding',
      'Learning content captioning'
    ],
    useCase: 'Summarize lessons, onboard students, caption learning content',
    tools: ['Meetily', 'Coqui', 'Caption Agent (BLIP)'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    name: 'Manufacturing',
    description: 'AI-powered quality control and defect detection.',
    features: [
      'Quality control',
      'Defect detection',
      'Process optimization'
    ],
    useCase: 'Detect visual defects in products, automate quality control',
    tools: ['Open Visual QA', 'Whisper Alerts'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: 'Real Estate',
    description: 'Automated listing generation and buyer support.',
    features: [
      'Listing generation',
      'Buyer support',
      'Property analysis'
    ],
    useCase: 'Auto-generate listings, answer buyer questions via chatbot',
    tools: ['PrivateGPT', 'BLIP', 'Support AI Agent'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    name: 'Media & Publishing',
    description: 'Content processing and asset management.',
    features: [
      'Content transcription',
      'Asset tagging',
      'Alt-text generation'
    ],
    useCase: 'Transcribe interviews, auto-tag media assets, generate alt-text',
    tools: ['Whisper', 'BLIP', 'Stable Diffusion'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    name: 'Telecom',
    description: 'Intelligent customer service and NPS monitoring.',
    features: [
      'Customer service',
      'NPS monitoring',
      'Call analysis'
    ],
    useCase: 'Auto-response to tier-1 queries, flag NPS risks in call transcripts',
    tools: ['Rasa', 'WhisperX', 'Presidio'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Insurance',
    description: 'Automated claims processing and policy analysis.',
    features: [
      'Claims processing',
      'Policy analysis',
      'Data redaction'
    ],
    useCase: 'OCR claims/invoices, redact customer data, summarize policies',
    tools: ['Invoiceable', 'Presidio', 'Meetily'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: 'Consulting',
    description: 'Automated report generation and client support.',
    features: [
      'Report generation',
      'Client support',
      'Knowledge management'
    ],
    useCase: 'Auto-generate reports, summarize client calls, embed private chatbots for client data',
    tools: ['Auto-GPT', 'Meetily', 'PrivateGPT'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    name: 'Logistics',
    description: 'Intelligent shipping management and communication.',
    features: [
      'Shipping management',
      'Communication automation',
      'Database access'
    ],
    useCase: 'Natural language access to shipping databases, automated email replies',
    tools: ['NL2SQL', 'Email Agent'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  },
  {
    name: 'Travel & Hospitality',
    description: 'Automated guest support and feedback analysis.',
    features: [
      'Guest support',
      'Feedback analysis',
      'Booking automation'
    ],
    useCase: 'Answer guest FAQs, process bookings with support agent, summarize feedback calls',
    tools: ['Haystack', 'WhisperX', 'Journey Agent'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Government / Public Sector',
    description: 'Secure document processing and report generation.',
    features: [
      'Document processing',
      'Report generation',
      'Data redaction'
    ],
    useCase: 'Redact sensitive text, auto-generate summaries from PDF reports',
    tools: ['Presidio', 'Unstructured', 'FinGPT'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Engineering / DevOps',
    description: 'Intelligent code assistance and documentation.',
    features: [
      'Code assistance',
      'Documentation',
      'Knowledge management'
    ],
    useCase: 'Local code assistant (Copilot alternative), query internal wiki from IDE',
    tools: ['Code Llama', 'Onyx', 'Internal GPT'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">AI Solutions by Industry</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Every industry has unique challenges. We&apos;ve built specialized AI solutions
            for 20+ industries, each delivering measurable results. Find your industry
            and see how we can help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Get Industry Analysis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/use-cases"
              className="btn-secondary w-full sm:w-auto"
            >
              View Use Cases
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              id={industry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="card group hover:border-emerald-200 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-emerald-600 group-hover:text-emerald-700 mr-3">
                  {industry.icon}
                </div>
                <h2 className="text-xl font-bold text-emerald-900">
                  {industry.name}
                </h2>
              </div>
              <p className="text-emerald-700 mb-4">{industry.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-emerald-900 mb-2">
                  Key Use Case
                </h3>
                <p className="text-emerald-700 text-sm">{industry.useCase}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-emerald-900 mb-2">
                  AI Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container relative">
              <div className="max-w-4xl mx-auto text-center py-20 sm:py-24">
                <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6 sm:mb-8">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl sm:text-2xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
                  Discover industry-specific AI solutions tailored to your unique challenges.
                  Let&apos;s build your future together.
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
                    href="/use-cases"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    View Use Cases
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 