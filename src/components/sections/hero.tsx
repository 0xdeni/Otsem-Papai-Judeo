"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Lock, PiggyBank, ArrowUpRight, Repeat, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative z-10 min-h-[100dvh] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-5 pt-24 pb-8 sm:px-6 sm:pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="section-badge mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Mais de R$ 50M transacionados</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-hero mx-auto max-w-4xl"
          >
            <span className="text-gradient-white">Revolucionando a forma</span>
            <br />
            <span className="text-gradient-shine">de mover dinheiro</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-white/50 font-normal leading-relaxed"
          >
            Operações OTC com transparência total. Converta BRL ↔ USDT em minutos 
            com taxas até 75% menores que o câmbio tradicional.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a 
              href="/register" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-primary w-full sm:w-auto h-14 px-8 rounded-2xl text-base font-semibold flex items-center justify-center gap-2">
                Começar gratuitamente
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.a>
            <motion.a 
              href="#como-funciona" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-secondary w-full sm:w-auto h-14 px-8 rounded-2xl text-base font-medium flex items-center justify-center gap-2">
                Ver como funciona
              </button>
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {[
              { icon: ShieldCheck, label: "Verificação KYC", color: "text-emerald-400" },
              { icon: Zap, label: "Liquidação instantânea", color: "text-amber-400" },
              { icon: Lock, label: "Criptografia end-to-end", color: "text-sky-400" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/40">
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 sm:mt-16 w-full max-w-sm mx-auto"
        >
          <div className="absolute inset-0 -z-10 scale-125 rounded-[4rem] bg-gradient-to-b from-sky-500/20 via-cyan-500/10 to-transparent blur-3xl" />
          
          <motion.div 
            className="glass-liquid rounded-[2.5rem] p-1.5 sm:p-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute left-1/2 top-3 h-6 w-20 -translate-x-1/2 rounded-full bg-black/90 backdrop-blur-sm" />
            
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900/90 to-black">
              <div className="p-5 sm:p-6 pt-10 sm:pt-12">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Saldo total</p>
                    <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">R$ 12.540</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/10 border border-white/5">
                    <PiggyBank className="h-5 w-5 text-sky-400" />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="glass-card rounded-xl p-3.5">
                    <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider">BRL</p>
                    <p className="text-lg font-bold text-white mt-0.5">R$ 5.200</p>
                  </div>
                  <div className="glass-card rounded-xl p-3.5">
                    <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider">USDT</p>
                    <p className="text-lg font-bold text-white mt-0.5">$ 1.468</p>
                  </div>
                </div>

                <div className="mb-6 flex gap-2">
                  <button className="flex-1 btn-primary rounded-xl py-3 text-sm font-semibold">
                    Converter
                  </button>
                  <button className="flex-1 glass-button rounded-xl py-3 text-sm font-semibold text-white">
                    Depositar
                  </button>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-3">Últimas transações</p>
                  
                  <div className="glass-card rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <ArrowUpRight className="h-4 w-4 text-emerald-400 rotate-180" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Depósito PIX</p>
                        <p className="text-[11px] text-white/30">Hoje, 14:32</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-emerald-400">+R$ 500</p>
                  </div>

                  <div className="glass-card rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20">
                        <Repeat className="h-4 w-4 text-sky-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">BRL → USDT</p>
                        <p className="text-[11px] text-white/30">Ontem, 18:15</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-white">$100</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pb-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
