import Link from 'next/link';

const products = [
  {
    name: 'PrivateGPT',
    description: 'Local document Q&A bot for PDFs and Word documents',
    github: 'https://github.com/imartinez/privateGPT',
    features: [
      'Secure document processing',
      'Local deployment',
      'Custom knowledge base',
    ],
    useCase: 'Internal knowledge search and document Q&A',
  },
  {
    name: 'Onyx AI Chat',
    description: 'Secure enterprise AI assistant with multi-platform integration',
    github: 'https://github.com/onyx-dot-app/onyx',
    features: [
      'Enterprise-grade security',
      'Multi-platform integration',
      'Custom training',
    ],
    useCase: 'Enterprise-wide AI assistance',
  },
  {
    name: 'Unstructured Parser',
    description: 'Convert PDF/HTML documents into clean, structured text chunks',
    github: 'https://github.com/Unstructured-IO/unstructured',
    features: [
      'Multi-format support',
      'Clean text extraction',
      'Structured output',
    ],
    useCase: 'Document processing and ETL',
  },
  {
    name: 'Meetily',
    description: 'AI-powered meeting transcription and summarization',
    github: 'https://github.com/meetily/meetily',
    features: [
      'Real-time transcription',
      'Meeting summaries',
      'Action item extraction',
    ],
    useCase: 'Meeting intelligence and documentation',
  },
  {
    name: 'ResumeGPT',
    description: 'AI-powered resume screening and job matching',
    github: 'https://github.com/Ashutosh00710/ResumeAI',
    features: [
      'Automated screening',
      'Job matching',
      'Candidate ranking',
    ],
    useCase: 'Recruitment and HR automation',
  },
  {
    name: 'ContractCheckGPT',
    description: 'Automated contract analysis and risk detection',
    github: 'https://github.com/gptlab-ai/ContractCheckGPT',
    features: [
      'Risk detection',
      'Clause analysis',
      'Compliance checking',
    ],
    useCase: 'Legal document review',
  },
  {
    name: 'Invoiceable',
    description: 'OCR and invoice data extraction system',
    github: 'https://github.com/invoicenator/invoiceable',
    features: [
      'Automated extraction',
      'Data validation',
      'API integration',
    ],
    useCase: 'Invoice processing automation',
  },
  {
    name: 'FinGPT',
    description: 'Financial report analysis and chatbot',
    github: 'https://github.com/AI4Finance-Foundation/FinGPT',
    features: [
      'Financial analysis',
      'Report generation',
      'Market insights',
    ],
    useCase: 'Financial intelligence',
  },
  {
    name: 'Auto-GPT',
    description: 'Autonomous task execution agent',
    github: 'https://github.com/Significant-Gravitas/Auto-GPT',
    features: [
      'Task automation',
      'Research capabilities',
      'Decision making',
    ],
    useCase: 'Business process automation',
  },
  {
    name: 'NL2SQL Agent',
    description: 'Natural language to SQL query conversion',
    github: 'https://github.com/salesforce/TabularLang',
    features: [
      'Query generation',
      'Database integration',
      'Natural language interface',
    ],
    useCase: 'Business intelligence',
  },
  {
    name: 'Voice QA Agent',
    description: 'Speaker diarization and transcription system',
    github: 'https://github.com/m-bain/whisperX',
    features: [
      'Real-time transcription',
      'Speaker identification',
      'Quality analysis',
    ],
    useCase: 'Call center analytics',
  },
  {
    name: 'Haystack Chatbot',
    description: 'GPT-powered support chatbot system',
    github: 'https://github.com/deepset-ai/haystack',
    features: [
      'Custom training',
      'Multi-channel support',
      'Knowledge integration',
    ],
    useCase: 'Customer support automation',
  },
  {
    name: 'Presidio Redactor',
    description: 'PII detection and redaction system',
    github: 'https://github.com/microsoft/presidio',
    features: [
      'PII detection',
      'Data redaction',
      'Compliance tools',
    ],
    useCase: 'Data privacy and compliance',
  },
  {
    name: 'Code Llama IDE Assistant',
    description: 'Self-hosted AI code assistant',
    github: 'https://github.com/facebookresearch/codellama',
    features: [
      'Code completion',
      'Documentation generation',
      'Bug detection',
    ],
    useCase: 'Development productivity',
  },
  {
    name: 'Stable Diffusion UI',
    description: 'AI-powered text to image generation',
    github: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    features: [
      'Image generation',
      'Style customization',
      'Batch processing',
    ],
    useCase: 'Creative asset generation',
  },
  {
    name: 'Coqui Voice Clone',
    description: 'Voice cloning and synthesis system',
    github: 'https://github.com/coqui-ai/TTS',
    features: [
      'Voice cloning',
      'Text-to-speech',
      'Custom voices',
    ],
    useCase: 'Voice content creation',
  },
  {
    name: 'BLIP Captioner',
    description: 'Image captioning and tagging system',
    github: 'https://github.com/salesforce/BLIP',
    features: [
      'Image analysis',
      'Auto-tagging',
      'Caption generation',
    ],
    useCase: 'Media asset management',
  },
  {
    name: 'Open Visual QA',
    description: 'AI-powered visual inspection system',
    github: 'https://github.com/openvinotoolkit/training_extensions',
    features: [
      'Defect detection',
      'Quality control',
      'Real-time monitoring',
    ],
    useCase: 'Manufacturing quality control',
  },
  {
    name: 'AI Email Responder',
    description: 'Automated email response system',
    github: 'https://github.com/karthik8628/auto-email-gpt',
    features: [
      'Response generation',
      'Template management',
      'Email automation',
    ],
    useCase: 'Email management',
  },
  {
    name: 'n8n AI Social Poster',
    description: 'Automated social media content generation and posting',
    github: 'https://github.com/n8n-io/n8n',
    features: [
      'Content generation',
      'Scheduling',
      'Multi-platform posting',
    ],
    useCase: 'Social media automation',
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">AI Products</h1>
          <p className="section-subtitle">
            Deployable, self-hosted AI solutions built on proven open-source technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    Key Features
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
                    Use Case
                  </h3>
                  <p className="text-emerald-700">{product.useCase}</p>
                </div>

                <div className="mt-auto">
                  <a
                    href={product.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full"
                  >
                    View on GitHub
                  </a>
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
                We can customize any of these products to your specific needs or create a new solution from scratch.
                Our team handles deployment, training, and ongoing support.
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