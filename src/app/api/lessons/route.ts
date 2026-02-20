import { NextResponse } from "next/server";
import type { JLPTLevel, Lesson } from "@/types";

const MOCK_LESSONS: Lesson[] = [
  {
    id: "n5-01",
    level: "N5",
    moduleNumber: 1,
    titleId: "Huruf Hiragana - Bagian 1",
    titleJp: "ひらがな パート1",
    contentMdx: "",
    orderIndex: 1,
    isPublished: true,
  },
  {
    id: "n5-02",
    level: "N5",
    moduleNumber: 2,
    titleId: "Huruf Hiragana - Bagian 2",
    titleJp: "ひらがな パート2",
    contentMdx: "",
    orderIndex: 2,
    isPublished: true,
  },
  {
    id: "n5-03",
    level: "N5",
    moduleNumber: 3,
    titleId: "Huruf Katakana - Bagian 1",
    titleJp: "カタカナ パート1",
    contentMdx: "",
    orderIndex: 3,
    isPublished: true,
  },
  {
    id: "n5-04",
    level: "N5",
    moduleNumber: 4,
    titleId: "Perkenalan Diri",
    titleJp: "じこしょうかい",
    contentMdx: "",
    orderIndex: 4,
    isPublished: true,
  },
  {
    id: "n5-05",
    level: "N5",
    moduleNumber: 5,
    titleId: "Angka dan Hitungan",
    titleJp: "すうじ と かぞえかた",
    contentMdx: "",
    orderIndex: 5,
    isPublished: true,
  },
  {
    id: "n4-01",
    level: "N4",
    moduleNumber: 1,
    titleId: "Bentuk て (te-form)",
    titleJp: "て形 (てけい)",
    contentMdx: "",
    orderIndex: 1,
    isPublished: true,
  },
  {
    id: "n4-02",
    level: "N4",
    moduleNumber: 2,
    titleId: "Bentuk ない (negasi)",
    titleJp: "ない形 (ないけい)",
    contentMdx: "",
    orderIndex: 2,
    isPublished: true,
  },
  {
    id: "n4-03",
    level: "N4",
    moduleNumber: 3,
    titleId: "Keinginan dengan ～たい",
    titleJp: "～たい形",
    contentMdx: "",
    orderIndex: 3,
    isPublished: true,
  },
  {
    id: "n3-01",
    level: "N3",
    moduleNumber: 1,
    titleId: "Bentuk Pasif (Passive Form)",
    titleJp: "受身形 (うけみけい)",
    contentMdx: "",
    orderIndex: 1,
    isPublished: true,
  },
  {
    id: "n3-02",
    level: "N3",
    moduleNumber: 2,
    titleId: "Bentuk Kausatif (Causative Form)",
    titleJp: "使役形 (しえきけい)",
    contentMdx: "",
    orderIndex: 2,
    isPublished: true,
  },
  {
    id: "n3-03",
    level: "N3",
    moduleNumber: 3,
    titleId: "Bahasa Sopan Dasar (Keigo)",
    titleJp: "敬語入門 (けいごにゅうもん)",
    contentMdx: "",
    orderIndex: 3,
    isPublished: true,
  },
  {
    id: "n2-01",
    level: "N2",
    moduleNumber: 1,
    titleId: "Keigo Lengkap - Sonkeigo",
    titleJp: "尊敬語 (そんけいご)",
    contentMdx: "",
    orderIndex: 1,
    isPublished: true,
  },
  {
    id: "n2-02",
    level: "N2",
    moduleNumber: 2,
    titleId: "Keigo Lengkap - Kenjougo",
    titleJp: "謙譲語 (けんじょうご)",
    contentMdx: "",
    orderIndex: 2,
    isPublished: true,
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const levelParam = searchParams.get("level");

    let filteredLessons = MOCK_LESSONS;

    if (levelParam) {
      const validLevels: JLPTLevel[] = ["N5", "N4", "N3", "N2"];
      const level = levelParam.toUpperCase() as JLPTLevel;

      if (!validLevels.includes(level)) {
        return NextResponse.json(
          { error: "Level tidak valid. Gunakan: N5, N4, N3, atau N2" },
          { status: 400 }
        );
      }

      filteredLessons = MOCK_LESSONS.filter((lesson) => lesson.level === level);
    }

    return NextResponse.json({
      lessons: filteredLessons,
      total: filteredLessons.length,
    });
  } catch (error) {
    console.error("Lessons API Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
