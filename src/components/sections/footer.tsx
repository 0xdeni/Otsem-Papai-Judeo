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
    <footer className="relative z-10 w-full px-5 sm:px-6 pt-14 sm:pt-20 pb-6 safe-bottom">
      <div className="absolute inset-x-0 top-0 divider-glow" />
      
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-2"
          >
            <a href="/" className="inline-flex items-center gap-2 mb-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814822313.png?width=8000&height=8000&resize=contain"
                  alt="OtsemPay"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain scale-110"
                />
              <span className="text-base font-semibold tracking-tight">
                <span className="text-gradient-primary">Otsem</span>
                <span className="text-white/90">Pay</span>
              </span>
            </a>
            <p className="max-w-[260px] text-[13px] text-white/40 leading-relaxed mb-4">
              Revolucionando a forma como o mundo interage com o dinheiro. Transparência, responsabilidade e agilidade.
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="status-dot text-emerald-400" />
              <span className="text-[11px] font-medium text-emerald-500/70">Todos os sistemas operacionais</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="mb-3.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Produto</h3>
            <ul className="space-y-2.5">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <h3 className="mb-3.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Empresa</h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <h3 className="mb-3.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-white/40 transition-colors hover:text-white">
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.04] pt-6 sm:flex-row"
        >
          <p className="text-[11px] sm:text-[12px] text-white/25">
            © 2025 OtsemPay. Todos os direitos reservados.
          </p>
          <p className="text-[11px] sm:text-[12px] text-white/20">
            CNPJ: 00.000.000/0001-00
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
