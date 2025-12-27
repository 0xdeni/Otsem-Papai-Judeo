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
    <section className="relative z-10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="section-badge mx-auto mb-5">Comparativo</div>
          <h2 className="font-section">
            Por que escolher OTC?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] sm:text-[15px] text-white/45">
            Compare o câmbio tradicional com operações via ativos digitais
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-5 sm:p-6 border-red-500/10 hover:border-red-500/15"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/15 to-rose-500/5 border border-red-500/15">
                <Building2 className="h-[18px] w-[18px] text-red-400" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white">Câmbio Convencional</h3>
                <p className="text-[12px] text-white/35">Bancos tradicionais</p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {traditionalItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                  <span className="text-[13px] text-white/45">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-red-400/80">{item.value}</span>
                    <X className="h-3.5 w-3.5 text-red-400/40" strokeWidth={2.5} />
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
            className="relative glass-card rounded-2xl p-5 sm:p-6 border-emerald-500/15 hover:border-emerald-500/20"
          >
            <div className="absolute -top-2.5 right-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Crown className="h-3 w-3" strokeWidth={2.5} />
                Recomendado
              </span>
            </div>
            
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/5 border border-emerald-500/15">
                <Zap className="h-[18px] w-[18px] text-emerald-400" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white">OTC com Stablecoins</h3>
                <p className="text-[12px] text-white/35">Otsem Bank</p>
              </div>
            </div>

            <ul className="space-y-3">
              {otcItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0">
                  <span className="text-[13px] text-white/45">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-emerald-400">{item.value}</span>
                    <Check className="h-3.5 w-3.5 text-emerald-400/60" strokeWidth={2.5} />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 divider-glow" />
    </section>
  );
};

export default ComparisonSection;
