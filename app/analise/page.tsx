"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AuroraGlow from "@/components/AuroraGlow";

const mensagens = [
  "Estamos organizando as informações da sua família...",
  "Identificando os principais pontos da rotina...",
  "Selecionando estratégias compatíveis com suas respostas...",
  "Preparando seu plano inicial...",
];

const STEP_DURATION = 1400; // ms por mensagem

export default function AnalisePage() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (idx >= mensagens.length - 1) {
      const timeout = setTimeout(() => router.push("/resultado"), STEP_DURATION);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setIdx((i) => i + 1), STEP_DURATION);
    return () => clearTimeout(timeout);
  }, [idx, router]);

  useEffect(() => {
    const target = ((idx + 1) / mensagens.length) * 100;
    const raf = requestAnimationFrame(() => setProgress(target));
    return () => cancelAnimationFrame(raf);
  }, [idx]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper px-6">
      <AuroraGlow />
      <div className="relative w-full max-w-md text-center">
        <div className="mx-auto mb-10 h-2 w-full overflow-hidden rounded-full bg-paperAlt">
          <motion.div
            className="h-full rounded-full bg-sky"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="font-display text-xl text-ink sm:text-2xl"
          >
            {mensagens[idx]}
          </motion.p>
        </AnimatePresence>
      </div>
    </main>
  );
}
