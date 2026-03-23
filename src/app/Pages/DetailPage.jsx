import React from 'react';

const DetailPage = () => {
  // Mock data for the right-hand list
  const points = [
    'Location Name',
    'Opening Hours',
    'Pricing Info',
    'Amenities',
    'Reviews Summary',
    'Location Name',
    'Opening Hours',
    'Pricing Info',
  ];

  return (
    <div className="min-h-screen flex bg-zinc-950 p-6 md:p-10 font-sans">
      {/* 1. The Left Panel: Maps */}
      <div className="w-1/2 flex items-center justify-center rounded-3xl bg-zinc-900 border border-zinc-700/50 shadow-inner mr-6">
        <span className="text-zinc-600 text-3xl font-bold tracking-tight">Maps</span>
      </div>

      {/* 2. The Right Panel: Detail Card (MATCHES YOUR SKETCH) */}
      <div className="w-1/2 rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl p-6 md:p-8 shadow-2xl flex flex-col gap-6">
        
        {/* Row A: 'name' slot */}
        <div className="flex justify-center border border-white/30 bg-white/5 rounded-full px-5 py-2">
          <span className="text-white/80 font-semibold text-lg uppercase tracking-wide">
            name
          </span>
        </div>

        {/* The Main Body (Split horizontally) */}
        <div className="flex flex-1 gap-6 overflow-hidden">
          
          {/* Left Column: pic and disc */}
          <div className="w-3/5 flex flex-col gap-6">
            {/* 'pic' slot */}
            <div className="flex-1 rounded-2xl border border-white/30 bg-white/5 flex items-center justify-center">
              <span className="text-white/60 font-semibold text-xl">pic</span>
            </div>
            {/* 'disc' slot */}
            <div className="h-1/4 rounded-xl border border-white/30 bg-white/5 flex items-center justify-center px-4 text-center">
              <p className="text-white/70 text-sm italic">
                disc: Short location description goes here.
              </p>
            </div>
          </div>

          {/* Right Column: List and Divider */}
          <div className="w-2/5 flex gap-4 overflow-hidden">
            {/* Vertical Line */}
            <div className="w-px h-full bg-white/30"></div>
            
            {/* List of Details with Icons */}
            <div className="flex-1 flex flex-col gap-5 justify-between py-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Circle Icon */}
                  <div className="shrink-0 size-6 rounded-full border-2 border-white/70 flex items-center justify-center">
                    <div className="size-2 bg-white/70 rounded-full" />
                  </div>
                  {/* Text Line */}
                  <span className="text-white/90 text-sm font-medium leading-tight line-clamp-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row C: 'book' button (Full width) */}
        <button className="w-full flex justify-center items-center rounded-xl border border-white/30 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all py-3 shadow-md">
          <span className="text-white font-bold text-xl uppercase tracking-widest">
            book
          </span>
        </button>
      </div>
    </div>
  );
};

export default DetailPage;