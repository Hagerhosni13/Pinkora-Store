
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { products } from "../Data/products";
import ProductCard from "../Components/ProductCard";

import "./Shop.css";

const categories = [
  "All",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home",
  "Accessories",
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <main className="shop-page">

      <section className="shop-header">
        <span>DISCOVER PINKORA</span>
        <h1>Our Collection</h1>
        <p>
          Explore our beautiful collection and find
          something you love.
        </p>
      </section>

      <section className="shop-container">

        <div className="shop-toolbar">

          <div className="shop-search">
            <FiSearch />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>

        </div>

        <div className="shop-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="shop-results">
          <p>
            Showing <strong>{filteredProducts.length}</strong> products
          </p>
        </div>

        <div className="shop-products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="shop-empty">
              <h2>No Products Found</h2>
              <p>Try another search or category.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Show All Products
              </button>
            </div>
          )}
        </div>

      </section>

    </main>
  );
}

export default Shop;
