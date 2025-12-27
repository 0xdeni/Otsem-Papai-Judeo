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
    <section id="como-funciona" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[11px] uppercase tracking-wider mb-6">
            Processo Simples
          </div>
          <h2 className="text-[32px] sm:text-5xl font-bold tracking-tight text-foreground">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/60 font-medium leading-relaxed">
            Em apenas 3 passos, você converte seu dinheiro de forma segura e instantânea com total transparência.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative glass-card rounded-[2.5rem] p-8"
            >
              <span 
                className="absolute -right-2 -top-2 text-6xl sm:text-8xl font-bold text-foreground/[0.03] select-none pointer-events-none"
                aria-hidden="true"
              >
                {step.id}
              </span>

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 transition-transform duration-500 group-hover:scale-110">
                  <step.icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-foreground/50 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
