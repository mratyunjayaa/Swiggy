import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems }) {
  const cardData = menuItems?.card?.card || menuItems; // Handles both parent nested data and standard inputs
  const [isOpen, setOpen] = useState(true);

  // --- NEW BUG FIX LOGIC FOR NESTED CATEGORIES ---
  // Check if this specific item contains sub-categories instead of flat item cards
  if ("categories" in cardData) {
    return (
      <div className="w-full my-4 pl-2 border-l-4 border-orange-400">
        {/* Parent Category Heading */}
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight my-4">
          {cardData?.title}
        </h3>
        
        <div className="space-y-4">
          {/* Loop over nested categories by recursively passing them right back into <MenuCard /> */}
          {cardData?.categories?.map((subCategory, index) => (
            <MenuCard 
              key={subCategory?.title || index} 
              menuItems={subCategory} 
            />
          ))}
        </div>
      </div>
    );
  }

  // --- STANDARD CARD RENDER 
  return (
    <div className="w-full my-6 border-b-2 border-gray-100 pb-4">
      <div 
        className="flex justify-between items-center cursor-pointer py-2 select-none"
        onClick={() => setOpen(!isOpen)}
      >
        <h4 className="text-lg font-bold text-gray-700">
          {cardData?.title} ({cardData?.itemCards?.length || 0})
        </h4> 
        <button className="text-sm font-bold text-gray-400">
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {isOpen && cardData?.itemCards && (
        <div className="space-y-4 mt-4">
          {cardData?.itemCards?.map((item) => (
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