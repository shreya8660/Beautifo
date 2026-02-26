import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    totalPrice,
    addToCart,
  } = useCart();

  const navigate = useNavigate();

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    }
  };

  return (
    <section className="bg-sectionBg min-h-screen py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-serif text-headingDark mb-10">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-3xl shadow-sm">
            <p className="text-textMuted mb-6">
              Your cart is empty.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="bg-buttonPink text-white px-6 py-3 rounded-full"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-3xl flex flex-col md:flex-row md:justify-between md:items-center gap-6"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt=""
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-headingDark font-semibold text-lg">
                        {item.name}
                      </h2>

                      <p className="text-textMuted mt-1">
                        ${item.price} × {item.quantity}
                      </p>

                      <p className="text-buttonPink font-semibold mt-2">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-6">

                    <div className="flex items-center border rounded-full overflow-hidden">
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="px-4 py-2 bg-sectionBg"
                      >
                        -
                      </button>

                      <span className="px-6 py-2">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-sectionBg"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-offerRed hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL SECTION */}
            <div className="mt-12 bg-white p-8 rounded-3xl shadow-sm text-right space-y-4">
              <h2 className="text-xl font-semibold text-headingDark">
                Grand Total: ${totalPrice.toFixed(2)}
              </h2>

              <div className="flex justify-end gap-4">

                <button
                  onClick={() => navigate("/shop")}
                  className="border border-buttonPink text-buttonPink px-6 py-3 rounded-full hover:bg-buttonPink hover:text-white transition"
                >
                  Continue Shopping
                </button>

                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-buttonPink text-white px-8 py-3 rounded-full hover:opacity-90 transition"
                >
                  Buy Now
                </button>

              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}