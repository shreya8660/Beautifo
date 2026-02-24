import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { products } from "../data/products";
import { useFavorites } from "../context/FavoriteContext";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

 

  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-serif text-headingDark mb-12 text-center">
          Shop Collection
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-blushCard rounded-3xl p-6 shadow-sm"
            >
              <img
                src={product.image}
                alt=""
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />

              <h3 className="text-lg font-semibold text-headingDark mb-2">
                {product.name}
              </h3>

              <p className="text-textMuted mb-4">${product.price}</p>

              <div className="flex justify-between items-center">

                {/* Favorite */}
                <button
                  onClick={() => toggleFavorite(product)}
                  className={`p-2 rounded-full transition ${
                    favorites.find((item) => item.id === product.id)
                      ? "bg-buttonPink text-white"
                      : "bg-white text-headingDark"
                  }`}
                >
                  <Heart size={18} />
                </button>

                {/* Add to Cart */}
                <button
  onClick={() => addToCart(product)}
  className="bg-buttonPink text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
>
  Add to Cart
</button>

                {/* View */}
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-white border border-buttonPink text-buttonPink px-4 py-2 rounded-full text-sm hover:bg-buttonPink hover:text-white transition"
                >
                  <Eye size={16} className="inline mr-1" />
                  View
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}