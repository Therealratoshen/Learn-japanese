"use client";

import {
  TrendingUp,
  Flame,
  Star,
  Trophy,
  Calendar,
  BarChart3,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

// Mock progress data per level
const levelProgress = [
  {
    level: "N5",
    label: "JLPT N5 - Pemula",
    completed: 24,
    total: 40,
    xpEarned: 1800,
  },
  {
    level: "N4",
    label: "JLPT N4 - Dasar",
    completed: 0,
    total: 35,
    xpEarned: 0,
  },
  {
    level: "N3",
    label: "JLPT N3 - Menengah",
    completed: 0,
    total: 30,
    xpEarned: 0,
  },
  {
    level: "N2",
    label: "JLPT N2 - Lanjutan",
    completed: 0,
    total: 25,
    xpEarned: 0,
  },
];

// Mock streak calendar data (Feb 2026)
// 1 = active, 0 = missed, -1 = future
const streakCalendar = {
  month: "Februari 2026",
  days: [
    // Week labels: Sen, Sel, Rab, Kam, Jum, Sab, Min
    // Feb 2026 starts on Sunday
    -1, -1, -1, -1, -1, -1, 1, // Row 1 (1st is Sunday)
    1, 1, 1, 0, 1, 1, 1, // Row 2 (2-8)
    1, 1, 1, 1, 1, 0, 1, // Row 3 (9-15)
    1, 1, 1, 1, 1, -1, -1, // Row 4 (16-20, rest is future)
    -1, -1, -1, -1, -1, -1, -1, // Row 5
  ],
  dayLabels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
};

// Mock XP chart data (weekly)
const weeklyXpData = [
  { week: "Minggu 1", xp: 320 },
  { week: "Minggu 2", xp: 480 },
  { week: "Minggu 3", xp: 390 },
  { week: "Minggu 4", xp: 550 },
  { week: "Minggu 5", xp: 420 },
  { week: "Minggu 6", xp: 610 },
  { week: "Minggu 7", xp: 480 },
  { week: "Minggu 8", xp: 520 },
];

const maxXp = Math.max(...weeklyXpData.map((d) => d.xp));

// Mock quiz scores
const quizScores = [
  {
    id: 1,
    title: "Kuis Hiragana Dasar",
    type: "vocab",
    score: 90,
    totalQuestions: 20,
    correctAnswers: 18,
    date: "18 Feb 2026",
  },
  {
    id: 2,
    title: "Kuis Katakana",
    type: "vocab",
    score: 80,
    totalQuestions: 20,
    correctAnswers: 16,
    date: "16 Feb 2026",
  },
  {
    id: 3,
    title: "Kuis Partikel Dasar",
    type: "grammar",
    score: 75,
    totalQuestions: 15,
    correctAnswers: 11,
    date: "14 Feb 2026",
  },
  {
    id: 4,
    title: "Kuis Angka 1-100",
    type: "vocab",
    score: 95,
    totalQuestions: 20,
    correctAnswers: 19,
    date: "12 Feb 2026",
  },
  {
    id: 5,
    title: "Kuis Salam dan Sapaan",
    type: "vocab",
    score: 100,
    totalQuestions: 10,
    correctAnswers: 10,
    date: "10 Feb 2026",
  },
  {
    id: 6,
    title: "Kuis Kata Kerja Dasar",
    type: "grammar",
    score: 70,
    totalQuestions: 15,
    correctAnswers: 10,
    date: "8 Feb 2026",
  },
];

const overallStats = {
  totalXp: 2450,
  streak: 12,
  quizAverage: 85,
  totalStudyHours: 36,
};

function getScoreColor(score: number): string {
  if (score >= 90) return "text-green-600";
  if (score >= 75) return "text-yellow-600";
  return "text-orange-600";
}

function getScoreBadgeVariant(
  score: number
): "default" | "secondary" | "destructive" {
  if (score >= 90) return "default";
  if (score >= 75) return "secondary";
  return "destructive";
}

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Progress Belajar</h1>
        <p className="text-muted-foreground">
          Pantau perkembangan belajar bahasa Jepang Anda.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total XP</p>
                <p className="text-xl font-bold">
                  {overallStats.totalXp.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Streak</p>
                <p className="text-xl font-bold">
                  {overallStats.streak} hari
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <Trophy className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rata-rata Kuis</p>
                <p className="text-xl font-bold">
                  {overallStats.quizAverage}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                <Target className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Jam Belajar
                </p>
                <p className="text-xl font-bold">
                  {overallStats.totalStudyHours} jam
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Progress per Level */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              Progress per Level
            </CardTitle>
            <CardDescription>
              Kemajuan Anda di setiap level JLPT
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {levelProgress.map((level) => {
              const percentage =
                level.total > 0
                  ? Math.round((level.completed / level.total) * 100)
                  : 0;
              return (
                <div key={level.level} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={level.completed > 0 ? "default" : "secondary"}
                      >
                        {level.level}
                      </Badge>
                      <span className="text-sm font-medium">{level.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {level.completed}/{level.total} pelajaran
                    </span>
                  </div>
                  <Progress value={percentage} className="h-3" />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{percentage}% selesai</span>
                    <span>{level.xpEarned.toLocaleString("id-ID")} XP</span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Streak Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Kalender Streak
            </CardTitle>
            <CardDescription>{streakCalendar.month}</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {streakCalendar.dayLabels.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-muted-foreground py-1"
                >
                  {day}
                </div>
              ))}
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {streakCalendar.days.map((status, index) => {
                const dayNumber =
                  index < 6
                    ? null // First row padding (Feb starts on Sunday, so Mon-Sat are empty)
                    : index - 5; // Actual day numbers

                // Determine if this cell is a valid day
                const isValidDay =
                  dayNumber !== null && dayNumber >= 1 && dayNumber <= 20;

                return (
                  <div
                    key={index}
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-md text-xs font-medium",
                      status === 1 &&
                        "bg-green-100 text-green-700 border border-green-200",
                      status === 0 &&
                        "bg-red-50 text-red-400 border border-red-100",
                      status === -1 && !isValidDay && "bg-transparent",
                      status === -1 &&
                        isValidDay &&
                        "bg-muted/50 text-muted-foreground"
                    )}
                  >
                    {isValidDay ? dayNumber : ""}
                  </div>
                );
              })}
            </div>
            {/* Legend */}
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-sm bg-green-100 border border-green-200" />
                <span>Belajar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-sm bg-red-50 border border-red-100" />
                <span>Terlewat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-sm bg-muted/50" />
                <span>Akan datang</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* XP Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="h-5 w-5 text-primary" />
              Perolehan XP Mingguan
            </CardTitle>
            <CardDescription>XP yang diperoleh per minggu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyXpData.map((week) => {
                const widthPercent = Math.round((week.xp / maxXp) * 100);
                return (
                  <div key={week.week} className="flex items-center gap-3">
                    <span className="w-20 shrink-0 text-xs text-muted-foreground text-right">
                      {week.week}
                    </span>
                    <div className="flex-1 h-6 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/80 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                        style={{ width: `${widthPercent}%` }}
                      >
                        {widthPercent > 20 && (
                          <span className="text-xs font-medium text-primary-foreground">
                            {week.xp}
                          </span>
                        )}
                      </div>
                    </div>
                    {widthPercent <= 20 && (
                      <span className="text-xs font-medium text-muted-foreground w-10">
                        {week.xp}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quiz Scores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="h-5 w-5 text-primary" />
              Nilai Kuis Terakhir
            </CardTitle>
            <CardDescription>
              Ringkasan hasil kuis yang telah dikerjakan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {quizScores.map((quiz, index) => (
                <div key={quiz.id}>
                  <div className="flex items-center gap-3 py-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm",
                        quiz.score >= 90 && "bg-green-100 text-green-700",
                        quiz.score >= 75 &&
                          quiz.score < 90 &&
                          "bg-yellow-100 text-yellow-700",
                        quiz.score < 75 && "bg-orange-100 text-orange-700"
                      )}
                    >
                      {quiz.score}%
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {quiz.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {quiz.correctAnswers}/{quiz.totalQuestions} jawaban benar
                        &middot; {quiz.date}
                      </p>
                    </div>
                    <Badge
                      variant={getScoreBadgeVariant(quiz.score)}
                      className="shrink-0"
                    >
                      {quiz.score >= 90
                        ? "Sangat Baik"
                        : quiz.score >= 75
                          ? "Baik"
                          : "Perlu Latihan"}
                    </Badge>
                  </div>
                  {index < quizScores.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
