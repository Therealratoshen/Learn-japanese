"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, User } from "lucide-react";

const mockSessions = [
  {
    id: "1",
    studentName: "Siti Nurhaliza",
    date: "2024-02-20",
    time: "19:00",
    duration: 30,
    type: "private",
    status: "scheduled" as const,
  },
  {
    id: "2",
    studentName: "Grup Kelas N5",
    date: "2024-02-20",
    time: "20:00",
    duration: 60,
    type: "group",
    status: "scheduled" as const,
  },
  {
    id: "3",
    studentName: "Dewi Lestari",
    date: "2024-02-21",
    time: "18:00",
    duration: 30,
    type: "private",
    status: "scheduled" as const,
  },
  {
    id: "4",
    studentName: "Andi Pratama",
    date: "2024-02-19",
    time: "19:00",
    duration: 30,
    type: "private",
    status: "completed" as const,
  },
  {
    id: "5",
    studentName: "Grup Kelas N4",
    date: "2024-02-18",
    time: "20:00",
    duration: 60,
    type: "group",
    status: "completed" as const,
  },
];

export default function SchedulePage() {
  const upcoming = mockSessions.filter((s) => s.status === "scheduled");
  const past = mockSessions.filter((s) => s.status === "completed");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Jadwal Sesi</h1>
          <p className="text-muted-foreground">
            Kelola jadwal sesi live dengan siswa
          </p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          Buat Sesi Baru
        </Button>
      </div>

      {/* Upcoming sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Sesi Mendatang
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcoming.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 rounded-lg border"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{session.studentName}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {session.time} WIB ({session.duration} menit)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    session.type === "private" ? "default" : "secondary"
                  }
                >
                  {session.type === "private" ? "Privat" : "Grup"}
                </Badge>
                <Button size="sm">Mulai</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Past sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            Riwayat Sesi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {past.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 rounded-lg border opacity-75"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Video className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">{session.studentName}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span>
                      {session.date} {session.time}
                    </span>
                    <span>{session.duration} menit</span>
                  </div>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                Selesai
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
