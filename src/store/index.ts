import { create } from 'zustand';

interface User {
  id: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));

interface DeepWorkSession {
  isActive: boolean;
  duration: number;
  remainingTime: number;
  startTime: Date | null;
}

interface AppStore {
  currentTab: string;
  deepWorkSession: DeepWorkSession;
  setCurrentTab: (tab: string) => void;
  setDeepWorkSession: (session: DeepWorkSession) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  currentTab: 'day',
  deepWorkSession: {
    isActive: false,
    duration: 0,
    remainingTime: 0,
    startTime: null,
  },
  setCurrentTab: (tab) => set({ currentTab: tab }),
  setDeepWorkSession: (session) => set({ deepWorkSession: session }),
}));
