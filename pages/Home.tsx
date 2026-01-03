
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const CITIES = [
  { name: 'Ahmedabad', img: 'https://images.unsplash.com/photo-1594142461690-38f383e58395?q=80&w=800&auto=format&fit=crop' },
  { name: 'Surat', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop' },
  { name: 'Vadodara', img: 'https://images.unsplash.com/photo-1627318725838-89c56ca8ec15?q=80&w=800&auto=format&fit=crop' },
  { name: 'Rajkot', img: 'https://images.unsplash.com/photo-1597003831388-75c697818e6a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Gandhinagar', img: 'https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=800&auto=format&fit=crop' },
  { name: 'Bhavnagar', img: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca04a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Jamnagar', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a594?q=80&w=800&auto=format&fit=crop' },
  { name: 'Junagadh', img: 'https://images.unsplash.com/photo-1626014303757-6466336e492b?q=80&w=800&auto=format&fit=crop' },
];

const Home: React.FC = () => {
  const [citySearch, setCitySearch] = useState('');

  const filteredCities = useMemo(() => {
    return CITIES.filter(city => 
      city.name.toLowerCase().includes(citySearch.toLowerCase())
    );
  }, [citySearch]);

  return (
    <div className="space-y-16 pb-20 overflow-x-hidden transition-colors duration-300 dark:bg-slate-950 bg-white">
      {/* Redesigned Creative Hero Section */}
      <section className="relative overflow-hidden pt-16 lg:pt-32 pb-24 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[100px]"></div>
          
          {/* Moving decorative circles */}
          <div className="absolute top-1/4 left-[5%] w-32 h-32 bg-orange-600/5 rounded-full animate-bounce delay-75"></div>
          <div className="absolute top-1/3 right-[10%] w-48 h-48 border border-orange-500/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 dark:bg-orange-500/20 rounded-full text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest mb-10 border border-orange-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            #1 Rated Student Housing Network in Gujarat
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] mb-10 transition-all">
            Home Is <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">A Click Away.</span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto font-medium">
            Join 25,000+ students who skipped the middleman. <br className="hidden md:inline"/>
            Premium verified PGs in Ahmedabad, Surat, and across Gujarat.
          </p>
          
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/auth?mode=signup"
              className="group relative px-14 py-6 bg-orange-600 text-white text-xl font-black rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-500/40 active:scale-95 transition-all w-full sm:w-auto"
            >
              <span className="relative z-10">Start Searching</span>
              <div className="absolute inset-0 bg-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link 
              to="/listings"
              className="px-14 py-6 border-2 border-slate-200 dark:border-slate-800 text-xl font-black rounded-[2.5rem] text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all backdrop-blur-sm active:scale-95 w-full sm:w-auto"
            >
              Listings
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Gujarat Hubs', val: '8 Cities' },
              { label: 'Active Students', val: '25k+' },
              { label: 'Commission', val: '₹ 0' },
              { label: 'Verified Stays', val: '1200+' }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-2">
                <div className="text-3xl font-black text-orange-600 dark:text-orange-500 mb-2">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations - With Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Top Cities</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-medium">Find accommodation in your university area</p>
          </div>
          <div className="relative w-full md:w-[28rem] group">
            <input 
              type="text" 
              placeholder="Search by city (e.g. Surat)..."
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
            <svg className="w-6 h-6 text-slate-300 group-focus-within:text-orange-500 absolute left-5 top-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar min-h-[440px]">
          {filteredCities.length > 0 ? filteredCities.map((city, idx) => (
            <Link 
              key={idx} 
              to={`/listings?city=${city.name}`} 
              className="flex-shrink-0 w-72 h-[460px] group relative rounded-[3rem] overflow-hidden shadow-2xl snap-start transition-all hover:shadow-orange-500/30 hover:-translate-y-4"
            >
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900">
                <img 
                  src={city.img} 
                  alt={city.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" 
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-10">
                <span className="text-white text-3xl font-black tracking-tight mb-2 leading-none">{city.name}</span>
                <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse Stays
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          )) : (
            <div className="w-full py-24 text-center bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border-4 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                <svg className="w-10 h-10 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <p className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.3em] text-sm">City not found</p>
              <button onClick={() => setCitySearch('')} className="mt-6 text-orange-600 dark:text-orange-500 font-black text-sm uppercase tracking-widest hover:underline">Clear Search</button>
            </div>
          )}
          <div className="flex-shrink-0 w-12"></div>
        </div>
      </section>

      {/* Trust & Stats Banner */}
      <section className="bg-orange-600 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '5000+', label: 'Stays Mapped' },
              { val: '25k+', label: 'Active Students' },
              { val: '0', label: 'Hidden Fees' },
              { val: '4.9/5', label: 'User Rating' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-6xl font-black mb-3 group-hover:scale-110 transition-transform">{stat.val}</div>
                <div className="text-orange-100 text-[10px] font-black uppercase tracking-[0.3em] opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 relative dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">Built For Students.</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">No brokers, no fake photos, no headaches.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: 'High-Def Mapping', 
                desc: 'Accurate to the meter. Find PGs that are actually a 2-minute walk from your college.', 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              },
              { 
                title: 'Gemini AI Insights', 
                desc: 'AI-generated summaries of reviews and amenities to help you pick the best stay.', 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              },
              { 
                title: 'Direct WhatsApp', 
                desc: 'Chat directly with verified property owners. Save thousands on brokerage fees.', 
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              }
            ].map((f, i) => (
              <div key={i} className="p-14 rounded-[4rem] bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 transition-all group shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 border border-slate-100 dark:border-slate-800">
                <div className="w-16 h-16 bg-orange-600 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform text-white shadow-xl shadow-orange-500/30">
                  {f.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 text-slate-900 dark:text-white leading-tight">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
