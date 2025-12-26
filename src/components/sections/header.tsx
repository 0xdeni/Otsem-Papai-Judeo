"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-[#0a0118]/80 backdrop-blur-xl py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <a className="flex items-center gap-3 group" href="/">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2602d9b6-b573-4932-8200-31165a0c934e-otsem-web-vercel-app/assets/icons/logo-1.png"
              alt="OtsemPay"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight flex items-center">
            <span className="text-[#fbbf24]">Otsem</span>
            <span className="text-[#a78bfa]">Pay</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            href="#como-funciona"
          >
            Como funciona
          </a>
          <a
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            href="#recursos"
          >
            Recursos
          </a>
          <a
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            href="#precos"
          >
            Preços
          </a>
          <a
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            href="/login"
          >
            Entrar
          </a>
          <a href="/register">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#0a0118] transition-all hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:scale-95"
            >
              Criar conta
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button - Visible only on small screens */}
        <button className="flex flex-col gap-1.5 md:hidden p-2" aria-label="Menu">
          <div className="h-0.5 w-6 bg-white/70"></div>
          <div className="h-0.5 w-6 bg-white/70"></div>
          <div className="h-0.5 w-6 bg-white/70"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;