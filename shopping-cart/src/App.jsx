import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
  return (
    <div>
      <Navbar />
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/store" element={<Store />}></Route>
        <Route path="/store/:itemId" element={<ItemPage />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
