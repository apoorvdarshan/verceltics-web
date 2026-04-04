import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";

const heroShots = [
  {
    src: "/projects.png",
    alt: "Verceltics project browser",
    className: "absolute left-0 top-6 z-10 w-[38%] -rotate-6 opacity-70",
    delay: "0.55s",
  },
  {
    src: "/analytics.png",
    alt: "Verceltics analytics dashboard",
    className: "relative z-30 mx-auto w-[48%]",
    delay: "0.3s",
  },
  {
    src: "/referrers.png",
    alt: "Verceltics referrers",
    className: "absolute right-0 top-6 z-10 w-[38%] rotate-6 opacity-70",
    delay: "0.8s",
  },
] as const;

const ticker = [
  "SwiftUI",
  "Swift Charts",
  "Private by design",
  "Open source",
  "iOS Keychain",
  "No tracking",
  "No servers",
  "Offline-ready",
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
    <div className="grain relative bg-[#050a12] text-[#e8e8ed]">
      {/* ── Ambient ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[30vh] left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(80,140,255,0.09),transparent_60%)]" />
      </div>

      {/* ── Nav ── */}
      <nav className="fixed top-0 z-50 w-full bg-[#050a12]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="" width={30} height={30} className="rounded-[9px]" />
            <span className="text-[13px] font-semibold tracking-[0.2em]">VERCELTICS</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
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
                className="nav-link text-[13px] text-white/40 transition-colors hover:text-white"
              >
                {l.text}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-[#050a12] transition-colors hover:bg-white/85"
          >
            Get the app
          </a>
        </div>
      </nav>

      <main>
        {/* ══ HERO ══ */}
        <section className="relative flex min-h-svh items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-12 pt-24 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:pb-0 lg:pt-16">
            {/* Copy */}
            <div className="max-w-xl text-center lg:text-left">
              <p
                className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.35em] text-white/30"
                style={{ animationDelay: "0.05s" }}
              >
                Open source &middot; iOS
              </p>

              <h1
                className="animate-fade-up mt-5 font-serif text-[clamp(3rem,7vw,7rem)] italic leading-[0.88] tracking-[-0.04em]"
                style={{ animationDelay: "0.15s" }}
              >
                Vercel analytics,
                <br />
                <span className="bg-gradient-to-r from-white via-[#a4cfff] to-[#5a96ff] bg-clip-text text-transparent">
                  in your pocket.
                </span>
              </h1>

              <p
                className="animate-fade-up mt-7 max-w-md text-[15px] leading-7 text-white/45 lg:text-base"
                style={{ animationDelay: "0.28s" }}
              >
                Visitors, referrers, devices, and page views — from your iPhone. Private by design. Fully open source.
              </p>

              <div
                className="animate-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#050a12] transition-colors hover:bg-white/85"
                >
                  <AppleIcon />
                  Download on App Store
                </a>
                <a
                  href="https://www.producthunt.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[#FF6154]/20 bg-[#FF6154]/[0.06] px-5 py-3 transition-colors hover:bg-[#FF6154]/[0.12]"
                >
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" aria-hidden>
                    <circle cx="20" cy="20" r="20" fill="#FF6154" />
                    <path d="M22.667 20h-6v-6.667h6a3.333 3.333 0 1 1 0 6.667Z" fill="#fff" />
                    <path d="M16.667 26.667V20h6a6.667 6.667 0 0 0 0-13.333h-9.334V26.667h3.334Z" fill="#fff" />
                  </svg>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#FF6154" aria-hidden>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[13px] font-medium text-[#FF6154]/80">Vote on Product Hunt</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="animate-fade-up w-full" style={{ animationDelay: "0.35s" }}>
              {/* Mobile */}
              <div className="-mx-4 lg:hidden">
                <div className="flex justify-center gap-2.5 px-4">
                  {heroShots.map((s) => (
                    <div key={s.src} className="w-[30%] max-w-[140px] flex-none">
                      <div className="overflow-hidden rounded-xl border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                        <Image src={s.src} alt={s.alt} width={200} height={433} className="h-auto w-full" priority={s.src === "/analytics.png"} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop */}
              <div className="relative mx-auto hidden w-full max-w-[560px] lg:block xl:max-w-[600px]">
                <div className="relative flex h-[min(55vh,480px)] items-center justify-center">
                  {heroShots.map((s) => (
                    <div key={s.src} className={`animate-fade-up ${s.className}`} style={{ animationDelay: s.delay }}>
                      <div className="overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
                        <Image src={s.src} alt={s.alt} width={300} height={650} className="h-auto w-full" priority={s.src === "/analytics.png"} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ticker ── */}
        <div className="overflow-hidden border-y border-white/[0.04] py-4">
          <div className="animate-marquee flex w-max gap-10">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={`${t}-${i}`} className="flex items-center gap-3 text-[13px] text-white/25">
                <span className="text-white/15">/</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ══ FEATURES ══ */}
        <section id="features" className="scroll-mt-24 px-6 py-28 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/30">Features</p>
              <h2 className="mt-4 max-w-lg font-serif text-[clamp(2rem,4.5vw,3.8rem)] italic leading-[0.95] tracking-[-0.03em]">
                Everything you need. Nothing you don&apos;t.
              </h2>
            </ScrollReveal>

            <div className="mt-20 space-y-28">
              {features.map((f, i) => {
                const flip = i % 2 !== 0;
                return (
                  <ScrollReveal key={f.title} delay={80}>
                    <div className={`grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 ${flip ? "[direction:rtl]" : ""}`}>
                      {/* Screenshot */}
                      <div className="mx-auto w-full max-w-[280px] [direction:ltr]">
                        <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                          <Image src={f.image} alt={f.alt} width={460} height={996} className="h-auto w-full" />
                        </div>
                      </div>

                      {/* Copy */}
                      <div className="[direction:ltr]">
                        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/30">{f.label}</p>
                        <h3 className="mt-4 font-serif text-3xl italic leading-[1] tracking-[-0.02em] sm:text-4xl">
                          {f.title}
                        </h3>
                        <p className="mt-5 max-w-md text-[15px] leading-7 text-white/40">{f.body}</p>
                        <ul className="mt-7 flex flex-col gap-3">
                          {f.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2.5 text-[14px] text-white/35">
                              <span className="h-px w-3 bg-white/20" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider mx-auto max-w-4xl" />

        {/* ══ HOW IT WORKS ══ */}
        <section id="how-it-works" className="scroll-mt-24 px-6 py-28 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/30">Setup</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.8rem)] italic leading-[0.95] tracking-[-0.03em]">
                Three steps. That&apos;s it.
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.04] md:grid-cols-3">
              {[
                { n: "01", t: "Create a token", d: "Generate a read-only token in your Vercel dashboard." },
                { n: "02", t: "Paste it in", d: "Enter it once. Stored in the iOS Keychain." },
                { n: "03", t: "Check anytime", d: "Open the app. See your stats. That\u2019s the whole flow." },
              ].map((s, i) => (
                <ScrollReveal key={s.n} delay={i * 80}>
                  <div className="h-full bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                    <span className="font-serif text-4xl italic text-white/[0.06]">{s.n}</span>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">{s.t}</h3>
                    <p className="mt-3 text-[14px] leading-6 text-white/35">{s.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="divider mx-auto max-w-4xl" />

        {/* ══ PRICING ══ */}
        <section id="pricing" className="scroll-mt-24 px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/30">Pricing</p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.8rem)] italic leading-[0.95] tracking-[-0.03em]">
                  Simple pricing.
                </h2>
                <p className="mt-4 text-[14px] text-white/35">Both plans include a 3-day free trial.</p>
              </div>
            </ScrollReveal>

            <div className="mx-auto mt-12 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/[0.04] lg:grid-cols-2">
              {/* Monthly */}
              <ScrollReveal>
                <div className="h-full bg-white/[0.02] p-7 sm:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">Monthly</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight sm:text-5xl">$3.99</span>
                    <span className="text-sm text-white/30">/mo</span>
                  </div>
                  <p className="mt-4 text-[14px] leading-6 text-white/35">Full access. Cancel anytime.</p>
                  <ul className="mt-7 space-y-2.5">
                    {pricingFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/40">
                        <Tick />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Yearly */}
              <ScrollReveal delay={80}>
                <div className="relative h-full bg-gradient-to-b from-sky-500/[0.06] to-white/[0.02] p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sky-300/50">Yearly</p>
                    <span className="rounded-full bg-sky-400/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300/70">
                      Best value
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight sm:text-5xl">$29.99</span>
                    <span className="text-sm text-white/30">/yr</span>
                  </div>
                  <div className="mt-2 inline-flex rounded-full bg-emerald-500/[0.08] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-400/70">
                    Save 37%
                  </div>
                  <p className="mt-4 text-[14px] leading-6 text-white/35">Best for regular use.</p>
                  <ul className="mt-7 space-y-2.5">
                    {pricingFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/45">
                        <Tick className="text-sky-400/50" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="divider mx-auto max-w-4xl" />

        {/* ══ CTA ══ */}
        <section className="px-6 py-28 sm:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-[clamp(2.4rem,5vw,4.2rem)] italic leading-[0.92] tracking-[-0.03em]">
                Try it free for three days.
              </h2>
              <p className="mt-5 text-[15px] text-white/35">Your Vercel analytics, always in your pocket.</p>
              <a
                href="#pricing"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#050a12] transition-colors hover:bg-white/85"
              >
                <AppleIcon />
                Download on App Store
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] px-6 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-xs">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Image src="/icon.png" alt="" width={24} height={24} className="rounded-md" />
              <span className="text-[12px] font-semibold tracking-[0.2em]">VERCELTICS</span>
            </div>
            <p className="mt-3 text-[12px] leading-5 text-white/25">
              An open source companion app for Vercel Web Analytics.
            </p>
            <p className="mt-3 text-[11px] text-white/15">
              Not affiliated with Vercel Inc. &copy; 2026 Apoorv Darshan.
            </p>
          </div>

          <div className="flex gap-12 text-[12px] text-white/30">
            <div className="flex flex-col gap-2">
              <a href="#features" className="transition-colors hover:text-white/70">Features</a>
              <a href="#how-it-works" className="transition-colors hover:text-white/70">How it works</a>
              <a href="#pricing" className="transition-colors hover:text-white/70">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="transition-colors hover:text-white/70">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-white/70">Terms</Link>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/apoorvdarshan/verceltics" target="_blank" rel="noreferrer" className="transition-colors hover:text-white/70">GitHub</a>
              <a href="https://x.com/apoorvdarshan" target="_blank" rel="noreferrer" className="transition-colors hover:text-white/70">X</a>
              <a href="mailto:ad13dtu@gmail.com" className="transition-colors hover:text-white/70">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Icons ── */

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}


function Tick({ className = "text-white/25" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`flex-none ${className}`} aria-hidden>
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
