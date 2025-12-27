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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[11px] uppercase tracking-wider mb-6">
            Comparativo Eficiente
          </div>
          <h2 className="text-[32px] sm:text-5xl font-bold tracking-tight text-foreground">
            Por que escolher OTC?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/60 font-medium">
            Compare o câmbio tradicional com operações via ativos digitais e veja a economia real.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-[2.5rem] p-8 border-red-500/5 hover:border-red-500/20"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/20">
                <Building2 className="h-6 w-6 text-red-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Câmbio Convencional</h3>
                <p className="text-[13px] font-bold text-foreground/30 uppercase tracking-widest">Bancos tradicionais</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-foreground/[0.03] last:border-0">
                  <span className="text-[14px] font-medium text-foreground/50">{item.label}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[14px] font-bold text-red-600">{item.value}</span>
                    <X className="h-4 w-4 text-red-600/30" strokeWidth={3} />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative glass-card rounded-[2.5rem] p-8 border-emerald-500/5 hover:border-emerald-500/20 bg-emerald-500/[0.02]"
          >
            <div className="absolute -top-3 right-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Crown className="h-3.5 w-3.5" strokeWidth={2.5} />
                Recomendado
              </span>
            </div>
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <Zap className="h-6 w-6 text-emerald-600" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">OTC com Stablecoins</h3>
                <p className="text-[13px] font-bold text-emerald-600 uppercase tracking-widest">Otsem Pay</p>
              </div>
            </div>

            <ul className="space-y-4">
              {otcItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-emerald-500/10 last:border-0">
                  <span className="text-[14px] font-medium text-foreground/50">{item.label}</span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[14px] font-bold text-emerald-600">{item.value}</span>
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
