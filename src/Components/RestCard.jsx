import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  const info = restInfo?.info;

  return (
    <Link to = {"/city/delhi/"+info?.id}> 
    
    <div className="w-[280px] h-[340px] cursor-pointer transition-transition duration-200 hover:scale-95">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-[185px] object-cover rounded-2xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
          alt={info?.name}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Offer */}
        {info?.aggregatedDiscountInfoV3 && (
          <h2 className="absolute bottom-3 left-3 text-white text-xl font-extrabold uppercase">
            {info.aggregatedDiscountInfoV3.header}{" "}
            {info.aggregatedDiscountInfoV3.subHeader}
          </h2>
        )}
      </div>

      {/* Details */}
      <div className="px-2 mt-3">
        {/* Restaurant Name */}
        <h2 className="text-xl font-bold truncate">
          {info?.name}
        </h2>

        {/* Rating & Delivery Time */}
        <div className="flex items-center gap-2 mt-1 font-semibold text-[15px]">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white text-xs">
            ★
          </span>

          <span>{info?.avgRating}</span>

          <span>•</span>

          <span>{info?.sla?.slaString}</span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-500 text-sm truncate mt-1">
          {info?.cuisines?.join(", ")}
        </p>

        {/* Area */}
        <p className="text-gray-500 text-sm truncate">
          {info?.areaName}
        </p>
      </div>
    </div>
    </Link>
  );
}