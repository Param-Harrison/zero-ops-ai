'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: '',
    country: '',
    areaOfInterest: '',
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
              <h1 className="form-title">Book a Demo</h1>
              <p className="form-description">
                Let's discuss how ZeroOpsAI can transform your business operations.
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
                  className="input-field"
                  placeholder="john@company.com"
                  required
                />
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="input-field"
                  placeholder="CTO"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="industry" className="form-label">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="input-field"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="b2b-saas">B2B SaaS</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="financial">Financial Services</option>
                  <option value="call-center">Call Center</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="form-label">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="input-field"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="sales">Sales Enablement</option>
                  <option value="support">Support Automation</option>
                  <option value="healthcare">Healthcare Operations</option>
                  <option value="object-id">Object Identification</option>
                  <option value="compliance">Compliance & LLM</option>
                  <option value="other">Other</option>
                </select>
              </div>

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
                />
                <p className="form-hint">
                  Optional: Share any specific requirements or questions you have.
                </p>
              </div>

              <div className="button-container">
                <button type="submit" className="btn-primary w-full">
                  Book Demo
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