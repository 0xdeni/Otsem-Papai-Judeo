import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="precos" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            Preços
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Taxas transparentes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Sem taxas escondidas. Você sabe exatamente quanto vai pagar.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Operação OTC Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white">Operação OTC</h3>
              <p className="mt-1 text-sm text-white/40">Spread que diminui com volumetria</p>
            </div>

            <div className="mb-8 flex items-baseline gap-2">
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white/60">A partir de</span>
                <span className="text-5xl font-extrabold tracking-tight text-white">3%</span>
              </div>
              <span className="text-sm font-medium text-white/40">por transação</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Liquidação em 10-30 min</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">0% IOF (isento)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Contratos personalizados</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Suporte dedicado</span>
              </li>
            </ul>

            <button className="w-full rounded-2xl bg-white/5 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              Começar agora
            </button>
          </div>

          {/* Alta Volumetria Card (POPULAR) */}
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/30 bg-[#160b2d]/40 p-8 backdrop-blur-sm ring-1 ring-violet-500/20 transition-all duration-300 hover:border-violet-500/50 hover:bg-[#1c0d3a]/50">
            {/* Popular Badge Overlay */}
            <div className="absolute top-0 right-0 overflow-hidden rounded-bl-2xl">
              <div className="rotate-45 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-purple-600 px-12 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl">
                Popular
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white">Alta Volumetria</h3>
              <p className="mt-1 text-sm text-white/40">Para operações acima de R$ 500k</p>
            </div>

            <div className="mb-8 flex items-baseline gap-2">
              <div className="flex flex-col">
                <span className="text-lg font-medium text-white/60">Taxa sob</span>
                <span className="text-5xl font-extrabold tracking-tight text-white">consulta</span>
              </div>
              <span className="text-sm font-medium text-white/40">por transação</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Spreads negociáveis</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Atendimento VIP</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Mesa OTC dedicada</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-white/70">Condições especiais</span>
              </li>
            </ul>

            <button className="w-full rounded-2xl bg-white py-4 text-sm font-bold text-[#0a0118] transition hover:bg-white/90">
              Começar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;