export default function Page() {
  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-serif text-headingDark mb-4">
            Our Story
          </h1>
          <p className="text-textMuted max-w-2xl mx-auto">
            Beautifo was created to bring natural beauty products with elegance and care.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-blushCard rounded-3xl p-10 shadow-sm">
          <h2 className="text-2xl font-serif text-headingDark mb-4">
            About Beautifo
          </h2>
          <p className="text-textMuted leading-relaxed">
            We carefully select skincare and beauty essentials that enhance your natural glow.
            Our mission is to provide high-quality products with a luxury experience.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-newsletterBg rounded-3xl p-10 shadow-sm">
          <h2 className="text-2xl font-serif text-headingDark mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-textMuted">
            <div>
              <h4 className="font-semibold text-headingDark">
                Do you offer international shipping?
              </h4>
              <p>Yes, we ship worldwide with secure packaging.</p>
            </div>

            <div>
              <h4 className="font-semibold text-headingDark">
                Can I return products?
              </h4>
              <p>Returns are accepted within 7 days of delivery.</p>
            </div>

            <div>
              <h4 className="font-semibold text-headingDark">
                Are your products cruelty-free?
              </h4>
              <p>Absolutely. We believe in ethical beauty.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-buttonPink text-white px-8 py-3 rounded-full hover:opacity-90 transition">
            Explore Collection
          </button>
        </div>

      </div>
    </section>
  );
}