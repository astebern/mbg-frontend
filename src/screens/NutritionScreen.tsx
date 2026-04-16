import React from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, 
  Leaf, 
  Heart, 
  ChevronRight, 
  Download, 
  Edit3,
  Search
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';

export default function NutritionScreen() {
  return (
    <Layout title="Nutrition Dashboard">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Welcome Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-on-surface-variant font-bold text-[11px] uppercase tracking-wider mb-1">Today's Summary</p>
            <h1 className="text-4xl font-bold text-on-surface tracking-tight font-headline">Fueling Your Goals</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-lg border border-outline bg-surface-bright text-on-surface font-semibold text-[13px] hover:bg-surface transition-colors">
              Download Report
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-[13px] hover:opacity-90 transition-opacity shadow-sm">
              Edit Daily Targets
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Daily Calories Main Card */}
          <div className="col-span-12 lg:col-span-8 bg-surface-bright border border-outline rounded-[24px] p-10 flex flex-col justify-between min-h-[400px] shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2 font-headline">Daily Caloric Intake</h3>
                <p className="text-on-surface-variant max-w-md">You've consumed 75% of your recommended daily energy intake based on today's curated menu.</p>
              </div>
              <div className="text-right">
                <span className="text-5xl font-black text-primary font-headline">1,850</span>
                <span className="text-on-surface-variant font-bold ml-1">/ 2,400 kcal</span>
              </div>
            </div>
            
            {/* Custom Progress Visualization */}
            <div className="mt-12">
              <div className="flex justify-between mb-4 px-1">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">0 kcal</span>
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Target: 2,400 kcal</span>
              </div>
              <div className="h-16 w-full bg-surface rounded-full p-2 relative overflow-hidden border border-outline">
                <div 
                  className="h-full bg-primary rounded-full flex items-center justify-end px-4 transition-all duration-1000"
                  style={{ width: '77%' }}
                >
                  <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Breakfast', value: '450 kcal' },
                { label: 'Lunch', value: '720 kcal' },
                { label: 'Dinner', value: '680 kcal' },
              ].map((meal) => (
                <div key={meal.label} className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{meal.label}</span>
                  <span className="text-xl font-bold">{meal.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Macro Distribution Circular */}
          <div className="col-span-12 lg:col-span-4 bg-surface border border-outline rounded-[24px] p-10 flex flex-col items-center justify-center text-center shadow-sm">
            <h3 className="text-xl font-bold mb-8 font-headline">Macronutrient Balance</h3>
            <div className="relative h-48 w-48 mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle className="stroke-surface-dim" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="3"></circle>
                <circle className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeDasharray="30, 100" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="3"></circle>
                <circle className="stroke-primary/30" cx="18" cy="18" fill="none" r="16" strokeDasharray="25, 100" strokeDashoffset="-75" strokeLinecap="round" strokeWidth="3"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Ideal</span>
                <span className="text-lg font-black font-headline">Zone</span>
              </div>
            </div>
            <div className="w-full space-y-4">
              {[
                { label: 'Protein', value: '142g (45%)', color: 'bg-primary' },
                { label: 'Carbs', value: '94g (30%)', color: 'bg-secondary' },
                { label: 'Fats', value: '78g (25%)', color: 'bg-primary/30' },
              ].map((macro) => (
                <div key={macro.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cn("w-3 h-3 rounded-full", macro.color)}></div>
                    <span className="text-sm font-medium">{macro.label}</span>
                  </div>
                  <span className="text-sm font-bold">{macro.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div className="col-span-12 bg-surface-bright border border-outline rounded-[24px] p-10 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-bold font-headline">Weekly Performance Overview</h3>
              <span className="px-3 py-1 bg-primary-container text-primary text-[11px] font-bold rounded-full">Optimal Week</span>
            </div>
            <div className="flex items-end justify-between h-64 w-full gap-4 px-4">
              {[
                { day: 'Mon', height: '70%', secondary: '85%' },
                { day: 'Tue', height: '88%', secondary: '92%' },
                { day: 'Wed', height: '72%', secondary: '78%' },
                { day: 'Thu', height: '90%', secondary: '95%' },
                { day: 'Fri', height: '82%', secondary: '88%' },
                { day: 'Sat', height: '55%', secondary: '60%' },
                { day: 'Sun', height: '40%', secondary: '45%' },
              ].map((bar) => (
                <div key={bar.day} className="flex-1 flex flex-col items-center gap-4 h-full">
                  <div className="w-full bg-surface rounded-t-xl relative group h-full flex flex-col justify-end overflow-hidden border-x border-t border-outline">
                    <div className="w-full bg-primary/10 rounded-t-xl transition-all duration-500" style={{ height: bar.secondary }}></div>
                    <div className="absolute bottom-0 w-full bg-primary rounded-t-xl group-hover:bg-primary/90 transition-all duration-500" style={{ height: bar.height }}></div>
                  </div>
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-Nutrient Cards */}
          <div className="col-span-12 md:col-span-4 bg-surface border border-outline rounded-[24px] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold font-headline">Hydration</h4>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Goal: 3.5 Liters</p>
              </div>
            </div>
            <div className="h-2 w-full bg-surface-dim rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-primary rounded-full"></div>
            </div>
            <p className="mt-4 text-[11px] font-bold text-right text-primary uppercase tracking-wider">2.2L Consumed</p>
          </div>

          <div className="col-span-12 md:col-span-4 bg-surface border border-outline rounded-[24px] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold font-headline">Fiber Intake</h4>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Goal: 30g Daily</p>
              </div>
            </div>
            <div className="h-2 w-full bg-surface-dim rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-primary rounded-full"></div>
            </div>
            <p className="mt-4 text-[11px] font-bold text-right text-primary uppercase tracking-wider">27g Consumed</p>
          </div>

          <div className="col-span-12 md:col-span-4 bg-surface border border-outline rounded-[24px] p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h4 className="font-bold font-headline">Sodium Levels</h4>
                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Limit: 2,300mg</p>
              </div>
            </div>
            <div className="h-2 w-full bg-surface-dim rounded-full overflow-hidden">
              <div className="h-full w-[40%] bg-primary rounded-full"></div>
            </div>
            <p className="mt-4 text-[11px] font-bold text-right text-primary uppercase tracking-wider">920mg Tracked</p>
          </div>
        </div>

        {/* Recent Meal Impact */}
        <div className="mt-12 bg-surface-bright rounded-[24px] p-10 shadow-sm border border-outline">
          <h3 className="text-2xl font-bold mb-8 font-headline">Recent Meal Nutritional Impact</h3>
          <div className="space-y-6">
            {[
              {
                title: 'Mediterranean Salmon Bowl',
                tags: ['High Protein', 'Heart Healthy'],
                calories: '580 kcal',
                impact: '+24% Target',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArGaIX7t0rQgIPdgJ5vO0aQwuWnNcWJx6IbLB5QtnHxwYu9mXrxT4aswMPiWzsFVDQokx_wW4To4XNUj4wlOtMkENbZQauWJ_AWgFZToEPhfsrpXPnZNBSCYpk3FGOOuP8QX0cf8jUHVXFb3uLasPbYDyZoA5QidxNVJoNtH7nVrh3AINwksjydT7EKxUWzWWAScF4xbhuW_dKxHdxJp1kS5InlUY30tt4BKSfajQvsJhEsZhE7ZqsJOwJU50M6asymB2y23FOBy0h'
              },
              {
                title: 'Avocado Sourdough Stack',
                tags: ['Morning Fuel'],
                calories: '420 kcal',
                impact: '+18% Target',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjK6yehCgAuIvRZ9WHa2qn8sTTBnKmcA38P5QeL9iarwWVPUDCon2QzxO46qX_mZkv667npM9yYP5sy2MFLzobD1L0-xzQZLoiD8kMRK7WGQW_nk1-6Qf_NCfGP4OsAfOFjjVv6_liA_hfiY48NELVKBrKe4nPRrLF1Ppr2kCyLx11aJX076h0on03vXHH9Z5175SZhx4uK2zlE2HDNniDw_f2w4_nzaklowqNYBjQu06aHlYe5AQ450NHgIou7QCxz5i0wWtOhLse'
              }
            ].map((meal) => (
              <div key={meal.title} className="flex items-center justify-between p-4 hover:bg-surface rounded-2xl transition-colors cursor-pointer group border border-transparent hover:border-outline">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm border border-outline">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={meal.image} alt={meal.title} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg font-headline">{meal.title}</h5>
                    <div className="flex gap-2 mt-1">
                      {meal.tags.map((tag, idx) => (
                        <span key={tag} className={cn("px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider", idx === 0 ? "bg-primary-container text-primary" : "bg-surface border border-outline text-on-surface-variant")}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-12 text-right items-center">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Calories</p>
                    <p className="text-lg font-bold">{meal.calories}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Impact</p>
                    <p className="text-lg font-bold text-primary">{meal.impact}</p>
                  </div>
                  <ChevronRight className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Glassmorphic Meal Summary Snackbar */}
      <div className="fixed bottom-8 right-8 z-50 glass-panel px-6 py-4 rounded-[24px] shadow-xl flex items-center gap-6">
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-xl border-2 border-white bg-primary flex items-center justify-center text-white text-[10px] font-bold">PRO</div>
          <div className="w-10 h-10 rounded-xl border-2 border-white bg-secondary flex items-center justify-center text-white text-[10px] font-bold">CRB</div>
          <div className="w-10 h-10 rounded-xl border-2 border-white bg-primary-container flex items-center justify-center text-primary text-[10px] font-bold">FAT</div>
        </div>
        <div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Daily Score</p>
          <p className="text-sm font-black font-headline">94 / 100 Nutritional Grade</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-xl text-[11px] font-bold hover:scale-105 transition-transform">View Insights</button>
      </div>
    </Layout>
  );
}
