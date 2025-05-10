// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function GET(request, { params }) {
//   try {
//     const { id } = await params;
//     const event = await prisma.event.findUnique({
//       where: { id: parseInt(id) },
//     });

//     if (!event) {
//       return NextResponse.json({ error: "Event not found" }, { status: 404 });
//     }

//     return NextResponse.json(event);
//   } catch (error) {
//     console.error("Error fetching event:", error);
//     return NextResponse.json(
//       { error: "Error fetching event" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request, { params }) {
//   try {
//     const { id } = await params;
//     const data = await request.json();

//     const event = await prisma.event.update({
//       where: { id: parseInt(id) },
//       data: {
//         name: data.name,
//         description: data.description,
//         imageUrl: data.imageUrl,
//         url: data.url,
//         startDate: new Date(data.startDate),
//         endDate: new Date(data.endDate),
//         isActive: data.isActive,
//       },
//     });

//     return NextResponse.json(event);
//   } catch (error) {
//     console.error("Error updating event:", error);
//     return NextResponse.json(
//       { error: "Error updating event" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request, { params }) {
//   try {
//     const { id } = await params;
//     await prisma.event.delete({
//       where: { id: parseInt(id) },
//     });

//     return new NextResponse(null, { status: 204 });
//   } catch (error) {
//     console.error("Error deleting event:", error);
//     return NextResponse.json(
//       { error: "Error deleting event" },
//       { status: 500 }
//     );
//   }
// }
