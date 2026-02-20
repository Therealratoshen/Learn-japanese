import { cn } from "@/lib/utils/cn";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sprout,
  Flower2,
  TreePine,
  Mountain,
  ArrowRight,
} from "lucide-react";

const levels = [
  {
    level: "N5",
    title: "Pemula",
    japanese: "初級",
    icon: Sprout,
    duration: "3-4 bulan",
    description:
      "Kuasai Hiragana, Katakana, dan 100 Kanji dasar. Bisa memperkenalkan diri, bertanya arah, dan percakapan sederhana sehari-hari.",
    topics: [
      "Hiragana & Katakana",
      "100 Kanji dasar",
      "800 kosakata",
      "Tata bahasa dasar",
      "Percakapan sederhana",
    ],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    level: "N4",
    title: "Dasar Atas",
    japanese: "初中級",
    icon: Flower2,
    duration: "4-6 bulan",
    description:
      "Pahami percakapan sehari-hari dengan kecepatan alami. Bisa membaca teks sederhana dan menulis paragraf pendek.",
    topics: [
      "300 Kanji",
      "1.500 kosakata",
      "Tata bahasa menengah",
      "Membaca teks pendek",
      "Percakapan sehari-hari",
    ],
    color: "text-nihon-600",
    bgColor: "bg-nihon-50",
    borderColor: "border-nihon-200",
    badgeColor: "bg-nihon-100 text-nihon-700",
  },
  {
    level: "N3",
    title: "Menengah",
    japanese: "中級",
    icon: TreePine,
    duration: "6-8 bulan",
    description:
      "Mampu memahami teks dan percakapan dalam konteks pekerjaan dan akademik. Cukup untuk kehidupan dasar di Jepang.",
    topics: [
      "650 Kanji",
      "3.500 kosakata",
      "Tata bahasa lanjutan",
      "Membaca artikel",
      "Keigo (bahasa sopan) dasar",
    ],
    color: "text-sakura-600",
    bgColor: "bg-sakura-50",
    borderColor: "border-sakura-200",
    badgeColor: "bg-sakura-100 text-sakura-700",
  },
  {
    level: "N2",
    title: "Menengah Atas",
    japanese: "上中級",
    icon: Mountain,
    duration: "8-12 bulan",
    description:
      "Siap untuk bekerja atau kuliah di Jepang. Mampu memahami berita, artikel, dan percakapan bisnis dengan lancar.",
    topics: [
      "1.000 Kanji",
      "6.000 kosakata",
      "Tata bahasa tingkat lanjut",
      "Membaca berita & artikel",
      "Percakapan bisnis",
    ],
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    badgeColor: "bg-violet-100 text-violet-700",
  },
];

export function Levels() {
  return (
    <section id="level" className="bg-muted/30 py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jalur Belajar{" "}
            <span className="text-sakura-500">JLPT</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kurikulum terstruktur dari pemula hingga mahir, mengikuti standar
            Japanese Language Proficiency Test (JLPT). Capai level impianmu
            dengan langkah yang jelas.
          </p>
        </div>

        {/* Levels Progression */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {levels.map((level, index) => (
            <div key={level.level} className="relative">
              {/* Arrow connector (desktop only) */}
              {index < levels.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <ArrowRight className="h-6 w-6 text-muted-foreground/40" />
                </div>
              )}

              {/* Arrow connector (mobile - vertical) */}
              {index < levels.length - 1 && (
                <div className="flex justify-center py-2 md:hidden">
                  <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground/40" />
                </div>
              )}

              <Card
                className={cn(
                  "flex h-full flex-col transition-all duration-300 hover:shadow-lg",
                  `hover:${level.borderColor}`
                )}
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-lg",
                        level.bgColor
                      )}
                    >
                      <level.icon className={cn("h-6 w-6", level.color)} />
                    </div>
                    <span className="text-2xl font-bold text-muted-foreground/30">
                      {level.japanese}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl">
                      JLPT {level.level}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={cn("text-xs", level.badgeColor)}
                    >
                      {level.title}
                    </Badge>
                  </div>
                  <CardDescription className="mt-1 text-xs">
                    Estimasi waktu: {level.duration}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {level.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Yang akan kamu pelajari:
                    </p>
                    <ul className="space-y-1.5">
                      {level.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 shrink-0 rounded-full",
                              level.bgColor === "bg-emerald-50"
                                ? "bg-emerald-400"
                                : level.bgColor === "bg-nihon-50"
                                  ? "bg-nihon-400"
                                  : level.bgColor === "bg-sakura-50"
                                    ? "bg-sakura-400"
                                    : "bg-violet-400"
                            )}
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Estimasi waktu berdasarkan belajar konsisten 30-60 menit per hari.
            Kecepatan belajar setiap siswa berbeda-beda.
          </p>
        </div>
      </div>
    </section>
  );
}
