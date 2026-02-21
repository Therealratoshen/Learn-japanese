import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[var(--color-dark)] text-gray-400">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">&#127471;&#127477;</span>
            <span className="text-xl font-bold text-white">NihonGo!</span>
          </div>
          <p className="text-sm max-w-xs">
            Platform belajar bahasa Jepang modern untuk orang Indonesia.
            Langsung dari Jepang.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#features" className="hover:text-white transition">
                Fitur
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white transition">
                Kursus
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-white transition">
                Harga
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Perusahaan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Kontak
              </Link>
            </li>
            <li>
              <span className="cursor-default">Kebijakan Privasi</span>
            </li>
            <li>
              <span className="cursor-default">Syarat & Ketentuan</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span>&#9993;</span>
              <span>hello@nihongo.id</span>
            </li>
            <li className="flex items-center gap-2">
              <span>&#128241;</span>
              <span>WhatsApp</span>
            </li>
            <li className="flex items-center gap-2">
              <span>&#128247;</span>
              <span>@nihongo.id</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; 2026 NihonGo! All rights reserved.
      </div>
    </footer>
  );
}
