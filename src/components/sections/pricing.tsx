import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="precos" className="relative z-10 py-24 bg-[#0a0118]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            Preços
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-white">
            Taxas transparentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Sem taxas escondidas. Você sabe exatamente quanto vai pagar.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          
          {/* Card 1: Operação OTC */}
          <div className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-violet-500/30">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white">Operação OTC</h3>
              <p className="mt-1 text-sm text-white/50">Spread que diminui com volumetria</p>
            </div>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white sm:text-5xl">A partir de 3%</span>
              <span className="text-sm font-medium text-white/40">por transação</span>
            </div>

            <ul className="mb-10 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Liquidação em 10-30 min</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">0% IOF (isento)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Contratos personalizados</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Suporte dedicado</span>
              </li>
            </ul>

            <button className="mt-auto inline-flex h-12 items-center justify-center rounded-xl bg-white/5 px-6 text-sm font-semibold text-white transition-all hover:bg-white/10">
              Começar agora
            </button>
          </div>

          {/* Card 2: Alta Volumetria (Featured) */}
          <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-violet-500/40 bg-gradient-to-b from-violet-600/10 to-transparent p-8 backdrop-blur-sm transition-all hover:border-violet-500/60 ring-1 ring-violet-500/20">
            {/* "Popular" Sash */}
            <div className="absolute top-0 right-0">
                <div className="translate-x-[30%] translate-y-[30%] rotate-45 bg-gradient-to-r from-violet-600 to-purple-600 px-12 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    Popular
                </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white">Alta Volumetria</h3>
              <p className="mt-1 text-sm text-white/50">Para operações acima de R$ 500k</p>
            </div>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white sm:text-5xl">Sob consulta</span>
              <span className="text-sm font-medium text-white/40">por transação</span>
            </div>

            <ul className="mb-10 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Spreads negociáveis</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Atendimento VIP</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Mesa OTC dedicada</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-white/70">Condições especiais</span>
              </li>
            </ul>

            <button className="mt-auto inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-[#0a0118] transition-all hover:bg-white/90">
              Começar agora
            </button>
          </div>

        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-full max-w-4xl -translate-x-1/2 rounded-full bg-violet-600/5 blur-[120px]" />
    </section>
  );
};

export default Pricing;