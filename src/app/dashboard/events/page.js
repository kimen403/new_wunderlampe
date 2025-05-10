import Link from "next/link";
import EventList from "@/components/event/EventList";

async function getEvents() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/v1/events`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  return res.json();
}

export default async function EventPage() {
  const events = await getEvents();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
          <p className="mt-1 text-sm text-gray-600">Manage your events here</p>
        </div>
        <Link
          href="/event/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Create Event
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg">
        <EventList events={events} />
      </div>
    </div>
  );
}
