import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ItemPage from "./pages/ItemPage";
import Cart from "./components/Cart";
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
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  // const cart1 = [
  //   { title: "addf", quantity: 11 },
  //   { title: "fdgjdhj", quantity: 12 },
  // ];

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
      <Navbar
        cart={cart}
        setCart={setCart}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      {/* <Cart /> */}
      <Routes>
        <Route
          path="/"
          element={<Home items={items} featuredItem={featuredItem} />}
        ></Route>
        <Route path="/store" element={<Store items={items} />}></Route>
        <Route
          path="/store/:itemId"
          element={<ItemPage items={items} cart={cart} setCart={setCart} />}
        ></Route>
      </Routes>
      <Cart
        cart={cart}
        setCart={setCart}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />

      {/* Check the cart system */}
      {/* {cart.length !== 0 &&
        cart.map((item) => {
          return (
            <div key={item.title}>
              <p>{item.title}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })} */}
    </div>
  );
}

export default App;
