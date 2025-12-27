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
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-8">
              Fluxo Inteligente
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tightest text-foreground">
              Como funciona.
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative liquid-glass rounded-[3rem] p-12 border border-white/40 shadow-xl shadow-black/5"
              >
                <span 
                  className="absolute right-8 top-8 text-4xl font-black text-primary/10 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.id}
                </span>

                <div className="relative z-10 space-y-8">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-primary/10 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                    <step.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black tracking-tighter text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default HowItWorks;
