"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
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
      popular: false,
      gradient: "from-white/5 to-white/[0.02]"
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
      popular: true,
      gradient: "from-sky-500/10 to-cyan-500/5"
    }
  ];

  return (
    <section id="precos" className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="section-badge mx-auto mb-6">Preços</div>
          <h2 className="font-section">Taxas transparentes</h2>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/50">
            Sem taxas escondidas. Você sabe exatamente quanto vai pagar.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`relative glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
                plan.popular 
                  ? "border-sky-500/20 hover:border-sky-500/30" 
                  : "hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-white/40">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-sm font-medium text-white/50">{plan.priceLabel}</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{plan.price}</span>
                  <span className="text-sm text-white/40">{plan.priceSuffix}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-400" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full rounded-xl py-3.5 text-sm font-semibold transition-all ${
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
      
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Pricing;
