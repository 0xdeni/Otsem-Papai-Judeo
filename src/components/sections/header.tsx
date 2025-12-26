"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-[#0a0118]/80 backdrop-blur-xl py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <a className="flex items-center gap-3" href="/">
          <div className="relative h-10 w-10">
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
            className="text-sm font-medium text-white/70 transition hover:text-white"
            href="#como-funciona"
          >
            Como funciona
          </a>
          <a
            className="text-sm font-medium text-white/70 transition hover:text-white"
            href="#recursos"
          >
            Recursos
          </a>
          <a
            className="text-sm font-medium text-white/70 transition hover:text-white"
            href="#precos"
          >
            Preços
          </a>
          <a
            className="text-sm font-medium text-white/70 transition hover:text-white"
            href="/login"
          >
            Entrar
          </a>
          
          {/* CTA Button */}
          <a href="/register">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all outline-none h-9 rounded-full bg-white px-6 text-sm font-semibold text-[#0a0118] hover:bg-white/90 active:scale-95"
            >
              Criar conta
            </button>
          </a>
        </nav>

        {/* Mobile menu toggle could be added here if needed, but per instructions we clone what's visible */}
        <div className="md:hidden">
          <button className="text-white/70 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;