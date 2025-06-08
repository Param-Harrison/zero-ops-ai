import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ZeroOpsAI",
  description: "Terms of Service for ZeroOpsAI - Private AI Agents for Work That Matters",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using ZeroOpsAI's services, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily use ZeroOpsAI's services for personal or business purposes,
            subject to the following restrictions:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You must not modify or copy our materials</li>
            <li>You must not use our services for any illegal purpose</li>
            <li>You must not attempt to reverse engineer any software contained in our services</li>
            <li>You must not remove any copyright or proprietary notations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Service Modifications</h2>
          <p className="mb-4">
            ZeroOpsAI reserves the right to modify or discontinue, temporarily or permanently, any part of
            our services with or without notice. We shall not be liable to you or any third party for any
            modification, suspension, or discontinuance of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall ZeroOpsAI be liable for any damages arising out of the use or inability to
            use our services, even if we have been notified of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction
            in which ZeroOpsAI operates, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </div>
  );
} 