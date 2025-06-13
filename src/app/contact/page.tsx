'use client';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-4 sm:mb-6">
                Let&apos;s Build Something Amazing Together
              </h1>
              <p className="text-lg sm:text-xl text-emerald-700 mb-6 sm:mb-8">
                Tell us about your project and we&apos;ll help you transform your business with AI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-emerald-900 mb-4 sm:mb-6">Why Choose Us?</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-medium text-emerald-900">Rapid Development</h3>
                    <p className="mt-1 text-sm sm:text-base text-emerald-700">
                      Get your AI solution to market faster with our streamlined development process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-medium text-emerald-900">Enterprise Ready</h3>
                    <p className="mt-1 text-sm sm:text-base text-emerald-700">
                      Built for scale with enterprise-grade security and reliability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-medium text-emerald-900">Custom Solutions</h3>
                    <p className="mt-1 text-sm sm:text-base text-emerald-700">
                      Tailored AI solutions that address your specific business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <form className="space-y-4" action="/api/contact" method="POST">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  placeholder="Your name"
                  required
                  minLength={2}
                  maxLength={50}
                  pattern="[A-Za-z\s\-']+"
                  title="Please enter a valid name (letters, spaces, hyphens, and apostrophes only)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="you@company.com"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|icloud\.com|mail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Please use your work email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input-field"
                  placeholder="Your company name"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType" className="form-label">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  className="input-field"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="mvp">MVP Development</option>
                  <option value="ai-agent">AI Agent Solution</option>
                  <option value="rag">RAG Implementation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input-field"
                  placeholder="Tell us about your project..."
                  required
                  minLength={10}
                  maxLength={1000}
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Schedule Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 