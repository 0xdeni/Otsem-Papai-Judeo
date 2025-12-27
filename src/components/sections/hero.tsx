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
    <section className="relative z-10 min-h-[100dvh] flex flex-col pt-12">
      <div className="flex-1 flex flex-col items-center justify-center px-5 pt-20 pb-6 sm:px-6 sm:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[11px] uppercase tracking-wider">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Mais de R$ 50M transacionados
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[40px] sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[0.95] mb-6"
          >
            Mova seu capital <br />
            <span className="text-primary italic">sem fronteiras</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mx-auto max-w-xl text-base sm:text-lg text-foreground/60 font-medium leading-relaxed"
          >
            Operações OTC com transparência total. Converta BRL para USDT <br className="hidden sm:block" />
            em minutos com as melhores taxas do mercado.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.a 
              href="/register" 
              className="w-full sm:w-auto"
              onClick={handleButtonClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-primary w-full sm:w-auto h-14 px-8 rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/25">
                Começar agora
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
              <button className="liquid-glass w-full sm:w-auto h-14 px-8 rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 text-foreground">
                Ver como funciona
              </button>
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-60"
          >
            {[
              { icon: ShieldCheck, label: "Verificação KYC", color: "text-foreground" },
              { icon: Zap, label: "Liquidação Instantânea", color: "text-foreground" },
              { icon: Lock, label: "Segurança Bancária", color: "text-foreground" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-foreground">
                <item.icon className="h-4 w-4 text-primary" strokeWidth={2.5} />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 sm:mt-20 w-full max-w-[340px] mx-auto"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          </div>
          
          <motion.div 
            className="liquid-glass rounded-[3rem] p-3 shadow-2xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-[2.5rem] bg-white border border-black/5 aspect-[9/18.5] relative">
              {/* iPhone style notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-2xl z-20" />
              
              <div className="p-6 pt-12 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">Seu saldo</p>
                    <p className="text-3xl font-bold tracking-tight text-foreground mt-1">R$ 12.540</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Wallet className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="liquid-glass p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-foreground/30 uppercase">BRL</p>
                    <p className="text-lg font-bold text-foreground mt-0.5">R$ 5.200</p>
                  </div>
                  <div className="liquid-glass p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-foreground/30 uppercase">USDT</p>
                    <p className="text-lg font-bold text-foreground mt-0.5">$ 1.468</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest px-1">Atividades</p>
                  
                  <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                        <ArrowDownLeft className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-foreground">Depósito PIX</p>
                        <p className="text-[11px] font-medium text-foreground/30">Hoje, 14:32</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-emerald-600">+R$ 500</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <RefreshCw className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-foreground">BRL → USDT</p>
                        <p className="text-[11px] font-medium text-foreground/30">Ontem, 18:15</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-foreground">$100</p>
                  </div>
                </div>

                <button className="w-full h-12 btn-primary rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                  Transferir agora
                </button>
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
        <span className="text-[10px] font-semibold uppercase tracking-widest text-black/20">Role para explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-black/20" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
