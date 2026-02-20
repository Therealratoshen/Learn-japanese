import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "Rp 0",
    period: "",
    description: "Mulai belajar tanpa biaya",
    features: [
      "3 pelajaran dasar",
      "AI chat 5x/hari",
      "Materi N5 terbatas",
      "Akses komunitas Discord",
    ],
    cta: "Daftar Gratis",
    popular: false,
    href: "/daftar",
  },
  {
    name: "Basic",
    price: "Rp 99.000",
    period: "/bln",
    description: "Untuk belajar mandiri yang serius",
    features: [
      "Semua pelajaran N5-N4",
      "AI chat unlimited",
      "1 sesi grup/bulan",
      "Latihan soal JLPT",
      "Progress tracking",
      "Akses komunitas penuh",
    ],
    cta: "Pilih Basic",
    popular: false,
    href: "/daftar?plan=basic",
  },
  {
    name: "Premium",
    price: "Rp 199.000",
    period: "/bln",
    description: "Belajar intensif dengan guru privat",
    features: [
      "Semua fitur Basic",
      "Materi N5-N2 lengkap",
      "2 sesi privat/bulan",
      "JLPT mock test bulanan",
      "Koreksi writing oleh guru",
      "Prioritas support",
    ],
    cta: "Pilih Premium",
    popular: true,
    href: "/daftar?plan=premium",
  },
  {
    name: "Intensif",
    price: "Rp 499.000",
    period: "/bln",
    description: "Persiapan kerja & beasiswa ke Jepang",
    features: [
      "Semua fitur Premium",
      "4 sesi privat/bulan",
      "Bimbingan karir ke Jepang",
      "Persiapan Tokutei Ginou",
      "Konsultasi beasiswa MEXT",
      "Sertifikat kelulusan",
      "Review CV bahasa Jepang",
    ],
    cta: "Pilih Intensif",
    popular: false,
    href: "/daftar?plan=intensif",
  },
];

export function Pricing() {
  return (
    <section id="harga" className="bg-muted/30 py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Harga Terjangkau untuk{" "}
            <span className="text-sakura-500">Semua Level</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih paket yang sesuai dengan kebutuhan dan budget kamu. Mulai
            gratis, upgrade kapan saja.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col transition-all duration-300 hover:shadow-lg",
                plan.popular &&
                  "border-2 border-sakura-400 shadow-lg shadow-sakura-100/50"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-sakura-500 px-3 py-1 text-white hover:bg-sakura-500">
                    Paling Populer
                  </Badge>
                </div>
              )}

              <CardHeader className={cn("pb-4", plan.popular && "pt-8")}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sakura-500" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-sakura-500 text-white shadow-md shadow-sakura-500/25 hover:bg-sakura-600"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  )}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Semua harga dalam Rupiah Indonesia. Pembayaran bisa melalui transfer
          bank, e-wallet (GoPay, OVO, DANA), atau kartu kredit.
        </p>
      </div>
    </section>
  );
}
