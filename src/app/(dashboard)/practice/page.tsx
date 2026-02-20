"use client";

import { useState, useRef, useEffect } from "react";
import { Send, RotateCcw, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChatMessage, TypingIndicator } from "@/components/practice/chat-message";
import { TopicSelector } from "@/components/practice/topic-selector";
import { cn } from "@/lib/utils/cn";
import type { JLPTLevel } from "@/types";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const LEVELS: JLPTLevel[] = ["N5", "N4", "N3", "N2"];

const MOCK_RESPONSES: Record<string, string[]> = {
  perkenalan: [
    "Bagus sekali! Mari kita latihan perkenalan diri dalam bahasa Jepang.\n\nContoh perkenalan:\nはじめまして。わたし は [nama] です。インドネシアじん です。どうぞ よろしく おねがいします。\n(Hajimemashite. Watashi wa [nama] desu. Indonesiajin desu. Douzo yoroshiku onegaishimasu.)\n\nArtinya: Salam kenal. Saya [nama]. Saya orang Indonesia. Mohon bantuannya.\n\nCoba perkenalkan diri kamu dalam bahasa Jepang!",
  ],
  restoran: [
    "Ayo kita latihan percakapan di restoran! Di Jepang, saat masuk restoran biasanya pelayan akan berkata:\n\nいらっしゃいませ！なんめいさま ですか？\n(Irasshaimase! Nanmeisama desu ka?)\nArtinya: Selamat datang! Berapa orang?\n\nKamu bisa menjawab:\nふたり です。\n(Futari desu.)\nArtinya: Dua orang.\n\nCoba bayangkan kamu sedang di restoran Jepang. Mau pesan apa?",
  ],
  arah: [
    "Mari kita belajar menanyakan arah! Ini sangat berguna kalau kamu jalan-jalan di Jepang.\n\nFrasa penting:\nすみません、えき は どこ ですか？\n(Sumimasen, eki wa doko desu ka?)\nArtinya: Permisi, stasiun di mana ya?\n\nJawaban yang mungkin:\nまっすぐ いって ください。\n(Massugu itte kudasai.)\nArtinya: Silakan jalan lurus.\n\nCoba tanyakan arah ke suatu tempat!",
  ],
  wawancara: [
    "Wah, topik yang sangat penting! Banyak orang Indonesia yang bekerja di Jepang.\n\nDalam wawancara kerja, biasanya dimulai dengan:\nしつれいします。[nama] と もうします。\n(Shitsurei shimasu. [nama] to moushimasu.)\nArtinya: Permisi. Nama saya [nama].\n\nLalu pewawancara mungkin bertanya:\nにほん に きた りゆう は なん ですか？\n(Nihon ni kita riyuu wa nan desu ka?)\nArtinya: Apa alasan Anda datang ke Jepang?\n\nMau latihan skenario wawancara?",
  ],
  "sehari-hari": [
    "Oke, mari kita latihan percakapan sehari-hari!\n\nContoh dialog pagi hari:\nおはよう ございます！きょう は いい てんき ですね。\n(Ohayou gozaimasu! Kyou wa ii tenki desu ne.)\nArtinya: Selamat pagi! Hari ini cuacanya bagus ya.\n\nきょう は なに を しますか？\n(Kyou wa nani wo shimasu ka?)\nArtinya: Hari ini mau ngapain?\n\nCeritakan kegiatan sehari-hari kamu dalam bahasa Jepang!",
  ],
  default: [
    "こんにちは！Sensei AI di sini siap membantu kamu belajar bahasa Jepang. Kamu bisa pilih topik percakapan di atas, atau langsung ketik pertanyaan kamu tentang bahasa Jepang.\n\nMau mulai dari mana hari ini?",
    "Pertanyaan bagus! Mari saya jelaskan.\n\nDalam bahasa Jepang, struktur kalimat dasar adalah:\n[Subjek] は [Objek] を [Kata Kerja] ます\n\nContoh:\nわたし は ごはん を たべます。\n(Watashi wa gohan wo tabemasu.)\nArtinya: Saya makan nasi.\n\nAda yang ingin ditanyakan lagi?",
    "すごい！Bagus sekali usahamu! Terus latihan ya.\n\nTips: Coba dengarkan lagu Jepang atau tonton anime dengan subtitle Jepang untuk melatih pendengaran. Itu sangat membantu!\n\nMau lanjut latihan apa lagi?",
  ],
};

function getMockResponse(topic: string | null, messageIndex: number): string {
  const topicKey = topic || "default";
  const responses = MOCK_RESPONSES[topicKey] || MOCK_RESPONSES["default"];
  return responses[messageIndex % responses.length];
}

export default function PracticePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>("N5");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [assistantMessageCount, setAssistantMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleTopicSelect = (topicId: string, topicLabel: string) => {
    setSelectedTopic(topicId);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: `Saya ingin latihan tentang topik: ${topicLabel}`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getMockResponse(topicId, 0);
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setAssistantMessageCount((prev) => prev + 1);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendMessage = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response with setTimeout
    setTimeout(() => {
      const response = getMockResponse(selectedTopic, assistantMessageCount);
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setAssistantMessageCount((prev) => prev + 1);
      setIsTyping(false);
      inputRef.current?.focus();
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewConversation = () => {
    setMessages([]);
    setSelectedTopic(null);
    setAssistantMessageCount(0);
    setIsTyping(false);
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto p-4 gap-4">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Latihan Percakapan AI
          </h1>
          <p className="text-sm text-muted-foreground">
            Berlatih percakapan bahasa Jepang dengan Sensei AI
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleNewConversation}
            className="gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            Percakapan Baru
          </Button>
        </div>
      </div>

      {/* Level Selector */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                <span>Level JLPT:</span>
              </div>
              <div className="flex gap-1.5">
                {LEVELS.map((level) => (
                  <Badge
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer px-3 py-1 text-sm transition-colors",
                      selectedLevel === level
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    )}
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>

            <span className="text-xs text-muted-foreground">
              {selectedLevel === "N5" && "Pemula - Hiragana & kosakata dasar"}
              {selectedLevel === "N4" && "Dasar-Menengah - Kanji dasar & grammar"}
              {selectedLevel === "N3" && "Menengah - Percakapan & keigo dasar"}
              {selectedLevel === "N2" && "Menengah-Lanjut - Bisnis & akademik"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col min-h-0">
        <CardContent className="flex-1 flex flex-col p-0 min-h-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">
                    Selamat datang di Latihan Percakapan!
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Pilih topik percakapan di bawah atau langsung ketik pesan
                    untuk mulai berlatih bahasa Jepang dengan Sensei AI.
                  </p>
                </div>

                <TopicSelector
                  selectedTopic={selectedTopic}
                  onSelectTopic={handleTopicSelect}
                />
              </div>
            )}

            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
              />
            ))}

            {isTyping && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>

          {/* Topic chips - shown when conversation has started */}
          {messages.length > 0 && !selectedTopic && (
            <div className="px-4 pb-2 border-t pt-2">
              <TopicSelector
                selectedTopic={selectedTopic}
                onSelectTopic={handleTopicSelect}
              />
            </div>
          )}

          {/* Input area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ketik pesan dalam bahasa Jepang atau Indonesia..."
                disabled={isTyping}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 text-center">
              Sensei AI menggunakan level {selectedLevel} untuk menyesuaikan
              jawaban. Respon saat ini menggunakan data contoh.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
