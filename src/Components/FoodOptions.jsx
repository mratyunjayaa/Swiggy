import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <section className="w-[90%] md:w-[80%] container mx-auto mt-8 md:mt-12">
      <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-6 tracking-tight">
        What's on your mind?
      </h3>
      
      {/* 🌟 flex-wrap tells the items to drop to the next line instead of squishing */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {imageGridCards.map((item) => (
          <FoodCard key={item.id} foodData={item} />
        ))}
      </div>
    </section>
  );
}