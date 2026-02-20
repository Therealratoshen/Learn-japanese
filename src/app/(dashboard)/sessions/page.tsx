"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Video,
  User,
  Star,
  MessageCircle,
} from "lucide-react";

const upcomingSessions = [
  {
    id: "1",
    date: "Sabtu, 22 Feb 2025",
    time: "19:00 WIB",
    duration: "30 menit",
    type: "private" as const,
    topic: "Review Partikel は dan が",
    teacher: "Sensei Rato",
  },
];

const availableSlots = [
  { id: "1", date: "Senin, 24 Feb", time: "18:00 WIB", available: true },
  { id: "2", date: "Senin, 24 Feb", time: "19:00 WIB", available: true },
  { id: "3", date: "Rabu, 26 Feb", time: "18:00 WIB", available: true },
  { id: "4", date: "Rabu, 26 Feb", time: "19:00 WIB", available: false },
  { id: "5", date: "Sabtu, 1 Mar", time: "14:00 WIB", available: true },
  { id: "6", date: "Sabtu, 1 Mar", time: "15:00 WIB", available: true },
];

const pastSessions = [
  {
    id: "p1",
    date: "15 Feb 2025",
    topic: "Perkenalan Diri",
    rating: 5,
    notes:
      "Andi sudah bisa memperkenalkan diri dengan lancar. Perlu latihan lebih untuk intonasi.",
  },
  {
    id: "p2",
    date: "8 Feb 2025",
    topic: "Angka dan Hitungan",
    rating: 4,
    notes:
      "Angka 1-100 sudah dikuasai. Counter words masih perlu dilatih lebih.",
  },
];

export default function SessionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Sesi Live</h1>
        <p className="text-muted-foreground">
          Jadwalkan dan kelola sesi belajar dengan guru
        </p>
      </div>

      {/* Teacher info */}
      <Card className="bg-gradient-to-r from-primary/5 to-sakura-50">
        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
            👨‍🏫
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">Sensei Rato</h3>
            <p className="text-sm text-muted-foreground">
              5+ tahun tinggal dan bekerja di Jepang | Berpengalaman mengajar
              100+ siswa Indonesia
            </p>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-sm text-muted-foreground ml-1">
                4.9 (127 ulasan)
              </span>
            </div>
          </div>
          <Button variant="outline">
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Video className="h-5 w-5 text-primary" />
              Sesi Mendatang
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingSessions.length > 0 ? (
              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <Badge>
                        {session.type === "private" ? "Privat" : "Grup"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {session.duration}
                      </span>
                    </div>
                    <p className="font-medium">{session.topic}</p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {session.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {session.time}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1">
                        Gabung Sesi
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                Belum ada sesi terjadwal. Booking sekarang!
              </p>
            )}
          </CardContent>
        </Card>

        {/* Book a session */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Booking Sesi
            </CardTitle>
            <CardDescription>Pilih jadwal yang tersedia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {availableSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{slot.date}</p>
                      <p className="text-xs text-muted-foreground">
                        {slot.time}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={slot.available ? "default" : "ghost"}
                    disabled={!slot.available}
                  >
                    {slot.available ? "Booking" : "Penuh"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Past sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            Riwayat Sesi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pastSessions.map((session) => (
            <div key={session.id} className="p-4 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">{session.topic}</p>
                <span className="text-sm text-muted-foreground">
                  {session.date}
                </span>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < session.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{session.notes}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
