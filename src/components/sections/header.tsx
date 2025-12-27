"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles, Zap } from "lucide-react";

// ... around line 64
                <motion.div 
                  className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                    <Zap className="w-5 h-5 text-sky-400" />
                </motion.div>
              <span className="text-base sm:text-lg font-semibold tracking-tight flex items-center">
                <span className="text-gradient-primary">Otsem</span>
                <span className="text-white/90">Pay</span>
              </span>
            </motion.a>

            <nav className="hidden items-center gap-0.5 md:flex">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="relative px-3.5 py-2 text-[13px] font-medium text-white/55 transition-colors hover:text-white rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="hidden items-center gap-2.5 md:flex">
              <motion.a
                href="/login"
                onClick={handleNavClick}
                className="px-3.5 py-2 text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Entrar
              </motion.a>
              <motion.a
                href="/register"
                onClick={handleButtonClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  type="button"
                  className="btn-primary rounded-xl px-4 py-2 text-[13px] font-semibold flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Criar conta
                </button>
              </motion.a>
            </div>

            <motion.button 
              className="flex items-center justify-center w-9 h-9 rounded-xl glass-button md:hidden"
              onClick={toggleMenu}
              whileTap={{ scale: 0.92 }}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4.5 h-4.5 text-white/70" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4.5 h-4.5 text-white/70" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-[72px] z-50 md:hidden safe-top"
            >
              <div className="glass-liquid rounded-2xl overflow-hidden">
                <nav className="p-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.3 }}
                      onClick={() => {
                        haptic.selection();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all active:scale-[0.98]"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-white/30" />
                    </motion.a>
                  ))}
                  
                  <div className="h-px bg-white/[0.06] my-2 mx-3" />
                  
                  <motion.a
                    href="/login"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    onClick={() => {
                      haptic.selection();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Entrar
                    <ChevronRight className="w-4 h-4 text-white/30" />
                  </motion.a>
                </nav>
                
                <div className="p-3 pt-0">
                  <motion.a
                    href="/register"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    onClick={() => {
                      haptic.medium();
                      setMobileMenuOpen(false);
                    }}
                    className="block"
                  >
                    <button className="w-full btn-primary rounded-xl px-4 py-3.5 text-[15px] font-semibold flex items-center justify-center gap-2 active:scale-[0.98]">
                      <Sparkles className="w-4 h-4" />
                      Criar conta grátis
                    </button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
