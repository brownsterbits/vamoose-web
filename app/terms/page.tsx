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
        <div className="prose prose-slate max-w-none text-secondary/80">
          <p className="mb-6 font-medium text-secondary"><strong>Last Updated: January 21, 2026</strong></p>

          <p className="mb-6">
            Welcome to Vamoose. These Terms of Service ("Terms") govern your use of the Vamoose mobile application ("App") operated by Vamoose ("we," "our," or "us").
          </p>
          <p className="mb-6">
            By downloading, installing, or using Vamoose, you agree to be bound by these Terms. If you do not agree, do not use the App.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">1. Description of Service</h2>
          <p className="mb-4">Vamoose is an emergency preparedness application that helps users:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Create and manage emergency supply (go-bag) checklists</li>
            <li>Track household members and meetup locations</li>
            <li>Receive weather alerts from the National Weather Service</li>
            <li>Access emergency contact information and resources</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">2. Important Disclaimers</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">2.1 Not Professional Emergency Advice</h3>
          <p className="mb-2 font-bold text-secondary">VAMOOSE IS NOT A SUBSTITUTE FOR PROFESSIONAL EMERGENCY SERVICES OR EXPERT ADVICE.</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>The information provided is for general preparedness purposes only</li>
            <li>Always call 911 for emergencies</li>
            <li>Follow official guidance from local authorities, FEMA, and emergency services</li>
            <li>Consult with professionals for specific emergency planning needs</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">2.2 No Guarantee of Safety</h3>
          <p className="mb-6">
            Using Vamoose does not guarantee your safety in an emergency. Emergency preparedness is a personal responsibility. We provide tools to assist your planning, but outcomes depend on many factors beyond our control.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">2.3 Weather Alert Accuracy</h3>
          <p className="mb-4">Weather alerts are sourced from the National Weather Service (NWS). We:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Display alerts as received from NWS</li>
            <li>Do not modify or interpret alert content</li>
            <li>Cannot guarantee alert timeliness or accuracy</li>
            <li>Are not responsible for NWS service interruptions</li>
          </ul>
          <p className="mb-6 font-bold text-secondary">Always monitor official emergency broadcasts and local news during severe weather.</p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">2.4 Emergency Contact Information</h3>
          <p className="mb-4">Emergency phone numbers and resources are provided for convenience. We:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Verify information periodically but cannot guarantee accuracy</li>
            <li>Are not affiliated with the emergency services listed</li>
            <li>Recommend confirming numbers with official sources</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">3. User Accounts</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">3.1 Account Creation</h3>
          <p className="mb-4">You may use Vamoose without creating an account. If you create an account:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>You must provide accurate information</li>
            <li>You are responsible for maintaining account security</li>
            <li>You must notify us of unauthorized access</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">3.2 Account Types</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><strong>Anonymous</strong>: Use the app without providing personal information</li>
            <li><strong>Email Account</strong>: Sync data across devices with your email</li>
            <li><strong>Apple Sign-In</strong>: Sign in using your Apple ID</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">3.3 Account Termination</h3>
          <p className="mb-4">You may delete your account at any time. We may terminate accounts that:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Violate these Terms</li>
            <li>Engage in fraudulent activity</li>
            <li>Abuse the service</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">4. Acceptable Use</h2>
          <p className="mb-4">You agree NOT to:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with other users' use of the App</li>
            <li>Reverse engineer or decompile the App</li>
            <li>Distribute malware or harmful code</li>
            <li>Misrepresent your identity</li>
            <li>Use the App to harm or endanger others</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">5. Intellectual Property</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">5.1 Our Property</h3>
          <p className="mb-6">
            Vamoose, including its design, features, content, and code, is owned by us and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without permission.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">5.2 Your Content</h3>
          <p className="mb-6">
            You retain ownership of information you enter into the App (household data, checklists, etc.). By using the App, you grant us a license to store and process your content to provide the service.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">5.3 Feedback</h3>
          <p className="mb-6">
            If you provide feedback or suggestions, we may use them without obligation to you.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">6. Subscriptions and Payments</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">6.1 Free Features</h3>
          <p className="mb-4">Core features of Vamoose are free, including:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Go-bag checklists with regional presets</li>
            <li>Household member management</li>
            <li>Weather alerts</li>
            <li>Emergency resources</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">6.2 Premium Features (If Applicable)</h3>
          <p className="mb-4">Premium subscriptions, if offered, are billed through the App Store. Apple's terms govern:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Payment processing</li>
            <li>Subscription renewal</li>
            <li>Refund requests</li>
          </ul>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">6.3 Price Changes</h3>
          <p className="mb-6">
            We may change subscription prices with notice. Existing subscribers will be notified before renewal at the new price.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">7. Privacy</h2>
          <p className="mb-6">
            Your privacy is important to us. Our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> explains how we collect, use, and protect your information. By using Vamoose, you agree to our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">8. Disclaimers and Limitations</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">8.1 "As Is" Service</h3>
          <p className="mb-6 uppercase">
            VAMOOSE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">8.2 Limitation of Liability</h3>
          <p className="mb-4 uppercase">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, data, or goodwill</li>
            <li>Personal injury or property damage</li>
            <li>Any damages arising from your use or inability to use the App</li>
          </ul>
          <p className="mb-6 mt-4">
            Our total liability shall not exceed the amount you paid us in the past 12 months (or $50 if you paid nothing).
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">8.3 Indemnification</h3>
          <p className="mb-4">You agree to indemnify and hold us harmless from claims arising from:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Your use of the App</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">9. Governing Law and Disputes</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">9.1 Governing Law</h3>
          <p className="mb-6">
            These Terms are governed by the laws of [Your State], United States, without regard to conflict of law principles.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">9.2 Dispute Resolution</h3>
          <p className="mb-4">Any disputes shall be resolved through:</p>
          <ol className="list-decimal pl-5 mb-6 space-y-2">
            <li><strong>Informal Resolution</strong>: Contact us first at <a href="mailto:legal@vamoose.io" className="text-primary hover:underline">legal@vamoose.io</a></li>
            <li><strong>Mediation</strong>: If informal resolution fails</li>
            <li><strong>Arbitration</strong>: Binding arbitration under AAA rules (if mediation fails)</li>
          </ol>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">9.3 Class Action Waiver</h3>
          <p className="mb-6">
            You agree to resolve disputes individually, not as part of a class action.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">9.4 Small Claims Exception</h3>
          <p className="mb-6">
            Either party may pursue claims in small claims court.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">10. Changes to Terms</h2>
          <p className="mb-4">We may modify these Terms at any time. We will:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Update the "Last Updated" date</li>
            <li>Notify you of material changes</li>
            <li>Post updated Terms on our website</li>
          </ul>
          <p className="mb-6">
            Continued use after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">11. General Provisions</h2>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">11.1 Entire Agreement</h3>
          <p className="mb-6">
            These Terms, along with our Privacy Policy, constitute the entire agreement between you and us.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">11.2 Severability</h3>
          <p className="mb-6">
            If any provision is found unenforceable, the remaining provisions remain in effect.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">11.3 Waiver</h3>
          <p className="mb-6">
            Our failure to enforce a right does not waive that right.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">11.4 Assignment</h3>
          <p className="mb-6">
            We may assign these Terms. You may not assign your rights without our consent.
          </p>

          <h3 className="text-xl font-medium text-secondary mb-2 mt-6">11.5 Force Majeure</h3>
          <p className="mb-6">
            We are not liable for failures due to circumstances beyond our control (natural disasters, war, government actions, etc.).
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4 mt-8">12. Contact Information</h2>
          <p className="mb-4">For questions about these Terms:</p>
          <ul className="list-none mb-6 space-y-2">
            <li><strong>Email</strong>: <a href="mailto:legal@vamoose.io" className="text-primary hover:underline">legal@vamoose.io</a></li>
            <li><strong>Website</strong>: <a href="https://vamoose.io/terms" className="text-primary hover:underline">https://vamoose.io/terms</a></li>
            <li><strong>Address</strong>: [Your Business Address]</li>
          </ul>

          <hr className="my-8 border-secondary/10" />
          <p className="text-sm italic opacity-70">These terms of service are provided as a template. Please review with legal counsel before publishing.</p>
        </div>
      </div>
    </main>
  );
}
