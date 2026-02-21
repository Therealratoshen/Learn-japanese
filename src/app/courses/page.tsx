import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kursus - NihonGo!",
  description:
    "Jelajahi kursus bahasa Jepang kami dari level N5 pemula hingga N2 mahir. Kurikulum terstruktur berdasarkan standar JLPT.",
};

const courses = [
  {
    level: "N5",
    label: "Pemula",
    tagColor: "bg-green-100 text-green-800",
    borderColor: "border-green-200",
    description:
      "Mulai dari nol! Pelajari Hiragana, Katakana, dan dasar-dasar bahasa Jepang untuk percakapan sederhana.",
    duration: "3 bulan",
    lessons: 15,
    modules: [
      "Hiragana & Katakana lengkap",
      "100 Kanji dasar",
      "Angka, waktu, dan tanggal",
      "Perkenalan diri (Jikoshoukai)",
      "Percakapan sehari-hari dasar",
      "Grammar dasar (desu, masu, particles)",
      "Kosakata 800 kata",
      "Latihan listening dasar",
    ],
    outcomes: [
      "Bisa membaca Hiragana & Katakana",
      "Memperkenalkan diri dalam bahasa Jepang",
      "Percakapan sederhana di toko, restoran",
      "Siap ujian JLPT N5",
    ],
  },
  {
    level: "N4",
    label: "Dasar",
    tagColor: "bg-blue-100 text-blue-800",
    borderColor: "border-blue-200",
    description:
      "Perkuat fondasi bahasa Jepangmu. Pelajari grammar yang lebih kompleks dan perluas kosakata untuk percakapan sehari-hari.",
    duration: "3 bulan",
    lessons: 15,
    modules: [
      "300 Kanji (kumulatif)",
      "Grammar te-form, ta-form, nai-form",
      "Kalimat majemuk & conditional",
      "Percakapan sehari-hari lanjut",
      "Membaca teks pendek",
      "Keigo dasar (bahasa sopan)",
      "Kosakata 1500 kata",
      "Listening percakapan natural",
    ],
    outcomes: [
      "Percakapan sehari-hari yang lancar",
      "Membaca teks sederhana tanpa furigana",
      "Menulis pesan & email sederhana",
      "Siap ujian JLPT N4",
    ],
  },
  {
    level: "N3",
    label: "Menengah",
    tagColor: "bg-purple-100 text-purple-800",
    borderColor: "border-purple-200",
    description:
      "Level peralihan menuju kemahiran. Pahami artikel, berita, dan percakapan yang lebih kompleks dalam bahasa Jepang.",
    duration: "4 bulan",
    lessons: 12,
    modules: [
      "650 Kanji (kumulatif)",
      "Grammar menengah (causative, passive, potential)",
      "Membaca artikel & berita",
      "Menulis paragraf & essay pendek",
      "Listening berita & presentasi",
      "Keigo menengah (sonkeigo, kenjougo)",
      "Kosakata 3000 kata",
      "Budaya & etika bisnis Jepang",
    ],
    outcomes: [
      "Membaca artikel berita sederhana",
      "Presentasi singkat dalam bahasa Jepang",
      "Percakapan tentang topik yang lebih luas",
      "Siap ujian JLPT N3",
    ],
  },
  {
    level: "N2",
    label: "Mahir",
    tagColor: "bg-red-100 text-red-800",
    borderColor: "border-red-200",
    description:
      "Level profesional. Kuasai bahasa Jepang untuk dunia kerja, wawancara, dan kehidupan profesional di Jepang.",
    duration: "4 bulan",
    lessons: 10,
    modules: [
      "1000+ Kanji (kumulatif)",
      "Grammar lanjut (formal writing, nuance)",
      "Business Japanese (bijinesu nihongo)",
      "Wawancara kerja & CV dalam bahasa Jepang",
      "Membaca dokumen resmi",
      "Listening meeting & diskusi",
      "Kosakata 6000 kata",
      "Persiapan visa Tokutei Ginou & MEXT",
    ],
    outcomes: [
      "Bekerja menggunakan bahasa Jepang",
      "Wawancara kerja di perusahaan Jepang",
      "Membaca dokumen & kontrak",
      "Siap ujian JLPT N2",
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kursus{" "}
            <span className="text-[var(--color-primary)]">Bahasa Jepang</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kurikulum terstruktur dari N5 sampai N2, disesuaikan dengan standar
            JLPT dan kebutuhan orang Indonesia.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {courses.map((course, i) => (
              <a
                key={i}
                href={`#${course.level.toLowerCase()}`}
                className="rounded-xl border border-gray-200 p-4 hover:border-[var(--color-primary)] hover:shadow-md transition-all"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 ${course.tagColor}`}
                >
                  JLPT {course.level}
                </div>
                <div className="font-semibold">{course.label}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {course.duration} &middot; {course.lessons} pelajaran
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {courses.map((course, i) => (
            <div
              key={i}
              id={course.level.toLowerCase()}
              className="scroll-mt-24"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                {/* Course Header */}
                <div className={`p-6 md:p-8 border-b ${course.borderColor}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${course.tagColor}`}
                      >
                        JLPT {course.level} - {course.label}
                      </div>
                      <h2 className="text-2xl font-bold mb-2">
                        Kursus JLPT {course.level}
                      </h2>
                      <p className="text-gray-600">{course.description}</p>
                    </div>
                    <div className="flex gap-4 text-center shrink-0">
                      <div className="bg-[var(--color-light)] rounded-xl p-3">
                        <div className="text-xl font-bold text-[var(--color-primary)]">
                          {course.duration}
                        </div>
                        <div className="text-xs text-gray-500">Durasi</div>
                      </div>
                      <div className="bg-[var(--color-light)] rounded-xl p-3">
                        <div className="text-xl font-bold text-[var(--color-primary)]">
                          {course.lessons}
                        </div>
                        <div className="text-xs text-gray-500">Pelajaran</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">
                      Materi yang Dipelajari
                    </h3>
                    <ul className="space-y-2">
                      {course.modules.map((mod, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-[var(--color-primary)] mt-0.5 shrink-0">
                            &#9679;
                          </span>
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">
                      Setelah Menyelesaikan
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {course.outcomes.map((outcome, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-green-500 mt-0.5 shrink-0">
                            &#10003;
                          </span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/register"
                      className="inline-block bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition text-sm"
                    >
                      Mulai Kursus {course.level}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Jalur Belajar</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Ikuti jalur belajar yang terstruktur dari pemula hingga mahir
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {courses.map((course, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`px-4 py-2 rounded-xl font-bold text-sm ${course.tagColor}`}
                >
                  {course.level} - {course.label}
                  <div className="text-xs font-normal opacity-75 mt-0.5">
                    {course.duration}
                  </div>
                </div>
                {i < courses.length - 1 && (
                  <span className="text-gray-300 text-2xl hidden md:block">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8">
            Total: ~14 bulan dari pemula total sampai level profesional (JLPT
            N2)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[var(--color-primary)] to-red-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Siap Mulai Belajar?</h2>
          <p className="text-red-100 text-lg mb-8">
            Daftar gratis dan coba 3 pelajaran pertama tanpa biaya.
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
