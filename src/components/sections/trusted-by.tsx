import React from 'react';

const TrustedBy = () => {
  const logos = [
    'Mercado Bitcoin',
    'Binance',
    'Coinbase',
    'FTX',
    'Kraken'
  ];

  return (
    <section 
      className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <p 
          className="mb-8 text-center text-sm font-medium uppercase tracking-[0.05em] text-white/40"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.05em'
          }}
        >
          Confiado por empresas e traders
        </p>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-12 opacity-50"
          style={{
            opacity: 0.5
          }}
        >
          {logos.map((logo) => (
            <div 
              key={logo}
              className="text-lg font-bold text-white/60 transition-colors hover:text-white/90"
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: 'var(--font-sans)',
                cursor: 'default'
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;