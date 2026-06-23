// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/db";
// import ProvidedPackage from "@/models/ProvidedPackages";

// // ✅ GET all packages
// export async function GET() {
//   try {
//     await dbConnect();

//     const data = await ProvidedPackage.find();

//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message },
//       { status: 500 }
//     );
//   }
// }

// // ✅ POST create package
// export async function POST(request) {
//   try {
//     await dbConnect();

//     const body = await request.json();

//     const { Name, description, days, Price, pinpoints, Map, pic } = body;

//     const providedPackage = new ProvidedPackage({
//       Name,
//       description,
//       days,
//       Price,
//       pinpoints,
//       Map,
//       pic,
//     });

//     await providedPackage.save();

//     return NextResponse.json(providedPackage, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message },
//       { status: 400 }
//     );
//   }
// }