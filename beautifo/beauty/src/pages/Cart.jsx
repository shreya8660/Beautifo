import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <section className="bg-sectionBg min-h-screen py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-serif text-headingDark mb-10">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-textMuted">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-3xl flex justify-between items-center"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt=""
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-headingDark font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-textMuted">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-offerRed hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-right">
              <h2 className="text-xl font-semibold text-headingDark">
                Total: ${totalPrice.toFixed(2)}
              </h2>

              <button className="mt-4 bg-buttonPink hover:bg-[white] text-white hover:text-[#F06A6A] px-8 py-3 rounded-full hover:opacity-90 transition">
                Buy now
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}