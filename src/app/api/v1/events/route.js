// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function GET() {
//   try {
//     const events = await prisma.event.findMany({
//       orderBy: {
//         startDate: "asc",
//       },
//     });
//     return NextResponse.json(events);
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return NextResponse.json(
//       { error: "Error fetching events" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     const data = await request.json();

//     // Validate required fields
//     const requiredFields = ["name", "description", "startDate", "endDate"];
//     for (const field of requiredFields) {
//       if (!data[field]) {
//         return NextResponse.json(
//           { error: `${field} is required` },
//           { status: 400 }
//         );
//       }
//     }

//     // Create event with validated data
//     const event = await prisma.event.create({
//       data: {
//         name: data.name,
//         description: data.description,
//         imageUrl: data.imageUrl,
//         url: data.url,
//         startDate: new Date(data.startDate),
//         endDate: new Date(data.endDate),
//         isActive: data.isActive ?? true,
//       },
//     });

//     return NextResponse.json(event, { status: 201 });
//   } catch (error) {
//     console.error("Error creating event:", error);
//     return NextResponse.json(
//       { error: "Error creating event" },
//       { status: 500 }
//     );
//   }
// }
