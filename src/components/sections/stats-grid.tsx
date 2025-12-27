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
        <section className="relative z-10 py-40 overflow-hidden">
          {/* Satoshi Digital Art Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-5 grayscale contrast-150 pointer-events-none">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766818564418.png" 
              alt="Satoshi Art" 
              className="w-full h-full object-contain rotate-12"
            />
          </div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-400 text-yellow-950 font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-xl shadow-yellow-400/20"
              >
                Snapshot em Tempo Real
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tightest max-w-4xl leading-tight"
              >
                Poder financeiro <br />
                <span className="text-primary/40">sem fronteiras.</span>
              </motion.h2>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`${stat.span} relative group`}
                >
                  <div className="liquid-glass p-12 rounded-[3rem] h-full flex flex-col justify-between transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 border border-white/40">
                    <div className="space-y-8">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.color} border ${stat.borderColor} shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                        <stat.icon className={`h-8 w-8 ${stat.iconColor}`} strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        <div className="text-6xl font-black tracking-tightest text-foreground mb-4 flex items-baseline gap-2">
                          {stat.value}
                          {stat.value.includes('%') && <span className="text-yellow-500 text-3xl">↑</span>}
                        </div>
                        
                        <div className="text-sm text-muted-foreground font-black uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
                          {stat.label}
                        </div>
                      </div>
                    </div>

                    {/* Accent Yellow Corner */}
                    {index === 1 && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-3xl -z-10 rounded-full" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default StatsGrid;
