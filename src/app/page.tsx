import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/scroll-reveal";

const heroShots = [
  {
    src: "/projects.png",
    alt: "Verceltics project browser",
    className: "absolute left-0 top-8 z-10 w-[38%] -rotate-6 opacity-80",
    delay: "0.6s",
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
    className: "absolute right-0 top-8 z-10 w-[38%] rotate-6 opacity-80",
    delay: "0.9s",
  },
] as const;

const tickerItems = [
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
    eyebrow: "Overview",
    title: "See the signal fast.",
    description: "Visitors, views, bounce rate, and deltas in one clean pass.",
    points: [
      "Daily totals at a glance",
      "Swift Charts built for quick reads",
      "A native layout that stays clear on the move",
    ],
    image: "/analytics.png",
    alt: "Analytics dashboard screenshot",
  },
  {
    eyebrow: "Acquisition",
    title: "Spot what moved traffic.",
    description: "Referrers, countries, and campaigns without the tab maze.",
    points: ["UTMs and referrers in one flow", "Find spikes before they fade", "Great for launches and release days"],
    image: "/referrers.png",
    alt: "Referrers screenshot",
  },
  {
    eyebrow: "Portfolio",
    title: "Switch projects in seconds.",
    description: "Keep every site close. Check devices, browsers, and trends anywhere.",
    points: ["Fast project switching", "Device and browser breakdowns", "Built for solo builders and lean teams"],
    image: "/projects.png",
    alt: "Projects screenshot",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Create Token",
    description: "Generate a read-only Vercel Web Analytics token.",
  },
  {
    number: "02",
    title: "Add to App",
    description: "Paste it once. Verceltics stores it in iOS Keychain.",
  },
  {
    number: "03",
    title: "Check Anytime",
    description: "Open the app for traffic, referrers, devices, and trends.",
  },
] as const;

const pricingFeatures = [
  "3-day free trial",
  "Unlimited project views",
  "Native charts and breakdowns",
  "Private and open source",
] as const;

