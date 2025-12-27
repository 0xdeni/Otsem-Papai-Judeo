"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, X, Check, Crown } from "lucide-react";

const ComparisonSection = () => {
  const traditionalItems = [
    { label: "Spread bancário", value: "6% a 12%" },
    { label: "IOF", value: "0,38%" },
    { label: "Tarifa bancária", value: "0,1% a 2%" },
    { label: "Swift internacional", value: "R$ 100 a R$ 450" },
    { label: "Tempo de liquidação", value: "2 a 5 dias úteis" },
  ];

  const otcItems = [
    { label: "Spread OTC", value: "A partir de 3%" },
    { label: "IOF", value: "0% (isento)" },
    { label: "Tarifa OTC", value: "Incluso no spread" },
    { label: "Transferência", value: "Sem custo adicional" },
    { label: "Tempo de liquidação", value: "10 a 30 minutos" },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="mb-20 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                Comparativo Eficiente
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tightest text-foreground leading-tight">
                Por que OTC?
              </h2>
            </motion.div>
  
            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.1 }}
                className="liquid-glass rounded-[3rem] p-8 sm:p-12 border-red-500/10 hover:border-red-500/30 transition-all duration-500"
              >
                <div className="mb-10 flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/5 border border-red-500/10 shadow-sm">
                    <Building2 className="h-8 w-8 text-red-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tighter text-foreground">Bancos</h3>
                    <p className="text-[12px] font-black text-red-600/60 uppercase tracking-widest">Modelo Tradicional</p>
                  </div>
                </div>
                
                <ul className="space-y-6">
                  {traditionalItems.map((item, index) => (
                    <li key={index} className="flex items-center justify-between py-3 border-b border-black/[0.03] last:border-0">
                      <span className="text-[14px] font-semibold text-muted-foreground">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[14px] font-black text-red-600">{item.value}</span>
                        <X className="h-4 w-4 text-red-600/40" strokeWidth={3} />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.2 }}
                className="relative liquid-glass rounded-[3rem] p-8 sm:p-12 border-emerald-500/20 bg-emerald-500/[0.03] shadow-2xl shadow-emerald-500/5"
              >
                <div className="absolute -top-4 right-12">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20">
                    <Crown className="h-3.5 w-3.5" strokeWidth={2.5} />
                    Recomendado
                  </span>
                </div>
                
                <div className="mb-10 flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-sm">
                    <Zap className="h-8 w-8 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tighter text-foreground">Otsem Pay</h3>
                    <p className="text-[12px] font-black text-emerald-600 uppercase tracking-widest">Futuro Líquido</p>
                  </div>
                </div>
  
                <ul className="space-y-6">
                  {otcItems.map((item, index) => (
                    <li key={index} className="flex items-center justify-between py-3 border-b border-emerald-500/10 last:border-0">
                      <span className="text-[14px] font-semibold text-muted-foreground">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[14px] font-black text-emerald-600">{item.value}</span>
                        <Check className="h-4 w-4 text-emerald-600" strokeWidth={3} />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
