export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0 mb-6 flex justify-between items-center">
        <div>
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-1 h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-6 flex items-center space-x-4">
              <div className="flex-1">
                <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="mt-2 h-3 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
