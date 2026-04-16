import React from 'react';
import { motion } from 'motion/react';
import { 
  Filter, 
  Download, 
  Eye, 
  Edit3, 
  ChevronDown, 
  Utensils, 
  ShoppingBag 
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';

const historyData = [
  {
    date: 'Oct 24',
    time: 'Thursday, 7:15 PM',
    title: 'Lemon Zest Grilled Salmon',
    subtitle: 'Mediterranean • Light Dinner',
    type: 'Cook',
    cost: '$12.45',
    calories: '480 kcal',
    tag: 'High Protein',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWL29-YNwcoaR22qyefjwGg9C_r1WwqshBSk_cug7Z2k-vWIGvnvATZd8P621jotSvbrwqbibp6ztU6NTEFSh4rQSMblAE16R4j9SQU9wEuEbTLGneGFZ3kHvqletG__DFeAexzdCRJNDUFQ6Vz0Xpegw82HFyH6cFLrDo8NFwjKiEeZr9SX9JgEzCjh64edQv49Oc5DqU_APizZjdNqDvKYQLPw6jtNQDiJkwMYSVt_gvEaJzEzITTWo4NFjbaAcD0O9sK8DLG-8I'
  },
  {
    date: 'Oct 23',
    time: 'Wednesday, 1:30 PM',
    title: 'Sweetgreen Harvest Bowl',
    subtitle: 'Purchased • Lunch',
    type: 'Buy',
    cost: '$18.90',
    calories: '620 kcal',
    tag: 'Vegan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLosPM54KlhhqAX5pe2_7VZd7Dpcv3ihm-ZLruVlbcBfwZiqchnBlX-_znIMsmQW2q6T0DuCwoq_s-TJLS-QGcMcibF9ME0C3HXmGqV_gnNKq8OQnW7J1qOjnAQCpNW2tL5NPiZM8lEq5Qq4OaCsBfy_lq7JqiJ7hSuQs_BtrihIfIxrCFVrOUxGqN2fMd5C8ogdhoSq5Qx4L20nxZtSIy3HhrHms3749klLADDhUaqB_KODn5dxesslz3j6QWf5hULMPHdFLDiOc_'
  },
  {
    date: 'Oct 22',
    time: 'Tuesday, 8:45 AM',
    title: 'Sourdough Avocado Toast',
    subtitle: 'Homemade • Breakfast',
    type: 'Cook',
    cost: '$4.30',
    calories: '340 kcal',
    tag: 'Heart Healthy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5w6KbKKpsYM341k0qBPTckfp0gjIc9SU_o2LFljWQlvV3dgTepNWhURNjtnzPLcraO3Ohd05bivUrQdOgRgHEdkPKraknKZT0Eo2KWY_ir-7YA3hm6Kp3BNVpHONBvGRkxxZtTQa1TCZNXRz8NC9VrL8-HbYyUx55CzBc5hVLI1vN9ak73bfnUJHpRfoTU7IqAFRJoQvBTwxfD9ApGgq8obHSXrquSjqoaZt7myjbYKI2dQb4FsdZ3SPYbeVkoVJwh4BOx4_7UzaW'
  },
  {
    date: 'Oct 21',
    time: 'Monday, 8:00 PM',
    title: 'Pizzeria Margherita',
    subtitle: 'Purchased • Social Dinner',
    type: 'Buy',
    cost: '$24.00',
    calories: '920 kcal',
    tag: 'High Sodium',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCyL2Ew8WsXsk7kFG3oVYANjVvpnRukTsrIH5yBeCipG5Ug3MKHq-hOYYLv0iODbrpXR4Phtx1EHrWRJynkXTuWpuVnTmpb6mB6u4JhXNksXgqEgdw_a4aHpJni7xUXxQvpDLPcBhJ4eo9jBFv2n01rkMCcVgIFgamNHIJgWWXQ5lnNEfFDQCDA_2J4bfjBaLMzgIkHfiT5AbDVTOIYMg4NQVvY8aLh9THhDQe5L9B_Ce9CIVLpCFh9K_Mxn-ULagt50geZc-J44z6'
  }
];

export default function HistoryScreen() {
  return (
    <Layout title="Menu History">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-secondary font-bold tracking-widest text-[11px] uppercase mb-2 block">Archive & Insights</span>
              <h2 className="text-4xl font-bold text-on-surface tracking-tight mb-2 font-headline">Your Culinary Journey</h2>
              <p className="text-on-surface-variant max-w-lg leading-relaxed font-normal">Reflect on your past culinary decisions, track your nutritional habits, and re-experience your favorite prepared or purchased meals.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 border border-outline bg-surface-bright text-on-surface rounded-xl font-semibold flex items-center gap-2 hover:bg-surface transition-all">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </section>

        {/* Stats Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-bright border border-outline p-6 rounded-[24px] flex flex-col justify-between group hover:bg-surface transition-all shadow-sm">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-headline">Total Meals</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold font-headline">142</span>
              <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-wider">+12% this month</span>
            </div>
          </div>
          <div className="bg-surface-bright border border-outline p-6 rounded-[24px] flex flex-col justify-between group hover:bg-surface transition-all shadow-sm">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-headline">Avg. Cost</span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold font-headline">$14.20</span>
              <span className="text-secondary text-[10px] font-bold uppercase tracking-wider">-$2.10 vs last week</span>
            </div>
          </div>
          <div className="bg-surface-bright border border-outline p-6 rounded-[24px] flex flex-col justify-between group hover:bg-surface transition-all shadow-sm">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-headline">Nutrient Score</span>
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-4xl font-bold font-headline">88/100</span>
              <div className="h-2 w-full bg-surface rounded-full overflow-hidden border border-outline">
                <div className="h-full w-[88%] bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-bright border border-outline p-6 rounded-[24px] flex flex-col justify-between group hover:bg-surface transition-all shadow-sm">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-headline">Buy vs Cook</span>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-headline">64%</span>
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Home Cooked</span>
              </div>
              <div className="flex flex-col border-l border-outline pl-4">
                <span className="text-2xl font-bold font-headline">36%</span>
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Purchased</span>
              </div>
            </div>
          </div>
        </section>

        {/* History Table */}
        <div className="bg-surface-bright border border-outline rounded-[24px] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-outline">
                  <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Meal Details</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Type</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Nutrition</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-right">Cost</th>
                  <th className="px-8 py-5 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline">
                {historyData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-surface transition-colors group">
                    <td className="px-8 py-6">
                      <span className="block font-bold text-on-surface">{item.date}</span>
                      <span className="text-[10px] text-on-surface-variant font-medium">{item.time}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-outline shadow-sm flex-shrink-0">
                          <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.image} alt={item.title} referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <span className="block font-bold text-lg font-headline text-on-surface leading-tight">{item.title}</span>
                          <span className="text-[11px] text-on-surface-variant font-medium">{item.subtitle}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider",
                        item.type === 'Cook' ? "bg-primary-container text-primary" : "bg-surface border border-outline text-on-surface-variant"
                      )}>
                        {item.type === 'Cook' ? <Utensils className="w-3 h-3" /> : <ShoppingBag className="w-3 h-3" />}
                        {item.type}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 bg-surface border border-outline text-[10px] font-bold rounded-full text-on-surface-variant uppercase tracking-wider">{item.calories}</span>
                        <span className={cn(
                          "px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider",
                          item.tag === 'High Sodium' ? "bg-red-100 text-red-700" : "bg-primary-container text-primary"
                        )}>{item.tag}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right font-bold text-primary">
                      {item.cost}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant border border-transparent hover:border-outline hover:bg-surface-bright hover:text-primary transition-all active:scale-90">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant border border-transparent hover:border-outline hover:bg-surface-bright hover:text-primary transition-all active:scale-90">
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination / Footer */}
          <div className="px-8 py-6 bg-surface border-t border-outline flex items-center justify-between">
            <span className="text-sm text-on-surface-variant font-medium">Showing 1-10 of 142 entries</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl border border-outline text-sm font-bold text-on-surface-variant hover:bg-surface-bright transition-colors disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-4 py-2 rounded-xl border border-outline text-sm font-bold text-primary hover:bg-surface-bright transition-colors">
                Next Page
              </button>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 flex justify-center">
          <button className="px-10 py-4 bg-surface-bright border border-outline rounded-full text-sm font-bold text-on-surface-variant hover:text-primary hover:border-primary transition-all flex items-center gap-2 shadow-sm">
            Load previous entries
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </Layout>
  );
}
