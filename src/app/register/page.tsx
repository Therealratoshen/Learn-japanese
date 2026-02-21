import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Daftar - NihonGo!",
  description:
    "Buat akun NihonGo! gratis dan mulai belajar bahasa Jepang hari ini.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 px-4 flex items-center justify-center bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Buat Akun Gratis</h1>
              <p className="text-gray-500 text-sm">
                Mulai belajar bahasa Jepang dalam 2 menit
              </p>
            </div>

            <RegisterForm />
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <span>&#128274; Data aman &amp; terenkripsi</span>
            <span>&#10003; Gratis trial 7 hari</span>
            <span>&#10003; Bisa berhenti kapan saja</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
