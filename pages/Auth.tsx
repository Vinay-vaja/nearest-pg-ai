
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { UserRole } from '../types';

interface AuthProps {
  onLogin: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialMode = searchParams.get('mode') === 'signup';
  const initialRole = (searchParams.get('role') as UserRole) || UserRole.STUDENT;

  const [isSignup, setIsSignup] = useState(initialMode);
  const [role, setRole] = useState<UserRole>(initialRole);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsSignup(searchParams.get('mode') === 'signup');
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Premium loading simulation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name || 'Vinay Kumar',
      email: formData.email || 'vinay3@gmail.com',
      role: role,
    };
    
    onLogin(user);
    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-xl w-full relative group">
        {/* Modern Close/Back Button */}
        <Link 
          to="/"
          className="absolute -top-6 -right-6 w-14 h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center text-slate-400 hover:text-orange-600 dark:hover:text-orange-500 transition-all shadow-2xl hover:rotate-90 z-50 group-hover:scale-110 active:scale-90"
          aria-label="Go Back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </Link>

        <div className="bg-white dark:bg-slate-900 p-10 sm:p-14 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 relative z-10">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-orange-600 rounded-[2rem] flex items-center justify-center text-white font-black text-4xl mx-auto mb-8 shadow-2xl shadow-orange-500/40">
              N
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-3 leading-none">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              Join the student network
            </p>
          </div>

          {/* Luxury Role Switcher */}
          <div className="flex p-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-3xl mb-10">
            <button 
              onClick={() => setRole(UserRole.STUDENT)}
              className={`flex-1 py-4 text-sm font-black rounded-2xl transition-all duration-500 ${role === UserRole.STUDENT ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-xl' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              Student
            </button>
            <button 
              onClick={() => setRole(UserRole.OWNER)}
              className={`flex-1 py-4 text-sm font-black rounded-2xl transition-all duration-500 ${role === UserRole.OWNER ? 'bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-400 shadow-xl' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              Owner
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignup && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 block">Your Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="block w-full px-6 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Vinay Kumar"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 block">Email ID</label>
              <input 
                type="email" 
                required 
                className="block w-full px-6 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="e.g. vinay3@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Security Key</label>
                {!isSignup && <button type="button" className="text-[10px] font-black text-orange-600 uppercase hover:underline">Forgot?</button>}
              </div>
              <input 
                type="password" 
                required 
                className="block w-full px-6 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none font-bold text-slate-900 dark:text-white transition-all placeholder:text-slate-300"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="••••••••"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-6 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xl font-black rounded-3xl shadow-2xl shadow-orange-600/30 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  isSignup ? 'Register' : 'Login'
                )}
              </button>
            </div>
          </form>

          <div className="mt-12 text-center border-t border-slate-100 dark:border-slate-800 pt-8">
            <p className="text-slate-400 font-bold text-sm">
              {isSignup ? 'Already have an account?' : "New here?"}
              <button 
                onClick={() => setIsSignup(!isSignup)}
                className="ml-2 text-orange-600 dark:text-orange-500 hover:text-orange-700 font-black transition-colors underline underline-offset-4 decoration-2"
              >
                {isSignup ? 'Login' : 'Join NearestPG'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
