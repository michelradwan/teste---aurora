"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboarding } from "@/lib/onboarding-context";

const materiais = [
  { titulo: "Cartões de rotina visual — manhã", tipo: "PDF para imprimir" },
  { titulo: "Roteiro para momentos difíceis", tipo: "Guia rápido" },
  { titulo: "Checklist do ambiente sensorial", tipo: "Checklist" },
];

const diasSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const focoTempo: Record<string, string> = {
  "5 minutos": "8 minutos",
  "10 minutos": "8 minutos",
  "20 minutos": "12 minutos",
  "30 minutos": "15 minutos",
};

export default function PlataformaPage() {
  const router = useRouter();
  const { data } = useOnboarding();
  const [atividadeIniciada, setAtividadeIniciada] = useState(false);
  const [passoAtual, setPassoAtual] = useState(0);

  useEffect(() => {
    if (!data.prioridade) router.replace("/onboarding");
  }, [data.prioridade, router]);

  if (!data.prioridade) return null;

  const nome = data.nomeCrianca?.trim();
  const saudacao = nome ? nome : "";
  const tempoFoco = focoTempo[data.tempoDisponivel] ?? "10 minutos";

  const passosAtividade = [
    `Escolha um horário calmo do dia para trabalhar "${data.prioridade}".`,
    "Explique com poucas palavras o que vai acontecer, usando um cartão visual se tiver.",
    "Faça a atividade junto, no ritmo da criança — sem pressa.",
    "Reconheça o esforço no final, mesmo que pequeno.",
  ];

  return (
    <main className="min-h-screen bg-paper px-6 py-10">
      <div className="mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-wide text-inkSoft">
            {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
          </p>
          <h1 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
            Bom dia{saudacao ? `, ${saudacao}` : ""} ❤️
          </h1>
          <p className="mt-2 text-sm text-inkSoft">
            Hoje vamos trabalhar uma pequena conquista.
          </p>
        </motion.div>

        {/* CARD PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-3xl bg-white p-7 shadow-soft"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-sky">
            Foco de hoje
          </p>
          <h2 className="mt-2 font-display text-xl text-ink">{data.prioridade}</h2>
          <p className="mt-1 text-sm text-inkSoft">{tempoFoco} · passo a passo simples</p>

          <AnimatePresence mode="wait">
            {!atividadeIniciada ? (
              <motion.button
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setAtividadeIniciada(true)}
                className="mt-6 w-full rounded-full bg-sky px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#4d6d92]"
              >
                Começar atividade
              </motion.button>
            ) : (
              <motion.div
                key="steps"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6"
              >
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-paperAlt">
                  <motion.div
                    className="h-full rounded-full bg-sage"
                    animate={{ width: `${((passoAtual + 1) / passosAtividade.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={passoAtual}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5 text-sm text-ink"
                  >
                    {passosAtividade[passoAtual]}
                  </motion.p>
                </AnimatePresence>
                <button
                  onClick={() => {
                    if (passoAtual < passosAtividade.length - 1) setPassoAtual((p) => p + 1);
                    else {
                      setAtividadeIniciada(false);
                      setPassoAtual(0);
                    }
                  }}
                  className="mt-5 w-full rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#7c9678]"
                >
                  {passoAtual < passosAtividade.length - 1 ? "Próximo passo" : "Concluir atividade"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* PROGRESSO DA FAMÍLIA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-3xl bg-white p-7 shadow-card"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-inkSoft">
            Progresso da família
          </p>
          <div className="mt-4 flex items-end justify-between">
            {diasSemana.map((d, i) => (
              <div key={d} className="flex flex-col items-center gap-2">
                <div
                  className={`h-10 w-6 rounded-full ${
                    i < 3 ? "bg-sage" : "bg-paperAlt"
                  }`}
                />
                <span className="text-[11px] text-inkSoft">{d}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-inkSoft">
            3 atividades concluídas essa semana — no seu ritmo.
          </p>
        </motion.div>

        {/* MATERIAIS RECOMENDADOS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-inkSoft">
            Materiais recomendados
          </p>
          <div className="mt-4 space-y-3">
            {materiais.map((m) => (
              <div key={m.titulo} className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-card">
                <div>
                  <p className="text-sm font-medium text-ink">{m.titulo}</p>
                  <p className="text-xs text-inkSoft">{m.tipo}</p>
                </div>
                <span className="text-sky">→</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA FINAL — sem checkout falso */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 rounded-3xl bg-sky/10 p-7 text-center"
        >
          <p className="font-display text-lg text-ink">
            Quero liberar minha rotina personalizada
          </p>
          <p className="mt-2 text-sm text-inkSoft">
            O Projeto Aurora ainda está em fase de validação. Entre na lista
            de acesso antecipado e avisamos assim que abrir.
          </p>
          <button className="mt-5 w-full rounded-full bg-sky px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#4d6d92] sm:w-auto">
            Entrar na lista de acesso antecipado
          </button>
        </motion.div>
      </div>
    </main>
  );
}
