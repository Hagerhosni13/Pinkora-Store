
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiPhone
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Pinkora<span>.</span></h2>
          <p>
            Discover everything you love in one place.
            Make your shopping experience special with Pinkora.
          </p>

          <div className="social-icons">
            <a href="#instagram"><FiInstagram /></a>
            <a href="#facebook"><FiFacebook /></a>
            <a href="#twitter"><FiTwitter /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Customer Service</h3>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/login">My Account</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FiMail /> info@pinkora.com</p>
          <p><FiPhone /> +20 100 000 0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Pinkora Store. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
