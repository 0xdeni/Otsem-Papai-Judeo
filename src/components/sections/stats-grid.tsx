import React from 'react';
import { TrendingUp, Globe, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "US$ 415B",
    label: "Mercado OTC global em 2024"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    value: "9.1%",
    label: "Volume LATAM do mercado global"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "10-30min",
    label: "Tempo de liquidação"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    value: "0% IOF",
    label: "Sem imposto sobre operações"
  }
];

const StatsGrid = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/10"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                borderRadius: '1rem'
              }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                {/* Icon Container */}
                <div 
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500/20"
                  style={{
                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                    color: '#a78bfa'
                  }}
                >
                  {stat.icon}
                </div>
                
                {/* Stat Value */}
                <div 
                  className="text-3xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    fontSize: '1.875rem',
                    fontWeight: 700,
                    lineHeight: '2.25rem'
                  }}
                >
                  {stat.value}
                </div>
                
                {/* Stat Label */}
                <div 
                  className="mt-1 text-sm text-white/50"
                  style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.875rem'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;