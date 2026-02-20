"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, Globe, CreditCard, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pengaturan</h1>
        <p className="text-muted-foreground">
          Kelola profil dan preferensi akun Anda
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5" />
            Profil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
              👤
            </div>
            <Button variant="outline" size="sm">
              Ganti Foto
            </Button>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium">Nama Lengkap</label>
              <Input defaultValue="Andi Pratama" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-3 w-3" /> Email
              </label>
              <Input
                defaultValue="andi@email.com"
                type="email"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="h-3 w-3" /> Nomor HP
              </label>
              <Input
                defaultValue="+62 812 3456 7890"
                type="tel"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium flex items-center gap-2">
                <Globe className="h-3 w-3" /> Level Saat Ini
              </label>
              <div className="flex gap-2 mt-1">
                {["N5", "N4", "N3", "N2"].map((level) => (
                  <Button
                    key={level}
                    variant={level === "N5" ? "default" : "outline"}
                    size="sm"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Button>Simpan Perubahan</Button>
        </CardContent>
      </Card>

      {/* Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Langganan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Paket Premium</p>
                <Badge>Aktif</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Rp 199.000/bulan | Berlaku sampai 15 Maret 2025
              </p>
            </div>
            <Button variant="outline" size="sm">
              Kelola
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">
              Fitur paket Premium:
            </p>
            <ul className="space-y-1">
              <li>- Semua pelajaran N5-N2</li>
              <li>- AI chat unlimited</li>
              <li>- 2 sesi privat/bulan dengan guru</li>
              <li>- JLPT mock test</li>
              <li>- Sertifikat penyelesaian</li>
            </ul>
          </div>

          <Separator />

          <div>
            <p className="text-sm font-medium mb-2">Riwayat Pembayaran</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">15 Feb 2025</span>
                <span>Rp 199.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">15 Jan 2025</span>
                <span>Rp 199.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">15 Des 2024</span>
                <span>Rp 199.000</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifikasi
          </CardTitle>
          <CardDescription>
            Atur preferensi notifikasi Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              label: "Pengingat belajar harian",
              desc: "Notifikasi untuk menjaga streak",
            },
            {
              label: "Pengingat sesi live",
              desc: "30 menit sebelum sesi dimulai",
            },
            { label: "Tips mingguan", desc: "Tips belajar dari Sensei" },
            { label: "Promo & diskon", desc: "Info promo terbaru" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-muted rounded-full peer peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Danger zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-lg text-destructive">
            Zona Berbahaya
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Hapus Akun</p>
              <p className="text-xs text-muted-foreground">
                Semua data akan dihapus permanen
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Hapus Akun
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
