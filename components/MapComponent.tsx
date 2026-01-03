
import React from 'react';

interface MapComponentProps {
  lat: number;
  lng: number;
  address: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng, address }) => {
  // Using an iframe for demonstration since a real Google Maps API key is usually required for JS SDK
  // but this illustrates the implementation logic requested.
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-inner border border-slate-200">
      <iframe
        title="PG Location"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
      ></iframe>
      <div className="bg-white p-3 border-t border-slate-200 text-sm text-slate-600 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        {address}
      </div>
    </div>
  );
};

export default MapComponent;
