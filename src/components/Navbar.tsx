"use client";

import { useState } from "react";
import Link from "next/link";

const basePath = "/Learn-japanese";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">&#127471;&#127477;</span>
          <span className="text-xl font-bold text-[var(--color-primary)]">
            NihonGo!
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#features" className="hover:text-[var(--color-primary)] transition">
            Fitur
          </Link>
          <Link href="/courses" className="hover:text-[var(--color-primary)] transition">
            Kursus
          </Link>
          <Link href="/#pricing" className="hover:text-[var(--color-primary)] transition">
            Harga
          </Link>
          <Link href="/about" className="hover:text-[var(--color-primary)] transition">
            Tentang
          </Link>
          <Link href="/contact" className="hover:text-[var(--color-primary)] transition">
            Kontak
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)] transition"
          >
            Daftar Gratis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link
            href="/#features"
            className="block py-2 text-gray-700 hover:text-[var(--color-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Fitur
          </Link>
          <Link
            href="/courses"
            className="block py-2 text-gray-700 hover:text-[var(--color-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Kursus
          </Link>
          <Link
            href="/#pricing"
            className="block py-2 text-gray-700 hover:text-[var(--color-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Harga
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-[var(--color-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-700 hover:text-[var(--color-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            Kontak
          </Link>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/login"
              className="text-center py-2 text-gray-700 font-medium hover:text-[var(--color-primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="text-center bg-[var(--color-primary)] text-white py-2 rounded-lg font-medium hover:bg-[var(--color-primary-dark)]"
              onClick={() => setMenuOpen(false)}
            >
              Daftar Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
