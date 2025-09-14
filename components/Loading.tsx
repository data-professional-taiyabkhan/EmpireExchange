export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-brand/20 border-t-brand rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-brand/40 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-gray-900">Empire Exchange</h2>
        <p className="mt-2 text-gray-600">Loading your experience...</p>
      </div>
    </div>
  );
}
