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
    <footer className="relative z-10 w-full px-5 sm:px-6 pt-24 pb-12 overflow-hidden bg-white/40 backdrop-blur-md">
      {/* Subtle Satoshi Art in Footer */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-[0.05] grayscale pointer-events-none -z-10">
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766818564418.png" 
          alt="Satoshi" 
          className="w-full h-full object-contain rotate-12"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-2"
          >
            <a href="/" className="inline-flex items-center gap-3 mb-8 group">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766817112139.png?width=8000&height=8000&resize=contain" 
                alt="OtsemPay Logo" 
                className="w-10 h-10 object-contain transition-transform duration-500 group-hover:rotate-12"
              />
              <span className="text-[1.5rem] font-black tracking-tighter">
                <span className="text-primary">Otsem</span>
                <span className="text-foreground">Pay</span>
              </span>
            </a>
            <p className="max-w-[320px] text-[15px] text-foreground/50 leading-relaxed font-semibold mb-8">
              Redefinindo a liquidez global com tecnologia de ponta e segurança absoluta. Sua ponte entre o tradicional e o digital.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.2em]">Snapshot Global Ativo</span>
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
