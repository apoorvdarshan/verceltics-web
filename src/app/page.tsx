import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-xl bg-black/70 border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="Verceltics" width={32} height={32} className="rounded-lg" />
          <span className="text-[15px] font-bold tracking-tight">Verceltics</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a>
          <a href="https://github.com/apoorvdarshan/verceltics" target="_blank" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)] transition-all">
            <AppleIcon />
            App Store
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-36 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/[0.08] rounded-full text-[13px] text-gray-500 mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Open Source · MIT License
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-normal tracking-tighter leading-[0.95] mb-6 animate-fade-up [animation-delay:100ms]">
          Your Vercel<br />analytics, <em className="text-blue-500 italic">everywhere</em>
        </h1>

        <p className="text-base md:text-xl text-gray-500 max-w-lg leading-relaxed mb-10 animate-fade-up [animation-delay:200ms]">
          Track visitors, page views, bounce rate, referrers, countries, and devices — all from your iPhone.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up [animation-delay:300ms]">
          <a href="#" className="inline-flex items-center gap-3 px-7 py-4 bg-white text-black rounded-2xl text-base font-bold hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.12)] transition-all">
            <AppleIcon />
            Download on App Store
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-4 border border-white/[0.12] rounded-2xl text-[15px] font-semibold hover:border-white/25 hover:bg-white/[0.04] transition-all">
            🚀 Upvote on Product Hunt
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <div className="flex justify-center gap-4 md:gap-5 px-4 pb-28 overflow-x-auto animate-fade-up [animation-delay:500ms]">
        {["projects", "analytics", "breakdowns", "referrers", "devices"].map((name) => (
          <Image
            key={name}
            src={`/${name}.png`}
            alt={name}
            width={220}
            height={476}
            className="w-40 md:w-56 rounded-3xl border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-400"
          />
        ))}
      </div>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-28">
        <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-tight text-center mb-16">
          Everything you need,<br />nothing you don&apos;t
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "📊", title: "Full Analytics", desc: "Visitors, page views, bounce rate with percentage change badges and interactive charts." },
            { icon: "🌍", title: "Global Insights", desc: "Countries with flags, referrers, UTM parameters, devices, browsers, and OS." },
            { icon: "📱", title: "All Projects", desc: "Browse every Vercel project with favicons, git repos, commits, and frameworks." },
            { icon: "📈", title: "Interactive Charts", desc: "Drag across the chart to inspect data points. Daily aggregation for smooth curves." },
            { icon: "🔒", title: "Secure & Private", desc: "Token in iOS Keychain. Open source. No tracking, no data collection." },
            { icon: "⚡", title: "Zero Dependencies", desc: "Pure SwiftUI + Swift Charts. No third-party libs. Lightweight and fast." },
          ].map((f) => (
            <div key={f.title} className="p-7 bg-[#1a1a1a] rounded-2xl border border-white/[0.04] hover:border-white/[0.1] hover:-translate-y-0.5 transition-all">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-bold mb-2 tracking-tight">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-28 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-tight mb-4">Simple pricing</h2>
        <p className="text-lg text-gray-500 mb-12">Start with a 3-day free trial. Cancel anytime.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-2xl mx-auto">
          <div className="flex-1 p-9 bg-[#1a1a1a] rounded-2xl border border-white/[0.04] text-left hover:border-white/[0.1] transition-colors">
            <div className="text-sm font-semibold text-gray-500 mb-2">Monthly</div>
            <div className="text-5xl font-extrabold tracking-tight mb-1">$3.99</div>
            <div className="text-sm text-gray-500 mb-6">per month</div>
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 rounded-md text-xs font-semibold">3-day free trial</span>
          </div>
          <div className="flex-1 p-9 bg-gradient-to-br from-blue-500/[0.08] to-[#1a1a1a] rounded-2xl border border-blue-500/30 text-left relative">
            <div className="absolute -top-3 right-5 px-3 py-1 bg-blue-500 rounded-full text-[11px] font-bold uppercase tracking-wider">Best Value</div>
            <div className="text-sm font-semibold text-gray-500 mb-2">Yearly</div>
            <div className="text-5xl font-extrabold tracking-tight mb-1">$29.99</div>
            <div className="text-sm text-gray-500 mb-6">per year · save 37%</div>
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 rounded-md text-xs font-semibold">3-day free trial</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-12 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="Verceltics" width={24} height={24} className="rounded-md" />
          <span className="text-[13px] text-gray-500">© 2026 Verceltics. Not affiliated with Vercel Inc.</span>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[13px] text-gray-500 hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[13px] text-gray-500 hover:text-white transition-colors">Terms</Link>
          <a href="https://github.com/apoorvdarshan/verceltics" target="_blank" className="text-[13px] text-gray-500 hover:text-white transition-colors">GitHub</a>
          <a href="https://x.com/apoorvdarshan" target="_blank" className="text-[13px] text-gray-500 hover:text-white transition-colors">@apoorvdarshan</a>
          <a href="mailto:ad13dtu@gmail.com" className="text-[13px] text-gray-500 hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
