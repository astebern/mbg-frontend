import React from 'react';
import { motion } from 'motion/react';
import { Utensils, CircleHelp, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginScreen() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col">
      {/* TopNavBar Shell (Suppressing global nav links for focused login journey) */}
      <header className="fixed top-0 w-full z-50 bg-emerald-50/70 dark:bg-white-950/70 backdrop-blur-xl">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <Utensils className="text-primary w-8 h-8" />
            <span className="font-headline font-bold text-xl text-emerald-900 tracking-tight">Meal Budget Guide</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <CircleHelp className="text-zinc-500 hover:text-emerald-700 transition-colors cursor-pointer w-6 h-6" />
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pt-20 px-4">
        {/* Main Auth Container: Bento-inspired 2-Column Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-surface-container-low rounded-[2rem] overflow-hidden shadow-2xl shadow-on-surface/5"
        >
          {/* Visual Brand Panel (Desktop Only) */}
          <div className="hidden md:block relative overflow-hidden bg-primary-container">
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdsJnFnS7k0RIy4U_q55MSVHGYoFss1etUSHIjxHfJypj1k_aqvfKX0m4Q9gg3TOEs4ALUc8RRcn2cGf3Q8F2G9OQcesuyT3X2cGWthE5uRev9uHdUFg69XtmwvnOUWSgxO04jFpX_Sq-6BgTUQ5--nKTUV8DLRZ6kxPYlX8J99dTEF_wH0Sz24DADIym3tkHPi7fuwDxenUGociNJTSIusqMSzWILCxRl9wkLCDUckfOmwBBKwwcMLfCuyQ1bpK-wVzr9jf8A4NF6')" }}
            />
            <div className="relative h-full flex flex-col justify-end p-12 bg-gradient-to-t from-primary/80 to-transparent">
              <h2 className="font-headline font-extrabold text-4xl text-on-primary-container leading-tight mb-4">
                Nourishing your <br/>body and budget.
              </h2>
              <p className="text-on-primary-container/80 text-lg max-w-sm">
                Experience a more intentional way to plan, prep, and track your culinary journey with Meal Budget Guide.
              </p>
              <div className="mt-8 flex gap-2">
                <div className="h-1.5 w-12 rounded-full bg-on-primary-container"></div>
                <div className="h-1.5 w-4 rounded-full bg-on-primary-container/30"></div>
                <div className="h-1.5 w-4 rounded-full bg-on-primary-container/30"></div>
              </div>
            </div>
          </div>

          {/* Login Form Panel */}
          <div className="bg-surface-container-lowest p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <h1 className="font-headline font-bold text-3xl text-on-surface tracking-tight mb-2">Welcome Back</h1>
              <p className="text-on-surface-variant font-medium">Please enter your credentials to access your kitchen.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 text-outline w-5 h-5 pointer-events-none" />
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" 
                    id="email" 
                    name="email" 
                    placeholder="subianto@mbg.com" 
                    type="email"
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                  <a className="text-xs font-bold text-primary hover:text-tertiary transition-colors" href="#">Forgot Password?</a>
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 text-outline w-5 h-5 pointer-events-none" />
                  <input 
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type="password"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full bg-gradient-to-br from-[#0f5238] to-[#2d6a4f] text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 mt-4" 
                type="submit"
              >
                Log In
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-10 text-center space-y-4">
              <p className="text-on-surface-variant font-medium text-sm">
                Don't have an account? {' '}
                <a className="text-primary font-bold hover:underline" href="#">Sign Up</a>
              </p>
              
              <div className="flex items-center gap-4 py-2">
                <div className="h-px flex-grow bg-outline-variant/30"></div>
                <span className="text-xs font-bold text-outline-variant uppercase tracking-widest">or continue with</span>
                <div className="h-px flex-grow bg-outline-variant/30"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-high rounded-xl hover:bg-surface-variant transition-colors text-on-surface font-medium text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-high rounded-xl hover:bg-surface-variant transition-colors text-on-surface font-medium text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74.83 0 1.95-.83 3.43-.69 1.12.06 2.5.54 3.33 1.77-2.83 1.62-2.3 5.48.65 6.66-.69 1.65-1.6 3.38-2.49 4.49zm-3.06-14.7c.69-1 1.16-2.33.95-3.58-1.07.12-2.48.81-3.24 1.81-.66.86-1.22 2.21-.98 3.47 1.21.14 2.53-.74 3.27-1.7z" />
                  </svg>
                  Apple
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer Component */}
      <footer className="w-full mt-auto py-8 bg-zinc-100 dark:bg-zinc-900 border-t border-outline-variant/20">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline font-bold text-emerald-900 dark:text-emerald-400">Meal Budget Guide</span>
            <span className="font-body text-sm text-zinc-500">© K01 | Kata Evan Fengshui 04 Jelek. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a className="font-body text-sm text-zinc-500 hover:text-emerald-600 transition-all duration-200" href="#">Privacy Policy</a>
            <a className="font-body text-sm text-zinc-500 hover:text-emerald-600 transition-all duration-200" href="#">Terms of Service</a>
            <a className="font-body text-sm text-zinc-500 hover:text-emerald-600 transition-all duration-200" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
