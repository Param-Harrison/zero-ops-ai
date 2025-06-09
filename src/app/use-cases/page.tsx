import Link from 'next/link';

const useCases = [
  {
    industry: 'Legal',
    title: 'Contract Analysis & Risk Assessment',
    description: 'Automated contract review, risk flagging, and deadline tracking using AI.',
    problem: 'Legal teams spend excessive time manually reviewing contracts and identifying risks.',
    solution: [
      'Deploy ContractCheckGPT for automated contract analysis',
      'Implement PrivateGPT for secure document processing',
      'Set up automated risk alerts and deadline tracking',
    ],
    results: [
      '75% faster contract review',
      '90% accuracy in risk detection',
      'Automated deadline tracking',
    ],
  },
  {
    industry: 'Healthcare',
    title: 'Medical Documentation & Compliance',
    description: 'Secure transcription, note summarization, and PII protection for healthcare providers.',
    problem: 'Healthcare providers struggle with manual documentation and compliance requirements.',
    solution: [
      'Implement WhisperX for call transcription',
      'Deploy Presidio for PII redaction',
      'Set up Meetily for note summarization',
    ],
    results: [
      '85% reduction in documentation time',
      '99.9% HIPAA compliance',
      '40% improvement in care coordination',
    ],
  },
  {
    industry: 'Recruiting / HR',
    title: 'Intelligent Hiring & Onboarding',
    description: 'Automated resume screening, interview analysis, and new hire onboarding.',
    problem: 'HR teams struggle with high volume of applications and manual onboarding processes.',
    solution: [
      'Deploy ResumeGPT for automated screening',
      'Implement Onboarding Agent for new hires',
      'Set up Meetily for interview analysis',
    ],
    results: [
      '80% faster resume screening',
      '60% reduction in hiring time',
      '90% new hire satisfaction',
    ],
  },
  {
    industry: 'Finance',
    title: 'Financial Analysis & Compliance',
    description: 'Automated financial analysis, earnings call processing, and sensitive data protection.',
    problem: 'Financial institutions face challenges in data analysis and compliance.',
    solution: [
      'Deploy FinGPT for financial analysis',
      'Implement Presidio for data protection',
      'Set up Unstructured for document processing',
    ],
    results: [
      '70% faster financial analysis',
      '95% accuracy in data extraction',
      '100% compliance with regulations',
    ],
  },
  {
    industry: 'Customer Support',
    title: 'Intelligent Support & Call Analysis',
    description: 'Automated call transcription, sentiment analysis, and first-line support.',
    problem: 'Support teams struggle with high call volumes and manual analysis.',
    solution: [
      'Deploy WhisperX for call transcription',
      'Implement Haystack Chatbot',
      'Set up Call QA Agent',
    ],
    results: [
      '60% reduction in response time',
      '45% increase in first-call resolution',
      '50% improvement in customer satisfaction',
    ],
  },
  {
    industry: 'SaaS (B2B)',
    title: 'Knowledge Management & Support',
    description: 'Unified search and support across documentation, knowledge bases, and communication platforms.',
    problem: 'B2B SaaS companies struggle with scattered knowledge and support efficiency.',
    solution: [
      'Implement Onyx for unified search',
      'Deploy PrivateGPT for documentation',
      'Set up automated support workflows',
    ],
    results: [
      '90% reduction in search time',
      '60% faster support resolution',
      'Improved customer satisfaction',
    ],
  },
  {
    industry: 'Marketing',
    title: 'Content Creation & Campaign Management',
    description: 'Automated social media content generation, scheduling, and campaign image creation.',
    problem: 'Marketing teams struggle with content creation and campaign management.',
    solution: [
      'Deploy n8n Social Poster',
      'Implement Stable Diffusion UI',
      'Set up automated publishing workflows',
    ],
    results: [
      '70% faster content creation',
      '50% reduction in campaign setup time',
      '40% increase in engagement',
    ],
  },
  {
    industry: 'E-commerce',
    title: 'Product Management & Customer Experience',
    description: 'Automated product tagging, description generation, and visual content creation.',
    problem: 'E-commerce businesses face challenges in product management and content creation.',
    solution: [
      'Implement BLIP for image analysis',
      'Deploy Stable Diffusion for visuals',
      'Set up PrivateGPT for descriptions',
    ],
    results: [
      '80% faster product onboarding',
      '70% reduction in content creation time',
      '40% improvement in conversion rates',
    ],
  },
  {
    industry: 'Call Centers',
    title: 'Real-time Call Analysis & Performance',
    description: 'Real-time call transcription, performance monitoring, and compliance alerts.',
    problem: 'Call centers struggle with quality monitoring and compliance.',
    solution: [
      'Deploy WhisperX for real-time transcription',
      'Implement Voice QA Agent',
      'Set up compliance monitoring',
    ],
    results: [
      '85% reduction in monitoring time',
      '90% compliance accuracy',
      '40% improvement in agent performance',
    ],
  },
  {
    industry: 'Education / EdTech',
    title: 'Learning Content & Student Support',
    description: 'Automated lesson summarization, student onboarding, and content captioning.',
    problem: 'Educational institutions face challenges in content creation and student support.',
    solution: [
      'Implement Meetily for content management',
      'Deploy Coqui for audio processing',
      'Set up Caption Agent (BLIP)',
    ],
    results: [
      '60% faster content creation',
      '50% improvement in student engagement',
      '70% reduction in support tickets',
    ],
  },
  {
    industry: 'Manufacturing',
    title: 'Quality Control & Defect Detection',
    description: 'AI-powered visual inspection and quality control for manufacturing processes.',
    problem: 'Manufacturers face challenges in maintaining consistent quality control.',
    solution: [
      'Deploy Open Visual QA system',
      'Implement Whisper Alerts',
      'Set up automated quality reporting',
    ],
    results: [
      '90% reduction in defects',
      '60% decrease in inspection time',
      '40% improvement in quality',
    ],
  },
  {
    industry: 'Real Estate',
    title: 'Listing Generation & Buyer Support',
    description: 'Automated property listing creation, buyer inquiry handling, and virtual tours.',
    problem: 'Real estate agencies struggle with listing management and buyer support.',
    solution: [
      'Implement PrivateGPT for listing generation',
      'Deploy BLIP for image analysis',
      'Set up Support AI Agent',
    ],
    results: [
      '75% faster listing creation',
      '60% increase in buyer engagement',
      '50% reduction in response time',
    ],
  },
  {
    industry: 'Media & Publishing',
    title: 'Content Processing & Asset Management',
    description: 'Automated interview transcription, media asset tagging, and alt-text generation.',
    problem: 'Media companies face challenges in content processing and asset management.',
    solution: [
      'Deploy Whisper for transcription',
      'Implement BLIP for image analysis',
      'Set up Stable Diffusion',
    ],
    results: [
      '80% faster content processing',
      '90% accuracy in asset tagging',
      '60% reduction in manual work',
    ],
  },
  {
    industry: 'Telecom',
    title: 'Customer Service & NPS Monitoring',
    description: 'Automated tier-1 query handling, NPS risk detection, and call analysis.',
    problem: 'Telecom companies struggle with customer service efficiency and NPS monitoring.',
    solution: [
      'Implement Rasa for query handling',
      'Deploy WhisperX for call analysis',
      'Set up Presidio for data protection',
    ],
    results: [
      '70% faster query resolution',
      '85% accuracy in NPS prediction',
      '50% improvement in customer satisfaction',
    ],
  },
  {
    industry: 'Insurance',
    title: 'Claims Processing & Policy Analysis',
    description: 'Automated claims processing, document analysis, and policy summarization.',
    problem: 'Insurance companies struggle with manual claims processing and risk assessment.',
    solution: [
      'Implement Invoiceable for document processing',
      'Deploy Presidio for data protection',
      'Set up Meetily for policy analysis',
    ],
    results: [
      '70% faster claims processing',
      '85% accuracy in risk assessment',
      '60% reduction in processing costs',
    ],
  },
  {
    industry: 'Consulting',
    title: 'Report Generation & Client Support',
    description: 'Automated report creation, client call analysis, and private chatbot deployment.',
    problem: 'Consulting firms face challenges in report generation and client support.',
    solution: [
      'Deploy Auto-GPT for report generation',
      'Implement Meetily for call analysis',
      'Set up PrivateGPT for client data',
    ],
    results: [
      '80% faster report generation',
      '70% reduction in analysis time',
      '90% client satisfaction',
    ],
  },
  {
    industry: 'Logistics',
    title: 'Shipping Management & Communication',
    description: 'Natural language database access and automated email response system.',
    problem: 'Logistics companies struggle with shipping management and customer communication.',
    solution: [
      'Implement NL2SQL for database access',
      'Deploy Email Agent',
      'Set up automated tracking',
    ],
    results: [
      '75% faster query resolution',
      '60% reduction in email response time',
      '85% improvement in tracking accuracy',
    ],
  },
  {
    industry: 'Travel & Hospitality',
    title: 'Guest Support & Feedback Analysis',
    description: 'Automated FAQ handling, booking management, and feedback analysis.',
    problem: 'Travel companies face challenges in guest support and feedback management.',
    solution: [
      'Deploy Haystack for FAQ handling',
      'Implement WhisperX for call analysis',
      'Set up Journey Agent',
    ],
    results: [
      '70% faster guest support',
      '80% booking efficiency',
      '60% improvement in guest satisfaction',
    ],
  },
  {
    industry: 'Government / Public Sector',
    title: 'Document Processing & Report Generation',
    description: 'Secure text redaction, PDF analysis, and automated report generation.',
    problem: 'Government agencies struggle with document processing and reporting.',
    solution: [
      'Implement Presidio for text redaction',
      'Deploy Unstructured for PDF processing',
      'Set up FinGPT for analysis',
    ],
    results: [
      '85% faster document processing',
      '99.9% compliance accuracy',
      '70% reduction in manual work',
    ],
  },
  {
    industry: 'Engineering / DevOps',
    title: 'Code Assistance & Documentation',
    description: 'Local code assistance, internal wiki integration, and documentation generation.',
    problem: 'Engineering teams face challenges in code assistance and documentation.',
    solution: [
      'Deploy Code Llama for code assistance',
      'Implement Onyx for wiki integration',
      'Set up Internal GPT',
    ],
    results: [
      '60% faster code completion',
      '70% reduction in documentation time',
      '50% improvement in code quality',
    ],
  }
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="section-title">AI Use Cases by Industry</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            See how leading companies are using AI to solve real business challenges.
            Each use case includes specific tools, implementation steps, and measurable results.
            Ready to transform your business?
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full sm:w-auto"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/products"
              className="btn-secondary w-full sm:w-auto"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="card group hover:border-emerald-200"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {useCase.industry}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-emerald-900 mb-4">
                  {useCase.title}
                </h2>
                <p className="text-emerald-700 mb-6">{useCase.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    The Challenge
                  </h3>
                  <p className="text-emerald-700">{useCase.problem}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    Our Solution
                  </h3>
                  <ul className="space-y-2">
                    {useCase.solution.map((step, stepIndex) => (
                      <li
                        key={stepIndex}
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
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                    Measurable Results
                  </h3>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
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
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="card bg-emerald-50 border-emerald-200">
            <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-emerald-700 mb-8">
                We can create custom solutions for any industry. Let&apos;s discuss your specific challenges and requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full sm:w-auto"
                >
                  Contact Us
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
    </div>
  );
} 