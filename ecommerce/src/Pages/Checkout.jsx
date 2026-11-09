
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../Context/StoreContext";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useStore();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    payment: "Cash on Delivery",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <div className="order-success">
          <h1>Thank You!</h1>
          <p>Your order has been placed successfully.</p>
          <Link to="/shop">Continue Shopping</Link>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <div className="order-success">
          <h2>Your Cart Is Empty</h2>
          <p>Add some products before checkout.</p>
          <Link to="/shop">Go Shopping</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <p className="checkout-subtitle">
          Complete your information to place your order.
        </p>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>

            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />

            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
            />

            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
            />

            <h2>Payment Method</h2>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="Cash on Delivery">
                Cash on Delivery
              </option>
              <option value="Card">
                Card (Demo Only)
              </option>
            </select>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>

          <div className="checkout-summary">
            <h2>Order Summary</h2>

            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <strong>
                  {item.price * item.quantity} EGP
                </strong>
              </div>
            ))}

            <div className="checkout-total">
              <strong>Total</strong>
              <strong>{totalPrice} EGP</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
