"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe2, Timer, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "US$ 415B",
    label: "Mercado OTC global em 2024",
    color: "from-sky-500/15 to-sky-500/5",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/15"
  },
  {
    icon: Globe2,
    value: "9.1%",
    label: "Volume LATAM do mercado global",
    color: "from-indigo-500/15 to-indigo-500/5",
    iconColor: "text-indigo-400",
    borderColor: "border-indigo-500/15"
  },
  {
    icon: Timer,
    value: "10-30min",
    label: "Tempo de liquidação",
    color: "from-amber-500/15 to-amber-500/5",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/15"
  },
  {
    icon: BadgeCheck,
    value: "0% IOF",
    label: "Sem imposto sobre operações",
    color: "from-emerald-500/15 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/15"
  }
];

const StatsGrid = () => {
  return (
    <section className="relative z-10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="group glass-card card-shine rounded-xl sm:rounded-2xl p-4 sm:p-5"
            >
              <div className={`mb-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} border ${stat.borderColor}`}>
                <stat.icon className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${stat.iconColor}`} strokeWidth={2} />
              </div>
              
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              
              <div className="mt-1 text-[11px] sm:text-xs text-white/40 leading-relaxed font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
