
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  // Shopping Cart
  const [cart, setCart] = useState(() => {
    return JSON.parse(
      localStorage.getItem("pinkora-cart") || "[]"
    );
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(
      localStorage.getItem("pinkora-wishlist") || "[]"
    );
  });

  // Save Cart
  useEffect(() => {
    localStorage.setItem(
      "pinkora-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Save Wishlist
  useEffect(() => {
    localStorage.setItem(
      "pinkora-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add Product To Cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        { ...product, quantity: 1 },
      ];
    });
  };

  // Remove Product From Cart
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Update Product Quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Add Or Remove Product From Wishlist
  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentWishlist, product];
    });
  };

  // Check If Product Is In Wishlist
  const isInWishlist = (id) => {
    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// Custom Hook
export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useStore must be used inside StoreProvider"
    );
  }

  return context;
}
