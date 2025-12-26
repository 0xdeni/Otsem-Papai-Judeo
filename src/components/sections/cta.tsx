import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative z-10 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#3b0764] via-[#581c87] to-[#7c3aed] p-8 md:p-16 lg:p-20 text-center shadow-2xl">
          {/* Decorative background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.2),transparent_70%)]"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-400/20 blur-[80px]"></div>
          
          <div className="relative z-10 translate-y-0">
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Pronto para começar?
            </h2>
            
            <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              Crie sua conta gratuitamente e comece a transacionar BRL ↔ USDT em minutos. 
              Sem compromisso, cancele quando quiser.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12">
              <a 
                href="/register" 
                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-[#3b0764] transition-all hover:bg-white/90 hover:shadow-xl active:scale-95"
              >
                Criar conta grátis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="/login" 
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Já tenho conta
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Cadastro grátis</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Sem mensalidade</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Canceler quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;