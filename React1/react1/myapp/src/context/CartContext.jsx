import { createContext, useContext, useMemo, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [gstRate, setGstRate] = useState(0.18); // 18% GST default
  const [codEnabled, setCodEnabled] = useState(false);
  const [codFee, setCodFee] = useState(50);

  // Optional: persist cart in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("galleria_cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        setItems(parsed.items || []);
        setCouponCode(parsed.couponCode || "");
        setCodEnabled(Boolean(parsed.codEnabled));
      }
    } catch (e) {
      // no-op
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "galleria_cart",
        JSON.stringify({ items, couponCode, codEnabled })
      );
    } catch (e) {
      // no-op
    }
  }, [items, couponCode, codEnabled]);

  function addItem(product, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p));
      }
      return [...prev, { ...product, quantity }];
    });
  }

  function removeItem(productId) {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) return removeItem(productId);
    setItems((prev) => prev.map((p) => (p.id === productId ? { ...p, quantity } : p)));
  }

  function clearCart() {
    setItems([]);
  }

  // Simple coupon rules. Example: NEW20 => 20% off
  function getDiscountRateFromCode(code) {
    const normalized = (code || "").trim().toUpperCase();
    if (normalized === "NEW20") return 0.2;
    if (normalized === "SAVE10") return 0.1;
    return 0;
  }

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const discountRate = getDiscountRateFromCode(couponCode);
    const discountAmount = Math.round(subtotal * discountRate);
    const taxableAmount = Math.max(subtotal - discountAmount, 0);
    const gstAmount = Math.round(taxableAmount * gstRate);
    const codCharge = codEnabled && taxableAmount > 0 ? codFee : 0;
    const totalPayable = Math.max(taxableAmount + gstAmount + codCharge, 0);
    return {
      subtotal,
      discountRate,
      discountAmount,
      taxableAmount,
      gstAmount,
      codCharge,
      totalPayable,
    };
  }, [items, couponCode, gstRate, codEnabled, codFee]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totals,
    couponCode,
    setCouponCode,
    gstRate,
    setGstRate,
    codEnabled,
    setCodEnabled,
    codFee,
    setCodFee,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


