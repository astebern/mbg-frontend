import React from 'react';
import { motion } from 'motion/react';
import { 
  Soup, 
  ShoppingBag, 
  MapPin, 
  CreditCard, 
  Leaf, 
  Flame, 
  Award, 
  ArrowRight, 
  Lightbulb,
  Navigation,
  Utensils,
  ChevronDown
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';

export default function CriteriaScreen() {
  return (
    <Layout title="Criteria Selection">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Editorial Header Section */}
        <section className="mb-12 max-w-4xl">
          <p className="text-secondary font-bold tracking-widest text-[11px] uppercase mb-2">Step 02 — Personalization</p>
          <h2 className="text-5xl font-bold text-on-surface tracking-tight mb-4 font-headline">Refining Your Kitchen Palette</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            Set your boundaries. Whether you're foraging for local ingredients to cook at home or seeking the finest ready-made delights, we'll curate the perfect match for your budget.
          </p>
        </section>

        {/* Configuration Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Input Form Island */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div className="bg-surface-bright p-10 rounded-[24px] space-y-10 shadow-sm border border-outline">
              {/* Mode Selection */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Culinary Intent</label>
                <div className="bg-surface p-1.5 rounded-xl flex gap-1 border border-outline">
                  <button className="flex-1 py-3 px-6 rounded-xl bg-surface-bright text-primary font-bold shadow-sm transition-all flex items-center justify-center gap-2 border border-outline">
                    <Soup className="w-5 h-5" />
                    Cook at Home
                  </button>
                  <button className="flex-1 py-3 px-6 rounded-xl text-on-surface-variant font-medium hover:bg-surface-dim transition-all flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Buy Ready
                  </button>
                </div>
              </div>

              {/* Location and Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Location Dropdown */}
                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Your Neighborhood</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-surface border border-outline rounded-xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer font-semibold">
                      <option>Bandung, Dago</option>
                      <option>Jakarta, Menteng</option>
                      <option>Surabaya, Kapas Madya</option>
                      <option>Surakarta, Tembok Ratapan</option>
                    </select>
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5 pointer-events-none" />
                  </div>
                </div>

                {/* Budget Input */}
                <div className="space-y-4">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Daily Budget</label>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface border border-outline rounded-xl py-4 pl-12 pr-4 text-on-surface font-semibold focus:ring-2 focus:ring-primary/20 transition-all" 
                      type="text" 
                      defaultValue="£45.00"
                    />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-on-surface-variant">GBP</span>
                  </div>
                </div>
              </div>

              {/* Diet Micro-Badges */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Dietary Anchors</label>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary-container text-primary rounded-full text-[11px] font-bold flex items-center gap-2">
                    <Leaf className="w-3 h-3 fill-current" />
                    High Protein
                  </span>
                  <span className="px-4 py-2 bg-surface border border-outline text-on-surface-variant rounded-full text-[11px] font-bold hover:bg-primary-container hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                    <Utensils className="w-3 h-3" />
                    Low Carb
                  </span>
                  <span className="px-4 py-2 bg-surface border border-outline text-on-surface-variant rounded-full text-[11px] font-bold hover:bg-primary-container hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                    <Flame className="w-3 h-3" />
                    Keto Friendly
                  </span>
                  <span className="px-4 py-2 bg-surface border border-outline text-on-surface-variant rounded-full text-[11px] font-bold hover:bg-primary-container hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                    <Award className="w-3 h-3 fill-current" />
                    Organic Only
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action */}
            <div className="flex justify-end pt-4">
              <button className="px-12 py-5 signature-gradient text-white rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                Generate Culinary Results
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Contextual Map/Visual Side Panel */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* Location Preview Card */}
            <div className="bg-surface-bright border border-outline rounded-[24px] overflow-hidden group shadow-sm">
              <div className="h-64 bg-surface relative overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31CxuZlmoJg5sFb8x6bTq9juTra_AEZwDHGDGszk4yz4bjIwMjMpcftv1Q1tjGoxrdTK7ccfIW0m0-6MBZTDKJRZFccJqhHdp4-cWJDfJXhsRi-J_6RY496KbnyZ1xcoHMlGJof8i_4ume1HQV9V_FsSWH6huddFTT1mISNjqj_2ZckTffYMRe6xxs2mHMCLnC6W_FsPmhQ39hXB9HJB7QpQa4pyoL_I5UORzepNqiLVVR5j2P3vPN-zobK8G6vi7Pj4zhHhBioKE"
                  alt="Map view"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full w-fit border border-outline">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider">Dago Radius: 2.5mi</span>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-on-surface font-headline">Regional Insights</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Dago offers 14 artisan grocers and 82 curated dining options within your current 45-minute travel threshold.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-bright bg-surface flex items-center justify-center">
                        <Utensils className="w-3 h-3 text-on-surface-variant" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Active Vendors Tracked</span>
                </div>
              </div>
            </div>

            {/* Budget Atmospheric Tip */}
            <div className="p-8 bg-primary-container rounded-[24px] text-primary border border-primary/20 flex gap-6 items-start">
              <Lightbulb className="w-8 h-8 opacity-50 shrink-0" />
              <div className="space-y-2">
                <p className="font-bold text-lg font-headline">Curator's Suggestion</p>
                <p className="text-sm opacity-90 leading-relaxed">
                  Based on your £45.00 budget, we recommend the "Cook" mode today. Local heirloom tomatoes are in peak season and currently 20% below average market price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
