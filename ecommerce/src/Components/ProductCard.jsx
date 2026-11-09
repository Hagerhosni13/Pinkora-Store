
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { useStore } from "../Context/StoreContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const favorite = isInWishlist(product.id);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
        >
          <FiHeart />
        </button>

        {product.oldPrice > product.price && (
          <span className="sale-badge">SALE</span>
        )}
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <div className="product-price">
          <strong>{product.price} EGP</strong>
          {product.oldPrice && (
            <del>{product.oldPrice} EGP</del>
          )}
        </div>

        <div className="product-card-actions">
          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            <FiShoppingBag />
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="product-details-btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
