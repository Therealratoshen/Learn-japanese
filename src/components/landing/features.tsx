import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Bot,
  Video,
  BookOpen,
  Languages,
  Briefcase,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Latihan Percakapan AI",
    description:
      "Praktik berbicara bahasa Jepang kapan saja, 24/7. AI kami memahami konteks dan memberikan koreksi secara real-time dengan penjelasan dalam Bahasa Indonesia.",
    color: "text-nihon-500",
    bgColor: "bg-nihon-50",
  },
  {
    icon: Video,
    title: "Sesi Live dengan Guru Jepang",
    description:
      "Belajar langsung dari guru native Jepang melalui video call. Dapatkan feedback personal dan pelajari budaya Jepang secara autentik.",
    color: "text-sakura-500",
    bgColor: "bg-sakura-50",
  },
  {
    icon: BookOpen,
    title: "Kurikulum JLPT N5-N2",
    description:
      "Materi terstruktur mengikuti standar JLPT dari level pemula (N5) hingga menengah atas (N2). Lengkap dengan latihan soal dan mock test.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Languages,
    title: "Penjelasan Bahasa Indonesia",
    description:
      "Semua materi dijelaskan dalam Bahasa Indonesia sehingga lebih mudah dipahami. Termasuk perbandingan tata bahasa Jepang-Indonesia.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Briefcase,
    title: "Jalur Karir ke Jepang",
    description:
      "Bimbingan untuk program Tokutei Ginou (pekerja terampil), beasiswa MEXT, dan peluang karir lainnya di Jepang.",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: MessageCircle,
    title: "Komunitas Support",
    description:
      "Bergabung dengan komunitas learner Indonesia di WhatsApp dan Discord. Saling bantu, berbagi tips, dan praktik bersama.",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
];

export function Features() {
  return (
    <section id="fitur" className="py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kenapa Pilih{" "}
            <span className="text-sakura-500">NihonGo!</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Platform belajar bahasa Jepang yang dirancang khusus untuk pelajar
            Indonesia dengan metode hybrid AI + guru native.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-transparent bg-card transition-all duration-300 hover:border-sakura-200 hover:shadow-lg hover:shadow-sakura-100/50"
            >
              <CardHeader>
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
