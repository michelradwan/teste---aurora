"use client";

import { motion } from "framer-motion";
import AuroraGlow from "@/components/AuroraGlow";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const dores = [
  "Sente que precisa pensar em tudo sozinha, o tempo todo",
  "Já tentou rotina visual, mas não sabia por onde começar de verdade",
  "Fica sem chão nos momentos de crise, sem saber o que fazer nos primeiros segundos",
  "Está cansada de conteúdo genérico que não fala do seu filho específico",
];

const comoFunciona = [
  { n: "1", titulo: "Baixe", desc: "Recebe tudo no WhatsApp na hora — sem esperar e-mail." },
  { n: "2", titulo: "Imprima", desc: "Cartões e checklist já formatados. Sem montar nada do zero." },
  { n: "3", titulo: "Aplique hoje à noite", desc: "A primeira mudança pode começar ainda essa noite, não semana que vem." },
];

const itensKit = [
  {
    titulo: "Cartões de rotina visual prontos",
    desc: "Manhã, escola, tarde e noite — já formatados. Só imprimir, recortar e colar, sem precisar desenhar ou montar nada.",
  },
  {
    titulo: "Checklist de organização sensorial",
    desc: "Uma página. 5 minutos de leitura, ajustes que você já aplica hoje mesmo no ambiente.",
  },
  {
    titulo: "Roteiro para momentos difíceis",
    desc: "Passo a passo pra seguir na hora, sem precisar decorar nada antes.",
  },
  {
    titulo: "4 vídeos curtos de aplicação",
    desc: "De 2 a 5 minutos cada — dá pra assistir todos no tempo de um cafezinho.",
  },
];

const naoE = [
  "Não é diagnóstico",
  "Não substitui terapeuta, médico ou educador",
  "Não promete resultado em X dias",
];

export default function KitRotinaVisualPage() {
  return (
    <main className="relative min-h-screen bg-paper text-ink">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
        <AuroraGlow />
        <div className="relative mx-auto max-w-2xl text-center">
          <motion.span
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-inkSoft shadow-card"
          >
            Kit de Rotina Visual · por Projeto Aurora
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-ink sm:text-5xl"
          >
            Sua manhã sem briga, começando hoje à noite.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-md text-base text-inkSoft sm:text-lg"
          >
            Um kit pronto pra imprimir — sem estudar teoria, sem gastar o
            fim de semana montando nada do zero. A primeira mudança pode
            começar ainda essa noite.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-9"
          >
            <a
              href="#garantir"
              className="inline-flex items-center justify-center rounded-full bg-sky px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-[#4d6d92]"
            >
              Quero o kit por R$ 67
            </a>
            <p className="mt-3 text-xs text-inkSoft">
              Acesso imediato. Pagamento único, sem assinatura.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-inkSoft">
              <span>✓ Pronto em 10 minutos</span>
              <span>✓ Sem experiência necessária</span>
              <span>✓ Garantia de 7 dias</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA — reduz percepção de esforço e tempo até o resultado */}
      <section className="px-6 pb-4 pt-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {comoFunciona.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-6 text-center shadow-card"
              >
                <span className="font-display text-2xl text-skySoft">{c.n}</span>
                <h3 className="mt-2 font-display text-base text-ink">{c.titulo}</h3>
                <p className="mt-1 text-xs text-inkSoft">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DORES */}
      <section className="bg-paperAlt px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center font-display text-2xl text-ink sm:text-3xl"
          >
            Se algo disso soa familiar, esse kit foi feito pra você:
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2">
            {dores.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="rounded-2xl bg-white p-5 text-sm text-ink shadow-card"
              >
                {d}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE TEM DENTRO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center font-display text-2xl text-ink sm:text-3xl"
          >
            O que vem no kit
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2">
            {itensKit.map((item, i) => (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-7 shadow-card"
              >
                <h3 className="font-display text-lg text-ink">{item.titulo}</h3>
                <p className="mt-2 text-sm text-inkSoft">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE NÃO É — transparência que protege a marca */}
      <section className="bg-paperAlt px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md rounded-3xl bg-white p-7 text-center shadow-card"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-inkSoft">
            Pra deixar claro
          </p>
          <ul className="mt-4 space-y-2">
            {naoE.map((n) => (
              <li key={n} className="text-sm text-ink">
                {n}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* GARANTIA — aumenta a probabilidade percebida de sucesso, reduz risco de compra */}
      <section className="px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md rounded-3xl bg-sky/10 p-7 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-sky">
            Garantia de 7 dias
          </p>
          <p className="mt-3 text-sm text-ink">
            Aplica o kit essa semana. Se sentir que não fez diferença
            nenhuma pra rotina da sua família, devolvemos 100% do valor —
            sem perguntas.
          </p>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section id="garantir" className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-lg overflow-hidden rounded-4xl bg-white p-10 text-center shadow-soft"
        >
          <p className="font-display text-2xl text-ink sm:text-3xl">
            Sua próxima manhã pode ser diferente
          </p>
          <p className="mt-3 text-sm text-inkSoft">
            R$ 67 à vista · acesso imediato · garantia de 7 dias
          </p>
          <a
            href="https://wa.me/5588999999999?text=Quero%20o%20Kit%20de%20Rotina%20Visual"
            target="_blank"
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-sky px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-[#4d6d92] sm:w-auto"
          >
            Garantir meu kit no WhatsApp
          </a>
          <p className="mt-4 text-xs text-inkSoft">
            Dúvidas antes de comprar? Chama a gente no mesmo WhatsApp.
          </p>
        </motion.div>
      </section>

      {/* PONTE PARA O AURORA */}
      <section className="px-6 pb-4 text-center">
        <a
          href="/"
          className="inline-block text-sm font-medium text-sky underline-offset-4 hover:underline"
        >
          Quer algo feito sob medida pro seu filho? Conheça o Projeto Aurora →
        </a>
      </section>

      <footer className="px-6 pb-14 text-center">
        <p className="mx-auto max-w-md text-xs text-inkSoft">
          Este material é educativo e organizacional. Não realiza diagnóstico
          e não substitui acompanhamento profissional especializado.
        </p>
      </footer>
    </main>
  );
}
