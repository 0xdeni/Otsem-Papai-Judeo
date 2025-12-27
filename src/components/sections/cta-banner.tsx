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
    <section className="relative z-10 py-14 sm:py-20 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')] opacity-[0.025]" />
          
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-6 sm:p-10 md:p-14 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15"
            >
              <Sparkles className="h-3.5 w-3.5 text-white/80" strokeWidth={2} />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Oferta limitada</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Pronto para começar?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg mx-auto text-[14px] sm:text-[15px] text-white/70 leading-relaxed mb-8"
            >
              Crie sua conta gratuitamente e comece a transacionar BRL ↔ USDT em minutos. 
              Sem compromisso, cancele quando quiser.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
            >
              <motion.a
                href="/register"
                onClick={handleButtonClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="h-12 px-6 rounded-xl bg-white text-gray-900 font-semibold text-[14px] flex items-center gap-2 shadow-lg shadow-black/15 hover:shadow-xl transition-all active:scale-[0.98]">
                  Criar conta grátis
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.a>
              <motion.a
                href="/login"
                onClick={() => haptic.light()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="h-12 px-6 rounded-xl border border-white/20 bg-white/8 text-white font-semibold text-[14px] backdrop-blur-sm hover:bg-white/15 transition-all active:scale-[0.98]">
                  Já tenho conta
                </button>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-white/65">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white/15">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </div>
                  <span>{benefit}</span>
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
