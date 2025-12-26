"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    produto: [
      { label: "Recursos", href: "#recursos" },
      { label: "Preços", href: "#precos" },
      { label: "API", href: "#" },
      { label: "Integrações", href: "#" },
    ],
    empresa: [
      { label: "Sobre nós", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#" },
    ],
    legal: [
      { label: "Termos de uso", href: "#" },
      { label: "Privacidade", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Status", href: "#" },
    ],
  };

  return (
    <footer className="relative z-10 w-full px-5 sm:px-6 pt-16 sm:pt-24 pb-8 safe-bottom">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-2"
          >
            <a href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2602d9b6-b573-4932-8200-31165a0c934e-otsem-web-vercel-app/assets/icons/logo-otsempay-4.png"
                alt="OtsemPay"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-gradient-primary">Otsem</span>
                <span className="text-white/90">Pay</span>
              </span>
            </a>
            <p className="max-w-xs text-sm text-white/40 leading-relaxed mb-5">
              Revolucionando a forma como o mundo interage com o dinheiro. Transparência, responsabilidade e agilidade.
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-500/80">Todos os sistemas operacionais</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
        >
          <p className="text-xs sm:text-sm text-white/30">
            © 2025 OtsemPay. Todos os direitos reservados.
          </p>
          <p className="text-xs sm:text-sm text-white/20">
            CNPJ: 00.000.000/0001-00
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
