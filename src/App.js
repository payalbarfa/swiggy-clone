// import ReactDOM from "react-dom/client";
import { ReactDOM } from "react";
import "./index.css";
import Body from "./Components/Body";
import Error from "./Components/Error";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantCard from "./Components/Reastaurant";
import RestaurantMenu from "./Components/RestaurantMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurantmenu" element={<RestaurantMenu/>} />
          {/* <Route path="*" element={<Navigate replace to="/404" />} /> */} 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
