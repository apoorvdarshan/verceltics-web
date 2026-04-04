import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";

const ticker = [
  "SwiftUI", "Swift Charts", "Private by design", "Open source",
  "iOS Keychain", "No tracking", "No servers", "Offline-ready",
] as const;

const features = [
  {
    label: "Dashboard",
    title: "Your numbers, one glance.",
    body: "Visitors, views, bounce rate, and trends in a native layout that stays legible on the smallest screen.",
    bullets: ["Period comparisons", "Swift Charts", "Mobile-first design"],
    image: "/analytics.png",
    alt: "Dashboard",
  },
  {
    label: "Breakdowns",
    title: "Where the traffic moved.",
    body: "Referrers, countries, UTMs, devices, browsers — sliced and surfaced without the tab maze.",
    bullets: ["Referrer ranking", "Country and device mix", "Launch day ready"],
    image: "/referrers.png",
    alt: "Breakdowns",
  },
  {
    label: "Projects",
    title: "Every project, one tap.",
    body: "Switch between sites instantly. Favicons, domains, and deployment context travel with you.",
    bullets: ["Fast switching with search", "Favicon detection", "Multi-site support"],
    image: "/projects.png",
    alt: "Projects",
  },
  {
    label: "Devices",
    title: "Know your audience.",
    body: "See which devices, browsers, and operating systems your visitors use — at a glance.",
    bullets: ["Device type split", "Browser and OS stats", "Spot mobile vs desktop trends"],
    image: "/devices.png",
    alt: "Devices",
  },
  {
    label: "Countries",
    title: "Traffic by region.",
    body: "Country-level breakdowns show exactly where your visitors are coming from.",
    bullets: ["Top countries ranked", "Geographic distribution", "Spot new markets fast"],
    image: "/breakdowns.png",
    alt: "Country breakdowns",
  },
] as const;

