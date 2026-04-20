import React, { useState, useRef, useEffect } from 'react';
import { Bell, Settings, LogOut, Menu } from 'lucide-react';
import ppImage from '../resources/pp.png';

interface TopBarProps {
  title: string;
  onMenuToggle: () => void;
}

export default function TopBar({ title, onMenuToggle }: TopBarProps) {
  const [showLogout, setShowLogout] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowLogout(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-280px)] z-40 bg-surface-bright/40 backdrop-blur-xl border-b border-white/20 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 lg:py-4 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Hamburger menu — only shown on mobile */}
        <button 
          onClick={onMenuToggle}
          className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-dim hover:text-primary transition-all"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[2px]">{title}</h2>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-6">
        <div className="flex gap-2 sm:gap-4 items-center">
          <button className="text-on-surface-variant hover:text-primary transition-all">
            <Bell className="w-5 h-5" />
          </button>

          {/* Settings with logout dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowLogout(prev => !prev)}
              className="text-on-surface-variant flex hover:text-primary transition-all"
            >
              <Settings className="w-5 h-5" />
            </button>

            {showLogout && (
              <div className="absolute right-0 top-full mt-2 bg-surface-bright border border-outline rounded-xl shadow-xl py-1 min-w-[160px] animate-in fade-in slide-in-from-top-2 z-50">
                <button
                  onClick={() => { /* handle logout */ }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors rounded-xl"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-outline shadow-sm">
            <img 
              alt="User avatar" 
              src={ppImage}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
