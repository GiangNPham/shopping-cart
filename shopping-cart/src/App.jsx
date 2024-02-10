import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { useEffect, useState } from "react";
import Data from "./utils/data";

/* Layout of the web
1. Navbar
a. Name
b. Home 
c. Shop
d. Cart
2. Home
a. Product introduction
b. Sample
3. Shop: grids of products -> clicked -> route to each page

*/

function App() {
  const [items, setItems] = useState([]);
  const [featuredItem, setFeaturedItem] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await Data();
      console.log(data);
      setFeaturedItem(data.slice(0, 4));

      setItems(data.slice(0, 10));
    })();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Cart /> */}
      <Routes>
        <Route
          path="/"
          element={<Home items={items} featuredItem={featuredItem} />}
        ></Route>
        <Route path="/store" element={<Store items={items} />}></Route>
        {/* <Route path="/store/:itemId" element={<ItemPage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
