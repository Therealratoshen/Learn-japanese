import { NextResponse } from "next/server";
import { z } from "zod";
import Anthropic from "@anthropic-ai/sdk";
import { getSystemPrompt, type ChatMessage } from "@/lib/ai/claude";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1, "Pesan tidak boleh kosong"),
      })
    )
    .min(1, "Minimal satu pesan diperlukan"),
  level: z.enum(["N5", "N4", "N3", "N2"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = chatRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Data tidak valid",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { messages, level } = parsed.data;
    const systemPrompt = getSystemPrompt(level);

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((msg: ChatMessage) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    const assistantMessage =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("AI Chat Error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Format request tidak valid" },
        { status: 400 }
      );
    }

    if (error instanceof Anthropic.APIError) {
      const statusCode = error.status || 500;
      return NextResponse.json(
        { error: "Gagal menghubungi layanan AI. Silakan coba lagi nanti." },
        { status: statusCode }
      );
    }

    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
