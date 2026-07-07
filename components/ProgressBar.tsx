"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.min(100, Math.round((step / total) * 100));
  return (
    <div className="w-full">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-paperAlt">
        <motion.div
          className="h-full rounded-full bg-sky"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <p className="mt-2 text-xs text-inkSoft">
        Etapa {step} de {total}
      </p>
    </div>
  );
}
