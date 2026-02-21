import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hubungi Kami
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Punya pertanyaan atau ingin tahu lebih lanjut? Jangan ragu untuk
              menghubungi kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-6">Kirim Pesan</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Info Kontak</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0 text-xl">
                      &#128241;
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">WhatsApp</h3>
                      <p className="text-gray-600 text-sm">
                        Chat langsung dengan tim kami
                      </p>
                      <p className="text-gray-400 text-sm mt-1 italic">
                        Segera tersedia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-xl">
                      &#9993;
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Email</h3>
                      <p className="text-gray-600 text-sm">
                        Kirim email kapan saja
                      </p>
                      <p className="text-gray-400 text-sm mt-1 italic">
                        Segera tersedia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center shrink-0 text-xl">
                      &#128247;
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Instagram</h3>
                      <p className="text-gray-600 text-sm">
                        Follow untuk tips harian
                      </p>
                      <p className="text-gray-400 text-sm mt-1 italic">
                        Segera tersedia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-4">FAQ Cepat</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm">
                      Berapa lama respon?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      WhatsApp: dalam jam kerja. Email: maksimal 24 jam.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      Bisa konsultasi gratis?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Ya! Hubungi kami via WhatsApp untuk konsultasi level dan
                      paket yang cocok.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      Mau kerjasama/kolaborasi?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Gunakan form kontak di halaman ini dengan detail proposal kamu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
