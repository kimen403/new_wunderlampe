export default function StatsCard({ title, value, icon, trend }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
          {trend && (
            <p
              className={`mt-2 text-sm ${
                trend.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              <span className="flex items-center">
                <svg
                  className={`w-4 h-4 mr-1 ${
                    trend.positive ? "rotate-0" : "rotate-180"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                {trend.value}%
                <span className="ml-1 text-gray-600">vs last month</span>
              </span>
            </p>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 text-gray-600">{icon}</div>
          </div>
        )}
      </div>
    </div>
  );
}
