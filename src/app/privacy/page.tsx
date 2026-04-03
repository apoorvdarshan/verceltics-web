import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Verceltics",
};

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-gray-500 hover:text-white transition-colors mb-10 inline-block">← Back to Verceltics</Link>
      <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: April 3, 2026</p>

      <div className="space-y-8 text-[15px] text-gray-400 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Overview</h2>
          <p>Verceltics is a mobile analytics viewer for Vercel. We take your privacy seriously. This policy explains what data we collect and how we use it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Data We Collect</h2>
          <p className="mb-3"><strong className="text-white">We do not collect any personal data.</strong> Specifically:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not track you</li>
            <li>We do not use analytics or telemetry</li>
            <li>We do not store your data on our servers</li>
            <li>We do not share any data with third parties</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Vercel API Token</h2>
          <p>Your Vercel personal access token is stored locally on your device in the iOS Keychain — Apple&apos;s encrypted, hardware-backed secure storage. The token is never sent to our servers. It is only used to authenticate directly with Vercel&apos;s API from your device.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Analytics Data</h2>
          <p>All analytics data displayed in the app is fetched directly from Vercel&apos;s API to your device. We do not proxy, cache, or store this data anywhere.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Subscriptions</h2>
          <p>Subscriptions are managed entirely by Apple through the App Store. We do not process or store any payment information.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Open Source</h2>
          <p>Verceltics is open source. You can verify everything above by reviewing the source code at <a href="https://github.com/apoorvdarshan/verceltics" className="text-blue-500 hover:underline">github.com/apoorvdarshan/verceltics</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p>If you have questions, contact us at <a href="mailto:ad13dtu@gmail.com" className="text-blue-500 hover:underline">ad13dtu@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
