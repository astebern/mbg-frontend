import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Settings,
  Check,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import Layout from '../components/Layout';
import { cn } from '@/src/lib/utils';
import ppImage from '../resources/pp.png';

const SEX_OPTIONS = ['Male', 'Female'] as const;
const ACTIVITY_LEVELS = ['Sedentary', 'Light', 'Moderate', 'Active', 'Very Active'] as const;
const PRIMARY_GOALS = ['Weight Loss', 'Muscle Gain', 'Maintain Weight', 'Improve Health', 'Athletic Performance'] as const;

const ALL_ALLERGIES = [
  'Peanuts', 'Shellfish', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Tree Nuts', 'Fish', 'Sesame'
];

export default function ProfileScreen() {
  // Vitals state
  const [sex, setSex] = useState<typeof SEX_OPTIONS[number]>('Male');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(172);
  const [weight, setWeight] = useState(68);
  const [activityLevel, setActivityLevel] = useState<typeof ACTIVITY_LEVELS[number]>('Moderate');
  const [primaryGoal, setPrimaryGoal] = useState<typeof PRIMARY_GOALS[number]>('Muscle Gain');

  // Dietary preferences state
  const [dietaryPreferences, setDietaryPreferences] = useState([
    { label: 'Vegan', checked: true },
    { label: 'Keto', checked: false },
    { label: 'Paleo', checked: false },
    { label: 'Gluten Free', checked: true },
    { label: 'Low Carb', checked: false },
    { label: 'Pescatarian', checked: false },
  ]);

  // Allergies state
  const [allergies, setAllergies] = useState<string[]>(['Peanuts', 'Shellfish']);
  const [showAllergyPicker, setShowAllergyPicker] = useState(false);

  // Computed BMI
  const bmi = useMemo(() => {
    const h = height / 100;
    return (weight / (h * h)).toFixed(1);
  }, [height, weight]);

  const bmiCategory = useMemo(() => {
    const val = parseFloat(bmi);
    if (val < 18.5) return { label: 'Underweight', color: 'text-amber-600' };
    if (val < 25) return { label: 'Healthy Weight', color: 'text-primary' };
    if (val < 30) return { label: 'Overweight', color: 'text-amber-600' };
    return { label: 'Obese', color: 'text-red-600' };
  }, [bmi]);

  // Computed TDEE & macros (Mifflin-St Jeor equation)
  const nutrition = useMemo(() => {
    // BMR calculation
    const bmr = sex === 'Male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

    // Activity multiplier
    const activityMultipliers: Record<string, number> = {
      'Sedentary': 1.2,
      'Light': 1.375,
      'Moderate': 1.55,
      'Active': 1.725,
      'Very Active': 1.9,
    };
    const tdee = Math.round(bmr * (activityMultipliers[activityLevel] || 1.55));

    // Goal adjustment
    const goalAdjustments: Record<string, number> = {
      'Weight Loss': -500,
      'Muscle Gain': 300,
      'Maintain Weight': 0,
      'Improve Health': 0,
      'Athletic Performance': 400,
    };
    const targetCalories = Math.round(tdee + (goalAdjustments[primaryGoal] || 0));

    // Macro split based on goal
    let proteinRatio = 0.30, carbRatio = 0.40, fatRatio = 0.30;
    if (primaryGoal === 'Muscle Gain') { proteinRatio = 0.35; carbRatio = 0.40; fatRatio = 0.25; }
    else if (primaryGoal === 'Weight Loss') { proteinRatio = 0.35; carbRatio = 0.30; fatRatio = 0.35; }
    else if (primaryGoal === 'Athletic Performance') { proteinRatio = 0.30; carbRatio = 0.45; fatRatio = 0.25; }

    const protein = Math.round((targetCalories * proteinRatio) / 4);
    const carbs = Math.round((targetCalories * carbRatio) / 4);
    const fats = Math.round((targetCalories * fatRatio) / 9);

    return { tdee, targetCalories, protein, carbs, fats };
  }, [sex, age, height, weight, activityLevel, primaryGoal]);

  function toggleDietaryPreference(index: number) {
    setDietaryPreferences(prev => 
      prev.map((item, i) => i === index ? { ...item, checked: !item.checked } : item)
    );
  }

  function removeAllergy(allergy: string) {
    setAllergies(prev => prev.filter(a => a !== allergy));
  }

  function addAllergy(allergy: string) {
    if (!allergies.includes(allergy)) {
      setAllergies(prev => [...prev, allergy]);
    }
    setShowAllergyPicker(false);
  }

  const availableAllergies = ALL_ALLERGIES.filter(a => !allergies.includes(a));

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
              {/* Sex Selection */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Sex</label>
                <div className="flex gap-3">
                  {SEX_OPTIONS.map(option => (
                    <button
                      key={option}
                      onClick={() => setSex(option)}
                      className={cn(
                        "flex-1 py-3.5 px-5 rounded-xl font-bold text-sm border-2 transition-all duration-200",
                        sex === option
                          ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                          : "bg-surface border-outline/50 text-on-surface-variant hover:border-primary/40 hover:bg-primary-container/10"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age / Height / Weight — single row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={e => setAge(Math.max(0, Math.min(999, parseInt(e.target.value) || 0)))}
                    className="w-full bg-surface py-4 px-5 rounded-xl font-bold text-lg border border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Height (CM)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={e => setHeight(Math.max(0, Math.min(999, parseInt(e.target.value) || 0)))}
                    className="w-full bg-surface py-4 px-5 rounded-xl font-bold text-lg border border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Weight (KG)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={e => setWeight(Math.max(0, Math.min(999, parseInt(e.target.value) || 0)))}
                    className="w-full bg-surface py-4 px-5 rounded-xl font-bold text-lg border border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Activity Level & Primary Goal — dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Activity Level</label>
                  <select
                    value={activityLevel}
                    onChange={e => setActivityLevel(e.target.value as typeof ACTIVITY_LEVELS[number])}
                    className="w-full bg-surface py-4 px-5 rounded-xl font-bold text-sm border border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer"
                  >
                    {ACTIVITY_LEVELS.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Primary Goal</label>
                  <select
                    value={primaryGoal}
                    onChange={e => setPrimaryGoal(e.target.value as typeof PRIMARY_GOALS[number])}
                    className="w-full bg-surface py-4 px-5 rounded-xl font-bold text-sm border border-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer"
                  >
                    {PRIMARY_GOALS.map(goal => (
                      <option key={goal} value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Calculated BMI */}
            <div className="bg-primary-container/30 border border-primary/20 p-6 rounded-xl">
              <div className="text-[10px] uppercase font-black text-primary tracking-widest mb-2">Calculated BMI</div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-on-surface font-headline">{bmi}</span>
                <span className={cn("text-sm font-bold", bmiCategory.color)}>{bmiCategory.label}</span>
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
              {dietaryPreferences.map((diet, index) => (
                <button 
                  key={diet.label}
                  onClick={() => toggleDietaryPreference(index)}
                  className={cn(
                    "flex items-center gap-1 py-4 px-5 rounded-xl border font-bold transition-all text-left",
                    diet.checked 
                      ? "bg-primary-container/20 border-primary/30 text-on-surface" 
                      : "bg-surface/50 border-outline/50 text-on-surface-variant opacity-60 hover:opacity-80"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 min-w-5 min-h-5 shrink-0 rounded-md flex items-center justify-center border-2 transition-all",
                    diet.checked ? "bg-primary border-primary text-white" : "border-outline text-transparent"
                  )}>
                    <Check className={cn("w-3 h-3", diet.checked ? "block" : "hidden")} />
                  </div>
                  <span className="text-sm">{diet.label}</span>
                </button>
              ))}
            </div>

            {/* Allergies & Sensitivities */}
            <div className="space-y-4 pt-4 border-t border-outline">
              <h4 className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Allergies & Sensitivities</h4>
              <div className="flex flex-wrap gap-3">
                <AnimatePresence>
                  {allergies.map(allergy => (
                    <motion.span
                      key={allergy}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      layout
                      className="flex items-center gap-2 py-2 px-4 bg-red-50 border border-red-100 text-red-700 text-[11px] font-bold rounded-full"
                    >
                      <AlertTriangle className="w-3 h-3" />
                      {allergy}
                      <button onClick={() => removeAllergy(allergy)} className="opacity-50 hover:opacity-100 transition-opacity">
                        <X className="w-3 h-3 cursor-pointer" />
                      </button>
                    </motion.span>
                  ))}
                </AnimatePresence>

                {/* Add Allergy Button / Picker */}
                <div className="relative">
                  <button
                    onClick={() => setShowAllergyPicker(!showAllergyPicker)}
                    className="flex items-center gap-2 py-2 px-4 bg-surface-dim border border-outline text-on-surface-variant text-[11px] font-bold rounded-full hover:bg-surface-container transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    Add Allergy
                  </button>

                  <AnimatePresence>
                    {showAllergyPicker && availableAllergies.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        className="absolute top-full left-0 mt-2 bg-surface-bright border border-outline rounded-xl shadow-xl p-2 z-50 min-w-[180px]"
                      >
                        {availableAllergies.map(allergy => (
                          <button
                            key={allergy}
                            onClick={() => addAllergy(allergy)}
                            className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-primary-container/20 rounded-lg transition-colors"
                          >
                            {allergy}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Diet Guide Link — inside Dietary Preferences */}
            <a
              href="/diet-guide"
              className="flex items-center justify-between p-5 rounded-xl border border-outline/50 hover:border-primary/30 hover:bg-primary-container/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-container/40 flex items-center justify-center text-primary">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Panduan Diet</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Pelajari panduan nutrisi dan pola makan sehat</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Health Goals Section — full width */}
          <div className="col-span-1 md:col-span-2 bg-surface-bright p-10 rounded-[24px] border border-outline shadow-sm space-y-8">
             <header className="flex items-center gap-3 text-primary">
              <TrendingUp className="w-6 h-6" />
              <h3 className="text-xl font-bold font-headline text-on-surface">Health Goals</h3>
            </header>

            <div className="space-y-8">
              {/* Daily Calorie Target */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Daily Calorie Target</label>
                <div className="h-4 w-full bg-surface-dim rounded-full overflow-hidden border border-outline/50 p-[3px]">
                  <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${Math.min(100, (nutrition.tdee / nutrition.targetCalories) * 100)}%` }} />
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span>TDEE: {nutrition.tdee.toLocaleString()} kcal</span>
                  <span className="text-on-surface-variant">Target: {nutrition.targetCalories.toLocaleString()} kcal</span>
                </div>
              </div>

              {/* Activity & Goal Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface p-5 rounded-2xl border border-outline/50">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-2">Activity Level</span>
                  <span className="text-lg font-bold text-on-surface">{activityLevel}</span>
                </div>
                <div className="bg-surface p-5 rounded-2xl border border-outline/50">
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block mb-1">Primary Goal</span>
                  <span className="text-lg font-bold text-on-surface">{primaryGoal}</span>
                </div>
              </div>

              {/* Macro Breakdown */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest block">Macro Breakdown</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'PROTEIN', value: `${nutrition.protein}g`,  bg: 'border-secondary' },
                    { label: 'CARBS', value: `${nutrition.carbs}g`, bg: 'border-secondary' },
                    { label: 'FATS', value: `${nutrition.fats}g`, bg: 'border-outline' },
                  ].map((macro) => (
                    <div key={macro.label} className="bg-surface p-6 rounded-2xl border border-outline/50 text-center flex flex-col items-center justify-center space-y-3 transition-all hover:scale-105">
                      <div className={cn("w-16 h-16 rounded-full border-[3px] flex items-center justify-center bg-surface-container/30", macro.bg)}>
                        <span className="text-lg font-black">{macro.value}</span>
                      </div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-1">{macro.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Disclaimer */}
              <div className="flex items-start gap-4 bg-amber-50 border border-amber-200/60 p-5 rounded-xl">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1">Rekomendasi</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Target kalori dan makronutrien dihitung menggunakan persamaan <strong>Mifflin-St Jeor</strong> yang disesuaikan dengan tingkat aktivitas dan tujuan Anda. Rumus ini direkomendasikan oleh <strong>Academy of Nutrition and Dietetics</strong> sebagai metode paling akurat untuk estimasi kebutuhan energi harian.
                  </p>
                </div>
              </div>
            </div>
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
