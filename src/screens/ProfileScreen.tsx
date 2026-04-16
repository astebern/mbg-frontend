import React from 'react';
import { motion } from 'motion/react';
import { 
  Edit3, 
  Shield, 
  Leaf, 
  Dumbbell, 
  Activity,
  AlertTriangle, 
  X, 
  Plus,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Target,
  ChevronRight,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';
import ppImage from '../resources/pp.png';

export default function ProfileScreen() {
  const dietaryPreferences = [
    { label: 'Vegan', checked: true },
    { label: 'Keto', checked: false },
    { label: 'Paleo', checked: false },
    { label: 'Gluten Free', checked: true },
    { label: 'Low Carb', checked: false },
    { label: 'Pescatarian', checked: false },
  ];

  return (
    <Layout title="Profile">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[1100px] mx-auto space-y-8 pb-20"
      >
        {/* Profile Header Card */}
        <div className="flex items-center gap-10 p-4">
          <div className="relative group">
            <div className="w-[140px] h-[140px] rounded-[32px] overflow-hidden bg-on-surface/5 border-2 border-surface-bright shadow-lg">
              <img 
                src={ppImage}
                alt="Fufufafa Subianto"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="absolute bottom-1 right-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-2 border-surface-bright shadow-lg hover:scale-105 transition-transform">
              <Edit3 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="user-info">
            <h1 className="text-5xl font-bold text-on-surface mb-2 font-headline tracking-tight">Fufufafa Subianto</h1>
            <div className="flex items-center gap-2 text-on-surface-variant font-medium">
              <Shield className="w-4 h-4 text-primary" />
              <span>Warteg Specialist</span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vitals Section */}
          <div className="bg-surface-bright p-10 rounded-[24px] border border-outline shadow-sm space-y-8">
            <div className="flex items-center gap-3">
              <header className="flex items-center gap-3 text-primary">
                <Dumbbell className="w-6 h-6 rotate-45" />
                <h3 className="text-xl font-bold font-headline text-on-surface">Vitals</h3>
              </header>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Height (CM)</label>
                <div className="bg-surface py-4 px-6 rounded-xl font-bold text-lg border border-outline/50">172</div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Weight (KG)</label>
                <div className="bg-surface py-4 px-6 rounded-xl font-bold text-lg border border-outline/50">68</div>
              </div>
            </div>

            <div className="bg-primary-container/30 border border-primary/20 p-6 rounded-xl">
              <div className="text-[10px] uppercase font-black text-primary tracking-widest mb-2">Calculated BMI</div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-on-surface font-headline">23.0</span>
                <span className="text-sm font-bold text-primary">Healthy Weight</span>
              </div>
            </div>
          </div>

          {/* Dietary Preferences Section */}
          <div className="bg-surface-bright p-10 rounded-[24px] border border-outline shadow-sm space-y-8">
            <header className="flex items-center gap-3 text-primary">
              <Settings className="w-6 h-6" />
              <h3 className="text-xl font-bold font-headline text-on-surface">Dietary Preferences</h3>
            </header>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {dietaryPreferences.map((diet) => (
                <button 
                  key={diet.label}
                  className={cn(
                    "flex items-center gap-3 py-4 px-5 rounded-xl border font-bold transition-all text-left",
                    diet.checked 
                      ? "bg-primary-container/20 border-primary/30 text-on-surface" 
                      : "bg-surface/50 border-outline/50 text-on-surface-variant opacity-60"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-md flex items-center justify-center border-2",
                    diet.checked ? "bg-primary border-primary text-white" : "border-outline text-transparent"
                  )}>
                    <X className={cn("w-3 h-3", diet.checked ? "block" : "hidden")} />
                  </div>
                  <span className="text-sm">{diet.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-outline">
              <h4 className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Allergies & Sensitivities</h4>
              <div className="flex flex-wrap gap-3">
                {['Peanuts', 'Shellfish'].map(allergy => (
                  <span key={allergy} className="flex items-center gap-2 py-2 px-4 bg-red-50 border border-red-100 text-red-700 text-[11px] font-bold rounded-full">
                    <AlertTriangle className="w-3 h-3" />
                    {allergy}
                    <X className="w-3 h-3 cursor-pointer opacity-50 hover:opacity-100" />
                  </span>
                ))}
                <button className="flex items-center gap-2 py-2 px-4 bg-surface-dim border border-outline text-on-surface-variant text-[11px] font-bold rounded-full hover:bg-surface-container transition-colors">
                  <Plus className="w-3 h-3" />
                  Add Allergy
                </button>
              </div>
            </div>
          </div>

          {/* Health Goals Section */}
          <div className="col-span-1 md:col-span-1 bg-surface-bright p-10 rounded-[24px] border border-outline shadow-sm space-y-8">
             <header className="flex items-center gap-3 text-primary">
              <TrendingUp className="w-6 h-6" />
              <h3 className="text-xl font-bold font-headline text-on-surface">Health Goals</h3>
            </header>

            <div className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Daily Calorie Target</label>
                <div className="h-4 w-full bg-surface-dim rounded-full overflow-hidden border border-outline/50 p-[3px]">
                  <div className="h-full w-[75%] bg-primary rounded-full" />
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>1,800 kcal</span>
                  <span className="text-on-surface-variant">Target: 2,400 kcal</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface p-5 rounded-2xl border border-outline/50">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-2">Activity Level</span>
                  <span className="text-lg font-bold text-on-surface">Moderate</span>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-outline/50">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-1">Primary Goal</span>
                  <span className="text-lg font-bold text-on-surface">Muscle Gain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Macro Goal Cards Wrap */}
          <div className="col-span-1 md:col-span-1 flex gap-4">
            {[
              { label: 'PROTEIN', value: '140g', tag: 'High', bg: 'border-primary' },
              { label: 'CARBS', value: '210g', bg: 'border-secondary' },
              { label: 'FATS', value: '65g', bg: 'border-outline' },
            ].map((macro) => (
              <div key={macro.label} className="flex-1 bg-surface-bright p-6 rounded-[24px] border border-outline shadow-sm text-center flex flex-col items-center justify-center space-y-4 transition-all hover:scale-105">
                <div className={cn("w-16 h-16 rounded-full border-[3px] flex items-center justify-center bg-surface-container/30", macro.bg)}>
                  <span className="text-lg font-black">{macro.value}</span>
                </div>
                <div>
                   <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">{macro.label}</span>
                   {macro.tag && (
                     <span className={cn("px-2 py-0.5 rounded-full text-[9px] font-black uppercase text-white bg-primary")}>
                       {macro.tag}
                     </span>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Snack UI */}
        <div className="fixed bottom-10 right-20 z-50">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-6 glass-panel pr-2 pl-6 py-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white/40"
          >
            <div className="flex -space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop" 
                className="w-12 h-12 rounded-full border-2 border-surface-bright object-cover" 
                alt="Meal"
              />
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop" 
                className="w-12 h-12 rounded-full border-2 border-surface-bright object-cover" 
                alt="Meal"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface leading-tight">Curated for Elena</p>
              <p className="text-xs text-on-surface-variant">3 Vegan options ready to prep</p>
            </div>
            <button className="w-12 h-12 signature-gradient rounded-[18px] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-90 transition-all">
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
