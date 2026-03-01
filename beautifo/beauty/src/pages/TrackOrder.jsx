import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TrackOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);

  /* ---------------- LOAD ORDER ---------------- */
  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(storedOrders);

    const foundOrder = storedOrders.find(
      (o) => o.id === Number(id)
    );

    setOrder(foundOrder);
  }, [id]);

  if (!order)
  return (
    <section className="bg-green-200 min-h-screen flex items-center justify-center">
      <h1 className="text-3xl">Order Not Found</h1>
    </section>
  );

  /* ---------------- CANCEL ORDER ---------------- */
  const handleCancel = () => {
    if (order.status === "Delivered") {
      alert("Order already delivered. Cannot cancel.");
      return;
    }

    const updatedOrders = orders.map((o) =>
      o.id === order.id
        ? { ...o, status: "Canceled" }
        : o
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    setOrder({ ...order, status: "Canceled" });

    alert("Order Cancelled Successfully ❌");
  };

  /* ---------------- SHIPPING STATUS STEP ---------------- */
  const getStep = () => {
    if (order.status === "Canceled") return 0;
    if (order.status === "Processing") return 1;
    if (order.status === "Shipped") return 2;
    if (order.status === "Delivered") return 3;
    return 1;
  };

  const step = getStep();

  return (
    <section className="bg-sectionBg min-h-screen py-28 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl space-y-8">

        <h1 className="text-3xl font-serif text-headingDark">
          Order Tracking
        </h1>

        <div className="space-y-2">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ₹{order.total.toFixed(2)}</p>
        </div>

        {/* SHIPPING PROGRESS */}
        {order.status !== "Canceled" && (
          <div className="flex items-center justify-between mt-8">

            {/* Confirmed */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-buttonPink text-white" : "bg-gray-200"
              }`}>
                ✓
              </div>
              <p className="text-sm mt-2">Confirmed</p>
            </div>

            <div className="flex-1 h-1 bg-gray-200 mx-2">
              <div
                className="h-1 bg-buttonPink transition-all duration-500"
                style={{ width: step >= 2 ? "100%" : "0%" }}
              />
            </div>

            {/* Shipping */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-buttonPink text-white" : "bg-gray-200"
              }`}>
                🚚
              </div>
              <p className="text-sm mt-2">Shipped</p>
            </div>

            <div className="flex-1 h-1 bg-gray-200 mx-2">
              <div
                className="h-1 bg-buttonPink transition-all duration-500"
                style={{ width: step >= 3 ? "100%" : "0%" }}
              />
            </div>

            {/* Delivered */}
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-buttonPink text-white" : "bg-gray-200"
              }`}>
                🏠
              </div>
              <p className="text-sm mt-2">Delivered</p>
            </div>

          </div>
        )}

        {/* CANCEL BUTTON */}
        <div className="flex justify-between gap-3">
        {order.status !== "Canceled" && (
          <button
            onClick={handleCancel}
            className="bg-offerRed hover:bg-white border border-offerRed hover:border-offerRed text-white hover:text-offerRed px-6 py-3 rounded-full"
          >
            Cancel Order
          </button>
        )}

        {order.status === "Canceled" && (
          <p className="text-offerRed font-semibold">
            This order has been canceled.
          </p>
        )}

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="border border-buttonPink hover:border-offerRed hover:text-white hover:bg-[#F06A6A] text-buttonPink px-6 py-3 rounded-full"
        >
          Back to Home
        </button>
        </div>

      </div>
    </section>
  );
}