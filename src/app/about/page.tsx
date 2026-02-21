import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali lebih dekat NihonGo! - platform belajar bahasa Jepang untuk orang Indonesia dengan guru yang tinggal di Jepang.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="text-[var(--color-primary)]">NihonGo!</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Misi kami adalah membuat belajar bahasa Jepang menjadi mudah,
            terjangkau, dan relevan untuk orang Indonesia.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Cerita Kami</h2>
              <p className="text-gray-600 mb-4">
                NihonGo! lahir dari pengalaman nyata tinggal dan bekerja di
                Jepang. Kami melihat banyak orang Indonesia yang ingin belajar
                bahasa Jepang tapi terkendala harga, metode yang membosankan,
                dan kurangnya konteks budaya yang relevan.
              </p>
              <p className="text-gray-600 mb-4">
                Kebanyakan platform belajar bahasa Jepang dibuat untuk pasar
                global - harga dalam dollar, penjelasan dalam bahasa Inggris,
                dan tanpa memahami kebutuhan spesifik pelajar Indonesia.
              </p>
              <p className="text-gray-600">
                Kami membangun NihonGo! untuk mengisi celah tersebut: platform
                yang 100% dalam bahasa Indonesia, dengan harga terjangkau, dan
                materi yang relevan untuk tujuan orang Indonesia belajar bahasa
                Jepang - baik untuk kerja, kuliah, maupun hobi.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0 text-2xl">
                    &#127471;&#127477;
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dibuat dari Jepang</h3>
                    <p className="text-sm text-gray-600">
                      Pengalaman langsung dari kehidupan di Jepang
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 text-2xl">
                    &#127470;&#127465;
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Untuk Orang Indonesia</h3>
                    <p className="text-sm text-gray-600">
                      Semua dalam Bahasa Indonesia dengan harga lokal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 text-2xl">
                    &#129302;
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teknologi AI Modern</h3>
                    <p className="text-sm text-gray-600">
                      AI practice 24/7 + guru manusia untuk hasil terbaik
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Profile */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Kenali Guru Kami</h2>
          <div className="bg-[var(--color-light)] rounded-2xl p-8 md:p-12">
            <div className="w-28 h-28 bg-gradient-to-br from-red-200 to-amber-200 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
              &#128104;&#8205;&#127979;
            </div>
            <h3 className="text-2xl font-bold mb-2">Sensei</h3>
            <p className="text-[var(--color-primary)] font-medium mb-6">
              Founder &amp; Pengajar Utama NihonGo!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">N1</div>
                <div className="text-sm text-gray-500">Sertifikasi JLPT</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">N5-N2</div>
                <div className="text-sm text-gray-500">Level Mengajar</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">ID</div>
                <div className="text-sm text-gray-500">Penjelasan Bahasa</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-primary)]">JP</div>
                <div className="text-sm text-gray-500">Berbasis di Jepang</div>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tinggal dan bekerja di Jepang, mengajar bahasa Jepang adalah
              passion sekaligus misi untuk membantu lebih banyak orang Indonesia
              meraih mimpi mereka di Jepang. Baik untuk kerja melalui program
              Tokutei Ginou, beasiswa MEXT, atau sekadar menikmati budaya Jepang
              dengan lebih mendalam.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Misi &amp; Nilai Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "\u{1F3AF}",
                title: "Aksesibilitas",
                desc: "Belajar bahasa Jepang tidak harus mahal. Kami menyediakan opsi gratis dan harga yang disesuaikan dengan daya beli Indonesia.",
              },
              {
                icon: "\u2705",
                title: "Kualitas",
                desc: "Kurikulum terstruktur berdasarkan standar JLPT, dengan materi yang dibuat oleh guru berpengalaman langsung dari Jepang.",
              },
              {
                icon: "\u{1F91D}",
                title: "Komunitas",
                desc: "Belajar lebih menyenangkan bersama. Bergabung dengan komunitas pelajar dan alumni yang sudah di Jepang.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[var(--color-primary)] to-red-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Mulai Perjalanan Bahasa Jepangmu
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Bergabung dengan NihonGo! dan pelajari bahasa Jepang dengan cara
            yang benar.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Daftar Gratis Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
