"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe2, Timer, BadgeCheck } from "lucide-react";

const stats = [
    {
      icon: TrendingUp,
      value: "US$ 415B",
      label: "Mercado OTC global em 2024",
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: Globe2,
      value: "9.1%",
      label: "Volume LATAM do mercado global",
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: Timer,
      value: "10-30min",
      label: "Tempo de liquidação",
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: BadgeCheck,
      value: "0% IOF",
      label: "Sem imposto sobre operações",
      color: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-500/20"
    }
  ];

  const StatsGrid = () => {
    return (
      <section className="relative z-10 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group glass-card rounded-[2rem] p-6 sm:p-7"
              >
                <div className={`mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl ${stat.color} border ${stat.borderColor} transition-transform duration-500 group-hover:scale-110`}>
                  <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.iconColor}`} strokeWidth={2.5} />
                </div>
                
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                
                <div className="mt-1.5 text-[12px] sm:text-[13px] text-foreground/40 leading-relaxed font-bold uppercase tracking-wider">
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
