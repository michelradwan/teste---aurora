"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useOnboarding } from "@/lib/onboarding-context";
import AuroraGlow from "@/components/AuroraGlow";

const itensBase = [
  "Rotina inicial organizada por prioridade",
  "Estratégias para o desafio que você apontou primeiro",
  "Estrutura diária simples de seguir",
  "Materiais práticos para começar hoje",
];

const focoTempo: Record<string, string> = {
  "5 minutos": "8 minutos",
  "10 minutos": "8 minutos",
  "20 minutos": "12 minutos",
  "30 minutos": "15 minutos",
};

export default function ResultadoPage() {
  const router = useRouter();
  const { data } = useOnboarding();

  // Se a pessoa cair direto nessa tela sem passar pelo onboarding, manda de volta.
  useEffect(() => {
    if (!data.prioridade) router.replace("/onboarding");
  }, [data.prioridade, router]);

  if (!data.prioridade) return null;

  const nome = data.nomeCrianca?.trim();
  const saudacao = nome ? `${nome} ❤️` : "sua família ❤️";
  const tempoFoco = focoTempo[data.tempoDisponivel] ?? "10 minutos";

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper px-6 py-16">
      <AuroraGlow />
      <div className="relative mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium text-inkSoft shadow-card">
            Plano inicial
          </span>
          <h1 className="mt-5 font-display text-3xl text-ink sm:text-4xl">
            Seu plano inicial está pronto, {saudacao}
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm text-inkSoft">
            Baseado nas categorias que você indicou — um ponto de partida
            organizado, não uma fórmula fechada. Cada família ajusta o ritmo
            junto com quem acompanha a criança de perto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 rounded-3xl bg-white p-7 shadow-soft"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-inkSoft">
            Baseado nas suas respostas
          </p>
          <ul className="mt-4 space-y-3">
            {itensBase.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 text-sage">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-3xl bg-sky/10 p-7 shadow-card"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-sky">
            Seu primeiro foco recomendado
          </p>
          <h3 className="mt-2 font-display text-xl text-ink">{data.prioridade}</h3>
          <p className="mt-1 text-sm text-inkSoft">Tempo estimado: {tempoFoco} por dia</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => router.push("/plataforma")}
            className="w-full rounded-full bg-sky px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-[#4d6d92] sm:w-auto"
          >
            Ver como seria minha rotina no dia a dia
          </button>
        </motion.div>
      </div>
    </main>
  );
}
