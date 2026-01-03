
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PGListing } from '../types';

const MOCK_LISTINGS: PGListing[] = [
  {
    id: '1',
    ownerId: 'owner1',
    title: 'Modern Student Living - North Campus',
    description: 'Beautifully furnished PG near University metro station. Ideal for students seeking comfort.',
    price: 12000,
    location: { address: 'Mall Road, Civil Lines', city: 'Delhi', lat: 28.6942, lng: 77.2104 },
    amenities: ['WiFi', 'AC', 'Laundry', 'Meals Included'],
    genderPreference: 'Boys',
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop'],
    occupancyType: 'Double'
  },
  {
    id: '2',
    ownerId: 'owner2',
    title: 'Premium Girls PG in HSR Layout',
    description: 'Safe community with high speed internet and premium furniture.',
    price: 15000,
    location: { address: 'HSR Layout Sector 2', city: 'Bangalore', lat: 12.9141, lng: 77.6411 },
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Parking'],
    genderPreference: 'Girls',
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop'],
    occupancyType: 'Single'
  },
  {
    id: '3',
    ownerId: 'owner3',
    title: 'Executive Stay near Viman Nagar',
    description: 'Walking distance from IT hubs and top colleges. Best for young pros.',
    price: 8500,
    location: { address: 'Viman Nagar', city: 'Pune', lat: 18.5679, lng: 73.9143 },
    amenities: ['WiFi', 'Meals Included', 'Geyser'],
    genderPreference: 'Any',
    images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop'],
    occupancyType: 'Triple'
  }
];

const Listings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('All');
  const [listings, setListings] = useState(MOCK_LISTINGS);

  useEffect(() => {
    const filtered = MOCK_LISTINGS.filter(l => {
      const matchSearch = l.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          l.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCity = filterCity === 'All' || l.location.city === filterCity;
      return matchSearch && matchCity;
    });
    setListings(filtered);
  }, [searchTerm, filterCity]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-4">Discover Stays</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Over 5,000 verified listings across India</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-96 group">
            <input 
              type="text" 
              placeholder="Search by area or college..."
              className="pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 w-full outline-none transition-all font-bold text-slate-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-6 h-6 text-slate-400 absolute left-5 top-5 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          
          <select 
            className="px-8 py-5 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 bg-slate-50 dark:bg-slate-900 outline-none font-black text-slate-700 dark:text-slate-200 cursor-pointer"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
          >
            <option value="All">All Cities</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {listings.map(pg => (
          <Link key={pg.id} to={`/pg/${pg.id}`} className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-orange-500/10 transition-all hover:-translate-y-3">
            <div className="relative h-72 overflow-hidden">
              <img src={pg.images[0]} alt={pg.title} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-[2000ms]" />
              <div className="absolute top-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-5 py-2 rounded-2xl text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest shadow-xl">
                {pg.genderPreference} Only
              </div>
              <div className="absolute bottom-6 left-6 bg-orange-600 px-5 py-2.5 rounded-2xl text-lg font-black text-white shadow-2xl shadow-orange-900/40">
                ₹{pg.price.toLocaleString()}/mo
              </div>
            </div>
            <div className="p-10">
              <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] mb-4">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                {pg.location.city} • {pg.occupancyType} Sharing
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors tracking-tight leading-tight mb-4">{pg.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium line-clamp-2 leading-relaxed">{pg.description}</p>
              <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800 flex flex-wrap gap-2">
                {pg.amenities.slice(0, 3).map(a => (
                  <span key={a} className="bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-orange-500/10">{a}</span>
                ))}
                {pg.amenities.length > 3 && <span className="text-slate-400 dark:text-slate-600 text-[10px] font-black self-center ml-2">+{pg.amenities.length - 3} More</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {listings.length === 0 && (
        <div className="text-center py-40 bg-slate-50 dark:bg-slate-900 rounded-[4rem] border-4 border-dashed border-slate-200 dark:border-slate-800">
          <div className="w-32 h-32 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center mx-auto mb-10">
            <svg className="w-16 h-16 text-slate-200 dark:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4">No matching stays found</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">We're expanding rapidly. Check back soon!</p>
          <button onClick={() => {setSearchTerm(''); setFilterCity('All')}} className="mt-12 bg-orange-600 text-white px-8 py-4 rounded-3xl font-black uppercase text-sm tracking-widest shadow-xl shadow-orange-500/30 hover:bg-orange-700 transition-all active:scale-95">Clear Filters</button>
        </div>
      )}
    </div>
  );
};

export default Listings;
