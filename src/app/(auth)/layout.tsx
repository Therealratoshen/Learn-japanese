import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 px-4 py-8">
      {/* Logo */}
      <Link href="/" className="mb-8 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-2xl font-bold text-white">N</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              NihonGo<span className="text-primary">!</span>
            </h1>
            <p className="text-xs text-muted-foreground">
              Belajar Bahasa Jepang
            </p>
          </div>
        </div>
      </Link>

      {/* Auth Card */}
      <div className="w-full max-w-md">{children}</div>

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} NihonGo! Semua hak dilindungi.
      </p>
    </div>
  );
}
