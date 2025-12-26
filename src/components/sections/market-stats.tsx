import React from 'react';
import { TrendingUp, Globe, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "US$ 415B",
    label: "Mercado OTC global em 2024"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "9.1%",
    label: "Volume LATAM do mercado global"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "10-30min",
    label: "Tempo de liquidação"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    value: "0% IOF",
    label: "Sem imposto sobre operações"
  }
];

export default function MarketStats() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/10"
            >
              {/* Hover sensitive gradient border/glow effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
              />
              
              <div className="relative">
                {/* Icon Container with violet theme */}
                <div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500/20"
                >
                  {stat.icon}
                </div>
                
                {/* Stat Value - Bold Typography */}
                <div className="text-3xl font-bold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                
                {/* Stat Label - Muted Secondary Text */}
                <div className="text-sm font-medium text-white/50">
                  {stat.label}
                </div>
              </div>

              {/* Subtle bottom glow line on hover */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-transparent transition-all duration-500 group-hover:w-full" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}