



// import Booking from "@/models/Booking";

// import dbConnect from "@/lib/db";

// export async function POST(req) {
//   try {
//     await dbConnect();

//     const body = await req.json();
//     const { Persons, days, CNIC, Name, place } = body;

//     const booking = await Booking.create({
//       Name,
//       CNIC,
//       Persons,
//       days,
//       place,
//     });

//     return Response.json(booking, { status: 201 });
//   } catch (error) {
//     return Response.json({ message: error.message }, { status: 400 });
//   }
// }

// export async function GET() {
//   try {
//     await dbConnect();

//     const bookings = await Booking.find();

//     return Response.json(bookings, { status: 200 });
//   } catch (error) {
//     return Response.json({ message: error.message }, { status: 500 });
//   }
// }