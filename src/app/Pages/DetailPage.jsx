// import React from "react";
// import Image from "next/image";
// import { places } from "@/data/packages";

// const DetailPage = ({ params }) => {
//   const id = Number(params.id);

//   const pkg = places.find((place) => place.id === id);

//   if (!pkg) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-2xl">
//         Package Not Found
//       </div>
//     );
//   }

//   const points = [
//     `Location: ${pkg.location}`,
//     `Days: ${pkg.days}`,
//     `Price: Rs. ${pkg.price}`,
//     `Rating: ${pkg.rating}`,
//   ];

//   return (
//     <div className="min-h-screen flex flex-wrap-reverse bg-gradient-to-r from-white via-[#FFEABB] to-[#FBC3C1] p-6 md:p-10 font-sans">
//       <div className="bg-white p-1 flex flex-wrap-reverse w-full rounded-2xl">
        
//         {/* LEFT: MAP */}
//         <div className="w-full md:w-1/2 h-[400px] md:h-auto flex items-center justify-center rounded-l-3xl shadow-inner overflow-hidden">
//           <iframe
//             src={pkg.map}
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             loading="lazy"
//             className="rounded-3xl"
//           ></iframe>
//         </div>

//         {/* RIGHT: DETAILS */}
//         <div className="w-full md:w-1/2 rounded-r-3xl text-black p-6 md:p-8 shadow-2xl flex flex-col gap-6">
          
//           {/* PACKAGE NAME */}
//           <div className="border border-black rounded-[8px] px-5 py-2">
//             <span className="font-semibold text-lg uppercase tracking-wide">
//               {pkg.name}
//             </span>
//           </div>

//           {/* CONTENT */}
//           <div className="flex flex-1 gap-6">
            
//             {/* IMAGE */}
//             <div className="w-3/5">
//               <div className="relative h-[350px] rounded-2xl overflow-hidden border">
//                 <Image
//                   src={pkg.image}
//                   alt={pkg.name}
//                   fill
//                   className="object-cover"
//                 />

//                 <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-4 text-center">
//                   <p className="text-white text-sm italic">
//                     {pkg.detailDescription}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* DETAILS LIST */}
//             <div className="w-2/5 flex flex-col gap-5 py-2">
//               {points.map((item, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <div className="size-2 bg-gray-900 rounded-full" />
//                   <span className="text-sm font-light">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//           </div>

//           {/* BOOK BUTTON */}
//           <button className="w-full cursor-pointer flex justify-center items-center rounded-xl border border-gray-300 hover:bg-gray-100 active:scale-[0.98] transition-all py-3 shadow-md">
//             <span className="font-bold text-xl uppercase tracking-widest">
//               Book
//             </span>
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default DetailPage;