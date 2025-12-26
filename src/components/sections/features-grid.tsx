import React from 'react';
import { 
  Repeat, 
  CreditCard, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Shield, 
  Lock, 
  FileText 
} from 'lucide-react';

const FeaturesGrid = () => {
  const secondaryFeatures = [
    {
      icon: <Repeat className="w-5 h-5" />,
      title: "Conversão instantânea",
      description: "BRL ↔ USDT em segundos"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "PIX integrado",
      description: "Depósitos e saques rápidos"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Segurança total",
      description: "Criptografia de ponta"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Sem fronteiras",
      description: "Opere de qualquer lugar"
    }
  ];

  const mainFeatures = [
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Flexibilidade Contratual",
      description: "Contratos ajustados entre as partes. Condições de valores, prazos e volumes personalizados de acordo com a necessidade de cada operação.",
      bgColor: "bg-[#2d1b4d]/40",
      borderColor: "border-violet-500/20",
      iconColor: "text-violet-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Maior Agilidade",
      description: "Negociações rápidas e adaptadas à urgência do cliente. Liquidação em 10 a 30 minutos, não em dias. Disponibilidade imediata de recursos.",
      bgColor: "bg-[#3d2b1f]/40",
      borderColor: "border-orange-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Confidencialidade",
      description: "Transações não são públicas como nas bolsas. Vantagem estratégica para operações de alto volume sem impacto no mercado.",
      bgColor: "bg-[#0f2d2d]/40",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança e Compliance",
      description: "Operamos dentro de todas as regulamentações brasileiras. KYC rigoroso, políticas AML e total transparência nas operações. Monitoramento 24/7.",
      bgColor: "bg-[#1a2d4d]/40",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Instrumentos Customizados",
      description: "Acesso a estruturas personalizadas com derivativos OTC que protegem suas operações de riscos cambiais e outros fatores de mercado.",
      bgColor: "bg-[#3d1a3d]/40",
      borderColor: "border-fuchsia-500/20",
      iconColor: "text-fuchsia-400"
    }
  ];

  return (
    <section id="recursos" className="relative z-10 py-24 bg-[#0a0118]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header and Mini Grid Overlay Layout */}
        <div className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
                Recursos
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
                Tudo que você precisa em um só lugar
              </h2>
              <p className="mt-4 text-lg text-white/60 font-normal leading-relaxed">
                Ferramentas poderosas para gerenciar suas conversões com total controle e transparência.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/10"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Major Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} ${feature.bgColor} p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] ${index >= 3 ? 'lg:col-span-1.5' : ''}`}
              style={index >= 3 ? { gridColumn: 'span 1' } : {}}
            >
              <div className="relative z-10">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
          {/* Layout adjustment for the 5th card to align specifically if needed in 3-col grid */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;