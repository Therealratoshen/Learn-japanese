import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Masuk - NihonGo!",
  description: "Masuk ke akun NihonGo! kamu dan lanjutkan belajar bahasa Jepang.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 px-4 flex items-center justify-center bg-gradient-to-b from-red-50 to-[var(--color-light)]">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Selamat Datang Kembali</h1>
              <p className="text-gray-500 text-sm">
                Masuk ke akun NihonGo! kamu
              </p>
            </div>

            <LoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
