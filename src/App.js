import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOptions";
import DineOption from "./DineOption";

function App(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <DineOption></DineOption>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root')) ;
root.render(<App/>) ;