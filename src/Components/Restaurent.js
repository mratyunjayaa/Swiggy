import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      // Community-hosted proxy endpoint that returns live Swiggy data seamlessly
      const url = "https://foodfire.onrender.com/api/restaurants?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      
      // Clean structure mapping
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

  console.log(RestData);
if(RestData.length==0){
  return <Shimmer> </Shimmer>
}
  return (
    <>
<div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 py-6">
  {RestData.map((restInfo) => (
    <RestCard
      key={restInfo.info.id}
      restInfo={restInfo}
    />
  ))}
</div>
    </>
  )
}