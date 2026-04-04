import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Verceltics",
};

export default function Terms() {
  return (
    <div className="legal">
      <Link href="/" className="legal-back">&larr; Back to Verceltics</Link>
      <h1>Terms of Service</h1>
      <p className="legal-date">Last updated: April 3, 2026</p>

      <div className="legal-content">
        <section>
          <h2>Acceptance</h2>
          <p>By using Verceltics, you agree to these terms. If you don&apos;t agree, don&apos;t use the app.</p>
        </section>

        <section>
          <h2>The Service</h2>
          <p>Verceltics is a mobile app that displays your Vercel web analytics using your own Vercel personal access token. The app fetches data directly from Vercel&apos;s API on your behalf.</p>
        </section>

        <section>
          <h2>Your Account</h2>
          <p>You are responsible for your Vercel access token and any activity that occurs through it. Keep your token secure. We recommend creating a token specifically for Verceltics and revoking it if you stop using the app.</p>
        </section>

        <section>
          <h2>Subscriptions</h2>
          <ul>
            <li>Verceltics offers auto-renewable subscriptions: Monthly ($3.99/month) and Yearly ($29.99/year)</li>
            <li>Both plans include a 3-day free trial for first-time subscribers</li>
            <li>Payment is charged to your Apple ID at confirmation of purchase</li>
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period</li>
            <li>You can manage and cancel subscriptions in your Apple ID settings</li>
          </ul>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>Verceltics is provided &quot;as is&quot; without warranty of any kind. We are not responsible for the accuracy or availability of data from Vercel&apos;s API. Verceltics is not affiliated with, endorsed by, or sponsored by Vercel Inc.</p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Verceltics and its developer shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app.</p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Questions? Email us at <a href="mailto:ad13dtu@gmail.com">ad13dtu@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
