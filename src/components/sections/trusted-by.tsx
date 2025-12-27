"use client";

import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    { name: "Mercado Bitcoin", opacity: "opacity-25" },
    { name: "Binance", opacity: "opacity-30" },
    { name: "Coinbase", opacity: "opacity-25" },
    { name: "Kraken", opacity: "opacity-20" },
    { name: "Bitfinex", opacity: "opacity-25" }
  ];

  return (
    <section className="relative z-10 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25"
        >
          Confiado por empresas e traders
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`text-[14px] sm:text-[15px] font-semibold text-white ${logo.opacity} transition-all duration-300 hover:opacity-50 cursor-default tracking-tight`}
            >
              {logo.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-x-0 top-0 divider-glow" />
      <div className="absolute inset-x-0 bottom-0 divider-glow" />
    </section>
  );
};

export default TrustedBy;
