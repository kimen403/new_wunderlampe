import EventForm from "@/components/event/EventForm";

export default function CreateEventPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create Event</h1>
        <p className="mt-1 text-sm text-gray-600">
          Add a new event to your list
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <EventForm />
      </div>
    </div>
  );
}
