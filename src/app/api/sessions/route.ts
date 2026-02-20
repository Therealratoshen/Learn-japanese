import { NextResponse } from "next/server";
import { z } from "zod";
import type { LiveSession } from "@/types";

const MOCK_SESSIONS: LiveSession[] = [
  {
    id: "sess-001",
    teacherId: "teacher-tanaka",
    studentId: "student-001",
    scheduledAt: new Date("2026-02-25T10:00:00+07:00"),
    durationMinutes: 45,
    meetingUrl: "https://meet.nihongo.id/sess-001",
    status: "scheduled",
    notes: "Latihan percakapan N5 - Perkenalan diri dan keluarga",
  },
  {
    id: "sess-002",
    teacherId: "teacher-suzuki",
    studentId: "student-001",
    scheduledAt: new Date("2026-02-27T14:00:00+07:00"),
    durationMinutes: 60,
    meetingUrl: "https://meet.nihongo.id/sess-002",
    status: "scheduled",
    notes: "Review grammar N4 - て形 dan ない形",
  },
  {
    id: "sess-003",
    teacherId: "teacher-tanaka",
    studentId: "student-001",
    scheduledAt: new Date("2026-03-01T09:00:00+07:00"),
    durationMinutes: 45,
    meetingUrl: "https://meet.nihongo.id/sess-003",
    status: "scheduled",
    notes: "Latihan mendengarkan dan berbicara - topik sehari-hari",
  },
];

const bookSessionSchema = z.object({
  teacherId: z.string().min(1, "ID guru diperlukan"),
  scheduledAt: z.string().datetime("Format tanggal tidak valid"),
  durationMinutes: z
    .number()
    .min(30, "Durasi minimal 30 menit")
    .max(120, "Durasi maksimal 120 menit"),
  notes: z.string().max(500, "Catatan maksimal 500 karakter").optional(),
});

export async function GET() {
  try {
    return NextResponse.json({
      sessions: MOCK_SESSIONS,
      total: MOCK_SESSIONS.length,
    });
  } catch (error) {
    console.error("Sessions GET Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = bookSessionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Data sesi tidak valid",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { teacherId, scheduledAt, durationMinutes, notes } = parsed.data;

    // Placeholder response - actual database integration later
    const newSession: LiveSession = {
      id: `sess-${crypto.randomUUID().slice(0, 8)}`,
      teacherId,
      studentId: "student-001", // Will be from auth session later
      scheduledAt: new Date(scheduledAt),
      durationMinutes,
      meetingUrl: `https://meet.nihongo.id/${crypto.randomUUID().slice(0, 8)}`,
      status: "scheduled",
      notes: notes || undefined,
    };

    return NextResponse.json(
      {
        message: "Sesi berhasil dijadwalkan",
        session: newSession,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Sessions POST Error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Format request tidak valid" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
