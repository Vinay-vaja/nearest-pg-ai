
import React from 'react';
import { UserRole } from '../types';

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const isOwner = user?.role === UserRole.OWNER;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
        <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 p-1.5 shadow-2xl shadow-orange-500/20">
          <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-5xl font-black text-orange-600 dark:text-orange-400 overflow-hidden">
            {user?.name?.[0] || 'V'}
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">{user?.name}</h1>
            <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase rounded-full tracking-widest self-center border border-orange-500/20">
              Verified {user?.role}
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg font-medium">{user?.email}</p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-8 py-3.5 text-sm font-black bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl active:scale-95">Edit Profile</button>
            <button className="px-8 py-3.5 text-sm font-black border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">Account Settings</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-orange-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-orange-600/30">
          <span className="text-orange-200 text-xs font-black uppercase tracking-[0.2em]">Active {isOwner ? 'Listings' : 'Bookings'}</span>
          <div className="text-6xl font-black mt-4 leading-none">{isOwner ? '3' : '1'}</div>
          <p className="text-orange-100 mt-6 text-sm font-bold bg-orange-700/30 inline-block px-3 py-1 rounded-full uppercase tracking-widest">Real-time stats</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
          <span className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Incoming Requests</span>
          <div className="text-6xl font-black text-slate-900 dark:text-white mt-4 leading-none">{isOwner ? '12' : '0'}</div>
          <p className="text-orange-600 dark:text-orange-400 mt-6 text-sm font-black uppercase tracking-widest flex items-center gap-2 animate-pulse">
            <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
            Action required
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
          <span className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Trust Score</span>
          <div className="text-6xl font-black text-slate-900 dark:text-white mt-4 leading-none">98</div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full mt-8 overflow-hidden">
            <div className="bg-green-500 h-full w-[98%] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{isOwner ? 'My Properties' : 'Pending Approvals'}</h2>
            <button className="text-orange-600 dark:text-orange-400 font-black text-sm uppercase tracking-widest hover:underline">{isOwner ? '+ New Listing' : 'View History'}</button>
          </div>
          
          <div className="space-y-8">
            {isOwner ? (
              [1, 2, 3].map(i => (
                <div key={i} className="flex flex-col sm:flex-row items-center gap-8 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all group">
                  <div className="w-full sm:w-28 h-28 rounded-3xl overflow-hidden shadow-2xl group-hover:rotate-3 transition-transform">
                    <img src={`https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=200&h=200&fit=crop`} className="w-full h-full object-cover" alt="Listing" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h4 className="font-black text-2xl text-slate-900 dark:text-white tracking-tight">Luxury Suite {i}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-bold">Ahmedabad, Prahlad Nagar</p>
                    <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                       <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-black uppercase rounded-full border border-green-500/10">Active</span>
                       <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase rounded-full border border-slate-200 dark:border-slate-700">Premium</span>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-auto">
                    <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20 hover:bg-orange-700 transition-all active:scale-95">Analytics</button>
                    <button className="flex-1 px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">Manage</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border-2 border-orange-500/20 shadow-2xl shadow-orange-500/5">
                <div className="flex flex-col sm:flex-row items-center gap-10">
                  <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
                    <img src={`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&h=200&fit=crop`} className="w-full h-full object-cover" alt="Listing" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h4 className="font-black text-3xl text-slate-900 dark:text-white tracking-tighter">Elite PG Stay</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-bold">University Area, Ahmedabad</p>
                    <div className="mt-6 flex items-center justify-center sm:justify-start gap-4">
                      <div className="h-3 w-3 bg-amber-500 rounded-full animate-ping"></div>
                      <span className="text-xs text-amber-600 dark:text-amber-500 font-black uppercase tracking-widest">Awaiting Owner Approval</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">Open Inquiry Chat</button>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tight">System Feed</h2>
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xl">
            <div className="p-8 border-b border-slate-50 dark:border-slate-800 hover:bg-orange-500/5 transition-all cursor-pointer group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                    <img src="https://i.pravatar.cc/100?u=rahul" alt="User" />
                  </div>
                  <div>
                    <span className="font-black text-lg block text-slate-900 dark:text-white">Rahul Patel</span>
                    <span className="text-[10px] text-orange-600 dark:text-orange-400 font-black uppercase tracking-widest">New Lead</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Just now</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-6 leading-relaxed font-medium italic">"Hey! Is the Rajkot property available for a six-month duration?"</p>
            </div>
            
            <div className="p-8 border-b border-slate-50 dark:border-slate-800 hover:bg-orange-500/5 transition-all cursor-pointer group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-orange-500/20 group-hover:rotate-12 transition-transform">AI</div>
                   <div>
                     <span className="font-black text-lg block text-slate-900 dark:text-white">Optimization Bot</span>
                     <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">System</span>
                   </div>
                </div>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">2h ago</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-6 leading-relaxed font-bold">Demand in Ahmedabad University Area is up by 32%. We recommend updating your listing price by 5%.</p>
            </div>
            
            <button className="w-full py-6 text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-[0.2em] hover:text-orange-600 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50">Load Historical Logs</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
