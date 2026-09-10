import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fardin Ad Works — Targeted YouTube Video Promotion & Algorithmic Growth',
  description: 'Precision Google Ads campaigns driving authentic, retention-backed views, watch hours, and subscribers for creators. 100% YouTube TOS safe.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23FF4229'/><polygon points='12,8 24,16 12,24' fill='%23FFFFFF'/></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#07090E] text-[#F1F5F9] relative selection:bg-[#FF4229] selection:text-white">
        <div className="bg-ambient-grid" aria-hidden="true" />
        <div
          className="fixed top-10 left-10 w-[500px] h-[500px] bg-[#FF4229]/10 rounded-full blur-[120px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="fixed bottom-10 right-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
