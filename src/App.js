import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import SingleProductDetails from "./Pages/SingleProductDetails";

import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}>
          {/* <Route path=":id" element={<SingleProductDetails />} /> */}
        </Route>
        <Route path='/products/:id' element={<SingleProductDetails/>}/>
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
