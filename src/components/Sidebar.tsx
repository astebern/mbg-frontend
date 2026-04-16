import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  UserCircle, 
  UtensilsCrossed, 
  MapPin, 
  ShoppingCart, 
  Activity, 
  History, 
  Plus 
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

export default function Sidebar() {
  return (
    <aside className="h-screen w-[280px] fixed left-0 top-0 bg-[#E8F5E9]/40 backdrop-blur-md border-r border-[#C4CEC9]/30 flex flex-col py-10 px-[30px] z-50">
      <div className="mb-10">
        <h3 className="text-[14px] uppercase tracking-[3px] text-primary font-black mb-6 font-headline">The Curated Kitchen</h3>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold opacity-60">Culinary Assistant</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
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
  );
}
