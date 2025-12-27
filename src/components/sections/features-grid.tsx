"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeftRight, 
  Scan, 
  ShieldCheck, 
  Globe2, 
  Zap, 
  ShieldAlert, 
  KeyRound, 
  FileCheck2 
} from "lucide-react";

const FeaturesGrid = () => {
  const secondaryFeatures = [
    {
      icon: ArrowLeftRight,
      title: "Conversão instantânea",
      description: "BRL ↔ USDT em segundos"
    },
    {
      icon: Scan,
      title: "PIX integrado",
      description: "Depósitos e saques rápidos"
    },
    {
      icon: ShieldCheck,
      title: "Segurança total",
      description: "Criptografia de ponta"
    },
    {
      icon: Globe2,
      title: "Sem fronteiras",
      description: "Opere de qualquer lugar"
    }
  ];

  const mainFeatures = [
    {
      icon: FileCheck2,
      title: "Flexibilidade Contratual",
      description: "Contratos ajustados entre as partes. Condições de valores, prazos e volumes personalizados.",
      color: "from-sky-500/15 to-sky-500/5",
      iconColor: "text-sky-400",
      borderColor: "border-sky-500/15"
    },
    {
      icon: Zap,
      title: "Maior Agilidade",
      description: "Negociações rápidas e adaptadas à urgência. Liquidação em 10 a 30 minutos.",
      color: "from-amber-500/15 to-amber-500/5",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/15"
    },
    {
      icon: KeyRound,
      title: "Confidencialidade",
      description: "Transações não são públicas como nas bolsas. Vantagem estratégica para alto volume.",
      color: "from-emerald-500/15 to-emerald-500/5",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/15"
    },
    {
      icon: ShieldAlert,
      title: "Segurança e Compliance",
      description: "Operamos dentro de todas as regulamentações. KYC rigoroso e monitoramento 24/7.",
      color: "from-indigo-500/15 to-indigo-500/5",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/15"
    },
  ];

  return (
    <section id="recursos" className="relative z-10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 sm:mb-14">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-badge mb-5">Recursos</div>
              <h2 className="font-section leading-tight">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] text-white/45 leading-relaxed">
                Ferramentas poderosas para gerenciar suas conversões com total controle e transparência.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-3 grid-cols-2"
            >
              {secondaryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="glass-card rounded-xl p-3.5 sm:p-4"
                >
                  <div className="mb-2.5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/15 to-sky-500/5 border border-sky-500/15">
                    <feature.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sky-400" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-white text-[13px] sm:text-[14px]">{feature.title}</h3>
                  <p className="mt-0.5 text-[11px] sm:text-[12px] text-white/40">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="glass-card card-shine rounded-xl sm:rounded-2xl p-4 sm:p-5"
            >
              <div className={`mb-3 sm:mb-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} border ${feature.borderColor}`}>
                <feature.icon className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${feature.iconColor}`} strokeWidth={2} />
              </div>
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-white mb-1.5">{feature.title}</h3>
              <p className="text-[12px] sm:text-[13px] text-white/45 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 divider-glow" />
    </section>
  );
};

export default FeaturesGrid;
