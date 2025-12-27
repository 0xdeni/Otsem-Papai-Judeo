"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap } from "lucide-react";

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
    <footer className="relative z-10 w-full px-5 sm:px-6 pt-16 sm:pt-24 pb-8 bg-white/40 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-2"
          >
              <a href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-primary/10 shadow-sm overflow-hidden">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766817112139.png?width=8000&height=8000&resize=contain" 
                    alt="OtsemPay Logo" 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-primary">Otsem</span>
                  <span className="text-foreground">Pay</span>
                </span>
              </a>
            <p className="max-w-[280px] text-[14px] text-foreground/50 leading-relaxed font-medium mb-6">
              Movendo o capital global com a agilidade dos ativos digitais. Transparência e segurança em cada conversão.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">Sistemas Online</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] font-semibold text-foreground/50 transition-colors hover:text-primary">
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
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] font-semibold text-foreground/50 transition-colors hover:text-primary">
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
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] font-semibold text-foreground/50 transition-colors hover:text-primary">
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
          className="mt-16 sm:mt-24 flex flex-col items-center justify-between gap-4 border-t border-foreground/[0.05] pt-8 sm:flex-row"
        >
          <p className="text-[12px] font-medium text-foreground/20">
            © 2025 OtsemPay. Todos os direitos reservados.
          </p>
          <p className="text-[12px] font-medium text-foreground/20">
            CNPJ: 00.000.000/0001-00
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
