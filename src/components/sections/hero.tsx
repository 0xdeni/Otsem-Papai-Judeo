"use client";

import React, { useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Wallet,
  ArrowDownLeft,
  RefreshCw,
  ChevronDown,
  Globe,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Repeat,
  LayoutGrid } from
"lucide-react";
import haptic from "@/lib/haptics";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleButtonClick = useCallback(() => {
    haptic.medium();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1
      }
    }
  };

  return (
    <section className="relative z-10 min-h-[100dvh] flex flex-col pt-32 lg:pt-40 overflow-hidden">
      {/* Premium Gradient Backgrounds */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[160px] rounded-full animate-liquid pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[140px] rounded-full animate-liquid pointer-events-none" style={{ animationDelay: '-5s' }} />

      <div className="container mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center gap-16 lg:gap-24 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[55%] text-left relative z-20">

          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl shadow-black/5 text-primary font-black text-[10px] uppercase tracking-[0.4em]">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)]" />
              <span className="whitespace-nowrap">WEB3 BORDERLESS BANKING</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-black tracking-tightest text-foreground leading-[0.85] mb-14 relative">

            <div className="relative mb-2 whitespace-nowrap">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] text-foreground block drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70">
                Sua ponte
              </span>
            </div>

            {/* The Yellow Wave - Refined and Glowing Flow */}
            <div className="relative h-12 sm:h-16 lg:h-20 -my-4 sm:-my-6 lg:-my-8 z-10">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.4, type: "spring", stiffness: 50 }}
                className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 1000 100" className="w-full h-full preserve-3d">
                  <defs>
                    <linearGradient id="waveGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EAB308" stopOpacity="0" />
                      <stop offset="20%" stopColor="#EAB308" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#FACC15" stopOpacity="1" />
                      <stop offset="80%" stopColor="#EAB308" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.path
                    d="M 0 50 Q 125 0 250 50 T 500 50 T 750 50 T 1000 50"
                    fill="none"
                    stroke="url(#waveGradientHero)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    animate={{
                      d: [
                        "M 0 50 Q 125 0 250 50 T 500 50 T 750 50 T 1000 50",
                        "M 0 50 Q 125 100 250 50 T 500 50 T 750 50 T 1000 50",
                        "M 0 50 Q 125 0 250 50 T 500 50 T 750 50 T 1000 50"
                      ]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.path
                    d="M 0 50 Q 125 100 250 50 T 500 50 T 750 50 T 1000 50"
                    fill="none"
                    stroke="url(#waveGradientHero)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.5"
                    animate={{
                      d: [
                        "M 0 50 Q 125 100 250 50 T 500 50 T 750 50 T 1000 50",
                        "M 0 50 Q 125 0 250 50 T 500 50 T 750 50 T 1000 50",
                        "M 0 50 Q 125 100 250 50 T 500 50 T 750 50 T 1000 50"
                      ]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </svg>
              </motion.div>
            </div>
            
            <div className="relative whitespace-nowrap">
              <span className="text-[12vw] sm:text-[11vw] lg:text-[8.5rem] xl:text-[9.5rem] text-primary leading-none drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                líquida <span className="text-foreground drop-shadow-2xl">global.</span>
              </span>
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-16">
            Converta BRL em USDT instantaneamente com <span className="text-foreground font-black">segurança institucional</span> e as menores taxas do mercado global.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6">

            <motion.a
              href="/register"
              className="w-full sm:w-auto"
              onClick={handleButtonClick}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}>

              <button className="btn-premium w-full sm:w-auto group px-10 py-5 text-xl rounded-2xl shadow-2xl shadow-primary/30 font-black tracking-tight">
                Abrir Conta VIP
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </button>
            </motion.a>
            <motion.a
              href="#como-funciona"
              className="w-full sm:w-auto"
              onClick={() => haptic.light()}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}>

              <button className="btn-premium-outline w-full sm:w-auto px-10 py-5 text-xl rounded-2xl font-black tracking-tight border-2">
                <Globe className="w-6 h-6 text-primary" />
                Explorar Ecossistema
              </button>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center gap-10 border-t border-black/[0.05] pt-12">

            <div className="flex -space-x-5">
              {[1, 2, 3, 4, 5].map((i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="w-14 h-14 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-2xl ring-1 ring-black/5">

                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 42}`} alt="User" />
                </motion.div>
              )}
              <div className="w-14 h-14 rounded-full border-4 border-white bg-primary flex items-center justify-center text-xs font-black text-white shadow-2xl ring-1 ring-black/5">
                +10k
              </div>
            </div>
            <div className="text-base font-bold text-muted-foreground leading-relaxed">
              <span className="text-foreground font-black text-xl">10.000+</span> líderes globais <br /> 
              confiam na <span className="text-primary font-black">OtsemPay</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y1, opacity }}
          className="w-full lg:w-[45%] relative perspective-2000 hidden lg:block">

          {/* Satoshi Digital Art Integration - More Defined */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 4, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-60 -left-40 w-[160%] h-[160%] -z-20 opacity-[0.18] pointer-events-none grayscale brightness-125 contrast-125">

            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766818564418.png"
              alt="Satoshi Digital Art"
              className="w-full h-full object-contain" />

          </motion.div>

          {/* Floating cards with Rich Purple Gradients */}
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-12 z-30 liquid-glass p-8 rounded-[2.5rem] shadow-3xl border border-white/60 group hover:scale-110 transition-transform duration-500">

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-600 border border-yellow-400/20 shadow-inner">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1.5">Liquidez</p>
                <p className="text-3xl font-black text-foreground tracking-tightest">Instantânea</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-12 -left-20 z-30 liquid-glass p-8 rounded-[2.5rem] shadow-3xl border border-white/60 group hover:scale-110 transition-transform duration-500">

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-1.5">Segurança</p>
                <p className="text-3xl font-black text-foreground tracking-tightest">Institucional</p>
              </div>
            </div>
          </motion.div>

          {/* Premium Phone Mockup */}
          <motion.div
            className="relative z-20"
            initial={{ rotateY: 20, rotateX: 10, scale: 0.9, opacity: 0 }}
            animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>

            <IPhoneMockup className="scale-110 lg:scale-[1.15] origin-center">
              <div className="bg-gradient-to-b from-slate-50 to-white h-full">
                <div className="p-8 pt-16 space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em]">Patrimônio Total</p>
                      <p className="text-5xl font-black tracking-tightest text-foreground mt-3">R$ 152.480</p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-primary shadow-2xl shadow-primary/40 flex items-center justify-center text-white ring-4 ring-primary/10">
                      <Wallet className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-md border border-black/[0.05] p-6 rounded-[2.5rem] shadow-xl shadow-black/5">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">BRL Cash</p>
                      <p className="text-2xl font-black text-foreground mt-2">48.2K</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-md border border-black/[0.05] p-6 rounded-[2.5rem] shadow-xl shadow-black/5">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">USDT Balance</p>
                      <p className="text-2xl font-black text-primary mt-2">18.4K</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.3em]">Operações Recentes</p>
                      <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">Histórico</button>
                    </div>
                    
                    {[
                    { title: "PIX Recebido", time: "Há 1 min", amount: "+R$ 12.000", icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    { title: "Swap BRL → USDT", time: "Há 12 min", amount: "-$ 2.450.00", icon: RefreshCw, color: "text-primary", bg: "bg-primary/10" },
                    { title: "Resgate de Lucro", time: "Ontem", amount: "+R$ 5.800", icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" }].
                    map((item, idx) =>
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      className="p-5 rounded-[2.5rem] bg-white border border-black/[0.03] flex items-center justify-between group hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500 shadow-sm">

                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} border border-current/10`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-foreground tracking-tight">{item.title}</p>
                            <p className="text-[11px] font-bold text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                        <p className={`text-sm font-black tracking-tight ${item.color}`}>{item.amount}</p>
                      </motion.div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-black/[0.05]">
                    <div className="flex items-center justify-between px-1">
                      {[
                      { icon: ArrowUpRight, label: "Enviar", active: true },
                      { icon: ArrowDownRight, label: "Receber" },
                      { icon: Repeat, label: "Swap" },
                      { icon: LayoutGrid, label: "Apps" }].
                      map((action, i) =>
                      <motion.button
                        key={i}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => haptic.light()}
                        className="flex flex-col items-center gap-3 group">

                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${action.active ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105' : 'bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:text-foreground'}`}>
                            <action.icon className="w-7 h-7" />
                          </div>
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${action.active ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
                            {action.label}
                          </span>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </IPhoneMockup>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="pb-12 flex flex-col items-center gap-4">

        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/30">Descubra a Próxima Geração</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-muted-foreground/10 flex justify-center p-2 backdrop-blur-md">

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />

        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;