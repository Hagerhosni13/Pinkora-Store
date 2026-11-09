
import { useParams, Link } from "react-router-dom";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

import { products } from "../Data/products";
import { useStore } from "../Context/StoreContext";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const favorite = isInWishlist(product.id);

  return (
    <section className="product-details-page">
      <div className="product-details-container">

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <p className="details-category">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="details-rating">
            ⭐ {product.rating} / 5
          </p>

          <div className="details-price">
            <strong>{product.price} EGP</strong>
            {product.oldPrice && (
              <del>{product.oldPrice} EGP</del>
            )}
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <p className="details-color">
            Color: <strong>{product.color}</strong>
          </p>

          <div className="details-actions">
            <button
              className="details-add-cart"
              onClick={() => addToCart(product)}
            >
              <FiShoppingBag />
              Add to Cart
            </button>

            <button
              className={`details-wishlist ${favorite ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
            >
              <FiHeart />
              {favorite ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <Link to="/shop" className="back-to-shop">
            Continue Shopping
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
