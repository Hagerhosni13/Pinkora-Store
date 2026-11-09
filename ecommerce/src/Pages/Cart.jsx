
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiTrash2,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

import { useStore } from "../Context/StoreContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <section className="cart-page">
      <div className="cart-container">
        <div className="cart-heading">
          <h1>Shopping Cart</h1>
          <p>Your favorite products are waiting for you!</p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <FiShoppingBag />
            <h2>Your Cart Is Empty</h2>
            <p>You haven't added any products yet.</p>
            <Link to="/shop" className="continue-shopping">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <strong>{item.price} EGP</strong>

                    <div className="quantity-controls">
                      <button
                        onClick={() => decreaseQuantity(item)}
                      >
                        <FiMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove product"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Products</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>{totalPrice} EGP</span>
              </div>

              <div className="summary-row total">
                <strong>Total</strong>
                <strong>{totalPrice} EGP</strong>
              </div>

              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>

              <Link to="/shop" className="continue-link">
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
