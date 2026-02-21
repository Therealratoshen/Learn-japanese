export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇯🇵</span>
            <span className="text-xl font-bold text-[var(--color-primary)]">
              NihonGo!
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-[var(--color-primary)]">
              Fitur
            </a>
            <a href="#levels" className="hover:text-[var(--color-primary)]">
              Level
            </a>
            <a href="#pricing" className="hover:text-[var(--color-primary)]">
              Harga
            </a>
            <a href="#faq" className="hover:text-[var(--color-primary)]">
              FAQ
            </a>
          </div>
          <a
            href="#pricing"
            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)] transition"
          >
            Mulai Belajar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 text-center bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mb-6">
            Platform Belajar Bahasa Jepang #1 untuk Orang Indonesia
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
            <a
              href="#pricing"
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[var(--color-primary-dark)] transition shadow-lg"
            >
              Mulai Gratis 7 Hari
            </a>
            <a
              href="#features"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
            >
              Lihat Fitur
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span>&#10003;</span> Penjelasan Bahasa Indonesia
            </div>
            <div className="flex items-center gap-1">
              <span>&#10003;</span> Guru di Jepang
            </div>
            <div className="flex items-center gap-1">
              <span>&#10003;</span> AI Practice 24/7
            </div>
          </div>
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
                icon: "🤖",
                title: "AI Practice 24/7",
                desc: "Latihan percakapan dengan AI kapan saja. Grammar checker, quiz generator, dan conversation bot yang bisa bahasa Indonesia.",
              },
              {
                icon: "👨‍🏫",
                title: "Guru dari Jepang",
                desc: "Sesi live video dengan guru yang sudah 5+ tahun tinggal & bekerja di Jepang. Bukan cuma teori, tapi pengalaman nyata.",
              },
              {
                icon: "🇮🇩",
                title: "100% Bahasa Indonesia",
                desc: "Semua penjelasan, UI, dan materi dalam Bahasa Indonesia. Termasuk perbandingan tata bahasa Jepang-Indonesia.",
              },
              {
                icon: "📚",
                title: "Kurikulum JLPT",
                desc: "Materi terstruktur dari N5 sampai N2. Setiap level ada pelajaran, kuis, dan latihan yang sesuai standar JLPT.",
              },
              {
                icon: "💼",
                title: "Fokus Karir",
                desc: "Persiapan visa Tokutei Ginou, beasiswa MEXT, wawancara perusahaan Jepang, dan kehidupan sehari-hari di Jepang.",
              },
              {
                icon: "💰",
                title: "Harga Terjangkau",
                desc: "Mulai dari Rp 99.000/bulan. 5-10x lebih murah dari platform sejenis dengan fitur lebih lengkap.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
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
                desc: "Hiragana, Katakana, 100 Kanji, percakapan dasar",
                color: "bg-green-100 text-green-800",
              },
              {
                level: "N4",
                label: "Dasar",
                desc: "300 Kanji, grammar dasar, percakapan sehari-hari",
                color: "bg-blue-100 text-blue-800",
              },
              {
                level: "N3",
                label: "Menengah",
                desc: "650 Kanji, grammar menengah, membaca artikel",
                color: "bg-purple-100 text-purple-800",
              },
              {
                level: "N2",
                label: "Mahir",
                desc: "1000+ Kanji, grammar lanjut, dunia kerja Jepang",
                color: "bg-red-100 text-red-800",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 p-6 text-center hover:border-[var(--color-primary)] transition"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${item.color}`}
                >
                  JLPT {item.level}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
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
                ],
                cta: "Pilih Intensive",
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] text-white ring-4 ring-red-200 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.highlight && (
                  <div className="text-xs font-bold bg-white text-[var(--color-primary)] px-2 py-1 rounded-full inline-block mb-3">
                    PALING POPULER
                  </div>
                )}
                <h3
                  className={`text-lg font-semibold mb-1 ${plan.highlight ? "" : ""}`}
                >
                  {plan.name}
                </h3>
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
                <button
                  className={`w-full py-2 rounded-lg font-medium transition ${
                    plan.highlight
                      ? "bg-white text-[var(--color-primary)] hover:bg-gray-100"
                      : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                  }`}
                >
                  {plan.cta}
                </button>
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
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="space-y-6">
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
                a: "Guru kami adalah orang Indonesia yang sudah 5+ tahun tinggal dan bekerja di Jepang. Bisa memberikan konteks budaya dan kehidupan nyata di Jepang.",
              },
              {
                q: "Bisa bayar pakai apa saja?",
                a: "Transfer bank, GoPay, OVO, DANA, ShopeePay, dan kartu kredit. Semua melalui payment gateway Midtrans.",
              },
              {
                q: "Apakah ada sertifikat?",
                a: "Ya, untuk paket Intensive. Kami juga membantu persiapan ujian JLPT resmi.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl p-4 group"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
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
            Bergabung dengan ratusan pelajar Indonesia yang sudah memulai
            perjalanan mereka ke Jepang.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Mulai Gratis Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[var(--color-dark)] text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🇯🇵</span>
              <span className="text-xl font-bold text-white">NihonGo!</span>
            </div>
            <p className="text-sm max-w-xs">
              Platform belajar bahasa Jepang modern untuk orang Indonesia.
              Langsung dari Jepang.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="text-white font-semibold mb-3">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white">
                    Fitur
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Harga
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Kontak</h4>
              <ul className="space-y-2">
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          &copy; 2026 NihonGo! All rights reserved.
        </div>
      </footer>
    </div>
  );
}