export default function Home() {
  const marqueeItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-x-clip bg-[#04070d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,156,255,0.20),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.07),transparent_22%),linear-gradient(180deg,#050811_0%,#04070d_50%,#020305_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#04070d]/[0.72] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icon.png" alt="Verceltics" width={36} height={36} className="rounded-xl" />
            <div>
              <span className="block text-sm font-semibold tracking-[0.18em] text-white">VERCELTICS</span>
              <span className="hidden text-xs text-white/[0.45] sm:block">Vercel analytics for iPhone</span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#features" className="nav-link text-sm text-white/60 transition-colors hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="nav-link text-sm text-white/60 transition-colors hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="nav-link text-sm text-white/60 transition-colors hover:text-white">
              Pricing
            </a>
            <a
              href="https://github.com/apoorvdarshan/verceltics"
              target="_blank"
              rel="noreferrer"
              className="nav-link text-sm text-white/60 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-3 py-2 text-xs font-semibold text-black transition-colors hover:bg-gray-100 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <AppleIcon />
            App Store
          </a>
        </div>
      </nav>

      <main className="relative">
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:pt-40">
            <div className="max-w-2xl text-center lg:text-left">
              <div
                className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[12px] uppercase tracking-[0.28em] text-white/60"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Open source iOS analytics
              </div>

              <h1
                className="animate-fade-up mt-8 font-serif text-6xl italic leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl xl:text-[7.5rem] [text-wrap:balance]"
                style={{ animationDelay: "0.2s" }}
              >
                Vercel analytics,
                <span className="mt-2 block bg-gradient-to-r from-[#f6fbff] via-[#9fcfff] to-[#4c8dff] bg-clip-text text-transparent">
                  built for iPhone.
                </span>
              </h1>

              <p
                className="animate-fade-up mt-8 max-w-xl text-base leading-7 text-white/[0.68] sm:text-lg"
                style={{ animationDelay: "0.35s" }}
              >
                Check visitors, referrers, devices, and trends in a fast native app. Private by design. Open source.
              </p>

              <div
                className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                style={{ animationDelay: "0.5s" }}
              >
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition-colors hover:bg-gray-100"
                >
                  <AppleIcon />
                  Download on App Store
                </a>
                <a
                  href="https://www.producthunt.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#FF6154] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#e5554a]"
                >
                  <ProductHuntIcon />
                  Product Hunt
                </a>
              </div>

              <div
                className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/[0.45] lg:justify-start"
                style={{ animationDelay: "0.65s" }}
              >
                <span className="rounded-full border border-white/10 px-3 py-1.5">SwiftUI</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">Private by design</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">No tracking</span>
              </div>
            </div>

            <div className="animate-fade-up w-full" style={{ animationDelay: "0.45s" }}>
              <div className="-mx-6 lg:hidden">
                <div className="flex justify-center gap-3 px-6 pb-4 pt-2">
                  {heroShots.map((shot) => (
                    <div key={shot.src} className="w-28 flex-none sm:w-36">
                      <div className="overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={200}
                          height={433}
                          className="h-auto w-full"
                          priority={shot.src === "/analytics.png"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto hidden w-full max-w-[480px] lg:block">
                <div className="absolute inset-x-20 top-20 h-40 rounded-full bg-sky-500/[0.12] blur-3xl" />

                <div className="relative flex h-[420px] items-center justify-center xl:h-[480px]">
                  {heroShots.map((shot) => (
                    <div
                      key={shot.src}
                      className={`animate-fade-up ${shot.className}`}
                      style={{ animationDelay: shot.delay }}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={300}
                          height={650}
                          className="h-auto w-full"
                          priority={shot.src === "/analytics.png"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="section-divider" />
        </div>

        <section className="overflow-hidden py-5">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
              <div className="animate-marquee flex w-max gap-3 whitespace-nowrap py-2">
                {marqueeItems.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300/80" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="section-divider" />
        </div>

        <section id="features" className="scroll-mt-32 px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Feature set</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                The essentials. Nothing noisy.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">
                Everything you need to read Vercel Web Analytics from your phone.
              </p>
            </div>

            <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-20">
              {features.map((feature, index) => {
                const screenshotOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2";
                const copyOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1";

                return (
                  <ScrollReveal key={feature.title} delay={index * 120}>
                    <article className="grid gap-10 lg:grid-cols-2 lg:items-center">
                      <div className={`order-1 mx-auto max-w-xs min-w-0 lg:mx-0 ${screenshotOrder}`}>
                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            width={400}
                            height={720}
                            className="h-auto max-h-[60vh] w-full rounded-[1.5rem] object-cover object-top"
                          />
                        </div>
                      </div>

                      <div className={`order-2 min-w-0 ${copyOrder}`}>
                        <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">{feature.eyebrow}</p>
                        <h3 className="mt-5 max-w-xl font-serif text-2xl italic leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                          {feature.title}
                        </h3>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/[0.65] sm:text-lg">
                          {feature.description}
                        </p>
                        <ul className="mt-7 space-y-3.5 text-sm leading-6 text-white/[0.56] sm:text-base">
                          {feature.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="section-divider" />
        </div>

        <section id="how-it-works" className="scroll-mt-32 px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-8 py-12 backdrop-blur-xl md:px-12 md:py-14">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">How it works</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                From token to dashboard.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">One token. One paste. Done.</p>
            </div>

            <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="absolute left-[16.66%] right-[16.66%] top-9 hidden h-px bg-gradient-to-r from-white/0 via-white/[0.14] to-white/0 md:block" />
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} className="h-full" delay={index * 100}>
                  <div className="relative h-full rounded-[2rem] border border-white/10 bg-black/25 p-7 md:p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-300/20 bg-sky-400/10 font-semibold tracking-[0.24em] text-sky-100">
                      {step.number}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/[0.58] sm:text-base">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="section-divider" />
        </div>

        <section id="pricing" className="scroll-mt-32 px-6 py-14 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Pricing</p>
              <h2 className="mt-5 font-serif text-3xl italic leading-tight tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                Simple plans. Full access.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
                Start with a 3-day free trial, then choose monthly or yearly.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 lg:grid-cols-2">
              <ScrollReveal className="h-full">
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <div className="text-sm uppercase tracking-[0.28em] text-white/[0.45]">Monthly</div>
                  <div className="mt-5 flex items-end gap-1.5 sm:gap-2">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">$3.99</span>
                    <span className="pb-1.5 text-white/[0.45] sm:pb-2">/ month</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/[0.58]">
                    Flexible access for staying close to the numbers.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-white/60">
                    {pricingFeatures.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckIcon className="text-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal className="h-full" delay={120}>
                <div className="relative h-full rounded-[1.75rem] border border-sky-300/30 bg-[linear-gradient(160deg,rgba(86,157,255,0.16),rgba(9,13,24,0.98)_35%,rgba(4,7,13,0.98)_100%)] p-5 sm:p-6">
                  <div className="absolute right-5 top-5 rounded-full border border-sky-200/20 bg-sky-300/[0.12] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">
                    Best value
                  </div>
                  <div className="pr-24 text-sm uppercase tracking-[0.28em] text-sky-100/70">Yearly</div>
                  <div className="mt-5 flex items-end gap-1.5 sm:gap-2">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">$29.99</span>
                    <span className="pb-1.5 text-sky-100/70 sm:pb-2">/ year</span>
                  </div>
                  <p className="mt-3 inline-flex rounded-full border border-emerald-400/[0.18] bg-emerald-400/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    Save 37%
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/[0.66]">
                    The best choice if Vercel metrics are part of your weekly routine.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-white/70">
                    {pricingFeatures.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckIcon className="text-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="section-divider" />
        </div>

        <section className="px-6 pb-24 pt-2 md:px-10">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#04070d] px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(76,141,255,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Start now</p>
                    <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                      Keep Vercel close.
                    </h2>
                    <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
                      Open the app and check the numbers in seconds.
                    </p>
                  </div>

                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition-colors hover:bg-gray-100"
                  >
                    <AppleIcon />
                    Download on App Store
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/[0.08] px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="max-w-md">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <Image src="/icon.png" alt="Verceltics" width={36} height={36} className="rounded-xl" />
              <div>
                <div className="text-sm font-semibold tracking-[0.18em] text-white">VERCELTICS</div>
                <div className="text-sm text-white/[0.45]">Vercel analytics for iPhone.</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/[0.48]">An open source companion app for Vercel Web Analytics</p>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/[0.35]">
              Not affiliated with Vercel Inc. © 2026 Apoorv Darshan
            </p>
          </div>

          <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/[0.35]">Explore</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/[0.58]">
                <a href="#features" className="transition-colors hover:text-white">
                  Features
                </a>
                <a href="#how-it-works" className="transition-colors hover:text-white">
                  How it works
                </a>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Pricing
                </a>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/[0.35]">Legal</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/[0.58]">
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/[0.35]">Social</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/[0.58]">
                <a
                  href="https://github.com/apoorvdarshan/verceltics"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/apoorvdarshan"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  X / @apoorvdarshan
                </a>
                <a href="mailto:ad13dtu@gmail.com" className="transition-colors hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function ProductHuntIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 8.5h3.2a2.8 2.8 0 1 1 0 5.6H10m0-5.6V16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
