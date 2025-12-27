"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Zap } from "lucide-react";

const Footer = () => {
// ... around line 42
              <a href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-white/10">
                  <Zap className="w-4.5 h-4.5 text-sky-400" />
                </div>
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
