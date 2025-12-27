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
      <section className="relative z-10 py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group premium-card"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color} border ${stat.borderColor} transition-all duration-500 group-hover:rotate-6`}>
                  <stat.icon className={`h-7 w-7 ${stat.iconColor}`} strokeWidth={2.5} />
                </div>
                
                <div className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                  {stat.value}
                </div>
                
                <div className="mt-2 text-sm text-muted-foreground font-bold uppercase tracking-widest">
                  {stat.label}
                </div>

                <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  <stat.icon className="h-20 w-20 text-foreground" strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default StatsGrid;
