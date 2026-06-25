export default function ShimmerMenu() {
  // Create an array of 4 items to simulate multiple categories loading
  const placeholderCards = Array(4).fill("");

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-pulse">
      {/* Restaurant Header Skeleton */}
      <div className="h-8 bg-gray-200 rounded-md w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded-md w-1/3 mb-6"></div>

      <hr className="my-6 border-gray-200" />

      {/* Menu Categories Skeleton */}
      <div className="space-y-8">
        {placeholderCards.map((_, index) => (
          <div key={index} className="w-full pb-4 border-b border-gray-100">
            {/* Category Title placeholder */}
            <div className="h-6 bg-gray-200 rounded-md w-1/4 mb-4"></div>

            {/* Food Items placeholder loop (2 per category) */}
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex w-full justify-between items-center bg-white p-4 rounded-xl border border-gray-100 my-2">
                  
                  {/* Left Side: Info Skeleton */}
                  <div className="w-[70%] space-y-2">
                    <div className="h-5 bg-gray-200 rounded-md w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
                    <div className="h-3 bg-gray-200 rounded-md w-full mt-2"></div>
                    <div className="h-3 bg-gray-200 rounded-md w-4/5"></div>
                  </div>

                  {/* Right Side: Image Skeleton */}
                  <div className="w-[20%] relative flex-shrink-0">
                    <div className="w-full h-28 bg-gray-200 rounded-xl"></div>
                    {/* Add button placeholder */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-300 rounded-lg shadow-sm"></div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}