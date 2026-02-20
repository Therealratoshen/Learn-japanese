"use client";

import Link from "next/link";
import {
  Flame,
  Star,
  GraduationCap,
  BookCheck,
  ArrowRight,
  Clock,
  Video,
  CheckCircle2,
  BookOpen,
  Trophy,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

// Mock data
const mockUser = {
  name: "Ahmad",
  streakCount: 12,
  totalXp: 2450,
  currentLevel: "N5",
  lessonsCompleted: 24,
};

const nextLesson = {
  id: "n5-mod3-lesson2",
  titleId: "Kata Kerja Bentuk -masu",
  titleJp: "ます形 (ますけい)",
  level: "N5",
  moduleNumber: 3,
  progress: 35,
};

const recentActivity = [
  {
    id: 1,
    type: "lesson" as const,
    title: "Partikel は dan が",
    description: "Pelajaran selesai dengan nilai 90%",
    time: "2 jam lalu",
    icon: BookOpen,
  },
  {
    id: 2,
    type: "quiz" as const,
    title: "Kuis Hiragana Dasar",
    description: "Skor: 18/20 (90%)",
    time: "5 jam lalu",
    icon: Trophy,
  },
  {
    id: 3,
    type: "practice" as const,
    title: "Latihan AI: Perkenalan Diri",
    description: "Sesi latihan 15 menit",
    time: "Kemarin",
    icon: MessageSquare,
  },
  {
    id: 4,
    type: "lesson" as const,
    title: "Angka dan Penghitung",
    description: "Pelajaran selesai dengan nilai 85%",
    time: "Kemarin",
    icon: BookOpen,
  },
  {
    id: 5,
    type: "quiz" as const,
    title: "Kuis Katakana",
    description: "Skor: 16/20 (80%)",
    time: "2 hari lalu",
    icon: Trophy,
  },
];

const upcomingSession = {
  id: "session-1",
  teacherName: "Tanaka Sensei",
  scheduledAt: "Sabtu, 22 Feb 2026 - 19:00 WIB",
  topic: "Percakapan Sehari-hari (日常会話)",
  durationMinutes: 45,
};

const statsCards = [
  {
    title: "Streak",
    value: `${mockUser.streakCount} hari`,
    icon: Flame,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
    description: "Terus belajar setiap hari!",
  },
  {
    title: "Total XP",
    value: mockUser.totalXp.toLocaleString("id-ID"),
    icon: Star,
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
    description: "Poin pengalaman Anda",
  },
  {
    title: "Level saat ini",
    value: mockUser.currentLevel,
    icon: GraduationCap,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "JLPT Level",
  },
  {
    title: "Pelajaran selesai",
    value: mockUser.lessonsCompleted.toString(),
    icon: BookCheck,
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
    description: "Dari 120 pelajaran",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Selamat datang kembali, {mockUser.name}! 👋
        </h1>
        <p className="text-muted-foreground">
          Lanjutkan perjalanan belajar bahasa Jepang Anda hari ini.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${stat.bgColor}`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column - Continue Learning + Recent Activity */}
        <div className="space-y-6 lg:col-span-2">
          {/* Continue Learning Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-primary" />
                Lanjutkan Belajar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{nextLesson.level}</Badge>
                    <span className="text-xs text-muted-foreground">
                      Modul {nextLesson.moduleNumber}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">
                    {nextLesson.titleId}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {nextLesson.titleJp}
                  </p>
                  <div className="flex items-center gap-3">
                    <Progress value={nextLesson.progress} className="h-2 flex-1" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {nextLesson.progress}%
                    </span>
                  </div>
                </div>
                <Button asChild className="shrink-0">
                  <Link href={`/lessons/${nextLesson.id}`}>
                    Lanjutkan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Aktivitas Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {recentActivity.map((activity, index) => (
                  <div key={activity.id}>
                    <div className="flex items-start gap-3 py-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                    {index < recentActivity.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Upcoming Session */}
        <div className="space-y-6">
          {/* Upcoming Live Session */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Video className="h-5 w-5 text-primary" />
                Sesi Live Mendatang
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge>Terjadwal</Badge>
                </div>
                <h3 className="font-semibold">{upcomingSession.topic}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>{upcomingSession.teacherName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{upcomingSession.scheduledAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <span>{upcomingSession.durationMinutes} menit</span>
                  </div>
                </div>
              </div>

              <Separator />

              <Button variant="outline" asChild className="w-full">
                <Link href={`/sessions/${upcomingSession.id}`}>
                  Lihat Detail Sesi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Aksi Cepat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" asChild className="w-full justify-start gap-2">
                <Link href="/practice">
                  <MessageSquare className="h-4 w-4" />
                  Mulai Latihan AI
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full justify-start gap-2">
                <Link href="/quizzes">
                  <CheckCircle2 className="h-4 w-4" />
                  Kerjakan Kuis
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full justify-start gap-2">
                <Link href="/lessons">
                  <BookOpen className="h-4 w-4" />
                  Jelajahi Pelajaran
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
