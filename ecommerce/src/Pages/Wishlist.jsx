
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

import { useStore } from "../Context/StoreContext";
import ProductCard from "../Components/ProductCard";

import "./Wishlist.css";

function Wishlist() {
  const { wishlist } = useStore();

  return (
    <section className="wishlist-page">
      <div className="wishlist-container">

        <div className="wishlist-heading">
          <FiHeart />
          <h1>My Wishlist</h1>
          <p>Your favorite products in one place.</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <FiShoppingBag />
            <h2>Your Wishlist Is Empty</h2>
            <p>You haven't added any favorite products yet.</p>

            <Link to="/shop" className="wishlist-shop-btn">
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Wishlist;
