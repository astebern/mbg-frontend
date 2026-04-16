import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  UtensilsCrossed, 
  Moon, 
  Calendar, 
  ArrowRight, 
  Zap, 
  Archive, 
  Clock 
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';

const menuOptions = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    tag: 'Morning',
    tagBg: 'bg-primary-container/50',
    tagText: 'text-primary',
    icon: Sun,
    iconBg: 'bg-primary/5',
    iconText: 'text-primary',
    description: 'Energizing starts with complex carbs and high-protein options to fuel your day.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL6jEJBAnpekvpp2Me4c9P_CQJJKsQiGZ_CrTxt5rL1PC-oBQ6OJ8b5XplDz3DuQIY9OPcWpHwV2TSeUJdfSlKK4jxQex0VmcZxpZSmXHraf1k1Maevcz9riv_CE6ZXC4hgLzsVn7Qdmjls_SeL6k39MQABcBhTdceBwayvmt-PkVH8j66UmR6fNyftKi12jaV_NWkfrJFRzuA5kR8_ggqigdY6SJXdtubDLQLFLzYLnVz7kHQR2-QajxSAaBIdvp1nNHpTa6Y5fiA',
    action: 'Select Breakfast'
  },
  {
    id: 'lunch',
    title: 'Lunch',
    tag: 'Midday',
    tagBg: 'bg-primary-container/50',
    tagText: 'text-primary',
    icon: UtensilsCrossed,
    iconBg: 'bg-primary/5',
    iconText: 'text-primary',
    description: 'Balanced bowls and wraps designed to maintain steady cognitive performance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMZGYptf9VTcSRzGIratEmz6Ar5ZTQqM1ZbUG3ebtawvECm6VA0UM3j8WhkzFRmWKMM25HtnlR9dMw66ns9xc4YvreWs5MgBqkXP_nO67KW1ZKBMNW8tHcgNtoEOzMcgG9vT1oxylDFMT-0XTKnuuvqscR2-aPrkoNh2deMPDgN9MDaLMMouDgU2JW-xWiN98a96CY1P9u3i9aaGMA2q7RC04xwHqrEaSPfb_afus0_GY-cbx_LY1PGIqC3PI34XkER0DfBzIIb2t9',
    action: 'Select Lunch'
  },
  {
    id: 'dinner',
    title: 'Dinner',
    tag: 'Evening',
    tagBg: 'bg-primary-container/50',
    tagText: 'text-primary',
    icon: Moon,
    iconBg: 'bg-primary/5',
    iconText: 'text-primary',
    description: 'Restorative meals featuring nutrient-dense ingredients for recovery and rest.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpNB1F2v0asRt4sv_jR8GTIwIdTRBxLmFkIhDKgNNkqwDSz3IP8bhLDbQMcMUTUNNTCffx8Asgt71vijGqrX-2iG_otDtWS86uONwXJmcsNB8E-zHRXc9A9afPxhQbxcVKQulE73gqb0nV6sT-LNs-tDUaPSHxs6fTUqdPH42YbrGFIfpEpbQ4ViYfztD4YNuXeWUAfpcDV_eGH3pAJoWOJSoJlyLcDPoZBOb2sxloHcrAOwIgmSWTgfo0iiqAJIR_u00VbYrNJ7B3',
    action: 'Select Dinner'
  },
  {
    id: 'full-day',
    title: 'Full Day Plan',
    tag: 'All Day',
    tagBg: 'bg-primary',
    tagText: 'text-white',
    icon: Calendar,
    iconBg: 'signature-gradient',
    iconText: 'text-white',
    description: 'Complete macro-optimized curation from dawn to dusk. Best for total health tracking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4A0psHenR68rDsCBrxYJ6Fw3qeGCceC-qIt9TVdaz3x0_yGRNqIVMtS5nnh1etECzWLvWG4-gdV_AC31w6GSD-a4RiV0XSssOt2plGWZ-J3XAneLaXH42HTm0JpampJf0354Y4WOhvN1JhhaQCFD0tXks1jFEp8TjfP3feXRwWWspZQ17_MrJbOm7AvCPHX4rHPh50hTV2E-B_56fPlOr3Hc-umnpPOH58sbCnd-zMhF0Lwxrh1HPvIKYyRVP9OM7FKV_Xs-qjLtt',
    action: 'Start Full Plan',
    highlight: true
  }
];

export default function MenuPrepScreen() {
  return (
    <Layout title="Menu Selection">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-on-surface tracking-tight mb-2 font-headline">What's on the menu?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl font-normal">Select a meal type to begin curating your personalized nutritional experience for today.</p>
        </section>

        {/* Menu Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuOptions.map((option) => (
            <button 
              key={option.id}
              className="flex flex-col text-left group transition-all duration-300"
            >
              <div className="h-64 w-full rounded-t-[16px] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={option.image}
                  alt={option.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", option.tagBg, option.tagText)}>
                    {option.tag}
                  </span>
                </div>
              </div>
              <div className={cn(
                "bg-surface-bright p-6 rounded-b-[16px] border border-outline border-t-0 shadow-sm group-hover:bg-surface-container-low transition-colors flex-1 flex flex-col",
                option.highlight && "ring-2 ring-primary/10 group-hover:ring-primary/30"
              )}>
                <div className={cn("mb-4 w-12 h-12 rounded-xl flex items-center justify-center", option.iconBg, option.iconText)}>
                  <option.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{option.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{option.description}</p>
                <div className="mt-auto flex items-center text-primary font-bold text-sm">
                  {option.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Contextual Assistant Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-surface-bright border border-outline rounded-[16px]">
          <div className="flex flex-col gap-3">
            <Zap className="w-6 h-6 text-primary" />
            <h4 className="font-headline font-bold">Smart Macro Pairing</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Our AI automatically adjusts subsequent meal suggestions based on your first selection to hit your daily targets.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Archive className="w-6 h-6 text-primary" />
            <h4 className="font-headline font-bold">Pantry Integration</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Recommendations are weighted by items you already have in your Curated Kitchen pantry to minimize waste.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <h4 className="font-headline font-bold">Quick Prep Sync</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Each selection includes a "15-minute prep" toggle for those days when time is your most valuable ingredient.</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Meal Summary (Glassmorphism) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-panel px-8 py-4 rounded-full shadow-2xl z-50 hidden md:flex items-center gap-12">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Daily Budget</span>
          <span className="text-lg font-headline font-black text-primary">$45.00 Left</span>
        </div>
        <div className="h-8 w-px bg-outline/30"></div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Target Calories</span>
          <span className="text-lg font-headline font-black text-secondary">2,100 kcal</span>
        </div>
        <button className="signature-gradient text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
          Review Weekly Goals
        </button>
      </div>
    </Layout>
  );
}
