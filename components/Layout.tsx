
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: any;
  onLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, theme, toggleTheme }) => {
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900/80 border-slate-800 backdrop-blur-md' : 'bg-white/80 border-slate-200 backdrop-blur-md'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform shadow-lg shadow-orange-500/20">N</div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">NearestPG</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/listings" className={`font-semibold transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-orange-500' : 'text-slate-600 hover:text-orange-600'}`}>Explore Stays</Link>
            {user?.role === UserRole.OWNER && (
              <Link to="/dashboard" className={`font-semibold transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-orange-500' : 'text-slate-600 hover:text-orange-600'}`}>Management</Link>
            )}
            {user?.role === UserRole.STUDENT && (
              <Link to="/dashboard" className={`font-semibold transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-orange-500' : 'text-slate-600 hover:text-orange-600'}`}>My Bookings</Link>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all ${theme === 'dark' ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end">
                  <span className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}`}>{user.name}</span>
                  <span className="text-[10px] uppercase font-bold text-orange-500 tracking-wider">{user.role}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className={`px-4 py-2 text-sm font-bold border rounded-xl transition-all ${theme === 'dark' ? 'text-slate-300 border-slate-700 hover:bg-slate-800' : 'text-slate-700 border-slate-200 hover:bg-orange-50 hover:text-orange-600'}`}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/auth" className="px-4 py-2 text-sm font-bold text-orange-600 hover:underline transition-all">Log In</Link>
                <Link to="/auth?mode=signup" className="px-5 py-2.5 text-sm font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30">Get Started</Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className={`border-t transition-colors duration-300 py-16 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">N</div>
                <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>NearestPG</span>
              </div>
              <p className={`max-w-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                Empowering students to find safe, affordable, and high-quality living spaces near their educational institutions with zero brokerage.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-6 uppercase text-xs tracking-widest ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>Platform</h4>
              <ul className={`space-y-3 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <li><Link to="/listings" className="hover:text-orange-600 transition-colors">Search Listings</Link></li>
                <li><Link to="/auth?mode=signup&role=OWNER" className="hover:text-orange-600 transition-colors">List Your PG</Link></li>
                <li><Link to="/" className="hover:text-orange-600 transition-colors">How it works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className={`font-bold mb-6 uppercase text-xs tracking-widest ${theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}`}>Support</h4>
              <ul className={`space-y-3 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <li>help@nearestpg.com</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium border-slate-200 dark:border-slate-800 text-slate-400">
            <p>© {new Date().getFullYear()} NearestPG Technologies Pvt Ltd.</p>
            <div className="flex gap-6">
              <span className="hover:text-orange-500 cursor-pointer">IG</span>
              <span className="hover:text-orange-500 cursor-pointer">X</span>
              <span className="hover:text-orange-500 cursor-pointer">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
