"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Landmark, ArrowLeftRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      icon: UserPlus,
      title: "Crie sua conta",
      description: "Cadastro rápido com verificação KYC em minutos. Só precisamos de alguns dados básicos.",
      color: "from-sky-500/15 to-sky-500/5",
      iconColor: "text-sky-400",
      borderColor: "border-sky-500/15"
    },
    {
      id: "02",
      icon: Landmark,
      title: "Deposite via PIX",
      description: "Transfira BRL para sua carteira usando PIX. O saldo é creditado instantaneamente.",
      color: "from-emerald-500/15 to-emerald-500/5",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/15"
    },
    {
      id: "03",
      icon: ArrowLeftRight,
      title: "Converta para USDT",
      description: "Com um clique, converta seu saldo para USDT com a melhor taxa do mercado.",
      color: "from-indigo-500/15 to-indigo-500/5",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/15"
    },
  ];

  return (
    <section id="como-funciona" className="relative z-10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="section-badge mx-auto mb-5">Simples e rápido</div>
          <h2 className="font-section">
            Como funciona
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] sm:text-[15px] text-white/45">
            Em apenas 3 passos, converta seu dinheiro de forma segura e instantânea
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative glass-card card-shine rounded-2xl p-5 sm:p-6"
            >
              <span 
                className="absolute -right-1 -top-1 sm:-right-2 sm:-top-2 text-5xl sm:text-7xl font-bold text-white/[0.02] select-none pointer-events-none"
                aria-hidden="true"
              >
                {step.id}
              </span>

              <div className="relative z-10">
                <div className={`mb-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} border ${step.borderColor}`}>
                  <step.icon className={`h-[18px] w-[18px] sm:h-5 sm:w-5 ${step.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="text-[15px] sm:text-base font-semibold text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white/45 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute left-1/2 top-1/2 -z-10 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-sky-500/[0.04] blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default HowItWorks;
