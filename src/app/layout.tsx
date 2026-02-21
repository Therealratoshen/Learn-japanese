import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "NihonGo! - Belajar Bahasa Jepang untuk Orang Indonesia",
    template: "%s | NihonGo!",
  },
  description:
    "Platform belajar bahasa Jepang modern untuk orang Indonesia. Belajar mandiri dengan AI + sesi live dengan guru di Jepang. Mulai dari JLPT N5 hingga N2.",
  keywords: [
    "belajar bahasa jepang",
    "JLPT",
    "nihongo",
    "bahasa jepang untuk pemula",
    "kursus bahasa jepang online",
    "tokutei ginou",
  ],
  openGraph: {
    title: "NihonGo! - Belajar Bahasa Jepang untuk Orang Indonesia",
    description:
      "Platform belajar bahasa Jepang modern untuk orang Indonesia. AI + guru di Jepang. JLPT N5 sampai N2.",
    url: "https://therealratoshen.github.io/Learn-japanese",
    siteName: "NihonGo!",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-[var(--color-light)] text-[var(--color-dark)]">
        {children}
      </body>
    </html>
  );
}
