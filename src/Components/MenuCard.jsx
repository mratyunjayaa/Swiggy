import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, activeFilter = "ALL", searchQuery = "" }) {
  const cardData = menuItems?.card?.card || menuItems;
  const [isOpen, setOpen] = useState(true);

  if ("categories" in cardData) {
    return (
      <div className="w-full my-4 pl-2 border-l-4 border-orange-400">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight my-4">
          {cardData?.title}
        </h3>
        <div className="space-y-4">
          {cardData?.categories?.map((subCategory, index) => (
            <MenuCard 
              key={subCategory?.title || index} 
              menuItems={subCategory} 
              activeFilter={activeFilter} 
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    );
  }

  const rawItemCards = cardData?.itemCards || [];
  
  const filteredItemCards = rawItemCards.filter((item) => {
    const itemName = item?.card?.info?.name?.toLowerCase() || "";
    const itemDescription = item?.card?.info?.description?.toLowerCase() || "";
    const cleanSearchQuery = searchQuery.toLowerCase().trim();

    const matchesSearch = itemName.includes(cleanSearchQuery) || itemDescription.includes(cleanSearchQuery);
    
    const isItemVeg = item?.card?.info?.isVeg === 1;
    let matchesType = true;
    if (activeFilter === "VEG") matchesType = isItemVeg;
    if (activeFilter === "NONVEG") matchesType = !isItemVeg;

    return matchesSearch && matchesType;
  });

  if (filteredItemCards.length === 0) return null;

  return (
    <div className="w-full my-6 border-b-2 border-gray-100 pb-4">
      <div 
        className="flex justify-between items-center cursor-pointer py-2 select-none"
        onClick={() => setOpen(!isOpen)}
      >
        <h4 className="text-lg font-bold text-gray-700">
          {cardData?.title} ({filteredItemCards.length})
        </h4> 
        <button className="text-sm font-bold text-gray-400">
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4 mt-4">
          {filteredItemCards.map((item) => (
            <RestInfo 
              key={item?.card?.info?.id} 
              restData={item?.card?.info} 
            />
          ))}
        </div>
      )}
    </div>
  );
}