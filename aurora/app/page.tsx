"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AuroraGlow from "@/components/AuroraGlow";

const desafios = [
  { label: "Alimentação", desc: "Seletividade alimentar e horários" },
  { label: "Sono", desc: "Rotina noturna e transições" },
  { label: "Comunicação", desc: "Formas de se expressar e ser compreendido" },
  { label: "Organização da rotina", desc: "Previsibilidade no dia a dia" },
  { label: "Escola", desc: "Adaptação e comunicação com a equipe" },
  { label: "Momentos difíceis", desc: "Crises e formas de acolher" },
];

const passos = [
  { n: "1", title: "Conhecemos sua rotina", desc: "Perguntas simples sobre o dia a dia da sua família." },
  { n: "2", title: "Identificamos os maiores desafios", desc: "Você aponta o que mais pesa agora." },
  { n: "3", title: "Criamos um plano inicial", desc: "Organizado por prioridade, não por fórmula pronta." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-paper text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-24">
        <AuroraGlow />
        <div className="relative mx-auto max-w-2xl text-center">
          <motion.span
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-inkSoft shadow-card"
          >
            Projeto Aurora · em fase de validação
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-ink sm:text-5xl"
          >
            Cada criança com TEA é única.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-md text-base text-inkSoft sm:text-lg"
          >
            Organize a rotina da sua família com um plano inicial criado a
            partir das necessidades do seu filho.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-9"
          >
            <Link
              href="/onboarding"
              className="inline-flex items-center justify-center rounded-full bg-sky px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-[#4d6d92] focus-visible:outline-none"
            >
              Montar minha rotina personalizada
            </Link>
            <p className="mt-3 text-xs text-inkSoft">
              Leva cerca de 3 minutos. Não substitui acompanhamento profissional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center font-display text-2xl text-ink sm:text-3xl"
          >
            Como funciona
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-3">
            {passos.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-3xl bg-white p-7 shadow-card"
              >
                <span className="font-display text-3xl text-skySoft">{p.n}</span>
                <h3 className="mt-3 font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-inkSoft">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESAFIOS */}
      <section className="bg-paperAlt px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center font-display text-2xl text-ink sm:text-3xl"
          >
            Feito para famílias que enfrentam desafios como:
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {desafios.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-2xl bg-white p-5 shadow-card"
              >
                <p className="font-medium text-ink">{d.label}</p>
                <p className="mt-1 text-sm text-inkSoft">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PONTE PARA O KIT — pra quem quer algo prático hoje, sem esperar o Aurora abrir */}
      <section className="px-6 pb-4 pt-4 text-center">
        <motion.a
          href="/kit-rotina-visual"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-medium text-sky underline-offset-4 hover:underline"
        >
          Não quer esperar? Conheça o Kit de Rotina Visual →
        </motion.a>
      </section>

      {/* RODAPÉ HONESTO */}
      <footer className="px-6 py-10 text-center">
        <p className="mx-auto max-w-md text-xs text-inkSoft">
          O Projeto Aurora organiza rotinas e conecta famílias a estratégias práticas.
          Não realiza diagnóstico e não substitui terapeutas, médicos ou educadores.
        </p>
      </footer>
    </main>
  );
}
