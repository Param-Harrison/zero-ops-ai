'use client';

import { useState } from 'react';
import Link from 'next/link';

const interestCategories = [
  {
    id: 'product',
    name: 'AI Products',
    description: 'Ready-to-deploy AI solutions for specific business needs'
  },
  {
    id: 'service',
    name: 'AI Services',
    description: 'Custom AI development and implementation services'
  },
  {
    id: 'custom',
    name: 'Custom Solution',
    description: 'Need something specific? Let\'s build it together'
  }
];

const products = [
  {
    id: 'zerodocs',
    name: 'ZeroDocs AI',
    description: 'Document processing and intelligent Q&A system'
  },
  {
    id: 'zerowork',
    name: 'ZeroWork AI',
    description: 'Workflow automation and process optimization'
  },
  {
    id: 'zeroparse',
    name: 'ZeroParse AI',
    description: 'Intelligent text extraction and data parsing'
  },
  {
    id: 'zeromeet',
    name: 'ZeroMeet AI',
    description: 'Meeting intelligence and transcription'
  },
  {
    id: 'zerohire',
    name: 'ZeroHire AI',
    description: 'AI-powered recruitment and candidate screening'
  },
  {
    id: 'zerolegal',
    name: 'ZeroLegal AI',
    description: 'Legal document analysis and contract review'
  },
  {
    id: 'zeroinvoice',
    name: 'ZeroInvoice AI',
    description: 'Automated invoice processing and data extraction'
  },
  {
    id: 'zerofinance',
    name: 'ZeroFinance AI',
    description: 'Financial document processing and analysis'
  },
  {
    id: 'zerotask',
    name: 'ZeroTask AI',
    description: 'Task automation and workflow management'
  },
  {
    id: 'zeroquery',
    name: 'ZeroQuery AI',
    description: 'Natural language database querying'
  },
  {
    id: 'zerocall',
    name: 'ZeroCall AI',
    description: 'Call center automation and analytics'
  },
  {
    id: 'zerosupport',
    name: 'ZeroSupport AI',
    description: 'Customer support automation and ticket routing'
  },
  {
    id: 'zeroprivacy',
    name: 'ZeroPrivacy AI',
    description: 'Data privacy and compliance automation'
  },
  {
    id: 'zerocode',
    name: 'ZeroCode AI',
    description: 'Code generation and development automation'
  },
  {
    id: 'zeroimage',
    name: 'ZeroImage AI',
    description: 'Image processing and analysis'
  },
  {
    id: 'zerovoice',
    name: 'ZeroVoice AI',
    description: 'Voice processing and speech recognition'
  },
  {
    id: 'zeromedia',
    name: 'ZeroMedia AI',
    description: 'Media content analysis and processing'
  },
  {
    id: 'zeroquality',
    name: 'ZeroQuality AI',
    description: 'Quality assurance and testing automation'
  },
  {
    id: 'zeromail',
    name: 'ZeroMail AI',
    description: 'Email processing and response automation'
  },
  {
    id: 'zerosocial',
    name: 'ZeroSocial AI',
    description: 'Social media monitoring and engagement'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    interestCategory: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'company':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'jobTitle':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'message':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto p-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Thank You!</h2>
            <p className="text-lg text-emerald-700 mb-8">
              We&apos;ve received your inquiry and will get back to you shortly.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-6">
                Let&apos;s Build Something Amazing Together
              </h1>
              <p className="text-xl text-emerald-700 mb-8">
                Tell us about your project and we&apos;ll help you transform your business with AI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-emerald-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-emerald-900">Rapid Development</h3>
                    <p className="mt-1 text-emerald-700">Quick deployment of AI solutions tailored to your needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-emerald-900">Enterprise Security</h3>
                    <p className="mt-1 text-emerald-700">Bank-grade security and compliance for your data.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-emerald-900">Expert Support</h3>
                    <p className="mt-1 text-emerald-700">Dedicated team of AI specialists at your service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className={`text-gray-400 transition-colors duration-200 ${focusedField === 'name' ? 'text-emerald-600' : ''}`}>
                        {getFieldIcon('name')}
                      </span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        focusedField === 'name'
                          ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                          : 'border-gray-300 hover:border-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white`}
                      placeholder="John Doe"
                      required
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className={`text-gray-400 transition-colors duration-200 ${focusedField === 'email' ? 'text-emerald-600' : ''}`}>
                        {getFieldIcon('email')}
                      </span>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      pattern="^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!.*@.*\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="Please use your company email address"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        focusedField === 'email'
                          ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                          : 'border-gray-300 hover:border-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white`}
                      placeholder="john@company.com"
                      required
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Please use your company email address
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className={`text-gray-400 transition-colors duration-200 ${focusedField === 'company' ? 'text-emerald-600' : ''}`}>
                        {getFieldIcon('company')}
                      </span>
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        focusedField === 'company'
                          ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                          : 'border-gray-300 hover:border-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white`}
                      placeholder="Acme Inc."
                      required
                      onChange={handleChange}
                      onFocus={() => handleFocus('company')}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className={`text-gray-400 transition-colors duration-200 ${focusedField === 'jobTitle' ? 'text-emerald-600' : ''}`}>
                        {getFieldIcon('jobTitle')}
                      </span>
                    </div>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        focusedField === 'jobTitle'
                          ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                          : 'border-gray-300 hover:border-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white`}
                      placeholder="CTO"
                      required
                      onChange={handleChange}
                      onFocus={() => handleFocus('jobTitle')}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interestCategory" className="block text-sm font-medium text-gray-700 mb-2">
                  What are you interested in?
                </label>
                <div className="relative">
                  <select
                    id="interestCategory"
                    name="interestCategory"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      focusedField === 'interestCategory'
                        ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                        : 'border-gray-300 hover:border-gray-400'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 appearance-none bg-white`}
                    required
                    onChange={handleChange}
                    onFocus={() => handleFocus('interestCategory')}
                    onBlur={handleBlur}
                  >
                    <option value="">Select an option</option>
                    {interestCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} - {category.description}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {formData.interestCategory === 'product' && (
                <div className="form-group">
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                    Which product interests you?
                  </label>
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        focusedField === 'product'
                          ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                          : 'border-gray-300 hover:border-gray-400'
                      } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 appearance-none bg-white`}
                      required
                      onChange={handleChange}
                      onFocus={() => handleFocus('product')}
                      onBlur={handleBlur}
                    >
                      <option value="">Select a product</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} - {product.description}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <span className={`text-gray-400 transition-colors duration-200 ${focusedField === 'message' ? 'text-emerald-600' : ''}`}>
                      {getFieldIcon('message')}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      focusedField === 'message'
                        ? 'border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50'
                        : 'border-gray-300 hover:border-gray-400'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white`}
                    placeholder="Tell us about your specific needs or challenges..."
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Optional: Share any specific requirements or questions you have.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 text-lg font-medium text-white bg-emerald-600 rounded-lg shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Book Consultation'
                  )}
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 