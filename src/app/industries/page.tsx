import Link from 'next/link';

const industries = [
  {
    name: 'Legal',
    description: 'Automated contract review, risk assessment, and deadline tracking.',
    icon: '⚖️',
    useCase: 'Auto-review of contracts to flag risks, clauses, deadlines',
    tools: ['ContractCheckGPT', 'PrivateGPT'],
  },
  {
    name: 'Healthcare',
    description: 'Secure medical documentation, transcription, and compliance.',
    icon: '🏥',
    useCase: 'Transcribe doctor-patient calls, summarize notes, redact PII',
    tools: ['WhisperX', 'Presidio', 'Meetily'],
  },
  {
    name: 'Recruiting / HR',
    description: 'Intelligent resume screening and automated onboarding.',
    icon: '👥',
    useCase: 'Rank 100+ resumes per role, summarize interviews, onboard hires via chat',
    tools: ['ResumeGPT', 'Onboarding Agent', 'Meetily'],
  },
  {
    name: 'Finance',
    description: 'Automated financial analysis and compliance monitoring.',
    icon: '💰',
    useCase: 'Analyze P&Ls, scrape earnings calls, redact sensitive financial info',
    tools: ['FinGPT', 'Presidio', 'Unstructured'],
  },
  {
    name: 'Customer Support',
    description: 'Intelligent call handling and automated responses.',
    icon: '🎯',
    useCase: 'Transcribe calls, detect frustration, automate 1st-line answers',
    tools: ['WhisperX', 'Haystack Chatbot', 'Call QA Agent'],
  },
  {
    name: 'SaaS (B2B)',
    description: 'Unified knowledge management and support automation.',
    icon: '🔄',
    useCase: 'Auto-search across docs, Notion, Confluence, Slack for onboarding and support',
    tools: ['Onyx', 'PrivateGPT'],
  },
  {
    name: 'Marketing',
    description: 'Automated content creation and campaign management.',
    icon: '📢',
    useCase: 'Auto-generate social posts, schedule publishing, generate campaign images',
    tools: ['n8n Social Poster', 'Stable Diffusion UI'],
  },
  {
    name: 'E-commerce',
    description: 'Intelligent product management and content generation.',
    icon: '🛍️',
    useCase: 'Auto-tag product images, write descriptions, generate visuals',
    tools: ['BLIP', 'Stable Diffusion', 'PrivateGPT'],
  },
  {
    name: 'Call Centers',
    description: 'Real-time call analysis and performance monitoring.',
    icon: '📞',
    useCase: 'Real-time call transcription, performance dashboard, compliance alerts',
    tools: ['WhisperX', 'Voice QA Agent'],
  },
  {
    name: 'Education / EdTech',
    description: 'Automated content creation and student support.',
    icon: '📚',
    useCase: 'Summarize lessons, onboard students, caption learning content',
    tools: ['Meetily', 'Coqui', 'Caption Agent (BLIP)'],
  },
  {
    name: 'Manufacturing',
    description: 'AI-powered quality control and defect detection.',
    icon: '🏭',
    useCase: 'Detect visual defects in products, automate quality control',
    tools: ['Open Visual QA', 'Whisper Alerts'],
  },
  {
    name: 'Real Estate',
    description: 'Automated listing generation and buyer support.',
    icon: '🏠',
    useCase: 'Auto-generate listings, answer buyer questions via chatbot',
    tools: ['PrivateGPT', 'BLIP', 'Support AI Agent'],
  },
  {
    name: 'Media & Publishing',
    description: 'Content processing and asset management.',
    icon: '📰',
    useCase: 'Transcribe interviews, auto-tag media assets, generate alt-text',
    tools: ['Whisper', 'BLIP', 'Stable Diffusion'],
  },
  {
    name: 'Telecom',
    description: 'Intelligent customer service and NPS monitoring.',
    icon: '📱',
    useCase: 'Auto-response to tier-1 queries, flag NPS risks in call transcripts',
    tools: ['Rasa', 'WhisperX', 'Presidio'],
  },
  {
    name: 'Insurance',
    description: 'Automated claims processing and policy analysis.',
    icon: '🛡️',
    useCase: 'OCR claims/invoices, redact customer data, summarize policies',
    tools: ['Invoiceable', 'Presidio', 'Meetily'],
  },
  {
    name: 'Consulting',
    description: 'Automated report generation and client support.',
    icon: '💼',
    useCase: 'Auto-generate reports, summarize client calls, embed private chatbots for client data',
    tools: ['Auto-GPT', 'Meetily', 'PrivateGPT'],
  },
  {
    name: 'Logistics',
    description: 'Intelligent shipping management and communication.',
    icon: '📦',
    useCase: 'Natural language access to shipping databases, automated email replies',
    tools: ['NL2SQL', 'Email Agent'],
  },
  {
    name: 'Travel & Hospitality',
    description: 'Automated guest support and feedback analysis.',
    icon: '✈️',
    useCase: 'Answer guest FAQs, process bookings with support agent, summarize feedback calls',
    tools: ['Haystack', 'WhisperX', 'Journey Agent'],
  },
  {
    name: 'Government / Public Sector',
    description: 'Secure document processing and report generation.',
    icon: '🏛️',
    useCase: 'Redact sensitive text, auto-generate summaries from PDF reports',
    tools: ['Presidio', 'Unstructured', 'FinGPT'],
  },
  {
    name: 'Engineering / DevOps',
    description: 'Intelligent code assistance and documentation.',
    icon: '⚙️',
    useCase: 'Local code assistant (Copilot alternative), query internal wiki from IDE',
    tools: ['Code Llama', 'Onyx', 'Internal GPT'],
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">Industries We Serve</h1>
          <p className="section-subtitle">
            Discover how ZeroOpsAI transforms operations across 20+ industries with proven AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{industry.icon}</span>
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
                      className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="card bg-emerald-50 border-emerald-200">
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-emerald-700 mb-8">
                Join leading companies across these industries in leveraging AI for operational excellence.
                Our solutions are proven, secure, and ready to deploy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Get Started
                </Link>
                <Link
                  href="/use-cases"
                  className="btn-secondary w-full sm:w-auto"
                >
                  View Use Cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 