"use client";

import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    "Mercado Bitcoin",
    "Binance",
    "Coinbase",
    "Kraken",
    "Bitfinex"
  ];

  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/30"
        >
          Confiado por empresas e traders
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              className="text-base sm:text-lg font-semibold text-white/20 transition-all duration-300 hover:text-white/40 cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default TrustedBy;
