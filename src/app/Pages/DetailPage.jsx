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
    <>
  
    <div className="min-h-screen flex bg-gradient-to-r from-white  via-[#FFEABB] to-[#FBC3C1]  p-6 md:p-10 font-sans">
          
      {/* 1. The Left Panel: Maps */}
     <div className="w-1/2 flex items-center justify-center rounded-3xl bg-transparent border border-zinc-700/50 shadow-inner mr-6 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1758519.5620808925!2d72.38837747469202!3d30.588594931483243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x393d9778fa7f4463%3A0xee5c1f1e528edbac!2sHaroonabad%2C%20Pakistan!3m2!1d29.6081146!2d73.1467619!4m5!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!3m2!1d31.5203696!2d74.35874729999999!5e0!3m2!1sen!2s!4v1774281073576!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-3xl"
  ></iframe>
</div>

      {/* 2. The Right Panel: Detail Card (MATCHES YOUR SKETCH) */}
      <div className="w-1/2 rounded-3xl border text-black border-black bg-transparent p-6 md:p-8 shadow-2xl flex flex-col gap-6">
        
        {/* Row A: 'name' slot */}
        <div className="flex justify-start border border-black bg-white/5 rounded-[8px] px-5 py-2">
          <span className="text-black font-semibold text-lg uppercase tracking-wide">
            name
          </span>
        </div>

        {/* The Main Body (Split horizontally) */}
        <div className="flex border  flex-1 gap-6 overflow-hidden">
          
          {/* Left Column: pic and disc */}
          <div className="w-3/5 flex flex-col gap-6">
            {/* 'pic' slot */}
            <div className=" relative  flex-1 rounded-2xl border   flex items-center justify-center">
              <span className="text-black font-semibold text-xl">pic</span>
               <div className="h-1/4 absolute bottom-1 rounded-xl  flex items-center justify-center px-4 text-center">
              <p className="text-black text-sm italic">
                disc: Short location description goes here.
              </p>
            </div>
            </div>
            {/* 'disc' slot */}
           
          </div>

          {/* Right Column: List and Divider */}
          <div className="w-2/5 flex gap-4 overflow-hidden">
           
        
            
            {/* List of Details with Icons */}
            <div className="flex-1 flex flex-col gap-5 justify-between py-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Circle Icon */}
                  
                    <div className="size-2 bg-gray-900 rounded-full" />
                  
                  {/* Text Line */}
                  <span className="text-gray-900 text-sm font-light leading-tight line-clamp-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row C: 'book' button (Full width) */}
        <button className="w-full cursor-pointer  flex justify-center items-center rounded-xl border border-gray-300 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all py-3 shadow-md">
          <span className="text-black font-bold text-xl uppercase tracking-widest">
            book
          </span>
        </button>
      </div>
    </div>
    </>
  );
};

export default DetailPage;