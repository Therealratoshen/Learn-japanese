import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NihonGo! - Belajar Bahasa Jepang Online untuk Orang Indonesia",
  description:
    "Platform belajar bahasa Jepang online terbaik untuk orang Indonesia. Belajar dengan AI + guru dari Jepang. Persiapan JLPT N5-N2, Tokutei Ginou, dan beasiswa MEXT.",
  keywords: [
    "belajar bahasa jepang",
    "kursus bahasa jepang online",
    "JLPT",
    "tokutei ginou",
    "bahasa jepang untuk pemula",
    "belajar nihongo",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
