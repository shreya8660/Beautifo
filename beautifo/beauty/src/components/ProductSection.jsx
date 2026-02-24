import { useState } from "react";
import { products } from "../data/products";

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("best");

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <section className="py-16 px-10 bg-sectionBg">
      <div className="max-w-7xl mx-auto">

        {/* FILTER TABS */}
        <div className="flex justify-center gap-12 mb-12 border-b pb-4">
          
          <button
            onClick={() => setActiveTab("best")}
            className={`text-lg font-serif transition ${
              activeTab === "best"
                ? "text-buttonPink border-b-2 border-buttonPink pb-2"
                : "text-gray-400"
            }`}
          >
            Best Seller
          </button>

          <button
            onClick={() => setActiveTab("top")}
            className={`text-lg font-serif transition ${
              activeTab === "top"
                ? "text-buttonPink border-b-2 border-buttonPink pb-2"
                : "text-gray-400"
            }`}
          >
            Top Rated
          </button>

          <button
            onClick={() => setActiveTab("sale")}
            className={`text-lg font-serif transition ${
              activeTab === "sale"
                ? "text-buttonPink border-b-2 border-buttonPink pb-2"
                : "text-gray-400"
            }`}
          >
            On Sale
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-6">

              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  className="w-20 h-20 object-cover transition duration-500 hover:scale-110"
                  alt=""
                />
              </div>

              <div>
                <h4 className="text-headingDark text-lg">
                  {product.name}
                </h4>
                <p className="text-gray-500 font-semibold">
                  ${product.price}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}