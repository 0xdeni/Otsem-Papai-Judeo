"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe2, Timer, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "US$ 415B",
    label: "Mercado OTC global em 2024",
    color: "bg-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/10",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    icon: Globe2,
    value: "9.1%",
    label: "Volume LATAM do mercado global",
    color: "bg-yellow-400/5",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-400/10",
    span: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    icon: Timer,
    value: "10-30m",
    label: "Tempo de liquidação ultra-rápida",
    color: "bg-primary/5",
    iconColor: "text-primary",
    borderColor: "border-primary/10",
    span: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    icon: BadgeCheck,
    value: "0% IOF",
    label: "Sem imposto sobre operações",
    color: "bg-emerald-500/5",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-500/10",
    span: "col-span-1 md:col-span-2 lg:col-span-3"
  }
];

const StatsGrid = () => {
  return (
    <section className="relative z-10 py-40 lg:py-56 overflow-hidden">
      {/* Premium Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-20 opacity-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-600/5 blur-[160px] rounded-full -z-20 pointer-events-none" />

      {/* Satoshi Digital Art Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-[0.03] grayscale contrast-150 pointer-events-none">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766818564418.png" 
          alt="Satoshi Art" 
          className="w-full h-full object-contain rotate-12"
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-yellow-400 text-yellow-950 font-black text-[11px] uppercase tracking-[0.4em] mb-12 shadow-2xl shadow-yellow-400/30 ring-4 ring-yellow-400/10"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-950 animate-pulse" />
            Snapshot em Tempo Real
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tightest max-w-6xl leading-[0.85]"
          >
            Poder financeiro <br />
            <span className="text-primary/30">sem fronteiras.</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${stat.span} relative group h-full`}
            >
              <div className="liquid-glass p-14 rounded-[4rem] h-full flex flex-col justify-between transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-3 border border-white/60 group-hover:bg-white/60">
                <div className="space-y-12">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${stat.color} border-2 ${stat.borderColor} shadow-inner transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-primary/10`}>
                    <stat.icon className={`h-10 w-10 ${stat.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <div className="text-7xl lg:text-8xl font-black tracking-tightest text-foreground mb-6 flex items-baseline gap-3">
                      {stat.value}
                      {stat.value.includes('%') && <span className="text-yellow-500 text-4xl animate-bounce">↑</span>}
                    </div>
                    
                    <div className="text-sm text-muted-foreground font-black uppercase tracking-[0.3em] leading-relaxed max-w-[240px]">
                      {stat.label}
                    </div>
                  </div>
                </div>

                {/* Ambient glow in corner */}
                <div className={`absolute top-0 right-0 w-48 h-48 ${stat.iconColor} opacity-0 group-hover:opacity-[0.03] blur-[80px] -z-10 rounded-full transition-opacity duration-1000`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
