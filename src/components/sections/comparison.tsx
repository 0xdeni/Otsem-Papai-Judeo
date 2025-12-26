"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Zap, X, Check } from "lucide-react";

const ComparisonSection = () => {
  const traditionalItems = [
    { label: "Spread bancário", value: "6% a 12%", bad: true },
    { label: "IOF", value: "0,38%", bad: true },
    { label: "Tarifa bancária", value: "0,1% a 2%", bad: true },
    { label: "Swift internacional", value: "R$ 100 a R$ 450", bad: true },
    { label: "Tempo de liquidação", value: "2 a 5 dias úteis", bad: true },
  ];

  const otcItems = [
    { label: "Spread OTC", value: "A partir de 3%", good: true },
    { label: "IOF", value: "0% (isento)", good: true },
    { label: "Tarifa OTC", value: "Incluso no spread", good: true },
    { label: "Transferência", value: "Sem custo adicional", good: true },
    { label: "Tempo de liquidação", value: "10 a 30 minutos", good: true },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="section-badge mx-auto mb-6">Comparativo</div>
          <h2 className="font-section">
            Por que escolher OTC?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/50">
            Compare o câmbio tradicional com operações via ativos digitais
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-red-500/10 hover:border-red-500/20"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/10 border border-red-500/20">
                <Building2 className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Câmbio Convencional</h3>
                <p className="text-sm text-white/40">Bancos tradicionais</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {traditionalItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-white/50">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-red-400">{item.value}</span>
                    <X className="h-4 w-4 text-red-400/50" />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-emerald-500/20 hover:border-emerald-500/30"
          >
            <div className="absolute -top-3 right-6">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                Recomendado
              </span>
            </div>
            
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20">
                <Zap className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">OTC com Stablecoins</h3>
                <p className="text-sm text-white/40">Otsem Bank</p>
              </div>
            </div>

            <ul className="space-y-4">
              {otcItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-white/50">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-emerald-400">{item.value}</span>
                    <Check className="h-4 w-4 text-emerald-400/70" />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default ComparisonSection;
