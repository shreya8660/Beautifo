import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { Star } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  if (!product) return <div>Product not found</div>;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewText || rating === 0) return;

    const newReview = {
      rating,
      text: reviewText,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating(0);
  };

  return (
    <section className="bg-sectionBg min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* PRODUCT DETAILS */}
        <div className="grid md:grid-cols-2 gap-12">

          <img
            src={product.image}
            alt=""
            className="w-full rounded-3xl object-cover"
          />

          <div>
            <h1 className="text-3xl font-serif text-headingDark mb-4">
              {product.name}
            </h1>

            {/* Static Rating Display */}
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

            <button className="bg-buttonPink text-white px-8 py-3 rounded-full hover:opacity-90 transition">
              Add to Cart
            </button>

          </div>
        </div>

        {/* REVIEW SECTION */}
        <div className="bg-blushCard rounded-3xl p-10 shadow-sm">

          <h2 className="text-2xl font-serif text-headingDark mb-8">
            Customer Reviews
          </h2>

          {/* Review Form */}
          <form onSubmit={handleReviewSubmit} className="space-y-6 mb-10">

            {/* Star Rating Input */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <Star
                    key={index}
                    size={24}
                    className={`cursor-pointer transition ${
                      currentRating <= (hover || rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(0)}
                  />
                );
              })}
            </div>

            {/* Review Text */}
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review..."
              rows="4"
              className="w-full px-5 py-3 rounded-xl bg-newsletterInput outline-none"
            />

            <button
              type="submit"
              className="bg-buttonPink text-white px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Submit Review
            </button>

          </form>

          {/* Display Reviews */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-textMuted">No reviews yet.</p>
            ) : (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-textMuted">{review.text}</p>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </section>
  );
}