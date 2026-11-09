
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

import "./About.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-hero">
        <div className="about-hero-content">
          <span>WELCOME TO PINKORA</span>
          <h1>Shopping Made Beautiful & Easy</h1>
          <p>
            Discover a world of fashion, beauty, electronics,
            and lifestyle products in one special place.
          </p>

          <Link to="/shop" className="about-shop-btn">
            Explore Our Store
          </Link>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Pinkora shopping store"
          />
        </div>
      </div>

      <div className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
            alt="Shopping and fashion"
          />
        </div>

        <div className="about-story-content">
          <span>OUR STORY</span>
          <h2>More Than Just Shopping</h2>
          <p>
            Pinkora is a general online store created to make
            shopping simple, enjoyable, and convenient.
          </p>
          <p>
            We bring together different categories of products
            so you can discover everything you love in one place.
          </p>
        </div>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a simple and enjoyable
          shopping experience with a beautiful collection
          of products for everyday life.
        </p>
      </div>

      <div className="about-values">
        <div className="about-section-title">
          <span>WHY PINKORA?</span>
          <h2>Why Choose Us</h2>
        </div>

        <div className="about-values-grid">

          <div className="about-value-card">
            <FiHeart />
            <h3>Made With Love</h3>
            <p>
              We care about creating a lovely shopping experience.
            </p>
          </div>

          <div className="about-value-card">
            <FiShoppingBag />
            <h3>Different Categories</h3>
            <p>
              Discover fashion, beauty, electronics, and more.
            </p>
          </div>

          <div className="about-value-card">
            <FiStar />
            <h3>Easy Shopping</h3>
            <p>
              Find your favorite products with a simple experience.
            </p>
          </div>

        </div>
      </div>

      <div className="about-bottom">
        <h2>Discover Something You Love</h2>
        <p>Explore our collection and enjoy shopping with Pinkora.</p>
        <Link to="/shop">Shop Now</Link>
      </div>

    </section>
  );
}

export default About;
