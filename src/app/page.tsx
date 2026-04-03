import Image from "next/image";
import Link from "next/link";

const heroShots = [
  {
    src: "/projects.png",
    alt: "Verceltics project browser screenshot",
    width: 360,
    height: 780,
    wrapperClass: "left-0 top-24 z-10 w-40 sm:w-44 lg:w-48",
    cardClass: "[transform:rotateY(26deg)_rotateX(10deg)_rotateZ(-14deg)]",
    delay: "0.6s",
    duration: "7.4s",
  },
  {
    src: "/analytics.png",
    alt: "Verceltics analytics overview screenshot",
    width: 420,
    height: 910,
    wrapperClass: "left-[16%] top-8 z-30 w-48 sm:w-56 lg:w-64",
    cardClass: "[transform:rotateY(-10deg)_rotateX(9deg)_rotateZ(-4deg)]",
    delay: "0.9s",
    duration: "8.4s",
  },
  {
    src: "/breakdowns.png",
    alt: "Verceltics breakdown analytics screenshot",
    width: 360,
    height: 780,
    wrapperClass: "right-[12%] top-0 z-20 w-40 sm:w-[11.5rem] lg:w-52",
    cardClass: "[transform:rotateY(-24deg)_rotateX(10deg)_rotateZ(12deg)]",
    delay: "1.2s",
    duration: "7.8s",
  },
  {
    src: "/referrers.png",
    alt: "Verceltics referrer analytics screenshot",
    width: 390,
    height: 845,
    wrapperClass: "left-[8%] bottom-4 z-20 w-44 sm:w-[12.5rem] lg:w-56",
    cardClass: "[transform:rotateY(18deg)_rotateX(8deg)_rotateZ(7deg)]",
    delay: "1.5s",
    duration: "8.1s",
  },
  {
    src: "/devices.png",
    alt: "Verceltics device analytics screenshot",
    width: 360,
    height: 780,
    wrapperClass: "right-0 bottom-16 z-10 w-40 sm:w-44 lg:w-48",
    cardClass: "[transform:rotateY(-28deg)_rotateX(9deg)_rotateZ(14deg)]",
    delay: "1.8s",
    duration: "7.2s",
  },
] as const;

const stats = [
  { value: "1000+", label: "developers" },
  { value: "50K+", label: "analytics checked" },
  { value: "4.9", label: "App Store rating" },
] as const;

const features = [
  {
    eyebrow: "Overview",
    title: "Read the signal before the next tab even loads.",
    description:
      "The core dashboard turns Vercel's raw web analytics into a calm, tactile briefing made for fast decisions when you are nowhere near your desk.",
    points: [
      "Visitors, page views, bounce rate, and deltas in one native view",
      "Charts that stay clear at a glance instead of collapsing into noise",
      "A polished mobile layout that feels built, not merely ported",
    ],
    image: "/analytics.png",
    alt: "Analytics dashboard screenshot",
    badge: "Daily command center",
  },
  {
    eyebrow: "Acquisition",
    title: "Know exactly where the traffic moved and why.",
    description:
      "Breakdowns, referrers, and campaign slices make it obvious which sources are driving attention so you can react with context instead of guesswork.",
    points: [
      "Referrers, countries, and UTMs surfaced in a swipeable flow",
      "Traffic mix presented with enough density for serious monitoring",
      "Perfect for launch days, release weeks, and campaign spikes",
    ],
    image: "/referrers.png",
    alt: "Referrers screenshot",
    badge: "Acquisition clarity",
  },
  {
    eyebrow: "Portfolio",
    title: "Carry every project and every audience pattern with you.",
    description:
      "From project switching to device-level audience reads, Verceltics keeps the entire portfolio within reach so you can audit performance in motion.",
    points: [
      "Jump across projects without losing your place or context",
      "Inspect devices and browsers when behavior starts to shift",
      "Built for founders, indie teams, and operators managing multiple apps",
    ],
    image: "/projects.png",
    alt: "Projects screenshot",
    badge: "Multi-project monitoring",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Create Token",
    description:
      "Generate a read-only Web Analytics token inside Vercel so the app can securely query your account.",
  },
  {
    number: "02",
    title: "Paste in App",
    description:
      "Drop the token into Verceltics once. It stays stored in the iOS Keychain, ready for every future session.",
  },
  {
    number: "03",
    title: "View Analytics",
    description:
      "Open the app any time to scan visitors, referrers, devices, and project trends with zero setup friction.",
  },
] as const;

