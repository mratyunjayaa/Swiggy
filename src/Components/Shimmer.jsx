export default function Shimmer() {
  return (
    <div className="w-[90%] md:w-[80%] max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6 py-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-[140px] xs:w-[220px] sm:w-[260px] md:w-[340px] rounded-2xl md:rounded-3xl bg-white p-2.5 md:p-3 border border-gray-100 shadow-sm flex-shrink-0"
        >
          {/* Image Skeleton */}
          <div className="w-full h-28 xs:h-36 sm:h-44 md:h-52 bg-gray-200 rounded-xl md:rounded-2xl animate-pulse"></div>

          {/* Text Skeleton */}
          <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 px-1">
            <div className="h-4 md:h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            
            <div className="flex justify-between gap-2">
              <div className="h-3 md:h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 md:h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
            </div>

            <div className="flex justify-between gap-2 pt-1">
              <div className="h-3 md:h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 md:h-4 w-1/5 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Offer Box Skeleton (Collapses on ultra-small mobile screens) */}
            <div className="h-12 md:h-16 w-full bg-gray-100 rounded-xl animate-pulse mt-2 hidden xs:block"></div>
          </div>
        </div>
      ))}
    </div>
  );
}