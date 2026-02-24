export default function Contact() {
  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-headingDark mb-4">
            Contact Us
          </h1>
          <p className="text-textMuted">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-blushCard rounded-3xl p-10 shadow-sm">

            <h2 className="text-2xl font-serif text-headingDark mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-buttonPink text-white px-8 py-3 rounded-full hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}
          <div className="bg-newsletterBg rounded-3xl p-10 shadow-sm space-y-6">

            <h2 className="text-2xl font-serif text-headingDark">
              Get In Touch
            </h2>

            <p className="text-textMuted">
              Our team is here to help with any questions about orders, products or collaborations.
            </p>

            <div className="space-y-4 text-textMuted">

              <div>
                <p className="font-semibold text-headingDark">Email</p>
                <p>beautifo@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold text-headingDark">Phone</p>
                <p>+91 86694 53789</p>
              </div>

              <div>
                <p className="font-semibold text-headingDark">Location</p>
                <p>Bangalore, India</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}