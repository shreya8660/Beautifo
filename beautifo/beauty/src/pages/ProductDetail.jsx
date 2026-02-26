import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <div>Product not found</div>;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

 
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);


  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <section className="bg-sectionBg min-h-screen py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= PRODUCT SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12">

          
          <div>
            <img
              src={selectedImage}
              alt=""
              className="w-full rounded-3xl object-cover mb-4"
            />

            <div className="flex gap-4">
              {[product.image, product.image, product.image].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl object-cover cursor-pointer border-2 ${
                      selectedImage === img
                        ? "border-buttonPink"
                        : "border-transparent"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div>
            <h1 className="text-3xl font-serif text-headingDark mb-4">
              {product.name}
            </h1>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-xl text-buttonPink mb-6">
              ${product.price}
            </p>

            <p className="text-textMuted mb-8 leading-relaxed">
              This premium beauty product enhances your natural glow.
              Carefully crafted with skin-loving ingredients for a luxurious feel.
            </p>

            {/* QUANTITY SELECTOR */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-headingDark font-medium">
                Quantity:
              </span>

              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="px-4 py-2 bg-sectionBg"
                >
                  -
                </button>

                <span className="px-6 py-2">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 bg-sectionBg"
                >
                  +
                </button>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-buttonPink text-white px-8 py-3 rounded-full hover:opacity-90 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  handleAddToCart();
                  navigate("/cart");
                }}
                className="border border-buttonPink text-buttonPink px-8 py-3 rounded-full hover:bg-buttonPink hover:text-white transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div>
          <h2 className="text-2xl font-serif text-headingDark mb-10 text-center">
            Related Products
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h3 className="text-headingDark font-medium mb-2">
                  {item.name}
                </h3>

                <p className="text-buttonPink font-semibold">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}