import { NextResponse } from "next/server";
import dbConnect from "@/lib/db"; // your DB connection
import CustomPackage from "@/models/CustomPackage";

// ✅ GET all packages
export async function GET() {
  try {
    await dbConnect();

    const packages = await CustomPackage.find();

    return NextResponse.json(packages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

// ✅ POST create package
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const { number, days, place, budget, preferpoints, CNIC, Name } = body;

    const customPackage = new CustomPackage({
      Name,
      CNIC,
      number,
      days,
      place,
      budget,
      preferpoints,
    });

    await customPackage.save();

    return NextResponse.json(customPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 400 }
    );
  }
}