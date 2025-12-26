import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Lock, PiggyBank, ArrowUpRight, Repeat, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-20">
      {/* Background radial gradient and dot matrix overlay (inherited from body/globals but reinforced here for structure) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-600/30 via-purple-600/20 to-transparent blur-3xl"></div>
        <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-fuchsia-600/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-gradient-to-l from-violet-600/15 to-transparent blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
        {/* Animated Badge */}
        <div className="group mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-sm transition-all hover:bg-violet-500/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-violet-200">
            Mais de R$ 50M transacionados com segurança
          </span>
        </div>

        {/* Hero Title with Gradients */}
        <h1 className="mx-auto max-w-5xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Revolucionando a forma
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            de mover dinheiro
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl leading-relaxed">
          Operações OTC com transparência total. Converta BRL ↔ USDT em minutos com taxas até 75% menores que o câmbio tradicional.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="/register">
            <button className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary bg-gradient-to-r from-violet-600 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 active:scale-95">
              Começar gratuitamente
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </a>
          <a href="#como-funciona">
            <button className="h-14 rounded-full border border-white/10 px-8 text-base font-medium text-white transition-all hover:bg-white/5 active:scale-95 backdrop-blur-sm">
              Ver como funciona
            </button>
          </a>
        </div>

        {/* Trust Badges */}
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
      <div className="relative mt-16 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
        <div className="relative mx-auto w-full max-w-md">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30 blur-3xl"></div>
          
          {/* Phone Frame */}
          <div className="relative mx-auto w-72 md:w-80 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-xl transition hover:border-violet-500/20">
            {/* Notch */}
            <div className="absolute left-1/2 top-4 h-6 w-20 -translate-x-1/2 rounded-full bg-[#0a0118]"></div>
            
            {/* Inner Content */}
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1a0a2e] to-[#0f0520] h-full">
              <div className="p-6 pt-12">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50 font-medium">Saldo total</p>
                    <p className="text-2xl font-bold tracking-tight">R$ 12.540,10</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20">
                    <PiggyBank className="h-5 w-5 text-violet-400" />
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 p-3 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] text-white/50 uppercase font-semibold">BRL</p>
                    <p className="text-base font-semibold">R$ 5.200</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 hover:bg-white/10 transition-colors">
                    <p className="text-[10px] text-white/50 uppercase font-semibold">USDT</p>
                    <p className="text-base font-semibold">$ 1.468</p>
                  </div>
                </div>

                <div className="mb-6 flex gap-2">
                  <button className="flex-1 rounded-xl bg-violet-600 py-3 text-xs font-bold hover:bg-violet-700 transition-colors">Converter</button>
                  <button className="flex-1 rounded-xl bg-white/10 py-3 text-xs font-bold hover:bg-white/20 transition-colors">Depositar</button>
                </div>

                <div className="space-y-3">
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider">Últimas transações</p>
                  
                  {/* Transaction 1 */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                        <ArrowUpRight className="h-4 w-4 text-green-400 rotate-180" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Depósito PIX</p>
                        <p className="text-[10px] text-white/50">Hoje, 14:32</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-green-400">+R$ 500</p>
                  </div>

                  {/* Transaction 2 */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20">
                        <Repeat className="h-4 w-4 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">BRL → USDT</p>
                        <p className="text-[10px] text-white/50">Ontem, 18:15</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-white">$100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-widest">Role para explorar</span>
          <ChevronRight className="h-4 w-4 rotate-90" />
        </div>
      </div>
    </section>
  );
}