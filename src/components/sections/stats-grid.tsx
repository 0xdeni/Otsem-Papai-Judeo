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
        <section className="relative z-10 py-32 overflow-hidden">
          {/* Subtle Background Art */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-[0.03] grayscale pointer-events-none">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766818564418.png" 
              alt="Satoshi" 
              className="w-full h-full object-cover scale-150"
            />
          </div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6"
              >
                Snapshot do Mercado
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter max-w-3xl"
              >
                Números que definem a <span className="text-primary">nova era</span> financeira.
              </motion.h2>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  <div className="liquid-glass p-10 rounded-[2.5rem] h-full flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.02] hover:bg-white/60">
                    <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] ${stat.color} border ${stat.borderColor} shadow-inner transition-transform duration-700 group-hover:rotate-[360deg]`}>
                      <stat.icon className={`h-10 w-10 ${stat.iconColor}`} strokeWidth={1.5} />
                    </div>
                    
                    <div className="text-5xl font-black tracking-tighter text-foreground mb-3 flex items-baseline gap-1">
                      {stat.value}
                      {stat.value.includes('%') && <span className="text-yellow-500 text-2xl">↑</span>}
                    </div>
                    
                    <div className="text-sm text-muted-foreground font-black uppercase tracking-[0.15em] leading-relaxed">
                      {stat.label}
                    </div>

                    {/* Premium Accent Line */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default StatsGrid;
