"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Lock,
  CheckCircle2,
  PlayCircle,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import type { JLPTLevel, LessonStatus } from "@/types";

interface MockLesson {
  id: string;
  level: JLPTLevel;
  moduleNumber: number;
  titleId: string;
  titleJp: string;
  status: LessonStatus;
  progress: number;
  isPremium: boolean;
  orderIndex: number;
}

const jlptLevels: JLPTLevel[] = ["N5", "N4", "N3", "N2"];

// Mock lessons data
const mockLessons: MockLesson[] = [
  // N5 Lessons
  {
    id: "n5-1",
    level: "N5",
    moduleNumber: 1,
    titleId: "Pengenalan Hiragana",
    titleJp: "ひらがな入門",
    status: "completed",
    progress: 100,
    isPremium: false,
    orderIndex: 1,
  },
  {
    id: "n5-2",
    level: "N5",
    moduleNumber: 1,
    titleId: "Pengenalan Katakana",
    titleJp: "カタカナ入門",
    status: "completed",
    progress: 100,
    isPremium: false,
    orderIndex: 2,
  },
  {
    id: "n5-3",
    level: "N5",
    moduleNumber: 1,
    titleId: "Salam dan Sapaan",
    titleJp: "あいさつ",
    status: "completed",
    progress: 100,
    isPremium: false,
    orderIndex: 3,
  },
  {
    id: "n5-4",
    level: "N5",
    moduleNumber: 2,
    titleId: "Perkenalan Diri",
    titleJp: "自己紹介",
    status: "in_progress",
    progress: 60,
    isPremium: false,
    orderIndex: 4,
  },
  {
    id: "n5-5",
    level: "N5",
    moduleNumber: 2,
    titleId: "Partikel は dan が",
    titleJp: "助詞「は」と「が」",
    status: "in_progress",
    progress: 35,
    isPremium: false,
    orderIndex: 5,
  },
  {
    id: "n5-6",
    level: "N5",
    moduleNumber: 3,
    titleId: "Kata Kerja Bentuk -masu",
    titleJp: "ます形",
    status: "not_started",
    progress: 0,
    isPremium: false,
    orderIndex: 6,
  },
  {
    id: "n5-7",
    level: "N5",
    moduleNumber: 3,
    titleId: "Angka dan Penghitung",
    titleJp: "数字と助数詞",
    status: "not_started",
    progress: 0,
    isPremium: false,
    orderIndex: 7,
  },
  {
    id: "n5-8",
    level: "N5",
    moduleNumber: 4,
    titleId: "Kata Sifat -i dan -na",
    titleJp: "い形容詞とな形容詞",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 8,
  },
  {
    id: "n5-9",
    level: "N5",
    moduleNumber: 4,
    titleId: "Waktu dan Tanggal",
    titleJp: "時間と日付",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 9,
  },
  // N4 Lessons
  {
    id: "n4-1",
    level: "N4",
    moduleNumber: 1,
    titleId: "Bentuk Te (て形)",
    titleJp: "て形の使い方",
    status: "not_started",
    progress: 0,
    isPremium: false,
    orderIndex: 1,
  },
  {
    id: "n4-2",
    level: "N4",
    moduleNumber: 1,
    titleId: "Bentuk Biasa (普通形)",
    titleJp: "普通形",
    status: "not_started",
    progress: 0,
    isPremium: false,
    orderIndex: 2,
  },
  {
    id: "n4-3",
    level: "N4",
    moduleNumber: 2,
    titleId: "Kalimat Kondisional",
    titleJp: "条件文（たら・ば・と・なら）",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 3,
  },
  {
    id: "n4-4",
    level: "N4",
    moduleNumber: 2,
    titleId: "Bentuk Pasif",
    titleJp: "受身形",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 4,
  },
  // N3 Lessons
  {
    id: "n3-1",
    level: "N3",
    moduleNumber: 1,
    titleId: "Keigo - Bahasa Hormat",
    titleJp: "敬語入門",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 1,
  },
  {
    id: "n3-2",
    level: "N3",
    moduleNumber: 1,
    titleId: "Kalimat Kompleks",
    titleJp: "複文の作り方",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 2,
  },
  // N2 Lessons
  {
    id: "n2-1",
    level: "N2",
    moduleNumber: 1,
    titleId: "Tata Bahasa Tingkat Lanjut",
    titleJp: "上級文法",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 1,
  },
  {
    id: "n2-2",
    level: "N2",
    moduleNumber: 1,
    titleId: "Membaca Artikel Berita",
    titleJp: "ニュース記事を読む",
    status: "not_started",
    progress: 0,
    isPremium: true,
    orderIndex: 2,
  },
];

