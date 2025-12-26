"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Repeat, 
  CreditCard, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Shield, 
  Lock, 
  FileText 
} from "lucide-react";

const FeaturesGrid = () => {
  const secondaryFeatures = [
    {
      icon: Repeat,
      title: "Conversão instantânea",
      description: "BRL ↔ USDT em segundos"
    },
    {
      icon: CreditCard,
      title: "PIX integrado",
      description: "Depósitos e saques rápidos"
    },
    {
      icon: ShieldCheck,
      title: "Segurança total",
      description: "Criptografia de ponta"
    },
    {
      icon: Globe,
      title: "Sem fronteiras",
      description: "Opere de qualquer lugar"
    }
  ];

  const mainFeatures = [
    {
      icon: Repeat,
      title: "Flexibilidade Contratual",
      description: "Contratos ajustados entre as partes. Condições de valores, prazos e volumes personalizados de acordo com a necessidade.",
      color: "from-sky-500/20 to-cyan-500/10",
      iconColor: "text-sky-400",
      borderColor: "border-sky-500/20"
    },
    {
      icon: Zap,
      title: "Maior Agilidade",
      description: "Negociações rápidas e adaptadas à urgência do cliente. Liquidação em 10 a 30 minutos, não em dias.",
      color: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/20"
    },
    {
      icon: Lock,
      title: "Confidencialidade",
      description: "Transações não são públicas como nas bolsas. Vantagem estratégica para operações de alto volume.",
      color: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: Shield,
      title: "Segurança e Compliance",
      description: "Operamos dentro de todas as regulamentações brasileiras. KYC rigoroso e monitoramento 24/7.",
      color: "from-indigo-500/20 to-purple-500/10",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/20"
    },
    {
      icon: FileText,
      title: "Instrumentos Customizados",
      description: "Acesso a estruturas personalizadas com derivativos OTC que protegem suas operações de riscos cambiais.",
      color: "from-rose-500/20 to-pink-500/10",
      iconColor: "text-rose-400",
      borderColor: "border-rose-500/20"
    }
  ];

  return (
    <section id="recursos" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-16">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-badge mb-6">Recursos</div>
              <h2 className="font-section leading-tight">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed">
                Ferramentas poderosas para gerenciar suas conversões com total controle e transparência.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid gap-3 sm:gap-4 grid-cols-2"
            >
              {secondaryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/10 border border-sky-500/20">
                    <feature.icon className="h-4 w-4 text-sky-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/40">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass-card card-shine rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
                index >= 3 ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} border ${feature.borderColor}`}>
                <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-[15px] text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default FeaturesGrid;
