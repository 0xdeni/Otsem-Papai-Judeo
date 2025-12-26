import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock, PiggyBank, ArrowUpRight, Repeat, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-20">
      {/* Background Glows and Grids */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/30 via-purple-600/20 to-transparent blur-[120px]" />
        <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-fuchsia-600/20 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-gradient-to-l from-violet-600/15 to-transparent blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="text-center animate-in fade-in duration-1000">
        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-sm shadow-[0_0_15px_rgba(124,58,237,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-violet-200 tracking-tight">Mais de R$ 50M transacionados com segurança</span>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-5xl text-[40px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Revolucionando a forma</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent italic">de mover dinheiro</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl font-normal leading-relaxed">
          Operações OTC com transparência total. Converta BRL ↔ USDT em minutos com taxas até 75% menores que o câmbio tradicional.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="/register" className="group h-14 w-full sm:w-auto">
            <button className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95">
              Começar gratuitamente
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
          <a href="#como-funciona" className="h-14 w-full sm:w-auto">
            <button className="inline-flex h-full w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-white transition-all hover:bg-white/10 active:scale-95">
              Ver como funciona
            </button>
          </a>
        </div>

        {/* Trust Markers */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span>Verificação KYC</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span>Liquidação instantânea</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-violet-400" />
            <span>Criptografia end-to-end</span>
          </div>
        </div>
      </div>

      {/* Floating App Mockup */}
      <div className="relative mt-16 w-full max-w-4xl animate-in slide-in-from-bottom-12 duration-1000">
        <div className="relative mx-auto w-full max-w-md">
          {/* Mockup Glow */}
          <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30 blur-3xl opacity-50" />
          
          {/* Phone Frame */}
          <div className="relative mx-auto w-[280px] sm:w-[320px] rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-2xl">
            {/* Speaker Bar */}
            <div className="absolute left-1/2 top-4 h-5 w-16 -translate-x-1/2 rounded-full bg-black/80" />
            
            {/* Screen Content */}
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1a0a2e] to-[#0a0118]">
              <div className="p-6 pt-10">
                {/* Balance Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Saldo total</p>
                    <p className="text-2xl font-extrabold tracking-tight text-white">R$ 12.540,10</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 shadow-inner">
                    <PiggyBank className="h-5 w-5 text-violet-400" />
                  </div>
                </div>

                {/* Sub-balances */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 backdrop-blur-sm">
                    <p className="text-[10px] text-white/40 font-medium">BRL</p>
                    <p className="text-base font-bold text-white">R$ 5.200</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 backdrop-blur-sm">
                    <p className="text-[10px] text-white/40 font-medium">USDT</p>
                    <p className="text-base font-bold text-white">$ 1.468</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mb-6 flex gap-2">
                  <button className="flex-1 rounded-xl bg-violet-600 py-3 text-xs font-bold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500">
                    Converter
                  </button>
                  <button className="flex-1 rounded-xl bg-white/10 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
                    Depositar
                  </button>
                </div>

                {/* Transactions */}
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Últimas transações</p>
                  
                  {/* Transaction Item 1 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.02] p-3 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                        <ArrowUpRight className="h-4 w-4 text-green-400 rotate-180" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Depósito PIX</p>
                        <p className="text-[10px] text-white/40">Hoje, 14:32</p>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-green-400">+R$ 500</p>
                  </div>

                  {/* Transaction Item 2 */}
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.02] p-3 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10">
                        <Repeat className="h-4 w-4 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">BRL → USDT</p>
                        <p className="text-[10px] text-white/40">Ontem, 18:15</p>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-white">$100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-widest">Role para explorar</span>
          <ChevronRight className="h-4 w-4 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;