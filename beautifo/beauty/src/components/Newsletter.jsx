export default function Newsletter() {
  return (
    <section className="bg-sectionBg py-20 px-10">
      <div className="max-w-6xl mx-auto bg-newsletterBg rounded-3xl py-16 px-10 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-serif text-headingDark mb-6">
          Sign up now & get 10% off
        </h2>

        {/* Paragraph */}
        <p className="text-textMuted max-w-2xl mx-auto mb-10">
          Subscribe to our newsletter to get special offers. Limited time offer for your first order.
        </p>

        {/* Input + Button */}
        <div className="flex justify-center">
          <div className="flex w-[500px]">

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-6 py-4 rounded-l-full bg-newsletterInput outline-none text-gray-700"
            />

            <button className="px-8 py-4 rounded-r-full bg-newsletterButton hover:bg-white text-white hover:text-[#F27C7C] font-semibold hover:opacity-90 transition">
              SUBSCRIBE
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}