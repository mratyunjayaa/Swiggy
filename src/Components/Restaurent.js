import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = "https://foodfire.onrender.com/api/restaurants?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
                         || data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        if (restaurants) {
          setRestData(restaurants);
        }
      } catch (err) {
        console.error("Proxy Error: ", err);
      }
    }

    fetchData();
  }, []);

  if (RestData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="w-[92%] md:w-[80%] max-w-7xl mx-auto py-6">
      <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-6 tracking-tight">
        Restaurants with online food delivery
      </h2>
      
      {/* Dynamic Grid Layout matching different devices cleanly */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-8">
        {RestData.map((restInfo) => (
          <RestCard
            key={restInfo.info.id}
            restInfo={restInfo}
          />
        ))}
      </div>
    </div>
  );
}