function getStatusIcon(status: LessonStatus, isPremium: boolean) {
  if (isPremium) return Lock;
  switch (status) {
    case "completed":
      return CheckCircle2;
    case "in_progress":
      return PlayCircle;
    default:
      return BookOpen;
  }
}

function getStatusColor(status: LessonStatus, isPremium: boolean) {
  if (isPremium) return "text-muted-foreground";
  switch (status) {
    case "completed":
      return "text-green-500";
    case "in_progress":
      return "text-primary";
    default:
      return "text-muted-foreground";
  }
}

function getStatusLabel(status: LessonStatus, isPremium: boolean) {
  if (isPremium) return "Premium";
  switch (status) {
    case "completed":
      return "Selesai";
    case "in_progress":
      return "Sedang Dipelajari";
    default:
      return "Belum Dimulai";
  }
}

export default function LessonsPage() {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLessons = mockLessons.filter((lesson) => {
    const matchesLevel =
      selectedLevel === "all" || lesson.level === selectedLevel;
    const matchesSearch =
      searchQuery === "" ||
      lesson.titleId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.titleJp.includes(searchQuery);
    return matchesLevel && matchesSearch;
  });

  const lessonsByLevel = jlptLevels.reduce(
    (acc, level) => {
      acc[level] = filteredLessons.filter((l) => l.level === level);
      return acc;
    },
    {} as Record<JLPTLevel, MockLesson[]>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Pelajaran</h1>
        <p className="text-muted-foreground">
          Pilih pelajaran sesuai level JLPT Anda dan mulai belajar.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cari pelajaran..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Level filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground shrink-0">
            Level:
          </span>
          <div className="flex gap-1">
            <Button
              variant={selectedLevel === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel("all")}
            >
              Semua
            </Button>
            {jlptLevels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      {selectedLevel === "all" ? (
        // Show grouped by level
        <div className="space-y-8">
          {jlptLevels.map((level) => {
            const lessons = lessonsByLevel[level];
            if (lessons.length === 0) return null;

            return (
              <div key={level} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold">JLPT {level}</h2>
                  <Badge variant="secondary">
                    {lessons.length} pelajaran
                  </Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {lessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Show flat grid for selected level
        <div className="space-y-4">
          {filteredLessons.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-medium">
                  Tidak ada pelajaran ditemukan
                </p>
                <p className="text-sm text-muted-foreground">
                  Coba ubah filter atau kata kunci pencarian Anda.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LessonCard({ lesson }: { lesson: MockLesson }) {
  const StatusIcon = getStatusIcon(lesson.status, lesson.isPremium);
  const statusColor = getStatusColor(lesson.status, lesson.isPremium);
  const statusLabel = getStatusLabel(lesson.status, lesson.isPremium);

  return (
    <Link href={`/lessons/${lesson.id}`}>
      <Card
        className={cn(
          "group h-full transition-all hover:shadow-md",
          lesson.isPremium && "opacity-75",
          lesson.status === "in_progress" && "border-primary/50"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <Badge variant="secondary" className="text-xs">
              {lesson.level} - Modul {lesson.moduleNumber}
            </Badge>
            <div className={cn("flex items-center gap-1", statusColor)}>
              <StatusIcon className="h-4 w-4" />
              {lesson.isPremium && (
                <span className="text-xs font-medium">Premium</span>
              )}
            </div>
          </div>
          <CardTitle className="text-base group-hover:text-primary transition-colors">
            {lesson.titleId}
          </CardTitle>
          <CardDescription className="text-sm">
            {lesson.titleJp}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{statusLabel}</span>
              <span className="font-medium">{lesson.progress}%</span>
            </div>
            <Progress value={lesson.progress} className="h-1.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
