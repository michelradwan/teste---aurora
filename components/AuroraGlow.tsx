"use client";

import { motion } from "framer-motion";

/**
 * Elemento de assinatura visual: blobs de luz lentos, evocando o nome "Aurora".
 * Movimento sutil e contínuo — nunca chamativo, respeita prefers-reduced-motion
 * via globals.css (que zera durações de animação globalmente).
 */
export default function AuroraGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-sky/25 blur-[90px]"
        animate={{ x: [0, 40, -10, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[-10%] h-[380px] w-[380px] rounded-full bg-sage/25 blur-[100px]"
        animate={{ x: [0, -30, 20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-1/4 h-[340px] w-[340px] rounded-full bg-blush/20 blur-[100px]"
        animate={{ x: [0, 25, -15, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
