import { notFound } from "next/navigation";
import EventForm from "@/components/event/EventForm";

async function getEvent(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/v1/events/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error("Failed to fetch event");
  }

  return res.json();
}

export default async function EditEventPage({ params }) {
  const event = await getEvent(params.id);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Edit Event</h1>
        <p className="mt-1 text-sm text-gray-600">Update the event details</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <EventForm event={event} isEdit={true} />
      </div>
    </div>
  );
}
