import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Verceltics",
};

export default function Privacy() {
  return (
    <div className="legal">
      <Link href="/" className="legal-back">&larr; Back to Verceltics</Link>
      <h1>Privacy Policy</h1>
      <p className="legal-date">Last updated: April 3, 2026</p>

      <div className="legal-content">
        <section>
          <h2>Overview</h2>
          <p>Verceltics is a mobile analytics viewer for Vercel. We take your privacy seriously. This policy explains what data we collect and how we use it.</p>
        </section>

        <section>
          <h2>Data We Collect</h2>
          <p><strong>We do not collect any personal data.</strong> Specifically:</p>
          <ul>
            <li>We do not track you</li>
            <li>We do not use analytics or telemetry</li>
            <li>We do not store your data on our servers</li>
            <li>We do not share any data with third parties</li>
          </ul>
        </section>

        <section>
          <h2>Vercel API Token</h2>
          <p>Your Vercel personal access token is stored locally on your device in the iOS Keychain — Apple&apos;s encrypted, hardware-backed secure storage. The token is never sent to our servers. It is only used to authenticate directly with Vercel&apos;s API from your device.</p>
        </section>

        <section>
          <h2>Analytics Data</h2>
          <p>All analytics data displayed in the app is fetched directly from Vercel&apos;s API to your device. We do not proxy, cache, or store this data anywhere.</p>
        </section>

        <section>
          <h2>Subscriptions</h2>
          <p>Subscriptions are managed entirely by Apple through the App Store. We do not process or store any payment information.</p>
        </section>

        <section>
          <h2>Open Source</h2>
          <p>Verceltics is open source. You can verify everything above by reviewing the source code at <a href="https://github.com/apoorvdarshan/verceltics">github.com/apoorvdarshan/verceltics</a>.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>If you have questions, contact us at <a href="mailto:ad13dtu@gmail.com">ad13dtu@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
