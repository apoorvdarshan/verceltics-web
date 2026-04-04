import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://verceltics.site"),
  title: "Verceltics — Vercel Analytics on Your iPhone",
  description:
    "Track your Vercel web analytics on the go. Visitors, page views, bounce rate, referrers, countries, devices — all from your iPhone.",
  openGraph: {
    title: "Verceltics — Vercel Analytics on Your iPhone",
    description: "Track your Vercel web analytics on the go.",
    url: "https://verceltics.site",
    images: ["/analytics.png"],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
