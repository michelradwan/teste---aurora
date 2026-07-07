"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useOnboarding } from "@/lib/onboarding-context";
import ProgressBar from "@/components/ProgressBar";

const TOTAL_STEPS = 6;

const faixasEtarias = ["0–2 anos", "3–5 anos", "6–8 anos", "9–12 anos", "13+ anos"];
const comunicacoes = ["Verbal", "Pouco verbal", "Não verbal"];
const desafiosOpcoes = [
  "Alimentação",
  "Sono",
  "Comunicação",
  "Escola",
  "Rotina",
  "Crises",
  "Autonomia",
  "Socialização",
];
const tempos = ["5 minutos", "10 minutos", "20 minutos", "30 minutos"];

const slideVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

function OptionCard({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`w-full rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-colors ${
        selected
          ? "border-sky bg-sky/10 text-ink"
          : "border-transparent bg-white text-ink hover:bg-paperAlt"
      } shadow-card`}
    >
      {label}
    </motion.button>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const { data, update } = useOnboarding();
  const [step, setStep] = useState(1);

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else router.push("/analise");
  };

  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return true; // campo opcional
      case 2:
        return !!data.faixaEtaria;
      case 3:
        return !!data.comunicacao;
      case 4:
        return data.desafios.length > 0;
      case 5:
        return !!data.prioridade;
      case 6:
        return !!data.tempoDisponivel;
      default:
        return false;
    }
  };

  const toggleDesafio = (d: string) => {
    const has = data.desafios.includes(d);
    update({
      desafios: has ? data.desafios.filter((x) => x !== d) : [...data.desafios, d],
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-paper px-6 py-10">
      <div className="mx-auto w-full max-w-lg flex-1">
        <ProgressBar step={step} total={TOTAL_STEPS} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10"
          >
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Como prefere chamar seu filho(a)?
                </h2>
                <p className="mt-2 text-sm text-inkSoft">
                  Opcional — pode ser um apelido. Usamos só pra deixar a
                  experiência mais pessoal, nada é obrigatório.
                </p>
                <input
                  type="text"
                  value={data.nomeCrianca}
                  onChange={(e) => update({ nomeCrianca: e.target.value })}
                  placeholder="Ex: Ana, Pedrinho..."
                  className="mt-6 w-full rounded-2xl border border-paperAlt bg-white px-5 py-4 text-sm text-ink shadow-card placeholder:text-inkSoft/60 focus:border-sky focus:outline-none"
                />
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl text-ink">Qual a idade?</h2>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {faixasEtarias.map((f) => (
                    <OptionCard
                      key={f}
                      label={f}
                      selected={data.faixaEtaria === f}
                      onClick={() => update({ faixaEtaria: f })}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Como ele(a) costuma se comunicar?
                </h2>
                <div className="mt-6 space-y-3">
                  {comunicacoes.map((c) => (
                    <OptionCard
                      key={c}
                      label={c}
                      selected={data.comunicacao === c}
                      onClick={() => update({ comunicacao: c })}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Quais desafios fazem parte da rotina hoje?
                </h2>
                <p className="mt-2 text-sm text-inkSoft">Pode escolher mais de um.</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {desafiosOpcoes.map((d) => (
                    <OptionCard
                      key={d}
                      label={d}
                      selected={data.desafios.includes(d)}
                      onClick={() => toggleDesafio(d)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Se pudesse melhorar apenas uma coisa primeiro, qual seria?
                </h2>
                <div className="mt-6 space-y-3">
                  {(data.desafios.length > 0 ? data.desafios : desafiosOpcoes).map((d) => (
                    <OptionCard
                      key={d}
                      label={d}
                      selected={data.prioridade === d}
                      onClick={() => update({ prioridade: d })}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h2 className="font-display text-2xl text-ink">
                  Quanto tempo você consegue dedicar por dia?
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {tempos.map((t) => (
                    <OptionCard
                      key={t}
                      label={t}
                      selected={data.tempoDisponivel === t}
                      onClick={() => update({ tempoDisponivel: t })}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mx-auto mt-10 w-full max-w-lg">
        <button
          type="button"
          disabled={!canAdvance()}
          onClick={next}
          className="w-full rounded-full bg-sky px-8 py-4 text-sm font-semibold text-white shadow-soft transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          {step < TOTAL_STEPS ? "Continuar" : "Ver meu plano inicial"}
        </button>
      </div>
    </main>
  );
}
