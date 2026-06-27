import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, IncreaseItems, DecreaseItems } from "../Stored/CartSlicer";

export default function RestInfo({ restData }) {
  const displayPrice = restData?.price || restData?.defaultPrice;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  function handleAddItems() {
    setCount(1);
    dispatch(addItems(restData));
  }

  function handleIncreaseItems() {
    setCount(count + 1);
    dispatch(IncreaseItems(restData?.id));
  }

  function handleDecreaseItems() {
    setCount(count - 1);
    dispatch(DecreaseItems(restData?.id));
  }

  return (
    <div className="flex flex-col-reverse sm:flex-row w-full justify-between items-start sm:items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 my-3 gap-4 sm:gap-2">
      
      {/* Product Details Section */}
      <div className="w-full sm:w-[70%] space-y-1">
        <p className="font-bold text-gray-800 text-base md:text-lg">{restData?.name}</p>
        <p className="font-semibold text-gray-600 text-sm md:text-base">
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
        
        <p className="text-xs text-gray-400 font-medium line-clamp-2 mt-1 leading-relaxed">
          {restData?.description}
        </p>
      </div>

      {/* Product Image & Button Section */}
      <div className="w-full sm:w-[22%] relative flex-shrink-0 flex justify-center sm:block">
        {restData?.imageId ? (
          <img 
            className="w-full max-h-40 sm:h-24 md:h-28 object-cover rounded-xl shadow-sm" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId} 
            alt={restData?.name} 
          />
        ) : (
          <div className="w-full h-24 md:h-28 bg-gray-50 rounded-xl flex items-center justify-center text-xs text-gray-400 border border-gray-100">
            No Image
          </div>
        )}

        {count === 0 ? (
          <button 
            onClick={handleAddItems}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-5 py-1.5 bg-white border border-gray-200 text-green-600 font-extrabold text-xs rounded-lg shadow-md hover:bg-gray-50 uppercase tracking-wide cursor-pointer transition-transform active:scale-95"
          >
            Add
          </button>
        ) : (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-between bg-white border border-gray-200 text-green-600 font-extrabold text-sm rounded-lg shadow-md w-20 px-2 py-1">
            <button onClick={handleDecreaseItems} className="hover:text-green-800 transition-colors px-1 cursor-pointer">-</button>
            <span className="text-gray-800 text-xs select-none">{count}</span>
            <button onClick={handleIncreaseItems} className="hover:text-green-800 transition-colors px-1 cursor-pointer">+</button>
          </div>
        )}
      </div>
    </div>
  );
}