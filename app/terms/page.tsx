import Link from "next/link";

export const metadata = {
  title: "Terms of Service | VAMOOSE",
  description: "Terms of Service for Vamoose disaster preparedness app",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-secondary mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-secondary/70 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Agreement to Terms</h2>
            <p className="text-secondary/70 mb-4">
              By accessing or using Vamoose, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Description of Service</h2>
            <p className="text-secondary/70 mb-4">
              Vamoose is a disaster preparedness application designed to help families prepare for and respond to emergencies. Our services include emergency planning tools, go-bag checklists, family coordination features, and offline access to critical information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Important Disclaimer</h2>
            <p className="text-secondary/70 mb-4">
              <strong>Vamoose is a preparedness tool, not an emergency response service.</strong> In the event of an actual emergency, always follow official guidance from local emergency services, FEMA, and other authorities. Vamoose does not replace 911 or professional emergency services.
            </p>
            <p className="text-secondary/70 mb-4">
              While we strive to provide accurate and helpful information, we cannot guarantee the accuracy, completeness, or timeliness of any information provided through our app. Emergency situations are unpredictable, and you should always exercise your own judgment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">User Responsibilities</h2>
            <ul className="list-disc list-inside text-secondary/70 space-y-2">
              <li>You are responsible for maintaining the accuracy of your family and emergency information</li>
              <li>You agree to use Vamoose only for lawful purposes</li>
              <li>You are responsible for keeping your account credentials secure</li>
              <li>You agree not to misuse or attempt to gain unauthorized access to our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Limitation of Liability</h2>
            <p className="text-secondary/70 mb-4">
              To the maximum extent permitted by law, Vamoose and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Changes to Terms</h2>
            <p className="text-secondary/70 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the app. Your continued use of Vamoose after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Us</h2>
            <p className="text-secondary/70">
              If you have questions about these Terms of Service, please contact us at{" "}
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
