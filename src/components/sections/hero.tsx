"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Wallet, 
  ArrowDownLeft, 
  ArrowUpRight,
  RefreshCw,
  ChevronDown 
} from "lucide-react";
import haptic from "@/lib/haptics";

const HeroSection = () => {
  const handleButtonClick = useCallback(() => {
    haptic.medium();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative z-10 min-h-[100dvh] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-5 pt-20 pb-6 sm:px-6 sm:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <div className="section-badge mx-auto">
              <span className="status-dot text-emerald-400" />
              <span>Mais de R$ 50M transacionados</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-hero mx-auto max-w-3xl"
          >
            <span className="text-gradient-white">Revolucionando a forma</span>
            <br />
            <span className="text-gradient-shine">de mover dinheiro</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-5 max-w-lg text-[15px] sm:text-base text-white/50 font-normal leading-relaxed"
          >
            Operações OTC com transparência total. Converta BRL ↔ USDT em minutos 
            com taxas até 75% menores que o câmbio tradicional.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <motion.a 
              href="/register" 
              className="w-full sm:w-auto"
              onClick={handleButtonClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-primary w-full sm:w-auto h-12 sm:h-[52px] px-6 sm:px-7 rounded-xl sm:rounded-2xl text-[14px] sm:text-[15px] font-semibold flex items-center justify-center gap-2">
                Começar gratuitamente
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.a>
            <motion.a 
              href="#como-funciona" 
              className="w-full sm:w-auto"
              onClick={() => haptic.light()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-secondary w-full sm:w-auto h-12 sm:h-[52px] px-6 sm:px-7 rounded-xl sm:rounded-2xl text-[14px] sm:text-[15px] font-medium flex items-center justify-center gap-2">
                Ver como funciona
              </button>
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          >
            {[
              { icon: ShieldCheck, label: "Verificação KYC", color: "text-emerald-400" },
              { icon: Zap, label: "Liquidação instantânea", color: "text-amber-400" },
              { icon: Lock, label: "Criptografia E2E", color: "text-sky-400" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-[13px] text-white/40">
                <item.icon className={`h-4 w-4 ${item.color}`} strokeWidth={2} />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 sm:mt-14 w-full max-w-[320px] sm:max-w-[340px] mx-auto"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-b from-sky-500/15 via-cyan-500/8 to-transparent blur-3xl" />
          
          <motion.div 
            className="glass-liquid rounded-[2rem] p-1.5"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute left-1/2 top-2.5 h-5 w-16 -translate-x-1/2 rounded-full bg-black/90" />
            
            <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-zinc-900/95 to-black">
              <div className="p-5 pt-9">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Saldo total</p>
                    <p className="text-2xl font-bold tracking-tight text-white mt-0.5">R$ 12.540</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl icon-container">
                    <Wallet className="h-4.5 w-4.5 text-sky-400" strokeWidth={2} />
                  </div>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-2.5">
                  <div className="glass-card rounded-xl p-3">
                    <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider">BRL</p>
                    <p className="text-lg font-bold text-white mt-0.5">R$ 5.200</p>
                  </div>
                  <div className="glass-card rounded-xl p-3">
                    <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider">USDT</p>
                    <p className="text-lg font-bold text-white mt-0.5">$ 1.468</p>
                  </div>
                </div>

                <div className="mb-5 flex gap-2">
                  <motion.button 
                    className="flex-1 btn-primary rounded-xl py-2.5 text-[13px] font-semibold"
                    whileTap={{ scale: 0.97 }}
                    onClick={handleButtonClick}
                  >
                    Converter
                  </motion.button>
                  <motion.button 
                    className="flex-1 glass-button rounded-xl py-2.5 text-[13px] font-semibold text-white"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => haptic.light()}
                  >
                    Depositar
                  </motion.button>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-2.5">Últimas transações</p>
                  
                  <div className="glass-card rounded-xl p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <ArrowDownLeft className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-white">Depósito PIX</p>
                        <p className="text-[11px] text-white/30">Hoje, 14:32</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-emerald-400">+R$ 500</p>
                  </div>

                  <div className="glass-card rounded-xl p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20">
                        <RefreshCw className="h-3.5 w-3.5 text-sky-400" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-white">BRL → USDT</p>
                        <p className="text-[11px] text-white/30">Ontem, 18:15</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-white">$100</p>
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
        transition={{ delay: 1.1, duration: 0.6 }}
        className="pb-6 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/20">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-white/20" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
