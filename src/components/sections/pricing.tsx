"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Headphones } from "lucide-react";
import haptic from "@/lib/haptics";

const Pricing = () => {
  const handleButtonClick = useCallback(() => {
    haptic.medium();
  }, []);

  const plans = [
    {
      name: "Operação OTC",
      description: "Spread que diminui com volumetria",
      priceLabel: "A partir de",
      price: "3%",
      priceSuffix: "por transação",
      features: [
        "Liquidação em 10-30 min",
        "0% IOF (isento)",
        "Contratos personalizados",
        "Suporte dedicado"
      ],
      cta: "Começar agora",
      icon: Sparkles,
      popular: false,
    },
    {
      name: "Alta Volumetria",
      description: "Para operações acima de R$ 500k",
      priceLabel: "Taxa sob",
      price: "consulta",
      priceSuffix: "por transação",
      features: [
        "Spreads negociáveis",
        "Atendimento VIP",
        "Mesa OTC dedicada",
        "Condições especiais"
      ],
      cta: "Falar com especialista",
      icon: Headphones,
      popular: true,
    }
  ];

  return (
    <section id="precos" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[11px] uppercase tracking-wider mb-6">
            Preços Claros
          </div>
          <h2 className="text-[32px] sm:text-5xl font-bold tracking-tight text-foreground">Taxas transparentes</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/60 font-medium leading-relaxed">
            Sem taxas escondidas. Você sabe exatamente quanto vai pagar em cada operação.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={`relative glass-card rounded-[2.5rem] p-8 ${
                plan.popular 
                  ? "bg-primary/[0.02] border-primary/20" 
                  : "border-white/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-8">
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary/60'}`}>
                    <plan.icon className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                </div>
                <p className="text-[14px] text-foreground/40 font-medium">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-[12px] font-bold uppercase tracking-widest text-foreground/30">{plan.priceLabel}</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
                  <span className="text-[13px] text-foreground/40 font-medium">{plan.priceSuffix}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-foreground/50 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={handleButtonClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-2xl py-4 text-[15px] font-bold transition-all shadow-lg ${
                  plan.popular
                    ? "btn-primary shadow-primary/25"
                    : "liquid-glass text-foreground"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
