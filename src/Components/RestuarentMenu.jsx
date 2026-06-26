import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import MenuCard from "./MenuCard";
import ShimmerMenu from "./ShimmerMenu";

export default function RestaurantMenu() {
  const { id } = useParams(); 
  const [restInfo, setRestInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchMenu() {
      try {
        setLoading(true);
        const url = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&submitAction=ENTER&restaurantId=${id}`;
        const response = await fetch(url);
        const json = await response.json();
        
        if (json?.data) {
          setRestInfo(json.data); 
          const cardsArray = json.data.cards?.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards 
                             || json.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

          if (cardsArray) {
            const filteredCategories = cardsArray.filter((item) => 'title' in (item?.card?.card || {}));
            setMenuItems(filteredCategories);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchMenu();
  }, [id]);

  if (loading) return <ShimmerMenu />;

  return (
    <div className="bg-gray-50/50 min-h-screen pb-16">
      <RestaurantHeader 
        restInfo={restInfo} 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="max-w-3xl mx-auto px-4 space-y-2">
        {menuItems.map((category, index) => (
          <MenuCard 
            key={index} 
            menuItems={category} 
            activeFilter={activeFilter} 
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </div>
  );
}