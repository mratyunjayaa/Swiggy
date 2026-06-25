export default function RestInfo({ restData }) {
  // Swiggy prices can be under .price or .defaultPrice depending on customization options
  const displayPrice = restData?.price || restData?.defaultPrice;

  return (
    <div className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 my-2">
      <div className="w-[70%] space-y-1">
        <p className="font-bold text-gray-800 text-lg">{restData?.name}</p>
        <p className="font-semibold text-gray-600">
          {displayPrice ? "₹" + (displayPrice / 100) : "Price Unavailable"}
        </p>
        
        {restData?.ratings?.aggregatedRating?.rating && (
          <div className="text-xs font-bold text-green-600 flex items-center space-x-1">
            <span>★ {restData?.ratings?.aggregatedRating?.rating}</span>
            <span className="text-gray-400">
              ({restData?.ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </div>
        )}
        
        <p className="text-xs text-gray-400 font-medium line-clamp-2 mt-1">
          {restData?.description}
        </p>
      </div>

      <div className="w-[20%] relative flex-shrink-0">
        {restData?.imageId ? (
          <img 
            className="w-full h-28 object-cover rounded-xl" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId} 
            alt={restData?.name} 
          />
        ) : (
          <div className="w-full h-28 bg-gray-100 rounded-xl flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
        <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-white border border-gray-200 text-green-600 font-extrabold text-xs rounded-lg shadow-md hover:bg-gray-50 uppercase tracking-wide">
          Add
        </button>
      </div>
    </div>
  );
}