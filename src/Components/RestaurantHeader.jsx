export default function RestaurantHeader({ restInfo, activeFilter, setActiveFilter, searchQuery, setSearchQuery }) {
  const restaurantInfo = restInfo?.cards?.find(x => x.card?.card?.info)?.card?.card?.info;

  const handleFilterToggle = (filterType) => {
    setActiveFilter(prev => prev === filterType ? "ALL" : filterType);
  };

  if (!restaurantInfo) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 pt-4 text-gray-900 font-sans">
      <h1 className="text-3xl font-extrabold tracking-tight mt-6 mb-4">{restaurantInfo?.name}</h1>
      
      <div className="flex border-b border-gray-200 text-sm font-bold space-x-6 mb-6">
        <button className="border-b-4 border-orange-500 pb-2 text-gray-900">Order Online</button>
        <button className="pb-2 text-gray-500 hover:text-gray-900">Dineout</button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200/60 overflow-hidden p-5 mb-8">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm font-bold">
            <span className="bg-green-600 text-white rounded-full text-xs px-1.5 py-0.5 flex items-center gap-0.5">
              ★ {restaurantInfo?.avgRating || "4.0"}
            </span>
            <span className="text-gray-700">({restaurantInfo?.totalRatingsString || "1K+ ratings"})</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-700">{restaurantInfo?.costForTwoMessage}</span>
          </div>

          <div className="text-xs font-bold text-orange-600 underline cursor-pointer">
            {restaurantInfo?.cuisines?.slice(0, 3).join(", ")}
          </div>

          <div className="relative pl-6 mt-4 pt-1 space-y-4 text-xs font-bold text-gray-700">
            <div className="absolute left-1.5 top-2.5 bottom-2.5 w-0.5 bg-gray-200"></div>
            <div className="relative flex items-center">
              <div className="absolute -left-6 w-3.5 h-3.5 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
              <span>Outlet</span>
              <span className="text-orange-600 ml-1 cursor-pointer flex items-center">
                {restaurantInfo?.areaName} <span className="text-[8px] ml-0.5">▼</span>
              </span>
            </div>

            <div className="relative flex items-center">
              <div className="absolute -left-6 w-3.5 h-3.5 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              </div>
              <span className="text-gray-900">{restaurantInfo?.sla?.slaString || "20-25 mins"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-6">
        <div className="flex items-center justify-center space-x-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
          <span>~</span><span>MENU</span><span>~</span>
        </div>
        <div className="relative max-w-full">
          <input 
            type="text" 
            placeholder="Search for dishes" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border border-transparent rounded-2xl py-3 px-4 text-center font-semibold text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-200 transition"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 mb-6">
        <button 
          onClick={() => handleFilterToggle("VEG")}
          className={`flex items-center space-x-2 px-3 py-1.5 border rounded-full text-xs font-bold transition-all shadow-sm ${
            activeFilter === "VEG" ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          <div className="w-4 h-4 border-2 border-green-600 p-0.5 rounded flex items-center justify-center bg-white flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span>Veg Only</span>
        </button>

        <button 
          onClick={() => handleFilterToggle("NONVEG")}
          className={`flex items-center space-x-2 px-3 py-1.5 border rounded-full text-xs font-bold transition-all shadow-sm ${
            activeFilter === "NONVEG" ? "border-red-500 bg-red-50 text-red-700" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          <div className="w-4 h-4 border-2 border-red-600 p-0.5 rounded flex items-center justify-center bg-white flex-shrink-0">
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-red-600"></div>
          </div>
          <span>Non-Veg Only</span>
        </button>

        <span className="px-3 py-1.5 border border-gray-200 bg-white rounded-full text-xs font-bold text-gray-600 shadow-sm cursor-pointer hover:border-gray-300">
          Bestseller
        </span>
      </div>

      <hr className="border-gray-200/80 mb-6" />
    </div>
  );
}