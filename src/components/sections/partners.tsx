import React from 'react';

const Partners = () => {
  const partners = [
    'Mercado Bitcoin',
    'Binance',
    'Coinbase',
    'FTX',
    'Kraken',
  ];

  return (
    <section 
      className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16"
      style={{
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.05)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <p 
          className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-white/40"
          style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.1em',
          }}
        >
          Confiado por empresas e traders
        </p>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-50 transition-opacity hover:opacity-70"
          style={{
            opacity: 0.5,
          }}
        >
          {partners.map((partner) => (
            <div 
              key={partner}
              className="text-lg md:text-xl font-bold text-white/60 whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;