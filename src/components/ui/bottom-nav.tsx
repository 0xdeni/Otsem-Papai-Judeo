'use client';

import React from 'react';
import { Wallet, BarChart2, Repeat, User, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@/types';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  currentTab: Tab;
  setTab: (tab: Tab) => void;
  isDark?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, setTab }) => {
  const navItems = [
    { id: Tab.SWAP, icon: Repeat, label: 'Swap' },
    { id: Tab.STATS, icon: BarChart2, label: 'Stats' },
    { id: Tab.WALLET, icon: Wallet, label: 'Wallet' },
    { id: Tab.CARD, icon: CreditCard, label: 'Card' },
    { id: Tab.PROFILE, icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-[safe-area-inset-bottom] mb-6 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="flex items-center gap-1.5 p-1.5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto backdrop-blur-2xl bg-[#0a0a0f]/80 border border-white/10 ring-1 ring-white/5 mx-6 relative overflow-hidden"
      >
        {/* Subtle inner gloss */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          const Icon = item.icon;
          
          if (item.id === Tab.WALLET) {
             return (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-6 py-4 rounded-[2rem] transition-all duration-500 group overflow-hidden outline-none",
                    isActive 
                        ? 'text-black' 
                        : 'text-gray-400 hover:text-white'
                  )}
                >
                    {isActive && (
                      <motion.div 
                        layoutId="wallet-bg"
                        className="absolute inset-0 bg-white shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon 
                      size={20} 
                      strokeWidth={isActive ? 2.5 : 2} 
                      fill={isActive ? "currentColor" : "none"} 
                      className="relative z-10 transition-transform duration-300 group-active:scale-90" 
                    />
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.span 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="text-sm font-bold relative z-10"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                </button>
             )
          }

          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={cn(
                "p-4 rounded-full transition-all duration-300 relative group outline-none",
                isActive ? 'text-white' : 'text-gray-500 hover:text-white'
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <Icon 
                size={22} 
                strokeWidth={isActive ? 2.5 : 2} 
                className={cn(
                  "transition-all duration-300 relative z-10",
                  isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'group-hover:scale-110'
                )} 
              />
              
              {isActive && (
                  <motion.span 
                    layoutId="active-dot"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  />
              )}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}; 
