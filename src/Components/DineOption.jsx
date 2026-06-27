import { useRef } from "react";
import { dineoutRestaurents } from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption() {
  const scrollRef = useRef(null);

  const slide = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth * 0.7 : clientWidth * 0.7;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-12 md:mt-20 relative">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-3xl font-black text-gray-800 tracking-tight">
          Discover Best Restaurants on Dineout
        </h1>
        
        <div className="flex items-center space-x-2 flex-shrink-0">
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

      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth py-2 md:[text-size-adjust:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        {dineoutRestaurents.map((RestData) => (
          <DineCard
            key={RestData?.info?.id}
            RestData={RestData}
          />
        ))}
      </div>
    </section>
  );
}