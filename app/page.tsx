import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <span className="block text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Offline-First Preparedness
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-secondary">
              Protect Your Pack before disaster strikes.
            </h1>
            <p className="text-xl text-secondary/70 mb-10 max-w-lg leading-relaxed">
              The average time between natural disasters has dropped to just 12 days. Don't simply hope for the best. Be the one who is ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#join-waitlist" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
                Get Early Access
              </a>
              <a href="#how-it-works" className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all">
                Learn More
              </a>
            </div>
          </div>
          {/* Visual Placeholder - Could be SVG or Image later */}
          <div className="hidden md:block relative h-[600px] w-full bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -z-10 translate-x-20"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">55</span>
            <span className="text-white/80">Billion-Dollar Disasters (2023-24)</span>
          </div>
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">12 Days</span>
            <span className="text-white/80">Avg. Time Between Events</span>
          </div>
          <div className="p-4">
            <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">50%</span>
            <span className="text-white/80">Families Unprepared</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Calm in Chaos</h2>
            <p className="text-lg text-secondary/70">
              Vamoose creates order when everything else feels chaotic. Designed for real-world emergencies where cell towers fail and seconds count.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-off-white hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 text-primary">
                🎒
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Smart Go-Bags</h3>
              <p className="text-secondary/70">
                Dynamic checklists for Wildfire, Earthquake, and Hurricane zones. We track expiry dates so you don't have to.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-off-white hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 text-primary">
                ⚡️
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Offline-First</h3>
              <p className="text-secondary/70">
                <strong className="text-secondary">The internet will fail. We won't.</strong> Access your family plan, medical info, and meeting points without a signal.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-off-white hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6 text-primary">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Family Sync</h3>
              <p className="text-secondary/70">
                Assign roles: Who grabs the dog? Who shuts off the gas? Keep everyone on the same page, instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Ready in 3 Steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="relative pl-8 md:pl-0 pt-4 md:pt-8 border-l-4 border-secondary/10 md:border-l-0 md:border-t-4">
              <span className="absolute left-[-1.2rem] top-0 md:top-[-2.5rem] md:left-0 text-6xl font-black text-secondary/10 font-sans bg-off-white pr-4">01</span>
              <h3 className="text-2xl font-bold mb-4 text-secondary pt-4 md:pt-0">Build Your Profile</h3>
              <p className="text-secondary/70">Tell us who you protect (kids, pets, elders) and where you live. We customize your risk profile.</p>
            </div>
            <div className="relative pl-8 md:pl-0 pt-4 md:pt-8 border-l-4 border-secondary/10 md:border-l-0 md:border-t-4">
              <span className="absolute left-[-1.2rem] top-0 md:top-[-2.5rem] md:left-0 text-6xl font-black text-secondary/10 font-sans bg-off-white pr-4">02</span>
              <h3 className="text-2xl font-bold mb-4 text-secondary pt-4 md:pt-0">Pack Your Bags</h3>
              <p className="text-secondary/70">Follow our smart checklist to assemble your emergency kit. Mark items off as you go.</p>
            </div>
            <div className="relative pl-8 md:pl-0 pt-4 md:pt-8 border-l-4 border-secondary/10 md:border-l-0 md:border-t-4">
              <span className="absolute left-[-1.2rem] top-0 md:top-[-2.5rem] md:left-0 text-6xl font-black text-secondary/10 font-sans bg-off-white pr-4">03</span>
              <h3 className="text-2xl font-bold mb-4 text-secondary pt-4 md:pt-0">Invite Your Pack</h3>
              <p className="text-secondary/70">Send a secure deep-link to your family. Everyone gets the plan on their phone, offline-ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join-waitlist" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't wait for the warning.</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join the waitlist for Vamoose iOS. Be the first to know when we launch.
          </p>

          <WaitlistForm />
          <p className="text-sm opacity-60 mt-6">We promise not to spam. Preparedness updates only.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-off-white py-12 border-t border-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <a href="#" className="text-2xl font-extrabold tracking-tighter text-secondary block mb-4">
                VAMOOSE<span className="text-primary">.</span>
              </a>
              <p className="text-secondary/60 text-sm">
                Helping families protect the people they love before disaster strikes.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-16">
              <div className="flex flex-col gap-3">
                <a href="/privacy" className="text-secondary/70 hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-secondary/70 hover:text-primary transition-colors">Terms of Service</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@vamoose.io" className="text-secondary/70 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-secondary/5 text-center md:text-left text-sm text-secondary/40">
            &copy; {new Date().getFullYear()} Vamoose. Designed in the Pacific Northwest.
          </div>
        </div>
      </footer>
    </main>
  );
}
