import { useNavigate } from "react-router-dom";
import beautyProducts from "../assets/img/beautyproducts.png";
import hairMask from "../assets/img/Hairamsk.png";

export default function DiscountSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-sectionBg py-20 px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <div className="bg-sageCard rounded-2xl px-12 py-14 flex items-center justify-between">
          <div className="space-y-6">
            <p className="text-discountRed font-semibold text-sm tracking-wide">
              50% DISCOUNT
            </p>

            <h2 className="text-4xl font-serif text-headingDark leading-snug">
              Natural Beauty <br /> Collection
            </h2>

            <button  onClick={() => navigate("/shop")} 
            className="bg-[#E17882] hover:bg-[white] text-white hover:text-[#E17882] px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              SHOP NOW →
            </button>
          </div>

          <img
            src={beautyProducts}
            className="w-72 rounded-lg"
            alt=""
          />
        </div>

        {/* RIGHT CARD */}
        <div className="bg-blushCard rounded-2xl px-12 py-14 flex items-center justify-between">
          <div className="space-y-6">
            <p className="text-discountRed font-semibold text-sm tracking-wide">
              NEW DISCOUNT
            </p>

            <h2 className="text-4xl font-serif text-headingDark">
              Hair Mask
            </h2>

            <button  onClick={() => navigate("/shop")}
            className="bg-buttonPink hover:bg-[white] text-white hover:text-[#E17882] px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              SHOP NOW →
            </button>
          </div>

          <img
            src={hairMask}
            className="w-72 rounded-lg"
            alt=""
          />
        </div>

      </div>
    </section>
  );
}