import { useRef } from "react";
import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  const scrollRef = useRef(null);

  const slide = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth * 0.6 : clientWidth * 0.6;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 relative group">
      {/* Header with Title and Sliding Arrow Controls */}
      <div className="flex items-center justify-between mb-4 max-w-[90%] md:max-w-[80%] mx-auto">
        <h3 className="text-xl md:text-2xl font-black text-gray-800">What's on your mind?</h3>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => slide("left")}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition cursor-pointer select-none active:scale-90"
          >
            ←
          </button>
          <button 
            onClick={() => slide("right")}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition cursor-pointer select-none active:scale-90"
          >
            →
          </button>
        </div>
      </div>

      {/* Row Wrapper Container with Hidden Scrollbars */}
      <div 
        ref={scrollRef}
        className="max-w-[100%] md:max-w-[100%] mx-auto flex items-center space-x-4 md:space-x-6 overflow-x-auto scroll-smooth no-scrollbar py-2"
      >
        {imageGridCards.map((item) => (
          <FoodCard key={item.id} foodData={item} />
        ))}
      </div>
    </div>
  );
}