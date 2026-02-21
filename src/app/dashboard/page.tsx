import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard belajar bahasa Jepang kamu di NihonGo!",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 px-4 bg-[var(--color-light)]">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-red-700 rounded-2xl p-6 md:p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Selamat Datang! &#128075;
                </h1>
                <p className="text-red-100">
                  Lanjutkan belajar bahasa Jepang kamu hari ini.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-xs text-red-100">Hari Streak</div>
                </div>
                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold">250</div>
                  <div className="text-xs text-red-100">Total XP</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Current Level */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Level Saat Ini</h2>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    JLPT N5
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[var(--color-primary)] h-3 rounded-full transition-all"
                      style={{ width: "35%" }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  5 dari 15 pelajaran selesai. Terus semangat!
                </p>
              </div>

              {/* Lessons */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold mb-4">Pelajaran Terbaru</h2>
                <div className="space-y-3">
                  {[
                    {
                      num: 1,
                      title: "Hiragana: A-Ko (\u3042-\u3053)",
                      status: "completed",
                      score: "95%",
                    },
                    {
                      num: 2,
                      title: "Hiragana: Sa-To (\u3055-\u3068)",
                      status: "completed",
                      score: "88%",
                    },
                    {
                      num: 3,
                      title: "Hiragana: Na-Ho (\u306A-\u307B)",
                      status: "completed",
                      score: "92%",
                    },
                    {
                      num: 4,
                      title: "Hiragana: Ma-Yo (\u307E-\u3088)",
                      status: "completed",
                      score: "90%",
                    },
                    {
                      num: 5,
                      title: "Hiragana: Ra-N (\u3089-\u3093)",
                      status: "completed",
                      score: "87%",
                    },
                    {
                      num: 6,
                      title: "Katakana: A-Ko (\u30A2-\u30B3)",
                      status: "current",
                      score: null,
                    },
                    {
                      num: 7,
                      title: "Katakana: Sa-To (\u30B5-\u30C8)",
                      status: "locked",
                      score: null,
                    },
                  ].map((lesson, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-3 rounded-xl transition ${
                        lesson.status === "current"
                          ? "bg-red-50 border border-red-200"
                          : lesson.status === "completed"
                            ? "bg-green-50/50"
                            : "bg-gray-50 opacity-60"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          lesson.status === "completed"
                            ? "bg-green-500 text-white"
                            : lesson.status === "current"
                              ? "bg-[var(--color-primary)] text-white"
                              : "bg-gray-300 text-white"
                        }`}
                      >
                        {lesson.status === "completed" ? (
                          <span>{"\u2713"}</span>
                        ) : (
                          lesson.num
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                          Pelajaran {lesson.num}: {lesson.title}
                        </div>
                      </div>
                      {lesson.score && (
                        <span className="text-sm text-green-600 font-medium shrink-0">
                          {lesson.score}
                        </span>
                      )}
                      {lesson.status === "current" && (
                        <span className="text-xs bg-[var(--color-primary)] text-white px-2 py-1 rounded-full shrink-0">
                          Lanjutkan
                        </span>
                      )}
                      {lesson.status === "locked" && (
                        <span className="text-gray-400 shrink-0">
                          &#128274;
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                  &#128100;
                </div>
                <h3 className="font-bold">Pelajar NihonGo!</h3>
                <p className="text-sm text-gray-500 mb-4">Paket Gratis</p>
                <Link
                  href="/#pricing"
                  className="block w-full bg-amber-100 text-amber-800 py-2 rounded-lg text-sm font-medium hover:bg-amber-200 transition"
                >
                  Upgrade Paket
                </Link>
              </div>

              {/* AI Practice */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold mb-3">AI Practice</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Latihan percakapan bahasa Jepang dengan AI 24/7.
                </p>
                <div className="text-sm text-gray-500 mb-3">
                  Sisa hari ini: <span className="font-bold text-[var(--color-primary)]">3/5</span> chat
                </div>
                <button className="w-full bg-[var(--color-primary)] text-white py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)] transition">
                  Mulai Percakapan
                </button>
              </div>

              {/* Upcoming Session */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold mb-3">Sesi Live Berikutnya</h3>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-600 mb-1">Belum ada sesi</p>
                  <p className="text-xs text-gray-400">
                    Upgrade ke Basic untuk sesi grup bulanan
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold mb-3">Statistik</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pelajaran selesai</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quiz dikerjakan</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rata-rata nilai</span>
                    <span className="font-medium">90.4%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Waktu belajar</span>
                    <span className="font-medium">12 jam</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">AI chat digunakan</span>
                    <span className="font-medium">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-sm text-amber-800">
              &#9888; Ini adalah preview dashboard.{" "}
              <Link
                href="/register"
                className="font-semibold underline hover:no-underline"
              >
                Daftar gratis
              </Link>{" "}
              untuk mengakses dashboard lengkap dengan progress tracking dan AI
              practice.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
