import React from 'react';
import { motion } from 'motion/react';
import { 
  Timer, 
  CheckCircle2, 
  ChevronRight, 
  Utensils 
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';

const results = [
  {
    id: 1,
    title: 'Harvest Quinoa & Roasted Yam Bowl',
    price: '$4.50',
    time: '15 min',
    tags: ['High Protein', '420 kcal', '18g Protein'],
    features: ['Fresh baby spinach & kale', 'Tri-color organic quinoa', 'Maple roasted yams'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSKFKohaI097lDOuOMoXqtKkMgR5fVEp-phT0URomLXiwzY394vSmbIH6-TM-DvuJ7FnyebE1XKs8EkkwV4TeXybZCg7XqC5toFU0c97PIDeuliBzLhvCP313EjzAq2-yg4dCIOiYrOULNqKyHS-NRoR0JQMcfANSTQpsEQ6W8XL2SS8gfTg5RwaYBCu9t4q3e9nlJXDoQOzn2_RVD78Ph74qCOcUTCr-dHKKIUPoAduNh-Q9JWabzOwTbPoIBBzptBxO3HN-5aivX'
  },
  {
    id: 2,
    title: 'Atlantic Salmon with Asparagus',
    price: '$8.25',
    time: '25 min',
    tags: ['Omega-3 Rich', '380 kcal', '32g Protein'],
    features: ['Wild caught salmon', 'Tender young asparagus', 'Meyer lemon zest'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH4mX8tlP0AICUVih59coT___d_5_ZyPfh4zkcYWc8_Je9IyKpHbX9kIsYiaR2p8VzTPI0TJeBaTgbJ-1MeyKLhiOjHe0TF53pyrX1livy-UB5U25oSB9Kbwy6ddy2W1_rosYfwYDf7AlldQ40urrKf0ToPQBwkZF3hgEPL-y2IrCo4mCtQgd23mX76q9rDpQujcB7kkLo3jTW49vPEyphRKGCmhmkxZ5Zi1_17MmWMvw0IWn2YR_OtZM22CX-eYPHwIPJ7Jlg96Hx'
  },
  {
    id: 3,
    title: 'Turkey & Wild Rice Stuffed Peppers',
    price: '$3.90',
    time: '45 min',
    tags: ['Low Carb', '310 kcal', '24g Protein'],
    features: ['Organic bell peppers', 'Lean ground turkey breast', 'Aged balsamic drizzle'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApE8Gkh1hdbxrLG2uT_nqA3MjZ88mInhEVHaONIIX9b1LIIXYg4jU_rLOcSwFUPBNG-jfnL-h3D1rs3R69BHBWw2hhzjmWY6Cd2ug1JFXSKiiV2gDHXyqBUVKwNFKy_DvwSwgC3fotHYjxZR8Afb0CCHIoxt9DguHuxW8LnAayBNq6yBDtBv-sffmhwYAU0d9SZIf9TQGRBN5liuB9-odPAl3E2yVnBZ9fZOBvJPv-7HRx2D43EUoc6vR7E5k1F1pCl8051oV3eukE'
  }
];

export default function ResultsScreen() {
  return (
    <Layout title="Results">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header & State Toggle */}
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-secondary font-bold tracking-widest text-[11px] uppercase mb-2 block">Curated Just For You</span>
            <h1 className="text-4xl font-bold text-on-surface tracking-tight max-w-2xl font-headline">Recommended Options Based on Your Profile</h1>
          </div>
          <div className="flex bg-surface border border-outline p-1.5 rounded-xl self-start">
            <button className="px-6 py-2 rounded-lg text-sm font-bold bg-surface-bright text-primary shadow-sm border border-outline">
              Ingredients List
            </button>
            <button className="px-6 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              Restaurant List
            </button>
          </div>
        </div> */}

        {/* Bento Grid Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item) => (
            <div 
              key={item.id}
              className="group bg-surface-bright rounded-[24px] border border-outline p-0 overflow-hidden flex flex-col transition-all hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="h-56 w-full relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 border border-outline">
                  <Timer className="w-3 h-3 text-secondary" />
                  <span className="text-[10px] font-bold text-on-surface">{item.time}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-on-surface font-headline leading-tight">{item.title}</h3>
                  <span className="text-primary font-black text-lg">{item.price}<span className="text-[10px] text-on-surface-variant font-medium">/pp</span></span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={tag} 
                      className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase",
                        idx === 0 ? "bg-primary-container text-primary" : "bg-surface border border-outline text-on-surface-variant"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-10 text-sm text-on-surface-variant">
                  {item.features.map((feature) => (
                    <p key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </p>
                  ))}
                </div>

                <button className="mt-auto w-full signature-gradient text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-sm hover:opacity-95 active:scale-[0.98] transition-all">
                  Select & Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Ingredient Section */}
        <div className="mt-20 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="bg-primary/5 absolute inset-0 rounded-[32px] -rotate-3 scale-105 -z-10 border border-primary/10"></div>
            <img 
              className="rounded-[32px] shadow-2xl w-full object-cover h-[500px] border border-outline" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_xZ7jSl7SZLXbcVLT8-c7rRaeog1R20r-lt88qdT985235JS9TaxBdmJe47cJINodiCjvBPgYKMo_MvWnOZQmNbuqQqlqZ5KpsbaD8OLaegIuKYb734ZFUQWLvSBCMlIrvBssOPkqNSngB2Vl5_IyuMI3I1ThIn6Mk2PdM-04JkuukC25lvRUXS0PlkEhA6efsur-6i5Sq8_DDkS6BQPgA36bIObnkJ8Qk-wGrSybd_bE0hCIQN6etind9VBE3oRGOjStqSDaKrBd"
              alt="Fresh grocery basket"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:ml-auto">
            <span className="text-secondary font-bold tracking-widest text-[11px] uppercase mb-4 block">Kitchen Efficiency</span>
            <h2 className="text-5xl font-bold text-on-surface tracking-tight mb-8 font-headline leading-[0.95]">Optimize Your Pantry Essentials</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              We've calculated that selecting the <span className="text-primary font-bold">Harvest Bowl</span> will utilize 80% of the dry ingredients currently in your pantry, reducing your shopping list to just 4 fresh items. 
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-bright border border-outline p-6 rounded-[24px]">
                <div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-2">Cost Savings</div>
                <div className="text-3xl font-bold text-primary font-headline">24%</div>
                <div className="mt-4 h-1.5 w-full bg-surface rounded-full">
                  <div className="h-full w-[24%] bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="bg-surface-bright border border-outline p-6 rounded-[24px]">
                <div className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-2">Health Rating</div>
                <div className="text-3xl font-bold text-primary font-headline">A+</div>
                <div className="mt-4 h-1.5 w-full bg-surface rounded-full">
                  <div className="h-full w-[95%] bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Feedback */}
        <div className="fixed bottom-12 right-12 z-50 animate-bounce">
          <div className="bg-surface-bright border border-outline p-4 pr-8 rounded-full shadow-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Active Plan</div>
              <div className="text-sm font-bold text-on-surface">3 Meals Recommended</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
