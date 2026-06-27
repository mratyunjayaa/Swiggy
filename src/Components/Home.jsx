import Header from "./Header"
import DineOption from "./DineOption"
import FoodOption from "./FoodOptions"
import Footer from "./Footer"

export default function Home(){
    return(
        <>
         <Header></Header>
         <FoodOption></FoodOption>
         <DineOption></DineOption>
         <Footer></Footer>
        </>
    )
}