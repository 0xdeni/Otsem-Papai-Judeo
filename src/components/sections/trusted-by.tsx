"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TrustedBy = () => {
  const logos = [
    { 
      name: "Coinbase", 
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814951907.png?width=8000&height=8000&resize=contain",
      width: 120,
      height: 30
    },
    { 
      name: "Kucoin", 
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814953475.png?width=8000&height=8000&resize=contain",
      width: 120,
      height: 30
    },
    { 
      name: "Binance", 
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814953465.png?width=8000&height=8000&resize=contain",
      width: 120,
      height: 30
    },
    { 
      name: "Kraken", 
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814951913.png?width=8000&height=8000&resize=contain",
      width: 120,
      height: 30
    },
    { 
      name: "Mercado Bitcoin", 
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1766814952109.png?width=8000&height=8000&resize=contain",
      width: 120,
      height: 30
    }
  ];

  return (
    <section className="relative z-10 py-12 sm:py-14 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30"
        >
          Confiado por empresas e traders globais
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-10 lg:gap-x-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group flex items-center justify-center"
            >
              <div className="relative opacity-40 grayscale hover:grayscale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
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
    </section>
  );
};

export default TrustedBy;
