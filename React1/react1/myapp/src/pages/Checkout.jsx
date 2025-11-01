import { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { motion } from "framer-motion";

const ADDRESS_KEY = "galleria_addresses";

function Checkout() {
  const { items, totals, codEnabled, setCodEnabled } = useCart();
  const [addresses, setAddresses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    type: "Home",
  });
  const [selectedPayment, setSelectedPayment] = useState("card");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ADDRESS_KEY);
      if (saved) setAddresses(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(ADDRESS_KEY, JSON.stringify(addresses));
    } catch {}
  }, [addresses]);

  function resetForm() {
    setForm({ name: "", phone: "", line1: "", line2: "", city: "", state: "", pincode: "", type: "Home" });
    setEditingIndex(-1);
  }

  function handleSaveAddress(e) {
    e.preventDefault();
    if (editingIndex >= 0) {
      setAddresses((prev) => prev.map((a, i) => (i === editingIndex ? form : a)));
    } else {
      setAddresses((prev) => [...prev, form]);
    }
    resetForm();
  }

  function handleEditAddress(index) {
    setForm(addresses[index]);
    setEditingIndex(index);
  }

  function handleDeleteAddress(index) {
    setAddresses((prev) => prev.filter((_, i) => i !== index));
    if (editingIndex === index) resetForm();
  }

  const paymentMethods = useMemo(
    () => [
      { key: "upi", label: "UPI" },
      { key: "card", label: "Debit/Credit Card" },
      { key: "netbanking", label: "Net Banking" },
      { key: "paypal", label: "PayPal" },
      { key: "cod", label: "Cash on Delivery" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-6">
        {/* Left: Address + Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Address Management */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form onSubmit={handleSaveAddress} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="Full Name" required />
              <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="Phone" required />
              <input value={form.line1} onChange={(e)=>setForm({...form, line1:e.target.value})} className="border rounded-lg px-3 py-2 md:col-span-2" placeholder="Address Line 1" required />
              <input value={form.line2} onChange={(e)=>setForm({...form, line2:e.target.value})} className="border rounded-lg px-3 py-2 md:col-span-2" placeholder="Address Line 2" />
              <input value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="City" required />
              <input value={form.state} onChange={(e)=>setForm({...form, state:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="State" required />
              <input value={form.pincode} onChange={(e)=>setForm({...form, pincode:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="PIN Code" required />
              <select value={form.type} onChange={(e)=>setForm({...form, type:e.target.value})} className="border rounded-lg px-3 py-2">
                <option>Home</option>
                <option>Office</option>
                <option>Other</option>
              </select>
              <div className="md:col-span-2 flex gap-3">
                <motion.button whileTap={{ scale: 0.98 }} type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">{editingIndex>=0?"Update Address":"Save Address"}</motion.button>
                {editingIndex>=0 && (
                  <motion.button whileTap={{ scale: 0.98 }} type="button" onClick={resetForm} className="px-4 py-2 border rounded-lg">Cancel</motion.button>
                )}
              </div>
            </form>
            {addresses.length>0 && (
              <div className="mt-6 grid gap-3">
                {addresses.map((a, i)=>(
                  <div key={i} className="flex items-start justify-between border rounded-xl p-3">
                    <div>
                      <div className="font-medium">{a.name} • {a.phone}</div>
                      <div className="text-sm text-gray-600">{a.line1}{a.line2?`, ${a.line2}`:""}, {a.city}, {a.state} - {a.pincode} ({a.type})</div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button whileTap={{ scale: 0.98 }} onClick={()=>handleEditAddress(i)} className="px-3 py-1 border rounded-lg">Edit</motion.button>
                      <motion.button whileTap={{ scale: 0.98 }} onClick={()=>handleDeleteAddress(i)} className="px-3 py-1 border rounded-lg text-red-600">Delete</motion.button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {paymentMethods.map((m) => (
                <button
                  key={m.key}
                  onClick={()=>{ setSelectedPayment(m.key); if(m.key==="cod"){ setCodEnabled(true);} else { setCodEnabled(false);} }}
                  className={`rounded-xl border p-3 text-left hover:shadow transition ${selectedPayment===m.key?"border-indigo-500 bg-indigo-50":"border-gray-200"}`}
                >
                  <div className="font-medium">{m.label}</div>
                  {m.key==="cod" && <div className="text-xs text-gray-500">Extra {formatINR(totals.codCharge||0)} applies</div>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-600">Items ({items.length})</span><span className="font-medium">{formatINR(totals.subtotal)}</span></div>
              {totals.discountAmount>0 && <div className="flex justify-between text-sm text-green-700"><span>Discount</span><span>-{formatINR(totals.discountAmount)}</span></div>}
              <div className="flex justify-between text-sm"><span className="text-gray-600">Taxable</span><span className="font-medium">{formatINR(totals.taxableAmount)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">GST (18%)</span><span className="font-medium">{formatINR(totals.gstAmount)}</span></div>
              {codEnabled && <div className="flex justify-between text-sm"><span className="text-gray-600">COD Charges</span><span className="font-medium">{formatINR(totals.codCharge)}</span></div>}
              <div className="flex justify-between text-base border-t pt-3"><span className="font-semibold">Total Payable</span><span className="font-semibold">{formatINR(totals.totalPayable)}</span></div>
            </div>
            <motion.button whileTap={{ scale: 0.98 }} className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg">Place Order</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

