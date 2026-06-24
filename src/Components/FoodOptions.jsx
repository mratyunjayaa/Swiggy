import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {

    return (

        <>
            <div className="w-[80%] container mx-auto flex flex-wrap gap-10 m-t-10">

                {imageGridCards.map((item) => (
                    <FoodCard key={item.id} foodData={item} />
                ))}</div>
        </>
    )

}