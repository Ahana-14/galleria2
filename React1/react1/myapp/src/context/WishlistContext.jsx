import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext(null);

// localStorage key
const WISHLIST_STORAGE_KEY = 'galleria_wishlist';

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (savedWishlist) {
        setItems(JSON.parse(savedWishlist));
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
    }
  }, []);

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  }, [items]);

  function addToWishlist(product) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev; // Don't add if already exists
      }
      return [...prev, product];
    });
  }

  function removeFromWishlist(productId) {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }

  function toggleWishlist(product) {
    const existing = items.find((p) => p.id === product.id);
    if (existing) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  function clearWishlist() {
    setItems([]);
  }

  function isInWishlist(productId) {
    return items.some((p) => p.id === productId);
  }

  const value = { 
    items, 
    addToWishlist, 
    removeFromWishlist, 
    toggleWishlist, 
    clearWishlist, 
    isInWishlist 
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
