import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NihonGo! - Belajar Bahasa Jepang untuk Orang Indonesia",
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
