"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe, Clock, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "US$ 415B",
    label: "Mercado OTC global em 2024",
    color: "from-sky-500/20 to-cyan-500/10",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/20"
  },
  {
    icon: Globe,
    value: "9.1%",
    label: "Volume LATAM do mercado global",
    color: "from-indigo-500/20 to-purple-500/10",
    iconColor: "text-indigo-400",
    borderColor: "border-indigo-500/20"
  },
  {
    icon: Clock,
    value: "10-30min",
    label: "Tempo de liquidação",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20"
  },
  {
    icon: ShieldCheck,
    value: "0% IOF",
    label: "Sem imposto sobre operações",
    color: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20"
  }
];

const StatsGrid = () => {
  return (
    <section className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-4 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group glass-card card-shine rounded-2xl p-5 sm:p-6"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} border ${stat.borderColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              
              <div className="mt-1.5 text-xs sm:text-sm text-white/40 leading-relaxed">
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
