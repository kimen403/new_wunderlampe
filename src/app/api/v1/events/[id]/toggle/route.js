// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function PATCH(request, { params }) {
//   try {
//     const { id } = await params;

//     // First get the current event to check its status
//     const currentEvent = await prisma.event.findUnique({
//       where: { id: parseInt(id) },
//       select: { isActive: true },
//     });

//     if (!currentEvent) {
//       return NextResponse.json({ error: "Event not found" }, { status: 404 });
//     }

//     // Toggle the status
//     const event = await prisma.event.update({
//       where: { id: parseInt(id) },
//       data: {
//         isActive: !currentEvent.isActive,
//       },
//     });

//     return NextResponse.json(event);
//   } catch (error) {
//     console.error("Error toggling event status:", error);
//     return NextResponse.json(
//       { error: "Error toggling event status" },
//       { status: 500 }
//     );
//   }
// }
