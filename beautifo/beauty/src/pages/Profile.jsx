import { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("Nella");
  const [address, setAddress] = useState("Bangalore, India");
  const [editing, setEditing] = useState(false);

  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto bg-blushCard rounded-3xl shadow-md p-10 grid grid-cols-4 gap-10">

        {/* LEFT SIDEBAR */}
        <div className="col-span-1 space-y-6">

          {/* Profile Pic */}
          <div className="text-center">
            <img
              src="https://i.pravatar.cc/150"
              alt=""
              className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow"
            />
            <button className="text-sm text-buttonPink mt-3 hover:underline">
              Change Profile Pic
            </button>
          </div>

          {/* Sidebar Menu */}
          <div className="space-y-4 text-textMuted">
            <button className="block w-full text-left hover:text-buttonPink transition">
              Edit Profile
            </button>
            <button className="block w-full text-left hover:text-buttonPink transition">
              My Orders
            </button>
            <button className="block w-full text-left hover:text-buttonPink transition">
              Add Address
            </button>
            <button className="block w-full text-left hover:text-buttonPink transition">
              Add Another Account
            </button>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-3 bg-white rounded-2xl p-8">

          <h2 className="text-2xl font-serif text-headingDark mb-6">
            My Profile
          </h2>

          {/* Username */}
          <div className="mb-6">
            <label className="block text-sm text-textMuted mb-2">
              Username
            </label>

            {editing ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-newsletterInput outline-none"
              />
            ) : (
              <p className="text-lg text-headingDark">{username}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-sm text-textMuted mb-2">
              Address
            </label>

            {editing ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-newsletterInput outline-none"
              />
            ) : (
              <p className="text-lg text-headingDark">{address}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setEditing(!editing)}
              className="bg-buttonPink text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              {editing ? "Save Changes" : "Edit Profile"}
            </button>

            <button className="border border-buttonPink text-buttonPink px-6 py-3 rounded-full hover:bg-buttonPink hover:text-white transition">
              Change Address
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}