
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import { enhanceListingDescription } from '../services/geminiService';

const PGDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loadingAI, setLoadingAI] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  // Mock data
  const pg = {
    id: '1',
    title: 'Elite Student Residency - SG Highway',
    description: 'High-end student living in the heart of Ahmedabad. We offer a premium living experience with focus on comfort, safety, and a study-conducive environment.',
    price: 14500,
    location: { address: 'Plot 102, Near Iscon Circle, SG Highway', city: 'Ahmedabad', lat: 23.0258, lng: 72.5033 },
    amenities: ['1 Gbps WiFi', 'Organic Meals', 'Gym Access', 'Smart TV', 'Biometric Security'],
    genderPreference: 'Unisex',
    occupancyType: 'Single/Double',
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80', 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop']
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 5000);
  };

  const handleSmartEnhance = async () => {
    setLoadingAI(true);
    const enhanced = await enhanceListingDescription(pg.title, pg.amenities, pg.location.address);
    if (enhanced) {
      alert("Gemini AI Analysis:\n\n" + enhanced);
    }
    setLoadingAI(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 dark:bg-slate-950 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[550px] group relative border border-slate-100 dark:border-slate-800">
            <img src={pg.images[0]} alt={pg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {pg.images.slice(1).map((img, i) => (
              <img key={i} src={img} alt="Interior" className="w-48 h-32 rounded-[2rem] object-cover cursor-pointer hover:ring-8 ring-orange-500/20 transition-all shadow-2xl border border-slate-100 dark:border-slate-800" />
            ))}
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">{pg.title}</h1>
              <button 
                onClick={handleSmartEnhance}
                disabled={loadingAI}
                className="flex items-center justify-center gap-3 text-orange-600 dark:text-orange-400 bg-orange-500/10 px-8 py-4 rounded-3xl font-black hover:bg-orange-500/20 transition-all text-sm disabled:opacity-50 border border-orange-500/20 shadow-lg"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                {loadingAI ? 'AI Analysis Active...' : 'Generate AI Summary'}
              </button>
            </div>
            <p className="mt-8 text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-medium max-w-3xl">
              {pg.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Monthly Rent', val: `₹${pg.price}`, icon: '💰' },
              { label: 'Preferred', val: pg.genderPreference, icon: '👥' },
              { label: 'Stay Type', val: pg.occupancyType, icon: '🏠' },
              { label: 'Region', val: pg.location.city, icon: '🏙️' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center group hover:border-orange-500/30 transition-all">
                <span className="block text-3xl mb-3 transition-transform group-hover:scale-125">{item.icon}</span>
                <span className="block text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</span>
                <span className="text-lg font-black text-slate-900 dark:text-white">{item.val}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Premium Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pg.amenities.map(amenity => (
                <div key={amenity} className="flex items-center gap-4 p-6 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm group hover:border-orange-500/30 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-black text-sm uppercase tracking-widest">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Precise Location</h3>
              <span className="text-orange-600 dark:text-orange-400 text-xs font-black uppercase tracking-widest">{pg.location.address}</span>
            </div>
            <div className="shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-slate-800">
              <MapComponent lat={pg.location.lat} lng={pg.location.lng} address={pg.location.address} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-100 dark:border-slate-800 p-10 space-y-10">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">₹{pg.price}</span>
                <span className="text-slate-400 font-bold ml-2"> / mo</span>
              </div>
              <div className="flex items-center text-orange-600 font-black text-[10px] uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/10">
                ★ 4.9 Verified
              </div>
            </div>
            
            <form onSubmit={handleInquiry} className="space-y-8">
              <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 ml-2">Contract Duration</label>
                <select className="w-full px-6 py-5 border border-slate-100 dark:border-slate-800 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none bg-slate-50 dark:bg-slate-950 font-black text-slate-800 dark:text-white appearance-none cursor-pointer">
                  <option>Academic Term (6 Months)</option>
                  <option>Full Year (12 Months)</option>
                  <option>Short Lease (1 Month)</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-2">Introductory Note</label>
                <textarea 
                  className="w-full px-6 py-5 border border-slate-100 dark:border-slate-800 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 h-40 bg-slate-50 dark:bg-slate-950 outline-none font-bold text-slate-900 dark:text-white placeholder:text-slate-300" 
                  placeholder="Tell the owner a bit about yourself..."
                  defaultValue="Hi, I'm a postgraduate student looking for a calm environment."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={inquirySent}
                className="w-full bg-orange-600 text-white py-6 rounded-3xl font-black text-xl hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30 disabled:bg-green-600 disabled:shadow-green-600/30 active:scale-95"
              >
                {inquirySent ? '✓ Inquiry Sent' : 'Book a Tour'}
              </button>
            </form>
            
            <div className="pt-10 border-t border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 overflow-hidden ring-4 ring-orange-500/10">
                  <img src="https://i.pravatar.cc/100?u=admin" alt="Owner" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg">Mrs. Shah</h4>
                  <p className="text-[10px] text-orange-600 dark:text-orange-500 font-black uppercase tracking-widest">Gujarat Super Host</p>
                </div>
              </div>
              <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">Direct WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetail;
