"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    label: "Pendapatan Bulan Ini",
    value: "Rp 12.450.000",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "Siswa Baru",
    value: "34",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "Pelajaran Diselesaikan",
    value: "456",
    change: "+8%",
    trend: "up",
    icon: BookOpen,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    label: "Tingkat Retensi",
    value: "87%",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

const revenueByPlan = [
  { plan: "Basic", subscribers: 45, revenue: "Rp 4.455.000" },
  { plan: "Premium", subscribers: 32, revenue: "Rp 6.368.000" },
  { plan: "Intensif", subscribers: 8, revenue: "Rp 3.992.000" },
  { plan: "Trial", subscribers: 42, revenue: "Rp 0" },
];

const topLessons = [
  { title: "Perkenalan Diri (自己紹介)", completions: 89, rating: 4.8 },
  { title: "Angka dan Hitungan (数字)", completions: 76, rating: 4.7 },
  { title: "Waktu dan Tanggal (時間と日付)", completions: 65, rating: 4.9 },
  { title: "Partikel は dan が", completions: 54, rating: 4.6 },
  { title: "Bentuk ~ます", completions: 48, rating: 4.8 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analitik</h1>
        <p className="text-muted-foreground">
          Pantau performa platform dan bisnis Anda
        </p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change}
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by plan */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pendapatan per Paket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByPlan.map((item) => (
                <div
                  key={item.plan}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{item.plan}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.subscribers} subscribers
                    </p>
                  </div>
                  <p className="font-semibold">{item.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top lessons */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pelajaran Terpopuler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topLessons.map((lesson, i) => (
                <div
                  key={lesson.title}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-sm">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {lesson.completions} penyelesaian
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {lesson.rating} / 5
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
