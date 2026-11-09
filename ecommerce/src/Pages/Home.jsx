
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { products } from "../Data/products";
import ProductCard from "../Components/ProductCard";

import "./Home.css";

const categories = [
  { name: "Fashion", icon: "👗" },
  { name: "Electronics", icon: "🎧" },
  { name: "Beauty", icon: "💄" },
  { name: "Home", icon: "🏡" },
  { name: "Accessories", icon: "👜" },
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">
          <span className="hero-label">
            ✨ YOUR FAVORITE SHOPPING DESTINATION
          </span>

          <h1>
            Shopping Made
            <br />
            <span>Beautiful & Easy</span>
          </h1>

          <p>
            Discover your favorite products all in one place.
            Find fashion, beauty, electronics and more.
          </p>

          <Link to="/shop" className="hero-btn">
            Explore Now <FiArrowRight />
          </Link>

          <div className="hero-note">
            <span>♡</span> Find everything you love.
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000"
            alt="Pinkora Fashion Collection"
          />

          <div className="hero-floating-card">
            <span>♡</span>

            <div>
              <strong>New Collection</strong>
              <p>Discover something special</p>
            </div>
          </div>
        </div>

      </section>

      {/* Categories Section */}
      <section className="home-categories">

        <div className="home-section-title">
          <span>EXPLORE OUR STORE</span>
          <h2>Shop By Category</h2>
          <p>Find what you are looking for.</p>
        </div>

        <div className="categories-container">
          {categories.map((category) => (
            <button
              key={category.name}
              className="category-item"
              onClick={() =>
                setSelectedCategory(category.name)
              }
            >
              <span>{category.icon}</span>
              <h3>{category.name}</h3>
            </button>
          ))}
        </div>

      </section>

      {/* Featured Products */}
      <section className="featured-products">

        <div className="home-section-title">
          <span>OUR COLLECTION</span>
          <h2>Featured Products</h2>
          <p>Handpicked products just for you.</p>
        </div>

        <div className="category-filters">

          <button
            className={
              selectedCategory === "All" ? "active" : ""
            }
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.name}
              className={
                selectedCategory === category.name
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category.name)
              }
            >
              {category.name}
            </button>
          ))}

        </div>

        <div className="home-products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>

        <div className="home-view-all">
          <Link to="/shop">
            View All Products <FiArrowRight />
          </Link>
        </div>

      </section>

      {/* Promo Banner */}
      <section className="promo-banner">

        <div>
          <span>MADE FOR YOUR LIFESTYLE</span>

          <h2>
            Find Your Favorite
            <br />
            Things At Pinkora.
          </h2>

          <p>
            Everything you love, all in one place.
          </p>

          <Link to="/shop">
            Shop Collection <FiArrowRight />
          </Link>
        </div>

        <div className="promo-decoration">
          P.
        </div>

      </section>

    </main>
  );
}

export default Home;
