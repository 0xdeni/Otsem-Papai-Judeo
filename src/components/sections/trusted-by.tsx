"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const TrustedBy = () => {
  const logos = [
    { 
      name: "Mercado Bitcoin", 
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814822313.png?width=8000&height=8000&resize=contain",
      width: 40,
      height: 40
    },
    { 
      name: "Binance", 
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Binance_logo.svg",
      width: 120,
      height: 24
    },
    { 
      name: "Coinbase", 
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Coinbase_Logo.svg",
      width: 110,
      height: 22
    },
    { 
      name: "Kraken", 
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Kraken_Logo.svg",
      width: 100,
      height: 25
    },
    { 
      name: "Bitfinex", 
      src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Bitfinex_logo.svg",
      width: 110,
      height: 20
    }
  ];

  return (
    <section className="relative z-10 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25"
        >
          Confiado por empresas e traders
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:gap-x-14 sm:gap-y-12 lg:gap-x-20"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group flex items-center justify-center"
            >
              <div className="relative opacity-[0.15] grayscale brightness-0 invert transition-all duration-500 group-hover:opacity-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-6 w-auto object-contain sm:h-7"
                />
              </div>
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
