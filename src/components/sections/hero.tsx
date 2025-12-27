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
  LayoutGrid
} from "lucide-react";
import haptic from "@/lib/haptics";

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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative z-10 min-h-[100dvh] flex flex-col pt-24 overflow-hidden">
      {/* Liquid Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[140px] rounded-full animate-liquid" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full animate-liquid" style={{ animationDelay: '-5s' }} />

      <div className="container mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center gap-20 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 text-left"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl shadow-black/5 text-primary font-black text-[10px] uppercase tracking-[0.3em]">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Plataforma #1 em Liquidez Digital</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-black tracking-tightest text-foreground leading-[0.85] mb-12 relative"
          >
            <span className="text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 block drop-shadow-sm">
              Sua ponte
            </span>
            <div className="relative group cursor-default inline-block w-full">
              {/* Artistic Wave Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute -inset-x-24 -inset-y-20 -z-10 pointer-events-none"
              >
                <svg viewBox="0 0 1000 400" className="w-full h-full opacity-40 blur-3xl">
                  <motion.path
                    d="M 100 200 Q 250 100 400 200 T 700 200 T 900 200"
                    fill="none"
                    stroke="#EAB308"
                    strokeWidth="80"
                    strokeLinecap="round"
                    animate={{
                      d: [
                        "M 100 200 Q 250 100 400 200 T 700 200 T 900 200",
                        "M 100 200 Q 250 300 400 200 T 700 100 T 900 200",
                        "M 100 200 Q 250 100 400 200 T 700 200 T 900 200"
                      ]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>

              <div className="flex flex-col gap-2 relative">
                <span className="text-[16vw] sm:text-[14vw] lg:text-[11rem] xl:text-[14rem] text-primary leading-none transition-all duration-1000 group-hover:tracking-tightest">
                  líquida
                </span>
                <span className="text-[16vw] sm:text-[14vw] lg:text-[11rem] xl:text-[14rem] text-foreground leading-none -mt-[0.05em]">
                  global.
                </span>
              </div>
            </div>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-14"
          >
            Converta BRL em USDT instantaneamente com segurança bancária e as menores taxas globais. <span className="text-foreground font-bold">O futuro dos pagamentos é líquido.</span>
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.a 
              href="/register" 
              className="w-full sm:w-auto"
              onClick={handleButtonClick}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-premium w-full sm:w-auto group px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-primary/20">
                Começar agora
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.a>
            <motion.a 
              href="#como-funciona" 
              className="w-full sm:w-auto"
              onClick={() => haptic.light()}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="btn-premium-outline w-full sm:w-auto px-12 py-6 text-xl rounded-2xl">
                <Globe className="w-6 h-6 text-primary" />
                Ecossistema
              </button>
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 flex items-center gap-10 border-t border-black/[0.05] pt-12"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-xl"
                >
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="User" />
                </motion.div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-xl">
                +2k
              </div>
            </div>
            <div className="text-sm font-bold text-muted-foreground leading-relaxed">
              <span className="text-foreground font-black text-base">2.400+</span> investidores ativos <br /> 
              confiam na segurança do <span className="text-primary">OtsemPay</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: y1, opacity }}
          className="w-full lg:w-1/2 relative perspective-1000"
        >
          {/* Satoshi Digital Art Integration */}
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 2, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-20 w-[140%] h-[140%] -z-20 opacity-[0.12] pointer-events-none grayscale contrast-150"
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766818564418.png" 
              alt="Satoshi Digital Art" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Floating cards around the main mockup */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 z-20 liquid-glass p-6 rounded-3xl shadow-2xl hidden md:block border border-white/60"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-600 border border-yellow-400/20">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Liquidez</p>
                <p className="text-2xl font-black text-foreground tracking-tight">Instantânea</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-12 z-20 liquid-glass p-7 rounded-3xl shadow-2xl hidden md:block border border-white/60"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Segurança</p>
                <p className="text-2xl font-black text-foreground tracking-tight">Criptográfica</p>
              </div>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="absolute inset-0 bg-primary/10 blur-[140px] rounded-full scale-125 -z-10" />
            
            <motion.div 
              className="liquid-glass rounded-[4rem] p-5 shadow-2xl border border-white/60"
              whileHover={{ rotateY: 8, rotateX: 4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-[3.2rem] bg-white border border-black/[0.03] aspect-[9/18.5] relative shadow-inner">
                {/* Mockup Screen Content */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-9 w-36 bg-black rounded-b-[2.5rem] z-30" />
                
                <div className="p-10 pt-20 space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.25em]">Saldo Disponível</p>
                      <p className="text-5xl font-black tracking-tightest text-foreground mt-3">R$ 48.290</p>
                    </div>
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                      <Wallet className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-slate-50/80 backdrop-blur-sm border border-black/[0.03] p-6 rounded-[2.5rem] shadow-sm">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">BRL</p>
                      <p className="text-2xl font-black text-foreground mt-1.5">12.4K</p>
                    </div>
                    <div className="bg-slate-50/80 backdrop-blur-sm border border-black/[0.03] p-6 rounded-[2.5rem] shadow-sm">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">USDT</p>
                      <p className="text-2xl font-black text-foreground mt-1.5">6.8K</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                      <p className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.25em]">Atividades</p>
                      <button className="text-[10px] font-black text-primary uppercase tracking-widest">Ver Tudo</button>
                    </div>
                    
                    {[
                      { title: "Depósito PIX", time: "Há 2 min", amount: "+R$ 2.500", icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                      { title: "BRL → USDT", time: "Há 15 min", amount: "-$ 420.00", icon: RefreshCw, color: "text-primary", bg: "bg-primary/10" },
                      { title: "Venda USDT", time: "Ontem", amount: "+R$ 1.200", icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1) }}
                        className="p-5 rounded-[2.5rem] bg-slate-50/50 border border-black/[0.02] flex items-center justify-between group hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                      >
                        <div className="flex items-center gap-5">
                          <div className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-sm border border-current/10`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-foreground tracking-tight">{item.title}</p>
                            <p className="text-[11px] font-bold text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                        <p className={`text-sm font-black tracking-tight ${item.color}`}>{item.amount}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-black/[0.03] mt-4">
                    <div className="flex items-center justify-between px-1">
                      {[
                        { icon: ArrowUpRight, label: "Enviar", color: "bg-primary text-white shadow-primary/20" },
                        { icon: ArrowDownRight, label: "Receber", color: "bg-slate-100 text-foreground" },
                        { icon: Repeat, label: "Trocar", color: "bg-slate-100 text-foreground" },
                        { icon: LayoutGrid, label: "Mais", color: "bg-slate-100 text-foreground" },
                      ].map((action, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.92 }}
                          onClick={() => haptic.light()}
                          className="flex flex-col items-center gap-3 group"
                        >
                          <div className={`w-16 h-16 rounded-2xl ${action.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl`}>
                            <action.icon className="w-7 h-7" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                            {action.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pb-12 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex justify-center p-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
