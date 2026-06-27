import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  const info = restInfo?.info;

  return (
    <Link to={"/city/delhi/" + info?.id} className="block w-full"> 
      <div className="w-full h-full cursor-pointer transition-transform duration-200 hover:scale-95 flex flex-col">
        {/* Image Frame Wrapper */}
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspectRatio-[16/10] bg-gray-100 w-full pt-[66%] flex-shrink-0">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
            alt={info?.name}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>

          {/* Aggregate Discount Offer Badge */}
          {info?.aggregatedDiscountInfoV3 && (
            <h2 className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-white text-sm xs:text-base md:text-xl font-black uppercase tracking-tight truncate max-w-[90%]">
              {info.aggregatedDiscountInfoV3.header}{" "}
              {info.aggregatedDiscountInfoV3.subHeader}
            </h2>
          )}
        </div>

        {/* Informational Body Elements */}
        <div className="px-1 mt-2.5 md:mt-3 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-sm md:text-lg font-black text-gray-800 truncate leading-snug">
              {info?.name}
            </h2> 

            <div className="flex items-center gap-1.5 mt-0.5 font-bold text-gray-700 text-xs md:text-[15px]">
              <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-600 text-white text-[9px] md:text-xs">
                ★
              </span>
              <span>{info?.avgRating}</span>
              <span className="text-gray-400 font-normal">•</span>
              <span className="truncate">{info?.sla?.slaString}</span>
            </div>
          </div>

          <div className="mt-1">
            <p className="text-gray-400 text-[11px] md:text-sm font-semibold truncate">
              {info?.cuisines?.join(", ")}
            </p>
            <p className="text-gray-400 text-[11px] md:text-sm font-medium truncate">
              {info?.areaName}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}