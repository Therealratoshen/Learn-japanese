"use client";

import { useState } from "react";
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
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const mockQuiz = {
  title: "Kuis: Perkenalan Diri (自己紹介)",
  level: "N5",
  questions: [
    {
      id: "1",
      question: 'Apa arti dari "はじめまして" (hajimemashite)?',
      options: [
        "Selamat tinggal",
        "Salam kenal",
        "Terima kasih",
        "Permisi",
      ],
      correct: 1,
      explanation:
        'はじめまして digunakan saat pertama kali bertemu seseorang, artinya "Salam kenal".',
    },
    {
      id: "2",
      question: 'Bagaimana cara mengatakan "Saya Andi" dalam bahasa Jepang?',
      options: [
        "アンディは です",
        "わたしは アンディ です",
        "アンディ が です",
        "アンディ を です",
      ],
      correct: 1,
      explanation:
        'Pola yang benar adalah "わたしは [nama] です" - partikel は (wa) menandai topik kalimat.',
    },
    {
      id: "3",
      question: 'Apa arti partikel "から" (kara)?',
      options: ["ke", "dari", "dengan", "untuk"],
      correct: 1,
      explanation:
        'から (kara) berarti "dari". Contoh: インドネシアから きました = Saya datang dari Indonesia.',
    },
    {
      id: "4",
      question: 'Kata "がくせい" (gakusei) artinya apa?',
      options: ["Guru", "Dokter", "Pelajar/Mahasiswa", "Karyawan"],
      correct: 2,
      explanation:
        "がくせい (gakusei) berarti pelajar atau mahasiswa. Guru = せんせい (sensei).",
    },
    {
      id: "5",
      question:
        'Kapan kita mengucapkan "よろしく おねがいします" (yoroshiku onegaishimasu)?',
      options: [
        "Saat berpisah",
        "Di akhir perkenalan",
        "Saat makan",
        "Saat bangun tidur",
      ],
      correct: 1,
      explanation:
        'よろしく おねがいします diucapkan di akhir perkenalan, artinya "Mohon bantuannya".',
    },
  ],
};

export default function QuizzesPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [started, setStarted] = useState(false);

  const question = mockQuiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuiz.questions.length) * 100;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < mockQuiz.questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Kuis</h1>
          <p className="text-muted-foreground">
            Uji pemahamanmu dengan kuis interaktif
          </p>
        </div>

        <Card className="text-center p-8">
          <CardHeader>
            <Badge className="w-fit mx-auto mb-2">{mockQuiz.level}</Badge>
            <CardTitle>{mockQuiz.title}</CardTitle>
            <CardDescription>
              {mockQuiz.questions.length} pertanyaan | Nilai minimum: 70%
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={() => setStarted(true)}>
              Mulai Kuis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / mockQuiz.questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="text-center p-8">
          <CardHeader>
            <div className="mx-auto mb-4">
              {passed ? (
                <Trophy className="h-16 w-16 text-yellow-500" />
              ) : (
                <RotateCcw className="h-16 w-16 text-muted-foreground" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {passed ? "Selamat! 🎉" : "Coba Lagi! 💪"}
            </CardTitle>
            <CardDescription>
              Skor kamu: {score}/{mockQuiz.questions.length} ({percentage}%)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={percentage} className="h-3" />
            <p className="text-sm text-muted-foreground">
              {passed
                ? "Kamu sudah menguasai materi ini! Lanjut ke pelajaran berikutnya."
                : "Jangan menyerah! Ulangi pelajaran dan coba lagi."}
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={resetQuiz}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Ulangi Kuis
              </Button>
              {passed && (
                <Button>
                  Pelajaran Selanjutnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Pertanyaan {currentQuestion + 1} dari {mockQuiz.questions.length}
          </p>
        </div>
        <Badge variant="outline">
          Skor: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
        </Badge>
      </div>

      <Progress value={progress} className="h-2" />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            const showResult = showExplanation;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={cn(
                  "w-full text-left p-4 rounded-lg border transition-all",
                  !showResult && "hover:bg-accent hover:border-primary/50",
                  showResult && isCorrect && "bg-green-50 border-green-500",
                  showResult &&
                    isSelected &&
                    !isCorrect &&
                    "bg-red-50 border-red-500",
                  !showResult && isSelected && "border-primary bg-primary/5"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="jp-text">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}

          {showExplanation && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Penjelasan:</p>
              <p className="text-sm text-muted-foreground">
                {question.explanation}
              </p>
            </div>
          )}

          {showExplanation && (
            <Button className="w-full mt-4" onClick={nextQuestion}>
              {currentQuestion < mockQuiz.questions.length - 1
                ? "Pertanyaan Selanjutnya"
                : "Lihat Hasil"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
