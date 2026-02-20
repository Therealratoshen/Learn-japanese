"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Edit,
  Eye,
  BookOpen,
  FileText,
  HelpCircle,
  Headphones,
} from "lucide-react";

const mockLessons = [
  {
    id: "1",
    titleId: "Perkenalan Diri (自己紹介)",
    level: "N5",
    module: 1,
    isPublished: true,
    hasQuiz: true,
    hasAudio: true,
  },
  {
    id: "2",
    titleId: "Angka dan Hitungan (数字)",
    level: "N5",
    module: 2,
    isPublished: true,
    hasQuiz: true,
    hasAudio: true,
  },
  {
    id: "3",
    titleId: "Waktu dan Tanggal (時間と日付)",
    level: "N5",
    module: 3,
    isPublished: true,
    hasQuiz: false,
    hasAudio: true,
  },
  {
    id: "4",
    titleId: "Keluarga (家族)",
    level: "N5",
    module: 4,
    isPublished: false,
    hasQuiz: false,
    hasAudio: false,
  },
  {
    id: "5",
    titleId: "Kegiatan Sehari-hari (日常生活)",
    level: "N5",
    module: 5,
    isPublished: false,
    hasQuiz: false,
    hasAudio: false,
  },
  {
    id: "6",
    titleId: "Partikel Dasar は・が・を",
    level: "N5",
    module: 6,
    isPublished: false,
    hasQuiz: false,
    hasAudio: false,
  },
];

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Konten</h1>
          <p className="text-muted-foreground">
            Kelola pelajaran, kuis, dan materi pembelajaran
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Tambah Pelajaran
        </Button>
      </div>

      {/* Content stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{mockLessons.length}</p>
              <p className="text-xs text-muted-foreground">Total Pelajaran</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Eye className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {mockLessons.filter((l) => l.isPublished).length}
              </p>
              <p className="text-xs text-muted-foreground">Dipublikasikan</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <HelpCircle className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {mockLessons.filter((l) => l.hasQuiz).length}
              </p>
              <p className="text-xs text-muted-foreground">Dengan Kuis</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Headphones className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {mockLessons.filter((l) => l.hasAudio).length}
              </p>
              <p className="text-xs text-muted-foreground">Dengan Audio</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lessons table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Daftar Pelajaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-bold text-sm">
                    {lesson.module}
                  </div>
                  <div>
                    <p className="font-medium">{lesson.titleId}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {lesson.level}
                      </Badge>
                      {lesson.hasQuiz && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <HelpCircle className="h-3 w-3" /> Kuis
                        </span>
                      )}
                      {lesson.hasAudio && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Headphones className="h-3 w-3" /> Audio
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {lesson.isPublished ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Publik
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Draft</Badge>
                  )}
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
