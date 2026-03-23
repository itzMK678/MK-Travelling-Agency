import React from 'react';

const data = ['5+ Year Exp', 'Trained', 'Experienced', 'Enjoy'];

const Box = () => {
  return (
  <div className='flex flex-wrap justify-center gap-4 p-8 m-4 '>
      {data.map((item, index) => (
        <span 
          key={index} 
          className="px-4 py-2bg-gradient-to-b from-white/20 to-white/5 rounded-full text-black font-semibold text-[18px] uppercase "
        >
          
    <div className="flex flex-wrap justify-center gap-4 p-8 m-4 
                    bg-black/5 backdrop-blur-lg 
                   rounded-xl 
                    ">
          {item.trim()}
           </div>
        </span>
      ))}
   
        </div>
  );
};

export default Box;