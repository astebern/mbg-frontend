import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import ppImage from '../resources/pp.png';

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-surface-bright/40 backdrop-blur-xl border-b border-white/20 flex justify-between items-center px-12 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-4">
        <h2 className="text-[11px] font-bold text-on-surface-variant uppercase tracking-[2px]">{title}</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <input 
            className="bg-surface border border-outline rounded-lg py-2 pl-10 pr-4 text-[13px] w-64 focus:ring-2 focus:ring-primary/20 transition-all" 
            placeholder="Search preferences..." 
            type="text"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
        </div>
        
        <div className="flex gap-4 items-center">
          <button className="text-on-surface-variant hover:text-primary transition-all">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-all">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-outline shadow-sm">
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
