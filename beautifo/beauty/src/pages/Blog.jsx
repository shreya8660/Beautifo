export default function Blog() {
  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-headingDark mb-4">
            Beauty Journal
          </h1>
          <p className="text-textMuted">
            Tips, trends & skincare secrets from Beautifo
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Blog Card */}
          <div className="bg-blushCard rounded-3xl overflow-hidden shadow hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
              alt=""
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-headingDark mb-3">
                5 Skincare Habits You Need
              </h3>

              <p className="text-textMuted text-sm mb-6">
                Discover simple routines that transform your skin naturally.
              </p>

              <button className="bg-buttonPink text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#F27C7C] transition">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-newsletterBg rounded-3xl overflow-hidden shadow hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              alt=""
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-headingDark mb-3">
                Minimal Makeup Look
              </h3>

              <p className="text-textMuted text-sm mb-6">
                Achieve a glowing no-makeup makeup look effortlessly.
              </p>

              <button className="bg-buttonPink text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#F27C7C] transition">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-blushCard rounded-3xl overflow-hidden shadow hover:shadow-lg transition">

            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71"
              alt=""
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-headingDark mb-3">
                Hair Care Essentials
              </h3>

              <p className="text-textMuted text-sm mb-6">
                Nourish and protect your hair with these expert tips.
              </p>

              <button className="bg-buttonPink  text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#F27C7C] transition">
                Read More
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}