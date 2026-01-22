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
        <div className="prose prose-slate max-w-none text-secondary/80">
          <p className="mb-6 font-medium text-secondary"><strong>Last Updated: January 21, 2026</strong></p>

          <p className="mb-6">
            Vamoose ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Summary</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Your data is stored locally on your device first</li>
            <li>We collect minimal information necessary to provide the service</li>
            <li>We do not sell your personal information</li>
            <li>We do not share your data with third parties for advertising</li>
            <li>You can delete your data at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Information We Collect</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">Information You Provide</h3>
          <p className="mb-4">When you use Vamoose, you may provide:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Account Information</strong>: If you create an account, we collect your email address and display name</li>
            <li><strong>Household Information</strong>: Names of household members, contact information you choose to add</li>
            <li><strong>Preparedness Data</strong>: Go-bag items, meetup locations, and checklist progress</li>
            <li><strong>Location (State)</strong>: The state you select for weather alerts (not precise GPS location)</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">Information Collected Automatically</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Device Information</strong>: Device type, operating system version, and app version for crash reporting and compatibility</li>
            <li><strong>Usage Analytics</strong>: Anonymous usage patterns to improve the app (if you opt in)</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">Information We Do NOT Collect</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Precise GPS location</li>
            <li>Contacts from your phone</li>
            <li>Photos or media</li>
            <li>Financial information</li>
            <li>Health data</li>
            <li>Biometric data</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">How We Use Your Information</h2>
          <p className="mb-4">We use your information solely to:</p>
          <ol className="list-decimal pl-5 mb-6 space-y-2">
            <li><strong>Provide the Service</strong>: Store your go-bag checklists, household information, and preparedness data</li>
            <li><strong>Deliver Weather Alerts</strong>: Fetch alerts from the National Weather Service for your selected state</li>
            <li><strong>Sync Across Devices</strong>: If you create an account, sync your data between your devices</li>
            <li><strong>Improve the App</strong>: Analyze anonymous, aggregated usage patterns to improve features</li>
            <li><strong>Provide Support</strong>: Respond to your support requests</li>
          </ol>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Data Storage</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">Local-First Architecture</h3>
          <p className="mb-4">Vamoose is built with a local-first architecture:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Primary storage is on your device</strong> using Apple's SwiftData</li>
            <li>Your data works offline and remains accessible without internet</li>
            <li>Cloud sync (Firebase) is optional and used for backup and multi-device sync</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">Cloud Storage</h3>
          <p className="mb-4">If you create an account:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Your data is synced to Google Firebase (Firestore)</li>
            <li>Data is encrypted in transit (TLS) and at rest</li>
            <li>Firebase servers are located in the United States</li>
            <li>You can delete your cloud data at any time from Settings</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Data Sharing</h2>

          <p className="mb-4">We do NOT:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Sell your personal information</li>
            <li>Share your data with advertisers</li>
            <li>Share your data with data brokers</li>
            <li>Use your data for targeted advertising</li>
          </ul>

          <p className="mb-4 mt-4">We MAY share data:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>With Service Providers</strong>: Firebase (Google) for cloud storage and authentication</li>
            <li><strong>For Legal Compliance</strong>: If required by law, subpoena, or legal process</li>
            <li><strong>For Safety</strong>: If we believe disclosure is necessary to prevent harm</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Third-Party Services</h2>
          <p className="mb-4">Vamoose uses these third-party services:</p>

          <div className="overflow-x-auto mb-6 border border-secondary/10 rounded-lg">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-secondary/5 font-semibold text-secondary">
                <tr>
                  <th scope="col" className="px-6 py-4">Service</th>
                  <th scope="col" className="px-6 py-4">Purpose</th>
                  <th scope="col" className="px-6 py-4">Privacy Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary/10">
                <tr>
                  <td className="px-6 py-4">Firebase (Google)</td>
                  <td className="px-6 py-4">Authentication, cloud storage</td>
                  <td className="px-6 py-4"><a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">National Weather Service</td>
                  <td className="px-6 py-4">Weather alerts</td>
                  <td className="px-6 py-4"><a href="https://www.weather.gov/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">NWS Privacy Policy</a></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">RevenueCat</td>
                  <td className="px-6 py-4">Subscription management</td>
                  <td className="px-6 py-4"><a href="https://www.revenuecat.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a></td>
                </tr>
                <tr>
                  <td className="px-6 py-4">PostHog</td>
                  <td className="px-6 py-4">Analytics (opt-in)</td>
                  <td className="px-6 py-4"><a href="https://posthog.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">PostHog Privacy Policy</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Children's Privacy</h2>
          <p className="mb-6">
            Vamoose is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Access</strong>: Request a copy of your data</li>
            <li><strong>Correct</strong>: Update inaccurate information</li>
            <li><strong>Delete</strong>: Delete your account and all associated data</li>
            <li><strong>Export</strong>: Export your data in a portable format</li>
            <li><strong>Opt Out</strong>: Disable analytics in Settings</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">How to Exercise Your Rights</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Delete Account</strong>: Settings &gt; Account &gt; Delete Account</li>
            <li><strong>Export Data</strong>: Settings &gt; Account &gt; Export Data</li>
            <li><strong>Disable Analytics</strong>: Settings &gt; Privacy &gt; Analytics (toggle off)</li>
            <li><strong>Contact Us</strong>: <a href="mailto:privacy@vamoose.io" className="text-primary hover:underline">privacy@vamoose.io</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">California Residents (CCPA)</h2>
          <p className="mb-4">If you are a California resident, you have additional rights under the California Consumer Privacy Act:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Right to know what personal information is collected</li>
            <li>Right to know whether personal information is sold or disclosed</li>
            <li>Right to say no to the sale of personal information (we don't sell data)</li>
            <li>Right to equal service and price (we don't discriminate)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">European Residents (GDPR)</h2>
          <p className="mb-4">If you are a European resident, you have additional rights under GDPR:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Right to access, rectification, and erasure</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="mb-4 mt-4">Our legal basis for processing is:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Contract</strong>: To provide the service you requested</li>
            <li><strong>Legitimate Interest</strong>: To improve the app and prevent fraud</li>
            <li><strong>Consent</strong>: For optional analytics</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Data Retention</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Active Accounts</strong>: Data retained while your account is active</li>
            <li><strong>Deleted Accounts</strong>: Data deleted within 30 days of account deletion</li>
            <li><strong>Anonymous Analytics</strong>: Retained for 2 years, then aggregated or deleted</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Security</h2>
          <p className="mb-4">We implement industry-standard security measures:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Encryption in transit (TLS 1.3)</li>
            <li>Encryption at rest (AES-256)</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
          </ul>
          <p className="mb-6">
            However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. We will:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Update the "Last Updated" date</li>
            <li>Notify you of material changes via in-app notification</li>
            <li>Post the new policy on our website</li>
          </ul>
          <p className="mb-6">
            Your continued use of Vamoose after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">Contact Us</h2>
          <p className="mb-4">If you have questions about this Privacy Policy:</p>
          <ul className="list-none mb-6 space-y-2">
            <li><strong>Email</strong>: <a href="mailto:privacy@vamoose.io" className="text-primary hover:underline">privacy@vamoose.io</a></li>
            <li><strong>Website</strong>: <a href="https://vamoose.io/privacy" className="text-primary hover:underline">https://vamoose.io/privacy</a></li>
          </ul>

          <hr className="my-8 border-secondary/10" />
          <p className="text-sm italic opacity-70">This privacy policy is provided for informational purposes. Please review with legal counsel before publishing.</p>
        </div>
      </div>
    </main>
  );
}
