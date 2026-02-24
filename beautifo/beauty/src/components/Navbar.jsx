import { useState } from "react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function Navbar() {
  const navigate = useNavigate();
   const { favorites } = useFavorites();
   const { cart } = useCart(); 
   const [searchOpen, setSearchOpen] = useState(false);
const [query, setQuery] = useState("");
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(query.toLowerCase())
);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LEFT - Logo */}
          <div className="text-2xl font-semibold tracking-widest text-black">
            BE<span className="text-[#F27C7C]">AUTIFO</span>
          </div>

          {/* CENTER - Nav Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <button
  onClick={() => navigate("/")}
  className="hover:text-buttonPink transition"
>
  HOME
</button>
            <button
  onClick={() => navigate("/shop")}
  className="hover:text-buttonPink transition"
>
  SHOP
</button>


            <button
  onClick={() => navigate("/page")}
  className="hover:text-buttonPink transition"
>
  PAGE
</button>
            <button
            onClick={() => navigate("/blog")}
            className="hover:text-buttonPink transition">
            BLOG
           </button>
            <button
  onClick={() => navigate("/contact")}
  className="hover:text-buttonPink transition"
>
  CONTACT US
</button>

           <button
  onClick={() => navigate("/auth")}
  className="hover:text-buttonPink transition"
>
  LOGIN
</button>
            </div>

          {/* RIGHT - Icons */}
          <div className="flex items-center space-x-6 text-gray-700">

            <div className="relative">
  <Search
    className="w-5 h-5 cursor-pointer hover:text-buttonPink transition"
    onClick={() => setSearchOpen(!searchOpen)}
  />

  {searchOpen && (
    <div className="absolute right-0 mt-4 w-80 bg-white shadow-xl rounded-2xl p-4 z-50">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-full bg-newsletterInput outline-none text-sm"
      />

      {/* Results */}
      {query && (
        <div className="mt-4 max-h-60 overflow-y-auto space-y-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                  setSearchOpen(false);
                  setQuery("");
                }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-sectionBg cursor-pointer transition"
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="text-sm text-headingDark">
                  {product.name}
                </span>
              </div>
            ))
          ) : (
            <p className="text-sm text-textMuted">
              No products found.
            </p>
          )}
        </div>
      )}
    </div>
  )}
</div>

            {/* 🔥 PROFILE ICON CLICK */}
            <User
              className="w-5 h-5 cursor-pointer hover:text-buttonPink transition"
              onClick={() => navigate("/profile")}
            />

            <div
  className="relative cursor-pointer"
  onClick={() => navigate("/favorites")}
>
  <Heart className="w-5 h-5 hover:text-pink-500 transition" />
  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
    {favorites.length}
  </span>
</div>

            <div
      className="relative cursor-pointer"
      onClick={() => navigate("/cart")}
    >
      <ShoppingCart className="w-5 h-5 hover:text-buttonPink transition" />
      <span className="absolute -top-2 -right-2 bg-buttonPink text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        {cart.length}
      </span>
    </div>

          </div>
        </div>
      </div>
    </nav>
  );
}