import Link from "next/link";

export const metadata = {
  title: "Support | VAMOOSE",
  description: "Support and FAQ for Vamoose disaster preparedness app",
};

export default function Support() {
  return (
    <main className="min-h-screen bg-off-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link
          href="/"
          className="text-primary hover:text-primary/80 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-secondary mb-4">Vamoose Support</h1>
        <p className="text-xl text-secondary/80 mb-8">Family disaster preparedness app</p>
        
        <div className="prose prose-slate max-w-none text-secondary/80">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10 mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4 mt-0">Contact Us</h2>
            <p className="mb-4">
              Need help with Vamoose? We're here for you. For any questions, issues, or feedback, please email our support team directly:
            </p>
            <a 
              href="mailto:bits@brownster.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors no-underline"
            >
              Email Support (bits@brownster.com)
            </a>
          </div>

          <h2 className="text-2xl font-semibold text-secondary mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-secondary mb-2 mt-0">How do I create a pack?</h3>
              <p className="mb-0">
                You can create a new pack by navigating to the "Packs" tab in the bottom navigation bar and tapping the "+" button in the top right corner. Choose from our templates or build one from scratch.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-secondary mb-2 mt-0">How do I invite family members?</h3>
              <p className="mb-0">
                Go to the "Household" tab and tap "Invite Member". You can share an invite link directly via messages, email, or any other sharing method available on your device.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-secondary mb-2 mt-0">How can I delete my account?</h3>
              <p className="mb-0">
                You can permanently delete your account and all associated data inside the app. Navigate to the "Settings" tab, select "Account", and tap "Delete Account". This action cannot be undone.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-secondary mb-2 mt-0">Does Vamoose work offline?</h3>
              <p className="mb-0">
                Yes! Vamoose is built with a local-first architecture. All your packs, plans, and household information are stored on your device first, meaning you can access everything even without an internet connection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-secondary mb-2 mt-0">How is my data privacy handled?</h3>
              <p className="mb-0">
                We take your privacy seriously. We collect only the minimal information necessary and do not sell your personal data or share it with advertisers. For complete details, please read our privacy policy below.
              </p>
            </div>
          </div>

          <hr className="my-12 border-secondary/10" />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center text-sm">
            <p className="m-0">Vamoose App</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-primary hover:underline focus:outline-none">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary hover:underline focus:outline-none">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
