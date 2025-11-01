import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { formatINR } from "../utils/currency";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Cart() {
  const { items, updateQuantity, removeItem, clearCart, totals, couponCode, setCouponCode, codEnabled, setCodEnabled } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                <div className="text-gray-600">Base: {formatINR(item.price)}</div>
                <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-200 rounded">-</motion.button>
                <span>{item.quantity}</span>
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-200 rounded">+</motion.button>
              </div>
              <div className="w-40 text-right">
                <div className="font-semibold">{formatINR(item.price * item.quantity)}</div>
                {/* Per-item tax breakdown approximated */}
                <div className="text-xs text-gray-500">Pre-tax: {formatINR(item.price * item.quantity)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <motion.button whileTap={{ scale: 0.97 }} onClick={() => removeItem(item.id)} className="px-3 py-1 border border-red-200 text-red-600 rounded hover:bg-red-50">Remove</motion.button>
                <motion.button whileTap={{ scale: 0.97 }} onClick={() => addToWishlist(item)} className="px-3 py-1 border border-indigo-200 text-indigo-600 rounded hover:bg-indigo-50">Move to Wishlist</motion.button>
              </div>
            </div>
          ))}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon (e.g. NEW20)"
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <span className="text-sm text-gray-500">Auto-applies if valid</span>
                {couponCode && (
                  <motion.button whileTap={{ scale: 0.97 }} onClick={() => setCouponCode("")} className="px-3 py-2 border rounded-lg">
                    Clear
                  </motion.button>
                )}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
              <div className="flex justify-between py-1"><span className="text-gray-600">Subtotal</span><span className="font-medium">{formatINR(totals.subtotal)}</span></div>
              {totals.discountAmount > 0 && (
                <div className="flex justify-between py-1 text-green-700"><span>Discount ({Math.round(totals.discountRate*100)}%)</span><span>-{formatINR(totals.discountAmount)}</span></div>
              )}
              <div className="flex justify-between py-1"><span className="text-gray-600">Taxable</span><span className="font-medium">{formatINR(totals.taxableAmount)}</span></div>
              <div className="flex justify-between py-1"><span className="text-gray-600">GST (18%)</span><span className="font-medium">{formatINR(totals.gstAmount)}</span></div>
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" checked={codEnabled} onChange={(e) => setCodEnabled(e.target.checked)} />
                  Cash on Delivery (+{formatINR(totals.codCharge || 0)})
                </label>
              </div>
              <div className="flex justify-between py-2 border-t mt-2"><span className="text-lg font-semibold">Total</span><span className="text-lg font-semibold">{formatINR(totals.totalPayable)}</span></div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <motion.button whileTap={{ scale: 0.98 }} onClick={clearCart} className="px-4 py-2 border rounded">Clear Cart</motion.button>
            <Link to="/checkout" className="px-4 py-2 bg-blue-600 text-white rounded flex items-center justify-center">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;