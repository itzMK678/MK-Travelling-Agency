// import React from "react";
// import Image from "next/image";

// const DetailPage = ({ params }) => {
//   const { id } = params;

//   // ✅ Mock Data
//   const packages = {
//     1: {
//       name: "Hunza Valley",
//       image: "/Nature1.jpg",
//       desc: "Beautiful mountains of Hunza",
//       points: [
//         "Location: Hunza",
//         "Days: 5",
//         "Price: 20,000",
//         "Rating: 4.8",
//       ],
//     },
//     2: {
//       name: "Murree Tour",
//       image: "/Nature1.jpg",
//       desc: "Cool hills of Murree",
//       points: [
//         "Location: Murree",
//         "Days: 3",
//         "Price: 10,000",
//         "Rating: 4.2",
//       ],
//     },
//   };

//   // ✅ Get selected package
//   const pkg = packages[id];

//   // ✅ Safety check
//   if (!pkg) {
//     return <div className="p-10 text-xl">Package not found</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-wrap-reverse bg-gradient-to-r from-white via-[#FFEABB] to-[#FBC3C1] p-6 md:p-10 font-sans">
//       <div className="bg-white p-1 flex flex-wrap-reverse w-full rounded-2xl">

//         {/* LEFT: MAP */}
//         <div className="w-1/2 flex items-center justify-center rounded-l-3xl shadow-inner overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=..."
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             loading="lazy"
//             className="rounded-3xl"
//           ></iframe>
//         </div>

//         {/* RIGHT: DETAILS */}
//         <div className="w-1/2 rounded-r-3xl text-black p-6 md:p-8 shadow-2xl flex flex-col gap-6">

//           {/* NAME */}
//           <div className="border border-black rounded-[8px] px-5 py-2">
//             <span className="font-semibold text-lg uppercase tracking-wide">
//               {pkg.name}
//             </span>
//           </div>

//           {/* BODY */}
//           <div className="flex flex-1 gap-6 overflow-hidden">

//             {/* LEFT IMAGE */}
//             <div className="w-3/5 flex flex-col gap-6">
//               <div className="relative flex-1 rounded-2xl overflow-hidden border">
//                 <Image
//                   src={pkg.image}
//                   alt="Location"
//                   fill
//                   className="object-cover"
//                 />

//                 <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm p-4 text-center">
//                   <p className="text-white text-sm italic">
//                     {pkg.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT LIST */}
//             <div className="w-2/5 flex">
//               <div className="flex-1 flex flex-col gap-5 py-2 overflow-y-auto pr-2">

//                 {pkg.points.map((item, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <div className="size-2 bg-gray-900 rounded-full" />
//                     <span className="text-sm font-light">
//                       {item}
//                     </span>
//                   </div>
//                 ))}

//               </div>
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