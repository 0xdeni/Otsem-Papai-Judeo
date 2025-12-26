import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative z-10 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Main Banner Container */}
        <div className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden border border-white/10 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95]">
          {/* Subtle Background Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-900/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Pronto para começar?
            </h2>
            
            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-10">
              Crie sua conta gratuitamente e comece a transacionar BRL ↔ USDT em minutos. 
              Sem compromisso, cancele quando quiser.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/register">
                <button className="h-14 px-8 rounded-full bg-white text-[#0a0118] font-bold text-base flex items-center gap-2 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl">
                  Criar conta grátis
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
              <a href="/login">
                <button className="h-14 px-8 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/10 transition-all">
                  Já tenho conta
                </button>
              </a>
            </div>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/70">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <Check className="w-3.5 h-3.5 text-green-400" />
                </div>
                <span>Cadastro grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <Check className="w-3.5 h-3.5 text-green-400" />
                </div>
                <span>Sem mensalidade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  <Check className="w-3.5 h-3.5 text-green-400" />
                </div>
                <span>Cancelar quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;