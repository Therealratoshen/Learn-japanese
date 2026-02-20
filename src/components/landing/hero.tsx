import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, GraduationCap, Play } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Siswa",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Rating",
  },
  {
    icon: GraduationCap,
    value: "100%",
    label: "Guru dari Jepang",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sakura-50 via-background to-background py-20 md:py-32">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Torii Gate */}
        <div className="absolute -right-8 top-10 text-[8rem] leading-none text-sakura-100 opacity-60 md:right-10 md:text-[12rem]">
          ⛩
        </div>
        {/* Sakura petals */}
        <div className="absolute left-4 top-20 animate-float text-4xl text-sakura-200 opacity-50 md:left-20 md:text-5xl">
          🌸
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float text-3xl text-sakura-200 opacity-40 [animation-delay:1s]">
          🌸
        </div>
        <div className="absolute right-1/4 top-1/3 animate-float text-2xl text-sakura-200 opacity-30 [animation-delay:2s]">
          🌸
        </div>
        {/* Japanese character accents */}
        <div className="absolute bottom-10 right-20 text-6xl font-bold text-nihon-100 opacity-40">
          学
        </div>
        <div className="absolute left-10 top-1/2 text-5xl font-bold text-sakura-100 opacity-30">
          語
        </div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 border-sakura-200 bg-sakura-50 px-4 py-1.5 text-sakura-700"
          >
            Platform #1 Belajar Bahasa Jepang untuk Orang Indonesia
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Belajar Bahasa Jepang dengan{" "}
            <span className="bg-gradient-to-r from-sakura-500 to-nihon-500 bg-clip-text text-transparent">
              Guru dari Jepang + AI
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Gabungan teknologi AI untuk latihan percakapan kapan saja dan sesi
            langsung bersama guru native Jepang. Penjelasan dalam Bahasa
            Indonesia, kurikulum sesuai JLPT, dan jalur karir ke Jepang.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="xl"
              className="w-full bg-sakura-500 text-white shadow-lg shadow-sakura-500/25 hover:bg-sakura-600 sm:w-auto"
              asChild
            >
              <Link href="/daftar">Mulai Belajar Gratis</Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="w-full border-nihon-200 text-nihon-600 hover:bg-nihon-50 sm:w-auto"
              asChild
            >
              <Link href="#demo" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Lihat Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sakura-100 text-sakura-600">
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
