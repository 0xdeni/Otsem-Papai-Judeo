import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-[#0a0118] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo and Mission Column */}
          <div className="flex flex-col gap-6">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2602d9b6-b573-4932-8200-31165a0c934e-otsem-web-vercel-app/assets/icons/logo-otsempay-4.png"
                alt="OtsemPay"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-amber-400">Otsem</span>
                <span className="text-violet-400">Pay</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Revolucionando a forma como o mundo interage com o dinheiro. Transparência, responsabilidade e agilidade em cada transação.
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-500/80">Todos os sistemas operacionais</span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Produto</h3>
            <ul className="space-y-4">
              <li>
                <a href="#recursos" className="text-sm text-white/40 transition hover:text-white">Recursos</a>
              </li>
              <li>
                <a href="#precos" className="text-sm text-white/40 transition hover:text-white">Preços</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">API</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Integrações</a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Empresa</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Sobre nós</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Carreiras</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Contato</a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Termos de uso</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Política de privacidade</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Política de cookies</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/40 transition hover:text-white">Status</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © 2025 OtsemPay. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/20">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;