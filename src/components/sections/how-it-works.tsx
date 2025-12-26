import React from 'react';
import { Users, Banknote, Repeat } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      icon: <Users className="w-6 h-6" />,
      title: "Crie sua conta",
      description: "Cadastro rápido com verificação KYC em minutos. Só precisamos de alguns dados básicos.",
    },
    {
      id: "02",
      icon: <Banknote className="w-6 h-6" />,
      title: "Deposite via PIX",
      description: "Transfira BRL para sua carteira usando PIX. O saldo é creditado instantaneamente.",
    },
    {
      id: "03",
      icon: <Repeat className="w-6 h-6" />,
      title: "Converta para USDT",
      description: "Com um clique, converta seu saldo para USDT com a melhor taxa do mercado.",
    },
  ];

  return (
    <section id="como-funciona" className="relative z-10 py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            Simples e rápido
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
            Em apenas 3 passos, converta seu dinheiro de forma segura e instantânea
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.08]"
            >
              {/* Background Number Indicator */}
              <div 
                className="absolute -right-4 -top-4 select-none text-8xl font-extrabold text-white/[0.03] transition-colors duration-300 group-hover:text-violet-500/[0.05]"
                aria-hidden="true"
              >
                {step.id}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 text-violet-400 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>

              {/* Subtle Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow Effect for the section */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
};

export default HowItWorks;