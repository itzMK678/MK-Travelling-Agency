// "use client";
// import Link from "next/link";

// const PackagesPage = () => {
//   const packages = [
//     { id: 1, name: "Hunza Valley" },
//     { id: 2, name: "Murree Tour" },
//   ];

//   return (
//     <div>
//       <h1>All Packages</h1>

//       {packages.map((pkg) => (
//         <div key={pkg.id}>
//           <h2>{pkg.name}</h2>

//           {/* 👇 This sends ID */}
//           <Link href={`/packages/${pkg.id}`}>
//             <button>View Details</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PackagesPage;