const pricingFeatures = [
  "3-day free trial",
  "Unlimited projects",
  "Native charts",
  "Open source",
] as const;

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* Ambient */}
      <div className="ambient" aria-hidden>
        <div className="ambient-orb" />
      </div>

      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <Image src="/icon.png" alt="" width={30} height={30} />
            <span>VERCELTICS</span>
          </Link>

          <div className="nav-links">
            {[
              { text: "Features", href: "#features" },
              { text: "How it works", href: "#how-it-works" },
              { text: "Pricing", href: "#pricing" },
              { text: "GitHub", href: "https://github.com/apoorvdarshan/verceltics", ext: true },
            ].map((l) => (
              <a
                key={l.text}
                href={l.href}
                target={l.ext ? "_blank" : undefined}
                rel={l.ext ? "noreferrer" : undefined}
                className="nav-link"
              >
                {l.text}
              </a>
            ))}
          </div>

          <a href="#pricing" className="nav-cta">Get the app</a>
        </div>
      </nav>

      <main>
        {/* ══ HERO ══ */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow fade-up" style={{ animationDelay: "0.05s" }}>
                Open source &middot; iOS
              </p>

              <h1 className="heading-hero fade-up" style={{ animationDelay: "0.15s" }}>
                Vercel analytics,<br />
                <span className="gradient">in your pocket.</span>
              </h1>

              <p className="body-text fade-up" style={{ animationDelay: "0.28s" }}>
                Visitors, referrers, devices, and page views — from your iPhone. Private by design. Fully open source.
              </p>

              <div className="hero-buttons fade-up" style={{ animationDelay: "0.4s" }}>
                <a href="#pricing" className="btn-primary">
                  <AppleIcon />
                  Download on App Store
                </a>
                <a
                  href="https://www.producthunt.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ph"
                >
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" aria-hidden className="ph-icon">
                    <circle cx="20" cy="20" r="20" fill="#FF6154" />
                    <path d="M22.667 20h-6v-6.667h6a3.333 3.333 0 1 1 0 6.667Z" fill="#fff" />
                    <path d="M16.667 26.667V20h6a6.667 6.667 0 0 0 0-13.333h-9.334V26.667h3.334Z" fill="#fff" />
                  </svg>
                  <div>
                    <div className="ph-stars">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#FF6154" aria-hidden>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ph-label">Vote on Product Hunt</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="fade-up" style={{ animationDelay: "0.35s" }}>
              {/* Mobile */}
              <div className="phones-mobile">
                <div className="phone-left">
                  <div className="phone-frame">
                    <Image src="/projects.png" alt="Projects" width={200} height={433} />
                  </div>
                </div>
                <div className="phone-center">
                  <div className="phone-frame">
                    <Image src="/analytics.png" alt="Analytics" width={200} height={433} priority />
                  </div>
                </div>
                <div className="phone-right">
                  <div className="phone-frame">
                    <Image src="/referrers.png" alt="Referrers" width={200} height={433} />
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div className="phones-desktop">
                <div className="phone-left fade-up" style={{ animationDelay: "0.55s" }}>
                  <div className="phone-frame">
                    <Image src="/projects.png" alt="Projects" width={300} height={650} />
                  </div>
                </div>
                <div className="phone-center fade-up" style={{ animationDelay: "0.3s" }}>
                  <div className="phone-frame">
                    <Image src="/analytics.png" alt="Analytics" width={300} height={650} priority />
                  </div>
                </div>
                <div className="phone-right fade-up" style={{ animationDelay: "0.8s" }}>
                  <div className="phone-frame">
                    <Image src="/referrers.png" alt="Referrers" width={300} height={650} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="ticker">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={`${t}-${i}`} className="ticker-item">
                <span className="ticker-slash">/</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ══ FEATURES ══ */}
        <section id="features" className="section section-px">
          <div className="wrap">
            <ScrollReveal>
              <p className="eyebrow" style={{ textAlign: "center" }}>Features</p>
              <h2 className="heading" style={{ textAlign: "center", maxWidth: "32rem", margin: "1rem auto 0" }}>
                Everything you need. Nothing you don&apos;t.
              </h2>
            </ScrollReveal>

            <div className="features-list" style={{ marginTop: "clamp(3.5rem, 5vw, 5rem)" }}>
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={80}>
                  <div className={`feature${i % 2 !== 0 ? " flip" : ""}`}>
                    <div className="feature-img">
                      <div className="phone-frame">
                        <Image src={f.image} alt={f.alt} width={460} height={996} />
                      </div>
                    </div>

                    <div className="feature-copy">
                      <p className="eyebrow">{f.label}</p>
                      <h3>{f.title}</h3>
                      <p className="body-text">{f.body}</p>
                      <ul className="feature-bullets">
                        {f.bullets.map((b) => (
                          <li key={b}>
                            <span className="bullet-dash" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══ HOW IT WORKS ══ */}
        <section id="how-it-works" className="section section-px">
          <div className="wrap">
            <ScrollReveal>
              <p className="eyebrow">Setup</p>
              <h2 className="heading" style={{ marginTop: "1rem" }}>
                Three steps. That&apos;s it.
              </h2>
            </ScrollReveal>

            <div className="steps-grid">
              {[
                { n: "01", t: "Create a token", d: "Generate a read-only token in your Vercel dashboard." },
                { n: "02", t: "Paste it in", d: "Enter it once. Stored in the iOS Keychain." },
                { n: "03", t: "Check anytime", d: "Open the app. See your stats. That\u2019s the whole flow." },
              ].map((s, i) => (
                <ScrollReveal key={s.n} delay={i * 80}>
                  <div className="step">
                    <span className="step-number">{s.n}</span>
                    <h3>{s.t}</h3>
                    <p className="body-sm">{s.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══ PRICING ══ */}
        <section id="pricing" className="section section-px">
          <div className="wrap">
            <ScrollReveal>
              <div style={{ textAlign: "center" }}>
                <p className="eyebrow">Pricing</p>
                <h2 className="heading" style={{ marginTop: "1rem" }}>Simple pricing.</h2>
                <p className="body-sm" style={{ marginTop: "1rem" }}>Both plans include a 3-day free trial.</p>
              </div>
            </ScrollReveal>

            <div className="pricing-grid">
              <ScrollReveal>
                <div className="pricing-card">
                  <p className="eyebrow">Monthly</p>
                  <div className="pricing-price">
                    <span className="amount">$3.99</span>
                    <span className="period">/mo</span>
                  </div>
                  <p className="body-sm pricing-desc">Full access. Cancel anytime.</p>
                  <ul className="pricing-features">
                    {pricingFeatures.map((f) => (
                      <li key={f}><Tick />{f}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <div className="pricing-card featured">
                  <div className="pricing-header">
                    <p className="eyebrow" style={{ color: "rgba(90,150,255,0.50)" }}>Yearly</p>
                    <span className="pricing-badge">Best value</span>
                  </div>
                  <div className="pricing-price">
                    <span className="amount">$29.99</span>
                    <span className="period">/yr</span>
                  </div>
                  <span className="save-badge">Save 37%</span>
                  <p className="body-sm pricing-desc">Best for regular use.</p>
                  <ul className="pricing-features">
                    {pricingFeatures.map((f) => (
                      <li key={f}><Tick accent />{f}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══ CTA ══ */}
        <section className="section section-px">
          <ScrollReveal>
            <div className="cta">
              <h2 className="heading">Try it free for three days.</h2>
              <p className="body-text" style={{ margin: "1.25rem auto 0" }}>
                Your Vercel analytics, always in your pocket.
              </p>
              <a href="#pricing" className="btn-primary" style={{ marginTop: "2.25rem" }}>
                <AppleIcon />
                Download on App Store
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-brand-name">
                <Image src="/icon.png" alt="" width={24} height={24} />
                <span>VERCELTICS</span>
              </div>
              <p>An open source companion app for Vercel Web Analytics.</p>
            </div>

            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#pricing">Pricing</a>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="https://github.com/apoorvdarshan/verceltics" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://x.com/apoorvdarshan" target="_blank" rel="noreferrer">X</a>
              <a href="mailto:ad13dtu@gmail.com">Contact</a>
            </div>
          </div>

          <p className="footer-copy">Not affiliated with Vercel Inc. &copy; 2026 Apoorv Darshan.</p>
        </div>
      </footer>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function Tick({ accent }: { accent?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`tick${accent ? " accent" : ""}`} aria-hidden>
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
