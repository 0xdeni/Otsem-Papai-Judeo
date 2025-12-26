"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const CTABanner = () => {
  const benefits = [
    "Cadastro grátis",
    "Sem mensalidade",
    "Cancelar quando quiser"
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')] opacity-[0.03]" />
          
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Pronto para começar?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10"
            >
              Crie sua conta gratuitamente e comece a transacionar BRL ↔ USDT em minutos. 
              Sem compromisso, cancele quando quiser.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.a
                href="/register"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="h-14 px-8 rounded-2xl bg-white text-gray-900 font-semibold text-base flex items-center gap-2.5 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/25 transition-all">
                  Criar conta grátis
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.a>
              <motion.a
                href="/login"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/20 transition-all">
                  Já tenho conta
                </button>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-white/70">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
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
