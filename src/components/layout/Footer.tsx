import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">
              <span className="gradient-text">ZeroOps</span>
              <span className="text-emerald-600">AI</span>
            </h3>
            <p className="text-emerald-700 text-sm sm:text-base">
              Private AI agents for work that matters. Built on open source, deployed securely.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="https://twitter.com/zeroopsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/zeroopsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/zeroopsai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-emerald-900 mb-4 sm:mb-6 text-base sm:text-lg">Solutions</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/services" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/rag-as-a-service" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  RAG-as-a-Service
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agent-solutions" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services/mvp-as-a-service" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  MVP as a Service
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-emerald-900 mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/industries" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-emerald-900 mb-4 sm:mb-6 text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/privacy" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-emerald-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-700 text-sm sm:text-base">
              © {new Date().getFullYear()} Secret SaaS OÜ. All rights reserved.
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              <Link href="/privacy" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                Privacy
              </Link>
              <Link href="/terms" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                Terms
              </Link>
              <Link href="/security" className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 