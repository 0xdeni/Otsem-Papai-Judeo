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
    <section id="precos" className="relative z-10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="section-badge mx-auto mb-5">Preços</div>
          <h2 className="font-section">Taxas transparentes</h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] sm:text-[15px] text-white/45">
            Sem taxas escondidas. Você sabe exatamente quanto vai pagar.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className={`relative glass-card rounded-2xl p-5 sm:p-6 ${
                plan.popular 
                  ? "border-sky-500/15 hover:border-sky-500/20" 
                  : "hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 right-5">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${plan.popular ? 'bg-sky-500/10 border border-sky-500/15' : 'bg-white/5 border border-white/8'}`}>
                    <plan.icon className={`h-4 w-4 ${plan.popular ? 'text-sky-400' : 'text-white/60'}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-[15px] sm:text-base font-semibold text-white">{plan.name}</h3>
                </div>
                <p className="text-[12px] sm:text-[13px] text-white/40">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-[12px] font-medium text-white/45">{plan.priceLabel}</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                  <span className="text-[12px] text-white/35">{plan.priceSuffix}</span>
                </div>
              </div>

              <ul className="mb-6 space-y-2.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/15">
                      <Check className="h-2.5 w-2.5 text-emerald-400" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] text-white/55">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={handleButtonClick}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-xl py-3 text-[13px] font-semibold transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "glass-button text-white"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[550px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/[0.04] blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Pricing;
