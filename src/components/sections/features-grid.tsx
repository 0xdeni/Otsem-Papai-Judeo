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
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: Zap,
      title: "Maior Agilidade",
      description: "Negociações rápidas e adaptadas à urgência. Liquidação em 10 a 30 minutos.",
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: KeyRound,
      title: "Confidencialidade",
      description: "Transações não são públicas como nas bolsas. Vantagem estratégica para alto volume.",
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
    {
      icon: ShieldAlert,
      title: "Segurança e Compliance",
      description: "Operamos dentro de todas as regulamentações. KYC rigoroso e monitoramento 24/7.",
      color: "bg-primary/10",
      iconColor: "text-primary",
      borderColor: "border-primary/20"
    },
  ];

  return (
    <section id="recursos" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-16 sm:mb-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[11px] uppercase tracking-wider mb-6">
                Recursos Premium
              </div>
              <h2 className="text-[32px] sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="mt-5 text-base text-foreground/50 leading-relaxed font-medium max-w-md">
                Ferramentas poderosas para gerenciar suas conversões com total controle, privacidade e segurança.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-4 grid-cols-2"
            >
              {secondaryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-[2rem] p-5 border-white/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <feature.icon className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-foreground text-[14px]">{feature.title}</h3>
                  <p className="mt-1 text-[12px] text-foreground/40 font-medium leading-tight">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card group"
              >
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[2rem] ${feature.color} border ${feature.borderColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-primary/5`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
