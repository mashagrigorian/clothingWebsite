import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cartisEmpty] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Your Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="/checkout"
            element={
              cartisEmpty ? <Navigate to="/products" /> : <p>checkout</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
