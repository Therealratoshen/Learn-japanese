import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 text-center bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mb-6">
            Platform Belajar Bahasa Jepang untuk Orang Indonesia
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Belajar Bahasa Jepang
            <br />
            <span className="text-[var(--color-primary)]">
              Langsung dari Jepang
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Belajar mandiri 24/7 dengan AI + sesi live dengan guru yang tinggal
            &amp; bekerja di Jepang. Dari JLPT N5 sampai N2, semua dalam Bahasa
            Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[var(--color-primary-dark)] transition shadow-lg"
            >
              Mulai Gratis 7 Hari
            </Link>
            <Link
              href="/courses"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
            >
              Lihat Kursus
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="text-green-500">&#10003;</span> Penjelasan
              Bahasa Indonesia
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-500">&#10003;</span> Guru di Jepang
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-500">&#10003;</span> AI Practice 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "N5-N2", label: "Level JLPT" },
            { value: "4", label: "Paket Kursus" },
            { value: "100%", label: "Bahasa Indonesia" },
            { value: "24/7", label: "AI Practice" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Kenapa NihonGo?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Kombinasi unik yang tidak ada di platform lain
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "&#129302;",
                title: "AI Practice 24/7",
                desc: "Latihan percakapan dengan AI kapan saja. Grammar checker, quiz generator, dan conversation bot yang bisa bahasa Indonesia.",
              },
              {
                icon: "&#128104;&#8205;&#127979;",
                title: "Guru dari Jepang",
                desc: "Sesi live video dengan guru yang tinggal & bekerja di Jepang. Bukan cuma teori, tapi pengalaman nyata.",
              },
              {
                icon: "&#127470;&#127465;",
                title: "100% Bahasa Indonesia",
                desc: "Semua penjelasan, UI, dan materi dalam Bahasa Indonesia. Termasuk perbandingan tata bahasa Jepang-Indonesia.",
              },
              {
                icon: "&#128218;",
                title: "Kurikulum JLPT",
                desc: "Materi terstruktur dari N5 sampai N2. Setiap level ada pelajaran, kuis, dan latihan yang sesuai standar JLPT.",
              },
              {
                icon: "&#128188;",
                title: "Fokus Karir",
                desc: "Persiapan visa Tokutei Ginou, beasiswa MEXT, wawancara perusahaan Jepang, dan kehidupan sehari-hari di Jepang.",
              },
              {
                icon: "&#128176;",
                title: "Harga Terjangkau",
                desc: "Mulai dari Rp 99.000/bulan. Harga disesuaikan untuk pelajar Indonesia dengan opsi gratis tersedia.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="text-4xl mb-4"
                  dangerouslySetInnerHTML={{ __html: feature.icon }}
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Cara Kerjanya
          </h2>
          <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
            3 langkah mudah untuk mulai belajar bahasa Jepang
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Daftar & Pilih Level",
                desc: "Buat akun gratis dan pilih level JLPT kamu. Belum tahu levelnya? Ikuti tes penempatan gratis kami.",
              },
              {
                step: "2",
                title: "Belajar & Latihan",
                desc: "Akses pelajaran terstruktur, latihan dengan AI 24/7, dan kerjakan kuis untuk mengukur kemajuan.",
              },
              {
                step: "3",
                title: "Sesi Live & Sertifikasi",
                desc: "Ikuti sesi live dengan guru untuk koreksi langsung, dan persiapkan ujian JLPT resmi.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[var(--color-light)] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-[var(--color-primary)] text-sm px-3 py-1 rounded-full mb-4">
                Guru Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Belajar dari yang Berpengalaman
              </h2>
              <p className="text-gray-600 mb-6">
                Guru kami bukan sekadar pengajar bahasa Jepang biasa. Dengan
                pengalaman tinggal dan bekerja di Jepang, kamu akan mendapatkan
                pengetahuan praktis tentang:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">&#10003;</span>
                  <span>Budaya kerja Jepang &amp; etika bisnis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">&#10003;</span>
                  <span>Kehidupan sehari-hari di Jepang</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">&#10003;</span>
                  <span>Tips persiapan visa &amp; beasiswa MEXT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">&#10003;</span>
                  <span>Bahasa Jepang yang benar-benar dipakai sehari-hari</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="inline-block mt-6 text-[var(--color-primary)] font-semibold hover:underline"
              >
                Pelajari lebih lanjut &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-amber-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                &#128104;&#8205;&#127979;
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Sensei</h3>
                <p className="text-[var(--color-primary)] text-sm font-medium mb-4">
                  Tinggal & Bekerja di Jepang
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      N1
                    </div>
                    <div className="text-xs text-gray-500">JLPT</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      N5-N2
                    </div>
                    <div className="text-xs text-gray-500">Mengajar</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      ID
                    </div>
                    <div className="text-xs text-gray-500">Bahasa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section id="levels" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Level JLPT
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dari pemula sampai mahir, semua terstruktur
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                level: "N5",
                label: "Pemula",
                duration: "3 bulan",
                lessons: "15 pelajaran",
                desc: "Hiragana, Katakana, 100 Kanji, percakapan dasar",
                color: "bg-green-100 text-green-800 border-green-200",
              },
              {
                level: "N4",
                label: "Dasar",
                duration: "3 bulan",
                lessons: "15 pelajaran",
                desc: "300 Kanji, grammar dasar, percakapan sehari-hari",
                color: "bg-blue-100 text-blue-800 border-blue-200",
              },
              {
                level: "N3",
                label: "Menengah",
                duration: "4 bulan",
                lessons: "12 pelajaran",
                desc: "650 Kanji, grammar menengah, membaca artikel",
                color: "bg-purple-100 text-purple-800 border-purple-200",
              },
              {
                level: "N2",
                label: "Mahir",
                duration: "4 bulan",
                lessons: "10 pelajaran",
                desc: "1000+ Kanji, grammar lanjut, dunia kerja Jepang",
                color: "bg-red-100 text-red-800 border-red-200",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 text-center hover:border-[var(--color-primary)] hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${item.color}`}
                >
                  JLPT {item.level}
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                <div className="text-xs text-gray-400 mb-3">
                  {item.duration} &middot; {item.lessons}
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/courses"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              Lihat detail semua kursus &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Join Early Section */}
      <section className="py-20 px-4 bg-[var(--color-light)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jadilah Pelajar Pertama Kami
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            NihonGo! adalah platform baru yang sedang kami bangun dengan
            sepenuh hati. Kami belum punya review karena kami ingin jujur
            &mdash; tapi kami yakin kamu akan menjadi cerita sukses pertama kami.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "&#127793;",
                title: "Platform Baru",
                desc: "Kami baru memulai, jadi kamu bisa ikut membentuk platform ini sesuai kebutuhanmu.",
              },
              {
                icon: "&#128172;",
                title: "Feedback Langsung",
                desc: "Sebagai pelajar awal, masukanmu langsung didengar dan diterapkan.",
              },
              {
                icon: "&#127873;",
                title: "Harga Early Adopter",
                desc: "Daftar sekarang dan dapatkan akses dengan harga spesial untuk pendaftar awal.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div
                  className="text-4xl mb-4"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pilih Paket Belajar
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Harga terjangkau untuk semua kalangan. Mulai gratis!
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Gratis",
                price: "Rp 0",
                period: "",
                features: [
                  "3 pelajaran dasar",
                  "AI chat 5x/hari",
                  "Akses komunitas",
                  "Progress tracking",
                ],
                cta: "Mulai Gratis",
                highlight: false,
              },
              {
                name: "Basic",
                price: "Rp 99.000",
                period: "/bulan",
                features: [
                  "Semua pelajaran",
                  "AI chat unlimited",
                  "1 sesi grup/bulan",
                  "Progress tracking",
                  "Materi audio",
                ],
                cta: "Pilih Basic",
                highlight: false,
              },
              {
                name: "Premium",
                price: "Rp 199.000",
                period: "/bulan",
                features: [
                  "Semua di Basic",
                  "2 sesi privat/bulan",
                  "JLPT mock test",
                  "Priority support",
                  "Rekaman sesi",
                ],
                cta: "Pilih Premium",
                highlight: true,
              },
              {
                name: "Intensive",
                price: "Rp 499.000",
                period: "/bulan",
                features: [
                  "Semua di Premium",
                  "4 sesi privat/bulan",
                  "Bimbingan karir",
                  "Sertifikat",
                  "Persiapan visa",
                ],
                cta: "Pilih Intensive",
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] text-white ring-4 ring-red-200 scale-105"
                    : "bg-white border border-gray-200 hover:-translate-y-1"
                }`}
              >
                {plan.highlight && (
                  <div className="text-xs font-bold bg-white text-[var(--color-primary)] px-2 py-1 rounded-full inline-block mb-3">
                    REKOMENDASI
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold mb-1">
                  {plan.price}
                  <span
                    className={`text-sm font-normal ${plan.highlight ? "text-red-200" : "text-gray-500"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span>&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block w-full py-2 rounded-lg font-medium transition text-center ${
                    plan.highlight
                      ? "bg-white text-[var(--color-primary)] hover:bg-gray-100"
                      : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Diskon 30% untuk pembayaran tahunan. Gratis trial 7 hari untuk semua
            paket berbayar.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-[var(--color-light)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Apakah saya perlu pengalaman bahasa Jepang sebelumnya?",
                a: "Tidak! Kami mulai dari nol - Hiragana dan Katakana. Cocok untuk pemula total.",
              },
              {
                q: "Bagaimana cara kerja AI practice?",
                a: "AI kami bisa diajak percakapan dalam bahasa Jepang, mengecek grammar, membuat quiz, dan menjelaskan materi. Semua penjelasan dalam Bahasa Indonesia.",
              },
              {
                q: "Siapa gurunya?",
                a: "Guru kami adalah orang Indonesia yang tinggal dan bekerja di Jepang dengan sertifikasi JLPT N1. Bisa memberikan konteks budaya dan kehidupan nyata di Jepang.",
              },
              {
                q: "Bisa bayar pakai apa saja?",
                a: "Sistem pembayaran sedang kami siapkan. Nantinya akan mendukung transfer bank dan e-wallet populer di Indonesia.",
              },
              {
                q: "Apakah ada sertifikat?",
                a: "Ya, untuk paket Intensive. Kami juga membantu persiapan ujian JLPT resmi.",
              },
              {
                q: "Apakah bisa belajar di handphone?",
                a: "Ya! Platform kami 100% responsive dan bisa diakses dari browser handphone.",
              },
              {
                q: "Bagaimana jika saya tidak puas?",
                a: "Kami menawarkan trial gratis 7 hari. Jika tidak puas, bisa berhenti kapan saja tanpa biaya tambahan.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-4 group"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[var(--color-primary)] to-red-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Belajar Bahasa Jepang?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Mulai perjalanan bahasa Jepangmu bersama NihonGo! &mdash; platform
            yang dibuat khusus untuk pelajar Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Mulai Gratis Sekarang
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
