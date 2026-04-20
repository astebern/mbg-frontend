import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  UserCircle, 
  UtensilsCrossed, 
  MapPin, 
  ShoppingCart, 
  Activity, 
  History, 
  Plus,
  X 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Profile', icon: UserCircle, path: '/profile' },
  { name: 'Menu Prep', icon: UtensilsCrossed, path: '/menu-prep' },
  { name: 'Criteria', icon: MapPin, path: '/criteria' },
  { name: 'Results', icon: ShoppingCart, path: '/results' },
  { name: 'Nutrition', icon: Activity, path: '/nutrition' },
  { name: 'History', icon: History, path: '/history' },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "h-screen w-[280px] fixed left-0 top-0 bg-[#E8F5E9]/40 backdrop-blur-md border-r border-[#C4CEC9]/30 flex flex-col py-10 px-[30px] z-50 transition-transform duration-300 ease-in-out",
        // Desktop: always visible; Mobile: slide in/out
        "lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Mobile close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-dim transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-10">
          <h3 className="text-[14px] uppercase tracking-[4px] text-primary font-black mb-6 font-headline">Meal Budget Guide</h3>
          <p className="text-[10px] text-on-surface-variant tracking-widest font-bold opacity-60">K01 | Kata Evan Fengshui 04 Jelek</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => cn(
                "flex items-center gap-4 py-3.5 px-4 rounded-xl text-[14px] font-bold transition-all group",
                isActive 
                  ? "bg-primary/10 text-primary shadow-[0_4px_12px_rgba(27,77,62,0.08)]" 
                  : "text-on-surface hover:bg-white/50 hover:text-primary"
              )}
            >
              {({ isActive }) => (
                <>
                  <div className={cn(
                    "w-8 h-8 rounded-[10px] transition-colors flex items-center justify-center",
                    isActive ? "bg-primary text-white shadow-lg" : "bg-[#C4CEC9]/20 text-on-surface-variant group-hover:bg-primary/20 group-hover:text-primary"
                  )}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="tracking-tight">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="w-full signature-gradient py-4 rounded-[16px] text-[13px] font-bold text-white shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Plan New Meal
          </button>
        </div>
      </aside>
    </>
  );
}
