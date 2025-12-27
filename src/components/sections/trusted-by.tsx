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
    <section className="relative py-20 overflow-hidden bg-white/40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 border border-white shadow-sm text-primary font-bold text-xs uppercase tracking-widest mb-4">
            Ecosystem Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Confiado por os gigantes do mercado
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 filter drop-shadow-sm">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
