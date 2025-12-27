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
  RefreshCw,
  ChevronDown,
  Globe,
  Star
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
    <section className="relative z-10 min-h-[100dvh] flex flex-col pt-20 overflow-hidden">
      {/* Liquid Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[100px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 flex-grow flex flex-col lg:flex-row items-center gap-16 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 text-left"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm text-primary font-bold text-xs uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-primary" />
              <span>Plataforma #1 em Liquidez Digital</span>
            </div>
          </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter text-foreground leading-[0.9] mb-10"
            >
              Sua ponte <br />
              <span className="text-primary relative inline-block">
                líquida
                <motion.svg 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="absolute -bottom-4 left-0 w-full" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                </motion.svg>
              </span> <br />
              global.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-xl md:text-2xl text-muted-foreground font-semibold leading-relaxed mb-12"
            >
              Converta BRL em USDT de forma instantânea, segura e com as menores taxas do mercado global. O futuro dos pagamentos é líquido.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <motion.a 
                href="/register" 
                className="w-full sm:w-auto"
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn-premium w-full sm:w-auto group px-10 py-5 text-lg">
                  Começar agora
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.a>
              <motion.a 
                href="#como-funciona" 
                className="w-full sm:w-auto"
                onClick={() => haptic.light()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn-premium-outline w-full sm:w-auto px-10 py-5 text-lg">
                  <Globe className="w-6 h-6 text-primary" />
                  Ecossistema
                </button>
              </motion.a>
            </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-14 flex items-center gap-8 border-t border-black/[0.05] pt-10"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                +2k
              </div>
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              <span className="text-foreground font-bold">2.400+</span> investidores ativos <br /> 
              confiam no OtsemPay
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 relative perspective-1000"
        >
          {/* Floating cards around the main mockup */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 z-20 liquid-glass p-5 rounded-3xl shadow-2xl hidden md:block"
            >
                <div className="flex items-center gap-4">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766817112139.png?width=8000&height=8000&resize=contain" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Liquidez</p>
                  <p className="text-xl font-black text-foreground">Instantânea</p>
                </div>
              </div>
            </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-10 z-20 liquid-glass p-6 rounded-3xl shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Segurança</p>
                <p className="text-xl font-black text-foreground">Bancária</p>
              </div>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-110 -z-10" />
            
            <motion.div 
              className="liquid-glass rounded-[3.5rem] p-4 shadow-2xl"
              whileHover={{ rotateY: 5, rotateX: 2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-[2.8rem] bg-white border border-black/5 aspect-[9/18.5] relative">
                {/* Mockup Screen Content */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-32 bg-black rounded-b-3xl z-30" />
                
                <div className="p-8 pt-16 space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Patrimônio Total</p>
                      <p className="text-4xl font-black tracking-tighter text-foreground mt-2">R$ 48.290</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Wallet className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-black/[0.03] p-5 rounded-3xl">
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">BRL Balance</p>
                      <p className="text-xl font-black text-foreground mt-1">R$ 12.4K</p>
                    </div>
                    <div className="bg-slate-50 border border-black/[0.03] p-5 rounded-3xl">
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">USDT Assets</p>
                      <p className="text-xl font-black text-foreground mt-1">$ 6.8K</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-1">Atividades Recentes</p>
                    
                    {[
                      { title: "Depósito PIX", time: "Hoje, 14:20", amount: "+R$ 2.500", icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                      { title: "BRL → USDT", time: "Hoje, 09:15", amount: "-$ 420.00", icon: RefreshCw, color: "text-primary", bg: "bg-primary/10" },
                      { title: "Venda USDT", time: "Ontem, 21:04", amount: "+R$ 1.200", icon: ArrowDownLeft, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-3xl bg-slate-50/50 border border-black/[0.03] flex items-center justify-between group hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className={`h-10 w-10 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-foreground">{item.title}</p>
                            <p className="text-[10px] font-medium text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                        <p className={`text-sm font-black ${item.color}`}>{item.amount}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full h-14 btn-premium rounded-2xl font-bold text-base mt-4">
                    Transferência Global
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="pb-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">Descubra Mais</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
