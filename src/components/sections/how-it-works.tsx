import React from 'react';
import { Users, Banknote, Repeat } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Crie sua conta',
      description: 'Cadastro rápido com verificação KYC em minutos. Só precisamos de alguns dados básicos.',
      icon: <Users className="w-6 h-6 text-violet-400" />,
    },
    {
      number: '02',
      title: 'Deposite via PIX',
      description: 'Transfira BRL para sua carteira usando PIX. O saldo é creditado instantaneamente.',
      icon: <Banknote className="w-6 h-6 text-violet-400" />,
    },
    {
      number: '03',
      title: 'Converta para USDT',
      description: 'Com um clique, converta seu saldo para USDT com a melhor taxa do mercado.',
      icon: <Repeat className="w-6 h-6 text-violet-400" />,
    },
  ];

  return (
    <section id="como-funciona" className="relative z-10 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            Simples e rápido
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Em apenas 3 passos, converta seu dinheiro de forma segura e instantânea
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-violet-500/30"
            >
              {/* Background Decorative Number */}
              <div className="absolute -right-4 -top-4 select-none text-8xl font-extrabold text-white/[0.03] transition-colors group-hover:text-violet-500/[0.05]">
                {step.number}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 text-violet-400 transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Optional decorative background elements captured from design system */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[120px]" />
    </section>
  );
};

export default HowItWorks;