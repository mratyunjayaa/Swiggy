import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import ShimmerMenu from "./ShimmerMenu"; 

export default function RestaurantMenu() {
  const { id } = useParams(); 
  
  const [restInfo, setRestInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        setLoading(true);
        const url = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&submitAction=ENTER&restaurantId=${id}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Proxy error");

        const json = await response.json();
        
        if (json && json.data) {
          setRestInfo(json.data); 

          const cardsArray = json?.data?.cards?.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards 
                             || json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

          if (cardsArray) {
            const filteredCategories = cardsArray.filter(
              (item) => 'title' in (item?.card?.card || {})
            );
            setMenuItems(filteredCategories);
          }
        }
      } catch (err) {
        console.warn("Error loading data:", err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchMenu();
  }, [id]);

  // 2. Render Shimmer while data is fetching
  if (loading) {
    return <ShimmerMenu />;
  }

  const restaurantInfo = restInfo?.cards?.find(x => x.card?.card?.info)?.card?.card?.info;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-extrabold mb-1">{restaurantInfo?.name}</h1>
      <p className="text-sm text-gray-500 font-semibold mb-6">
        {restaurantInfo?.cuisines?.join(", ")} — {restaurantInfo?.costForTwoMessage}
      </p>

      <hr className="my-6 border-gray-200" />

      <div className="space-y-2">
        {menuItems.map((category, index) => (
          <MenuCard key={index} menuItems={category} />
        ))}
      </div>
    </div>
  );
}