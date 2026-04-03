import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

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
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="min-h-screen bg-black font-[family-name:var(--font-dm-sans)] text-white">
        {children}
      </body>
    </html>
  );
}
