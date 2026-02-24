import { useFavorites } from "../context/FavoriteContext";
import { Heart } from "lucide-react";

export default function Favorite() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-serif text-headingDark mb-12 text-center">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-textMuted">
            No favorite products yet 💔
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {favorites.map((product) => (
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

                
                <div className="flex gap-4 mt-4">
  <button
    onClick={() => toggleFavorite(product)}
    className="bg-buttonPink text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
  >
    Remove
  </button>

  <button
    onClick={() => toggleFavorite(product)}
    className="bg-buttonPink text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
  >
    Add to Cart
  </button>
</div>

                
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}