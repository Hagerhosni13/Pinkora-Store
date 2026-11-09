
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import { useStore } from "../Context/StoreContext";
import "./Navbar.css";

function Navbar() {
  const { cart, wishlist } = useStore();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlist.length;

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          Pinkora<span>.</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="navbar-icons">

          <Link to="/shop" className="navbar-icon" aria-label="Search products">
            <FiSearch />
          </Link>

          <Link to="/wishlist" className="navbar-icon" aria-label="Wishlist">
            <FiHeart />
            {wishlistCount > 0 && (
              <span className="icon-badge">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="navbar-icon" aria-label="Shopping cart">
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="icon-badge">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/login" className="navbar-icon" aria-label="Login">
            <FiUser />
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
