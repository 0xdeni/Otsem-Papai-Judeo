"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import haptic from "@/lib/haptics";

const CTABanner = () => {
  const handleButtonClick = useCallback(() => {
    haptic.medium();
  }, []);

  const benefits = [
    "Cadastro grátis",
    "Sem mensalidade",
    "Cancelar quando quiser"
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#7c3aed]" />
          
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white">Oferta limitada</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Pronto para mover seu <br /> capital com liberdade?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed font-medium mb-10"
            >
              Crie sua conta gratuitamente e comece a transacionar BRL e USDT em minutos. 
              Sem taxas de adesão, sem complicações.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <motion.a
                href="/register"
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="h-16 px-10 rounded-2xl bg-white text-primary font-bold text-[16px] flex items-center gap-2 shadow-2xl shadow-black/10 hover:shadow-white/20 transition-all">
                  Criar conta grátis
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </motion.a>
              <motion.a
                href="/login"
                onClick={() => haptic.light()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="h-16 px-10 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-[16px] backdrop-blur-sm hover:bg-white/10 transition-all">
                  Já tenho conta
                </button>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-10"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-[13px] font-bold text-white/70">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 border border-white/30">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="uppercase tracking-widest">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
