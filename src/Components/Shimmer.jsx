export default function Shimmer() {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 py-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-[280px] h-[340px] rounded-2xl overflow-hidden"
        >
          {/* Image Skeleton */}
          <div className="w-full h-[185px] bg-gray-300 rounded-2xl animate-pulse"></div>

          {/* Text Skeleton */}
          <div className="mt-4 space-y-3 px-2">
            <div className="h-5 w-3/4 bg-gray-300 rounded animate-pulse"></div>

            <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>

            <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse"></div>

            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}