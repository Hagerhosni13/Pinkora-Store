
import { Routes, Route } from "react-router-dom";

import { StoreProvider } from "./Context/StoreContext";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import "./App.css";

function App() {
  return (
    <StoreProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </StoreProvider>
  );
}

export default App;
