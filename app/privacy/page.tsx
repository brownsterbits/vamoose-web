import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | VAMOOSE",
  description: "Privacy Policy for Vamoose disaster preparedness app",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-secondary mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-secondary/70 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Overview</h2>
            <p className="text-secondary/70 mb-4">
              Vamoose ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our disaster preparedness application and website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium text-secondary mb-2">Waitlist Information</h3>
            <p className="text-secondary/70 mb-4">
              When you join our waitlist, we collect your email address to notify you about our launch and send preparedness updates.
            </p>
            <h3 className="text-xl font-medium text-secondary mb-2">App Usage (Coming Soon)</h3>
            <p className="text-secondary/70 mb-4">
              When our app launches, we will collect information necessary to provide our services, including family profiles, emergency contacts, and location data for risk assessment. All sensitive data will be stored locally on your device with optional encrypted cloud sync.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-secondary/70 space-y-2">
              <li>To send you updates about Vamoose's launch</li>
              <li>To provide and improve our disaster preparedness services</li>
              <li>To customize emergency recommendations based on your location and family needs</li>
              <li>To communicate important safety information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Data Security</h2>
            <p className="text-secondary/70 mb-4">
              We implement industry-standard security measures to protect your personal information. Our app is designed with an offline-first architecture, meaning your critical emergency data remains accessible and secure on your device even without internet connectivity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Your Rights</h2>
            <p className="text-secondary/70 mb-4">
              You may request to access, correct, or delete your personal information at any time by contacting us at{" "}
              <a href="mailto:privacy@vamoose.io" className="text-primary hover:underline">
                privacy@vamoose.io
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Us</h2>
            <p className="text-secondary/70">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@vamoose.io" className="text-primary hover:underline">
                hello@vamoose.io
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
