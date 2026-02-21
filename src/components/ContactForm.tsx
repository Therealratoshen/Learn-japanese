"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nama
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nama lengkap kamu"
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
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Subjek
        </label>
        <select
          id="subject"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition bg-white"
        >
          <option value="">Pilih subjek</option>
          <option value="general">Pertanyaan Umum</option>
          <option value="pricing">Harga &amp; Paket</option>
          <option value="technical">Bantuan Teknis</option>
          <option value="partnership">Kerjasama</option>
          <option value="feedback">Saran &amp; Masukan</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Pesan
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tulis pesan kamu di sini..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition"
      >
        Kirim Pesan
      </button>
    </form>
  );
}
