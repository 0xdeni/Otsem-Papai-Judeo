import React from 'react';
import { Building2, Zap } from 'lucide-react';

const Comparison = () => {
  return (
    <section className="relative z-10 py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            Comparativo
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight text-white">
            Por que escolher OTC?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Compare o câmbio tradicional com operações via ativos digitais
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card: Câmbio Convencional */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 transition-all duration-300">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20">
                <Building2 className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Câmbio Convencional</h3>
                <p className="text-sm text-white/50">Bancos tradicionais</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">Spread bancário</span>
                <span className="font-semibold text-red-400">6% a 12%</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">IOF</span>
                <span className="font-semibold text-red-400">0,38%</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">Tarifa bancária</span>
                <span className="font-semibold text-red-400">0,1% a 2%</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">Swift internacional</span>
                <span className="font-semibold text-red-400">R$ 100 a R$ 450</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white/60">Tempo de liquidação</span>
                <span className="font-semibold text-red-400">2 a 5 dias úteis</span>
              </li>
            </ul>
          </div>

          {/* Card: OTC com Stablecoins */}
          <div className="relative rounded-2xl border border-green-500/20 bg-green-500/5 p-8 ring-2 ring-green-500/20 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                <Zap className="h-6 w-6 text-green-400 fill-green-400/20" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">OTC com Stablecoins</h3>
                <p className="text-sm text-white/50">Otsem Bank</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">Spread OTC</span>
                <span className="font-semibold text-green-400">A partir de 3%</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">IOF</span>
                <span className="font-semibold text-green-400">0% (isento)</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">Tarifa OTC</span>
                <span className="font-semibold text-green-400">Incluso no spread</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-white/60">Transferência</span>
                <span className="font-semibold text-green-400">Sem custo adicional</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white/60">Tempo de liquidação</span>
                <span className="font-semibold text-green-400">10 a 30 minutos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;