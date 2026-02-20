"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah saya perlu pengalaman belajar bahasa Jepang sebelumnya?",
    answer:
      "Tidak perlu sama sekali! NihonGo! dirancang untuk semua level, termasuk pemula total. Kurikulum kami dimulai dari dasar-dasar seperti Hiragana dan Katakana, dengan penjelasan lengkap dalam Bahasa Indonesia. Kamu bisa langsung mulai dari level N5 tanpa pengetahuan sebelumnya.",
  },
  {
    question: "Bagaimana sistem belajar hybrid AI + guru bekerja?",
    answer:
      "Kamu bisa berlatih percakapan bahasa Jepang kapan saja dengan AI kami yang tersedia 24/7. AI kami memberikan koreksi real-time dan penjelasan dalam Bahasa Indonesia. Selain itu, kamu juga mendapatkan sesi live dengan guru native Jepang untuk feedback personal, latihan percakapan autentik, dan pemahaman budaya yang lebih dalam.",
  },
  {
    question: "Apakah guru benar-benar dari Jepang?",
    answer:
      "Ya! Semua guru kami adalah native speaker dari Jepang yang berpengalaman mengajar bahasa Jepang kepada pelajar Indonesia. Mereka memahami kesulitan umum yang dihadapi pelajar Indonesia dan bisa memberikan penjelasan yang relevan dengan konteks budaya Indonesia.",
  },
  {
    question: "Bagaimana cara pembayaran dan apakah bisa refund?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, BNI, Mandiri, BRI), e-wallet (GoPay, OVO, DANA, ShopeePay), dan kartu kredit/debit. Untuk paket bulanan, kamu bisa membatalkan kapan saja. Kami juga menyediakan garansi uang kembali 7 hari jika kamu merasa platform kami tidak sesuai harapan.",
  },
  {
    question: "Apa itu program Tokutei Ginou dan MEXT?",
    answer:
      "Tokutei Ginou (Specified Skilled Worker) adalah visa kerja Jepang untuk tenaga kerja terampil di bidang tertentu seperti perawatan, manufaktur, dan food service. MEXT adalah program beasiswa dari pemerintah Jepang untuk melanjutkan studi di Jepang. Paket Intensif kami mencakup bimbingan persiapan untuk kedua program ini, termasuk latihan bahasa dan konsultasi proses pendaftaran.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk lulus JLPT N5?",
    answer:
      "Dengan belajar konsisten 30-60 menit per hari menggunakan NihonGo!, kebanyakan siswa kami berhasil mencapai level N5 dalam 3-4 bulan. Namun, kecepatan belajar setiap orang berbeda. Platform kami menyesuaikan materi dengan kemampuan kamu sehingga kamu bisa belajar sesuai ritme sendiri tanpa tekanan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pertanyaan yang Sering{" "}
            <span className="text-sakura-500">Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang platform NihonGo! dan
            cara belajar bahasa Jepang bersama kami.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg border bg-card transition-all duration-200",
                openIndex === index
                  ? "border-sakura-200 shadow-md shadow-sakura-100/30"
                  : "hover:border-sakura-100"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-foreground md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === index && "rotate-180 text-sakura-500"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Masih punya pertanyaan lain?{" "}
            <a
              href="mailto:support@nihongo.id"
              className="font-medium text-sakura-500 underline-offset-4 hover:underline"
            >
              Hubungi kami
            </a>{" "}
            atau kirim pesan di{" "}
            <a
              href="#"
              className="font-medium text-sakura-500 underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
