import { create } from "zustand";
import type { User } from "../../../types/user";

export interface AuthState {
  user: User | null;
  initialized: boolean;
  setUser: (user: User) => void;
  setInitialized: (initialized: boolean) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  initialized: false,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
  setInitialized: (initialized: boolean) => set({ initialized })
}))