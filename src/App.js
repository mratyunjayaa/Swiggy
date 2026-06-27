import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Stored/Stores";
import Home from "./Components/Home";
import SecondaryHome from "./Components/SecondaryHome";
import Restaurent from "./Components/Restaurent";
import RestaurantMenu from "./Components/RestuarentMenu";
import CheckOut from "./Components/CheckOut";
import OrderSuccess from "./Components/OrderSuccess";
import PaymentGateway from "./Components/PaymentGateway";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Home />} />
          <Route element={<SecondaryHome />}>
            <Route path="/restaurent" element={<Restaurent />} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);