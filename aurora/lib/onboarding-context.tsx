"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface OnboardingData {
  nomeCrianca: string; // opcional — "como prefere chamar"
  faixaEtaria: string;
  comunicacao: string;
  desafios: string[];
  prioridade: string;
  tempoDisponivel: string;
}

const initialData: OnboardingData = {
  nomeCrianca: "",
  faixaEtaria: "",
  comunicacao: "",
  desafios: [],
  prioridade: "",
  tempoDisponivel: "",
};

interface OnboardingContextType {
  data: OnboardingData;
  update: (patch: Partial<OnboardingData>) => void;
  reset: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const STORAGE_KEY = "aurora-onboarding";

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(initialData);
  const [hydrated, setHydrated] = useState(false);

  // Carrega do sessionStorage só no client, após montar (evita mismatch de SSR)
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) setData(JSON.parse(raw));
    } catch {
      // sessionStorage indisponível — segue com estado padrão em memória
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // silenciosamente ignora se storage não estiver disponível
    }
  }, [data, hydrated]);

  const update = (patch: Partial<OnboardingData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const reset = () => {
    setData(initialData);
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  return (
    <OnboardingContext.Provider value={{ data, update, reset }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding precisa estar dentro de OnboardingProvider");
  return ctx;
}
