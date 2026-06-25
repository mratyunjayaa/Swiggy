import React from "react";
import ReactDOM from "react-dom/client";
import Restaurent from "./Components/Restaurent";
import Home from "./Components/Home";
import RestaurantMenu from "./Components/RestuarentMenu";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App(){
    return(
        <>
        <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurent" element={<Restaurent></Restaurent>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root')) ;
root.render(<App/>) ;