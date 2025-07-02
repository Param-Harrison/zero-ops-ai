import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security - ZeroOpsAI",
  description: "Security measures and practices at ZeroOpsAI - Private AI Agents for Work That Matters",
};

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Security</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Security Commitment</h2>
          <p className="mb-4">
            At ZeroOpsAI, we take security seriously. We implement industry-standard security measures
            to protect your data and ensure the privacy of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="mb-4">
            We employ multiple layers of security to protect your data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>End-to-end encryption for data in transit and at rest</li>
            <li>Regular security audits and penetration testing</li>
            <li>Strict access controls and authentication mechanisms</li>
            <li>Comprehensive backup and disaster recovery procedures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Infrastructure Security</h2>
          <p className="mb-4">
            Our infrastructure is built with security in mind:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Secure cloud infrastructure with regular updates</li>
            <li>Network security and DDoS protection</li>
            <li>24/7 monitoring and threat detection</li>
            <li>Regular security patches and updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
          <p className="mb-4">
            We maintain compliance with various security standards and regulations:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>GDPR compliance for European users</li>
            <li>Industry-standard security certifications</li>
            <li>Regular compliance audits</li>
            <li>Transparent security practices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reporting Security Issues</h2>
          <p className="mb-4">
            If you discover a security vulnerability, please report it to our security team at
            support@learnwithparam.com. We take all security reports seriously and will respond promptly.
          </p>
        </section>
      </div>
    </div>
  );
} 