"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, TrendingUp, BookOpen, Star } from "lucide-react";

const mockStudents = [
  {
    id: "1",
    name: "Andi Pratama",
    email: "andi@email.com",
    level: "N5",
    xp: 1250,
    streak: 14,
    status: "active" as const,
    lessonsCompleted: 8,
    joinedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    email: "siti@email.com",
    level: "N4",
    xp: 3400,
    streak: 28,
    status: "active" as const,
    lessonsCompleted: 22,
    joinedAt: "2023-11-20",
  },
  {
    id: "3",
    name: "Budi Santoso",
    email: "budi@email.com",
    level: "N5",
    xp: 450,
    streak: 0,
    status: "trial" as const,
    lessonsCompleted: 3,
    joinedAt: "2024-02-01",
  },
  {
    id: "4",
    name: "Dewi Lestari",
    email: "dewi@email.com",
    level: "N3",
    xp: 8900,
    streak: 45,
    status: "active" as const,
    lessonsCompleted: 35,
    joinedAt: "2023-08-10",
  },
  {
    id: "5",
    name: "Rizki Firmansyah",
    email: "rizki@email.com",
    level: "N5",
    xp: 200,
    streak: 2,
    status: "expired" as const,
    lessonsCompleted: 2,
    joinedAt: "2024-01-28",
  },
];

const statusColors = {
  active: "bg-green-100 text-green-800",
  trial: "bg-blue-100 text-blue-800",
  expired: "bg-red-100 text-red-800",
  cancelled: "bg-gray-100 text-gray-800",
};

const statusLabels = {
  active: "Aktif",
  trial: "Trial",
  expired: "Kadaluarsa",
  cancelled: "Dibatalkan",
};

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Manajemen Siswa</h1>
        <p className="text-muted-foreground">
          Kelola dan pantau progress siswa Anda
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">127</p>
              <p className="text-xs text-muted-foreground">Total Siswa</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">89</p>
              <p className="text-xs text-muted-foreground">Siswa Aktif</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">1,240</p>
              <p className="text-xs text-muted-foreground">
                Pelajaran Selesai
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Star className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-xs text-muted-foreground">Rating Rata-rata</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <CardTitle className="text-lg">Daftar Siswa</CardTitle>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Cari siswa..." className="pl-9" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium text-muted-foreground">
                    Nama
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground">
                    Level
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground hidden sm:table-cell">
                    XP
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground hidden md:table-cell">
                    Streak
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground hidden lg:table-cell">
                    Pelajaran
                  </th>
                  <th className="pb-3 font-medium text-muted-foreground">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockStudents.map((student) => (
                  <tr key={student.id} className="border-b last:border-0">
                    <td className="py-3">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {student.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-3">
                      <Badge variant="outline">{student.level}</Badge>
                    </td>
                    <td className="py-3 hidden sm:table-cell">
                      {student.xp.toLocaleString()}
                    </td>
                    <td className="py-3 hidden md:table-cell">
                      {student.streak > 0 ? (
                        <span>
                          🔥 {student.streak} hari
                        </span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          statusColors[student.status]
                        }`}
                      >
                        {statusLabels[student.status]}
                      </span>
                    </td>
                    <td className="py-3 hidden lg:table-cell">
                      {student.lessonsCompleted}
                    </td>
                    <td className="py-3">
                      <Button variant="ghost" size="sm">
                        Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
