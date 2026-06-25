import { dineoutRestaurents } from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <section className="w-[80%] mx-auto mt-20">
      <h1 className="text-3xl font-bold text-gray-800">
        Discover Best Restaurants on Dineout
      </h1>

      <div className="flex gap-6 overflow-x-auto mt-8 pb-4 scrollbar-hide">
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