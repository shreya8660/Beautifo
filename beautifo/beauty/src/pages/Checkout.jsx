import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState(
    localStorage.getItem("savedAddress") || "Bangalore, India"
  );
  const [editingAddress, setEditingAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  /* ---------------- AUTO SAVE ADDRESS ---------------- */
  useEffect(() => {
    localStorage.setItem("savedAddress", address);
  }, [address]);

  /* ---------------- PLACE ORDER ---------------- */
 const handleOrder = () => {
  if (!cart || cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  const orderId = Date.now();

  const order = {
    id: orderId,
    items: cart,
    total: totalPrice,
    address,
    paymentMethod,
    status: "Processing",
    date: new Date().toLocaleString(),
  };

  const existingOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  localStorage.setItem(
    "orders",
    JSON.stringify([order, ...existingOrders])
  );

  navigate(`/track-order/${orderId}`);

  setTimeout(() => {
    clearCart();
  }, 100);
};
  return (
    <section className="bg-sectionBg min-h-screen py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <h1 className="text-3xl font-serif text-headingDark">
          Checkout
        </h1>

        {/* ADDRESS SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Delivery Address
          </h2>

          {editingAddress ? (
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 bg-newsletterInput rounded-xl outline-none"
            />
          ) : (
            <p className="text-textMuted">{address}</p>
          )}

          <button
            type="button"
            onClick={() => setEditingAddress(!editingAddress)}
            className="mt-4 text-buttonPink"
          >
            {editingAddress ? "Save Address" : "Change Address"}
          </button>
        </div>

        {/* PAYMENT METHOD */}
        <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
          <h2 className="text-xl font-semibold">
            Payment Method
          </h2>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              checked={paymentMethod === "upi"}
              onChange={() => setPaymentMethod("upi")}
            />
            UPI / Online Payment
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Debit / Credit Card
          </label>
        </div>

        {/* OFFERS SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-sm space-y-3">
          <h2 className="text-xl font-semibold">
            Available Offers
          </h2>

          <p className="text-offerRed">
            🎁 Flat 10% off on online payments
          </p>

          <p className="text-offerRed">
            🚚 Free delivery on orders above ₹999
          </p>
        </div>

        {/* TOTAL */}
        <div className="bg-white p-8 rounded-3xl shadow-sm text-right space-y-4">
          <h2 className="text-xl font-semibold text-headingDark">
            Total: ₹{totalPrice.toFixed(2)}
          </h2>

          <button
            type="button"
            onClick={handleOrder}
            className="bg-buttonPink hover:bg-gray-100 hover:text-[#F06A6A]  text-white px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            Place Order
          </button>
        </div>

      </div>
    </section>
  );
}