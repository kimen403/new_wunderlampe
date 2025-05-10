import prisma from "@/lib/prisma";
import StatsCard from "@/components/dashboard/StatsCard";
import Link from "next/link";
async function getStats() {
  try {
    const totalEvents = await prisma.event.count();
    const activeEvents = await prisma.event.count({
      where: {
        isActive: true,
      },
    });

    return {
      totalEvents,
      activeEvents,
      completionRate:
        totalEvents > 0 ? Math.round((activeEvents / totalEvents) * 100) : 0,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      totalEvents: 0,
      activeEvents: 0,
      completionRate: 0,
    };
  }
}

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
        <p className="mt-1 text-sm text-gray-600">
          Here&apos;s an overview of your site&apos;s performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Events"
          value={stats.totalEvents}
          icon={
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />

        <StatsCard
          title="Active Events"
          value={stats.activeEvents}
          icon={
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />

        <StatsCard
          title="Active Rate"
          value={`${stats.completionRate}%`}
          trend={{
            value: stats.completionRate,
            positive: stats.completionRate >= 50,
          }}
          icon={
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          }
        />
      </div>

      <div className="mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="/dashboard/events/create"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="p-2 bg-blue-500 rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  Create Event
                </p>
                <p className="text-sm text-gray-500">
                  Add a new event to your site
                </p>
              </div>
            </a>

            <Link
              href="/dashboard/events"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="p-2 bg-green-500 rounded-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  Manage Events
                </p>
                <p className="text-sm text-gray-500">
                  View and edit your events
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
