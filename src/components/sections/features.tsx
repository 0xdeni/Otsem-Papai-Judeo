import React from 'react';
import { 
  Repeat, 
  CreditCard, 
  ShieldCheck, 
  Globe2, 
  Lock, 
  Zap, 
  FileText, 
  Shield, 
  Settings2 
} from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="recursos" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Grid: Split Layout */}
        <div className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
                Recursos
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="mt-4 text-lg text-white/60">
                Ferramentas poderosas para gerenciar suas conversões com total controle e transparência.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                  <Repeat className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">Conversão instantânea</h3>
                <p className="mt-1 text-sm text-white/50">BRL ↔ USDT em segundos</p>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">PIX integrado</h3>
                <p className="mt-1 text-sm text-white/50">Depósitos e saques rápidos</p>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">Segurança total</h3>
                <p className="mt-1 text-sm text-white/50">Criptografia de ponta</p>
              </div>

              <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30 hover:bg-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white">Sem fronteiras</h3>
                <p className="mt-1 text-sm text-white/50">Opere de qualquer lugar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Detailed Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Flexibilidade Contratual */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-900/40 to-violet-950/40 p-8 transition hover:border-violet-500/40">
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Flexibilidade Contratual</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Contratos ajustados entre as partes. Condições de valores, prazos e volumes personalizados de acordo com a necessidade de cada operação.
              </p>
            </div>
          </div>

          {/* Maior Agilidade */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-950/40 to-stone-950/40 p-8 transition hover:border-orange-500/40">
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Maior Agilidade</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Negociações rápidas e adaptadas à urgência do cliente. Liquidação em 10 a 30 minutos, não em dias. Disponibilidade imediata de recursos.
              </p>
            </div>
          </div>

          {/* Confidencialidade */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-950/40 to-emerald-950/40 p-8 transition hover:border-teal-500/40">
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20 text-teal-400">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Confidencialidade</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Transações não são públicas como nas bolsas. Vantagem estratégica para operações de alto volume sem impacto no mercado.
              </p>
            </div>
          </div>

          {/* Segurança e Compliance */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-sky-950/40 to-blue-950/40 p-8 lg:col-span-2 transition hover:border-sky-500/40">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Segurança e Compliance</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Operamos dentro de todas as regulamentações brasileiras. KYC rigoroso, políticas AML e total transparência nas operações. Monitoramento 24/7 para garantir a integridade de seus ativos.
              </p>
            </div>
          </div>

          {/* Instrumentos Customizados */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-950/40 to-pink-950/40 p-8 transition hover:border-fuchsia-500/40">
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-400">
                <Settings2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Instrumentos Customizados</h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                Acesso a estruturas personalizadas com derivativos OTC que protegem suas operações de riscos cambiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;