const pricingFeatures = [
  "3-day free trial",
  "Unlimited project views",
  "Native charts and breakdowns",
  "Private and open source",
] as const;

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[#04070d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(92,156,255,0.20),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.07),transparent_22%),linear-gradient(180deg,#050811_0%,#04070d_50%,#020305_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:140px_140px] opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#04070d]/[0.72] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icon.png" alt="Verceltics" width={36} height={36} className="rounded-xl" />
            <div>
              <span className="block text-sm font-semibold tracking-[0.18em] text-white">VERCELTICS</span>
              <span className="block text-xs text-white/[0.45]">Analytics for operators on the move</span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#features" className="text-sm text-white/60 transition-colors hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-white/60 transition-colors hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-white/60 transition-colors hover:text-white">
              Pricing
            </a>
            <a
              href="https://github.com/apoorvdarshan/verceltics"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(255,255,255,0.14)]"
          >
            <AppleIcon />
            App Store
          </a>
        </div>
      </nav>

      <main className="relative">
        <section className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-18 pt-32 md:px-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:pt-40">
            <div className="max-w-2xl text-center lg:text-left">
              <div
                className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-[12px] uppercase tracking-[0.28em] text-white/60"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                Open source native analytics
              </div>

              <h1
                className="animate-fade-up mt-8 font-serif text-6xl italic leading-[0.86] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl xl:text-[7.5rem] [text-wrap:balance]"
                style={{ animationDelay: "0.2s" }}
              >
                Vercel analytics,
                <span className="mt-2 block bg-gradient-to-r from-[#f6fbff] via-[#9fcfff] to-[#4c8dff] bg-clip-text text-transparent">
                  composed for your pocket.
                </span>
              </h1>

              <p
                className="animate-fade-up mt-8 max-w-xl text-base leading-8 text-white/[0.68] sm:text-lg"
                style={{ animationDelay: "0.35s" }}
              >
                A premium iPhone companion for Vercel Web Analytics. Track visitors, page views, bounce rate,
                referrers, countries, and devices in a native interface that feels closer to a product launch than a
                dashboard export.
              </p>

              <div
                className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                style={{ animationDelay: "0.5s" }}
              >
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(255,255,255,0.16)]"
                >
                  <AppleIcon />
                  Download on App Store
                </a>
                <a
                  href="https://github.com/apoorvdarshan/verceltics"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                >
                  View on GitHub
                </a>
              </div>

              <div
                className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/[0.45] lg:justify-start"
                style={{ animationDelay: "0.65s" }}
              >
                <span className="rounded-full border border-white/10 px-3 py-1.5">SwiftUI and Swift Charts</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">Private by design</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">Built for fast reads</span>
              </div>
            </div>

            <div className="animate-fade-up relative mx-auto w-full max-w-[680px] [perspective:2400px]" style={{ animationDelay: "0.45s" }}>
              <div className="absolute inset-x-20 top-24 h-56 rounded-full bg-sky-500/[0.15] blur-3xl" />
              <div className="absolute inset-x-10 bottom-10 h-48 rounded-full bg-blue-950/80 blur-3xl" />

              <div className="relative h-[560px] [transform-style:preserve-3d] sm:h-[640px]">
                {heroShots.map((shot) => (
                  <div
                    key={shot.src}
                    className={`animate-float absolute ${shot.wrapperClass}`}
                    style={{ animationDelay: shot.delay, animationDuration: shot.duration }}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_35px_80px_rgba(4,10,24,0.45)] backdrop-blur-xl ${shot.cardClass}`}
                    >
                      <div className="absolute inset-x-8 top-4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        className="h-auto w-full rounded-[1.6rem]"
                        priority={shot.src === "/analytics.png"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(3,8,20,0.35)] backdrop-blur-xl md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Trusted by developers</p>
                <h2 className="mt-4 max-w-xl font-serif text-3xl italic leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Built for the teams who refresh their metrics before they refresh their inbox.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-[180px] rounded-[1.5rem] border border-white/10 bg-black/30 px-5 py-6"
                  >
                    <div className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-white/[0.55]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-32 px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Feature set</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Everything essential, staged like a premium product release.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                No generic card wall. Just three focused narratives showing how Verceltics turns raw Vercel analytics
                into something beautiful enough to check constantly.
              </p>
            </div>

            <div className="mt-20 space-y-20">
              {features.map((feature, index) => {
                const screenshotOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2";
                const copyOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1";

                return (
                  <article
                    key={feature.title}
                    className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center"
                  >
                    <div className={`order-2 ${screenshotOrder}`}>
                      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_80px_rgba(3,8,20,0.40)]">
                        <div className="absolute inset-x-10 top-6 h-px bg-gradient-to-r from-transparent via-white/[0.55] to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,154,255,0.18),transparent_38%)]" />
                        <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/40 p-2">
                          <div className="mb-4 flex items-center justify-between px-3 pt-2 text-[11px] uppercase tracking-[0.28em] text-white/[0.45]">
                            <span>Verceltics</span>
                            <span>{feature.badge}</span>
                          </div>
                          <Image
                            src={feature.image}
                            alt={feature.alt}
                            width={960}
                            height={720}
                            className="h-auto w-full rounded-[1.45rem]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${copyOrder}`}>
                      <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">{feature.eyebrow}</p>
                      <h3 className="mt-5 max-w-xl font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                        {feature.title}
                      </h3>
                      <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.65] sm:text-lg">
                        {feature.description}
                      </p>
                      <ul className="mt-8 space-y-4 text-sm leading-7 text-white/[0.56] sm:text-base">
                        {feature.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.65)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-32 px-6 py-10 md:px-10">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-8 py-12 shadow-[0_28px_80px_rgba(3,8,20,0.36)] backdrop-blur-xl md:px-12 md:py-14">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">How it works</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                Three steps from token to complete visibility.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
                The setup is intentionally light. One token, one paste, and the full analytics surface is ready on your
                phone whenever you need it.
              </p>
            </div>

            <div className="relative mt-12 grid gap-6 md:grid-cols-3">
              <div className="absolute left-[16.66%] right-[16.66%] top-9 hidden h-px bg-gradient-to-r from-white/0 via-white/[0.14] to-white/0 md:block" />
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-[2rem] border border-white/10 bg-black/25 p-7 md:p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-300/20 bg-sky-400/10 font-semibold tracking-[0.24em] text-sky-100 shadow-[0_0_28px_rgba(56,189,248,0.18)]">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/[0.58] sm:text-base">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-32 px-6 py-28 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Pricing</p>
              <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Simple pricing, cut with a little more drama.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                Start with a 3-day free trial and pick the plan that fits how often you want the numbers in your hand.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_70px_rgba(3,8,20,0.32)]">
                <div className="text-sm uppercase tracking-[0.28em] text-white/[0.45]">Monthly</div>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-6xl font-semibold tracking-[-0.06em] text-white">$3.99</span>
                  <span className="pb-2 text-white/[0.45]">/ month</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/[0.58]">
                  A flexible way to try the app if you want full analytics access without committing to the annual plan.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-white/60">
                  {pricingFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-glow-pulse relative rounded-[2rem] border border-sky-300/30 bg-[linear-gradient(160deg,rgba(86,157,255,0.20),rgba(9,13,24,0.98)_35%,rgba(4,7,13,0.98)_100%)] p-8 shadow-[0_0_60px_rgba(56,189,248,0.22)] lg:-translate-y-4">
                <div className="absolute right-6 top-6 rounded-full border border-sky-200/20 bg-sky-300/[0.12] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100">
                  Best value
                </div>
                <div className="text-sm uppercase tracking-[0.28em] text-sky-100/70">Yearly</div>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-6xl font-semibold tracking-[-0.06em] text-white">$29.99</span>
                  <span className="pb-2 text-sky-100/70">/ year</span>
                </div>
                <p className="mt-3 inline-flex rounded-full border border-emerald-400/[0.18] bg-emerald-400/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Save 37%
                </p>
                <p className="mt-5 text-sm leading-7 text-white/[0.66]">
                  The strongest option if Vercel metrics are part of your weekly operating rhythm and you want the app
                  ready every time you reach for your phone.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-white/70">
                  {pricingFeatures.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#04070d] px-8 py-10 shadow-[0_30px_90px_rgba(3,8,20,0.42)] md:px-12 md:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(76,141,255,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-sky-200/70">Start now</p>
                  <h2 className="mt-5 font-serif text-4xl italic leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                    Start tracking your analytics today.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
                    Monitor launches, daily traffic shifts, and portfolio health from the same device already in your
                    pocket.
                  </p>
                </div>

                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(255,255,255,0.16)]"
                >
                  <AppleIcon />
                  Download on App Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/[0.08] px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/icon.png" alt="Verceltics" width={36} height={36} className="rounded-xl" />
              <div>
                <div className="text-sm font-semibold tracking-[0.18em] text-white">VERCELTICS</div>
                <div className="text-sm text-white/[0.45]">Vercel analytics on your iPhone.</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/[0.48]">
              An independent companion app for Vercel Web Analytics, designed for quick reads, calm monitoring, and a
              more premium daily ritual.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/[0.35]">
              Not affiliated with Vercel Inc. Copyright 2026 Verceltics.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
