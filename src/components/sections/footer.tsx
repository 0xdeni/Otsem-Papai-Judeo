import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    Produto: [
      { label: 'Recursos', href: '#recursos' },
      { label: 'Preços', href: '#precos' },
      { label: 'API', href: '#' },
      { label: 'Integrações', href: '#' },
    ],
    Empresa: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '#' },
    ],
    Legal: [
      { label: 'Termos de uso', href: '#' },
      { label: 'Política de privacidade', href: '#' },
      { label: 'Política de cookies', href: '#' },
      { label: 'Status', href: '#' },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0a0118] pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Company Info Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2602d9b6-b573-4932-8200-31165a0c934e-otsem-web-vercel-app/assets/icons/logo-1.png"
                alt="OtsemPay Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#fbbf24]">Otsem</span>
                <span className="text-[#7c3aed]">Pay</span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              Revolucionando a forma como o mundo interage com o dinheiro. Transparência, responsabilidade e agilidade em cada transação.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-medium tracking-tight text-green-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                </span>
                Todos os sistemas operacionais
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:ml-auto">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h3>
                <ul className="mt-6 space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-white/30 sm:flex-row">
          <p>© 2025 OtsemPay. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;