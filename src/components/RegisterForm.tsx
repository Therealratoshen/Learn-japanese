"use client";

import Link from "next/link";

export default function RegisterForm() {
  return (
    <>
      {/* Google Register */}
      <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 px-4 font-medium text-gray-700 hover:bg-gray-50 transition mb-6">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Daftar dengan Google
      </button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-400">atau</span>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            placeholder="Masukkan nama lengkap"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="nama@email.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nomor WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="08xxxxxxxxxx"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Minimal 8 karakter"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
          />
        </div>
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Level Saat Ini
          </label>
          <select
            id="level"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition bg-white"
          >
            <option value="">Pilih level kamu</option>
            <option value="beginner">Pemula Total (belum tahu apa-apa)</option>
            <option value="n5">JLPT N5 (tahu Hiragana/Katakana)</option>
            <option value="n4">JLPT N4 (grammar dasar)</option>
            <option value="n3">JLPT N3 (menengah)</option>
            <option value="n2">JLPT N2 (lanjut)</option>
          </select>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 rounded border-gray-300"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            Saya setuju dengan{" "}
            <a href="#" className="text-[var(--color-primary)] hover:underline">
              Syarat &amp; Ketentuan
            </a>{" "}
            dan{" "}
            <a href="#" className="text-[var(--color-primary)] hover:underline">
              Kebijakan Privasi
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition"
        >
          Daftar Gratis
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Sudah punya akun?{" "}
        <Link
          href="/login"
          className="text-[var(--color-primary)] font-medium hover:underline"
        >
          Masuk
        </Link>
      </p>
    </>
  );
}
