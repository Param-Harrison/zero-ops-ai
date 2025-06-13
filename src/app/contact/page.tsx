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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="section bg-gradient-to-b from-emerald-50 to-white">
      <div className="container">
        <div className="form-container">
          <div className="form-card">
            <div className="form-header">
              <h1 className="form-title">Book a Consultation</h1>
              <p className="form-description">
                Let&apos;s explore how ZeroOpsAI can help optimize your business operations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  placeholder="John Doe"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!.*@.*\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please use your company email address"
                  className="input-field"
                  placeholder="john@company.com"
                  required
                  onChange={handleChange}
                />
                <p className="mt-1 text-sm text-gray-500">
                  Please use your company email address
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input-field"
                  placeholder="Acme Inc."
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="jobTitle" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="input-field"
                  placeholder="CTO"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="interestCategory" className="form-label">
                  What are you interested in?
                </label>
                <select
                  id="interestCategory"
                  name="interestCategory"
                  className="input-field"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  {interestCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} - {category.description}
                    </option>
                  ))}
                </select>
              </div>

              {formData.interestCategory === 'product' && (
                <div className="form-group">
                  <label htmlFor="product" className="form-label">
                    Which product interests you?
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="input-field"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name} - {product.description}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input-field"
                  placeholder="Tell us about your specific needs or challenges..."
                  onChange={handleChange}
                />
                <p className="form-hint">
                  Optional: Share any specific requirements or questions you have.
                </p>
              </div>

              <div className="button-container">
                <button type="submit" className="btn-primary w-full">
                  Book Consultation
                </button>
              </div>
            </form>

            <div className="form-footer">
              <p>
                By submitting this form, you agree to our{' '}
                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 