import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontak - NihonGo!",
  description:
    "Hubungi tim NihonGo! untuk pertanyaan, kerjasama, atau dukungan.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 px-4 bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin tahu lebih lanjut? Kami sedang
              menyiapkan saluran komunikasi terbaik untuk kamu.
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 text-center mb-8">
            <div className="text-6xl mb-6">&#128679;</div>
            <h2 className="text-2xl font-bold mb-3">Segera Hadir</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Halaman kontak kami sedang dalam tahap persiapan. Kami ingin
              memastikan kamu bisa menghubungi kami dengan cara yang paling
              nyaman dan responsif.
            </p>

            {/* Planned Channels */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-3xl mb-2">&#128241;</div>
                <h3 className="font-semibold text-sm mb-1">WhatsApp</h3>
                <p className="text-xs text-gray-500">Chat langsung</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-3xl mb-2">&#9993;</div>
                <h3 className="font-semibold text-sm mb-1">Email</h3>
                <p className="text-xs text-gray-500">Kirim kapan saja</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4">
                <div className="text-3xl mb-2">&#128247;</div>
                <h3 className="font-semibold text-sm mb-1">Instagram</h3>
                <p className="text-xs text-gray-500">Tips harian</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Sementara itu, kamu bisa melihat halaman{" "}
              <Link
                href="/courses"
                className="text-[var(--color-primary)] font-medium hover:underline"
              >
                Kursus
              </Link>{" "}
              atau{" "}
              <Link
                href="/about"
                className="text-[var(--color-primary)] font-medium hover:underline"
              >
                Tentang Kami
              </Link>{" "}
              untuk informasi lebih lanjut.
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 text-center">
              Pertanyaan Umum
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Kapan saya bisa menghubungi tim NihonGo!?",
                  a: "Kami sedang menyiapkan saluran kontak resmi. Nantikan update-nya di halaman ini.",
                },
                {
                  q: "Bisa konsultasi gratis?",
                  a: "Ya! Nantinya kamu bisa konsultasi gratis via WhatsApp untuk menentukan level dan paket yang cocok.",
                },
                {
                  q: "Mau kerjasama/kolaborasi?",
                  a: "Kami terbuka untuk kerjasama! Detail kontak untuk proposal akan tersedia segera.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="border border-gray-200 rounded-xl p-4 group"
                >
                  <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                      &#9660;
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
