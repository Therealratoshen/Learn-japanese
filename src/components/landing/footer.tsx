import Link from "next/link";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "Fitur", href: "#fitur" },
      { label: "Harga", href: "#harga" },
      { label: "Level JLPT", href: "#level" },
      { label: "FAQ", href: "#faq" },
      { label: "Demo Gratis", href: "#demo" },
    ],
  },
  belajar: {
    title: "Belajar",
    links: [
      { label: "JLPT N5", href: "/belajar/n5" },
      { label: "JLPT N4", href: "/belajar/n4" },
      { label: "JLPT N3", href: "/belajar/n3" },
      { label: "JLPT N2", href: "/belajar/n2" },
      { label: "Latihan AI", href: "/latihan" },
    ],
  },
  karir: {
    title: "Karir ke Jepang",
    links: [
      { label: "Tokutei Ginou", href: "/karir/tokutei-ginou" },
      { label: "Beasiswa MEXT", href: "/karir/mext" },
      { label: "Tips Wawancara", href: "/blog/tips-wawancara" },
      { label: "Kehidupan di Jepang", href: "/blog/kehidupan-jepang" },
    ],
  },
  perusahaan: {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Blog", href: "/blog" },
      { label: "Karir", href: "/karir" },
      { label: "Kebijakan Privasi", href: "/privasi" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    ],
  },
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/nihongo.id",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@nihongo-id",
    label: "YouTube",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/6281234567890",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:support@nihongo.id",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-sakura-500">Nihon</span>
                <span className="text-nihon-600">Go!</span>
              </span>
              <span className="text-xs text-muted-foreground">日本語</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Platform belajar bahasa Jepang #1 untuk orang Indonesia. Gabungan
              AI canggih dan guru native Jepang untuk pengalaman belajar
              terbaik.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-sakura-100 hover:text-sakura-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-sakura-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NihonGo! Semua hak dilindungi
            undang-undang.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privasi"
              className="text-sm text-muted-foreground transition-colors hover:text-sakura-500"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="text-sm text-muted-foreground transition-colors hover:text-sakura-500"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-muted-foreground transition-colors hover:text-sakura-500"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
