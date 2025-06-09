import Link from 'next/link';

const products = [
  {
    name: 'PrivateGPT',
    description: 'Self-hosted document chatbot for secure, private question-answering on internal documents.',
    what: 'A 100% private AI assistant that allows companies to ask questions of their documents using local LLMs without any data leaving their environment.',
    why: [
      'Zero data privacy concerns',
      'Instant answers from company knowledge',
      'Reduces research time by 80%',
      'Works offline and on-premise'
    ],
    how: [
      'Deploy on your infrastructure',
      'Index your documents',
      'Configure access controls',
      'Start asking questions'
    ],
    industries: ['Legal', 'Healthcare', 'Consulting', 'Finance']
  },
  {
    name: 'Onyx Enterprise Search',
    description: 'AI-powered enterprise search and team chatbot that connects to 40+ internal data sources.',
    what: 'A unified, secure AI coworker that can instantly retrieve answers from your docs, apps, and even identify in-house experts.',
    why: [
      'Connects to 40+ data sources',
      'Unified search across all platforms',
      'Secure and private deployment',
      'Reduces search time by 90%'
    ],
    how: [
      'Connect your data sources',
      'Configure search parameters',
      'Set up access controls',
      'Enable team collaboration'
    ],
    industries: ['SaaS', 'Enterprise', 'Consulting', 'Technology']
  },
  {
    name: 'Unstructured Data Pipeline',
    description: 'Document ingestion and parsing pipeline that extracts structured data from complex files.',
    what: 'An open-source ETL solution that transforms complex files into clean, structured formats ready for AI processing.',
    why: [
      'Handles multiple file formats',
      'High accuracy extraction',
      'Automated data cleaning',
      'Ready for AI processing'
    ],
    how: [
      'Configure document types',
      'Set up processing rules',
      'Define output formats',
      'Monitor extraction quality'
    ],
    industries: ['Finance', 'Legal', 'Insurance', 'Healthcare']
  },
  {
    name: 'Haystack Support Bot',
    description: 'AI chatbot for customer support using LLMs and knowledge base retrieval.',
    what: 'An intelligent, scalable customer service agent that understands user queries and fetches answers from product manuals and FAQ docs.',
    why: [
      '24/7 customer support',
      'Instant response times',
      'Consistent answers',
      'Reduces support costs by 50%'
    ],
    how: [
      'Connect knowledge base',
      'Configure conversation flows',
      'Set up escalation rules',
      'Monitor performance'
    ],
    industries: ['SaaS', 'E-commerce', 'IT Support', 'Telecom']
  },
  {
    name: 'ResumeGPT',
    description: 'AI-powered resume screening and evaluation tool for recruitment.',
    what: 'An intelligent recruitment tool that uses GPT to automate evaluating multiple resumes against job descriptions.',
    why: [
      'Automated resume screening',
      'Consistent evaluation',
      'Reduces hiring time by 60%',
      'Improves candidate quality'
    ],
    how: [
      'Configure job requirements',
      'Set screening criteria',
      'Upload resumes',
      'Review AI recommendations'
    ],
    industries: ['HR', 'Recruitment', 'Enterprise', 'Consulting']
  },
  {
    name: 'LexNLP',
    description: 'AI-assisted contract analysis and legal document processing.',
    what: 'An open-source text processing tool designed for real, unstructured legal text that identifies clauses, dates, amounts, and other key entities.',
    why: [
      'Automated contract analysis',
      'Risk identification',
      'Compliance checking',
      'Reduces review time by 75%'
    ],
    how: [
      'Upload contracts',
      'Configure analysis rules',
      'Set risk thresholds',
      'Review AI insights'
    ],
    industries: ['Legal', 'Finance', 'Insurance', 'Real Estate']
  },
  {
    name: 'Invoiceable',
    description: 'Automated invoice and document parser with OCR capabilities.',
    what: 'An AI-powered solution that uses OCR and data extraction to parse invoices, receipts, and forms with high accuracy.',
    why: [
      'Automated data extraction',
      'Reduces manual entry by 90%',
      'High accuracy processing',
      'Integrates with accounting systems'
    ],
    how: [
      'Configure document types',
      'Set up extraction rules',
      'Connect to accounting system',
      'Monitor processing quality'
    ],
    industries: ['Accounting', 'Finance', 'Retail', 'Healthcare']
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
              Enterprise AI Products
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Our suite of enterprise-grade AI products can be deployed individually or combined to create powerful solutions for your specific business needs.
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
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="card group hover:border-emerald-200 flex flex-col h-full bg-white/50 backdrop-blur-sm"
              >
                <div className="flex-grow p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-emerald-700 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      What It Is
                    </h3>
                    <p className="text-emerald-700">{product.what}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {product.why.map((reason, reasonIndex) => (
                        <li
                          key={reasonIndex}
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
                          <span className="text-sm sm:text-base">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Implementation Steps
                    </h3>
                    <ul className="space-y-2">
                      {product.how.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
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
                          <span className="text-sm sm:text-base">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-emerald-900 mb-3">
                      Ideal For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry, industryIndex) => (
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
                  Need a Custom AI Solution?
                </h2>
                <p className="text-emerald-700 mb-8">
                  Our AI products can be customized and combined to create powerful solutions for your specific needs. Let&apos;s discuss how we can tailor our technology to solve your unique challenges.
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
      </section>
    </div>
  );
} 