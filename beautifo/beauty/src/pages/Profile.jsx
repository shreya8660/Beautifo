import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("user");
  const [editing, setEditing] = useState(false);

  const [username, setUsername] = useState("Nella");
  const [email, setEmail] = useState("nella@gmail.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [city, setCity] = useState("Bangalore");

  const [filter, setFilter] = useState("all");

  const orders = [
    { id: 1, total: 2000, status: "Processing" },
    { id: 2, total: 5000, status: "Done" },
    { id: 3, total: 350, status: "Canceled" },
  ];

  const viewHistory = [
    { id: 1, name: "Organic Serum" },
    { id: 2, name: "Lip Gloss" },
    { id: 3, name: "Face Mask" },
  ];

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter((order) => order.status === filter);

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <section className="bg-sectionBg min-h-screen py-28 px-6">
      <div className="max-w-6xl mx-auto bg-blushCard rounded-3xl shadow-md p-10">

        {/* HEADER */}
        <h1 className="text-3xl font-serif text-headingDark mb-8">
          Profile
        </h1>

        {/* TABS */}
        <div className="flex gap-6 mb-10">
          <button
            onClick={() => setActiveTab("user")}
            className={`px-5 py-2 rounded-full text-sm ${
              activeTab === "user"
                ? "bg-buttonPink text-white"
                : "bg-white text-textMuted"
            }`}
          >
            User Data
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`px-5 py-2 rounded-full text-sm ${
              activeTab === "orders"
                ? "bg-buttonPink text-white"
                : "bg-white text-textMuted"
            }`}
          >
            Order History
          </button>

          <button
            onClick={() => setActiveTab("view")}
            className={`px-5 py-2 rounded-full text-sm ${
              activeTab === "view"
                ? "bg-buttonPink text-white"
                : "bg-white text-textMuted"
            }`}
          >
            View History
          </button>
        </div>

        {/* ================= USER DATA ================= */}
        {activeTab === "user" && (
          <div className="bg-white rounded-2xl p-8 space-y-6">

            {/* Username */}
            <div>
              <label className="block text-sm text-textMuted mb-1">
                Username
              </label>
              {editing ? (
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-newsletterInput rounded-xl outline-none"
                />
              ) : (
                <p className="text-headingDark">{username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-textMuted mb-1">
                Email
              </label>
              {editing ? (
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-newsletterInput rounded-xl outline-none"
                />
              ) : (
                <p className="text-headingDark">{email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-textMuted mb-1">
                Phone
              </label>
              {editing ? (
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 bg-newsletterInput rounded-xl outline-none"
                />
              ) : (
                <p className="text-headingDark">{phone}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm text-textMuted mb-1">
                City
              </label>
              {editing ? (
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2 bg-newsletterInput rounded-xl outline-none"
                />
              ) : (
                <p className="text-headingDark">{city}</p>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setEditing(!editing)}
                className="bg-buttonPink text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                {editing ? "Save Changes" : "Edit"}
              </button>

              <button
                onClick={handleLogout}
                className="border border-offerRed text-offerRed px-6 py-2 rounded-full hover:bg-offerRed hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* ================= ORDER HISTORY ================= */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-2xl p-8">

            {/* FILTER */}
            <div className="mb-6">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 rounded-xl bg-newsletterInput outline-none"
              >
                <option value="all">All</option>
                <option value="Processing">Processing</option>
                <option value="Done">Done</option>
                <option value="Canceled">Canceled</option>
              </select>
            </div>

            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-6 rounded-xl bg-sectionBg flex justify-between"
                >
                  <div>
                    <p className="text-headingDark font-semibold">
                      ₹ {order.total}
                    </p>
                    <p className="text-textMuted text-sm">
                      Status: {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= VIEW HISTORY ================= */}
        {activeTab === "view" && (
          <div className="bg-white rounded-2xl p-8 space-y-4">
            {viewHistory.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-sectionBg text-headingDark"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}