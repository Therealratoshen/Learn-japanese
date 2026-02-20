export type JLPTLevel = "N5" | "N4" | "N3" | "N2";

export type UserRole = "student" | "teacher" | "admin";

export type SubscriptionStatus = "active" | "cancelled" | "expired" | "trial";

export type LessonStatus = "not_started" | "in_progress" | "completed";

export type SessionStatus = "scheduled" | "completed" | "cancelled";

export type QuizType = "grammar" | "vocab" | "kanji" | "listening";

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatarUrl?: string;
  role: UserRole;
  currentLevel: JLPTLevel;
  subscriptionStatus: SubscriptionStatus;
  streakCount: number;
  totalXp: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  level: JLPTLevel;
  moduleNumber: number;
  titleId: string;
  titleJp: string;
  contentMdx: string;
  audioUrl?: string;
  orderIndex: number;
  isPublished: boolean;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
  passingScore: number;
  type: QuizType;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionJp?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationId: string;
}

export interface UserProgress {
  id: string;
  userId: string;
  lessonId: string;
  status: LessonStatus;
  quizScore?: number;
  attempts: number;
  completedAt?: Date;
  timeSpentSeconds: number;
}

export interface AIMessage {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export interface LiveSession {
  id: string;
  teacherId: string;
  studentId: string;
  scheduledAt: Date;
  durationMinutes: number;
  meetingUrl: string;
  status: SessionStatus;
  notes?: string;
}

export interface Plan {
  id: string;
  name: string;
  priceIdr: number;
  durationMonths: number;
  features: string[];
  isActive: boolean;
}
