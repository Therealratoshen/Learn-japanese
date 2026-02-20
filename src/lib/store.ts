import { create } from "zustand";
import type { JLPTLevel, UserRole, SubscriptionStatus } from "@/types";

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    currentLevel: JLPTLevel;
    subscriptionStatus: SubscriptionStatus;
    streakCount: number;
    totalXp: number;
  } | null;
  isLoading: boolean;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: "demo-user",
    name: "Andi Pratama",
    email: "andi@email.com",
    role: "student",
    currentLevel: "N5",
    subscriptionStatus: "active",
    streakCount: 14,
    totalXp: 1250,
  },
  isLoading: false,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

interface AIState {
  currentLevel: JLPTLevel;
  setLevel: (level: JLPTLevel) => void;
}

export const useAIStore = create<AIState>((set) => ({
  currentLevel: "N5",
  setLevel: (level) => set({ currentLevel: level }),
}));
