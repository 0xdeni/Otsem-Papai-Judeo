"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Banknote, Repeat } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      icon: Users,
      title: "Crie sua conta",
      description: "Cadastro rápido com verificação KYC em minutos. Só precisamos de alguns dados básicos.",
      color: "from-sky-500/20 to-cyan-500/10",
      iconColor: "text-sky-400",
      borderColor: "border-sky-500/20"
    },
    {
      id: "02",
      icon: Banknote,
      title: "Deposite via PIX",
      description: "Transfira BRL para sua carteira usando PIX. O saldo é creditado instantaneamente.",
      color: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20"
    },
    {
      id: "03",
      icon: Repeat,
      title: "Converta para USDT",
      description: "Com um clique, converta seu saldo para USDT com a melhor taxa do mercado.",
      color: "from-indigo-500/20 to-purple-500/10",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/20"
    },
  ];

  return (
    <section id="como-funciona" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="section-badge mx-auto mb-6">Simples e rápido</div>
          <h2 className="font-section">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/50">
            Em apenas 3 passos, converta seu dinheiro de forma segura e instantânea
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative glass-card card-shine rounded-2xl sm:rounded-3xl p-6 sm:p-8"
            >
              <span 
                className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 text-6xl sm:text-8xl font-bold text-white/[0.02] select-none"
                aria-hidden="true"
              >
                {step.id}
              </span>

              <div className="relative z-10">
                <div className={`mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} border ${step.borderColor}`}>
                  <step.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${step.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default HowItWorks;
