import { useNavigate } from "react-router-dom";
import skinSet from "../assets/img/skinset.png";
import bodyButter from "../assets/img/bodybutter.png";
import healthBeauty from "../assets/img/healthbeauty.png";

export default function PromoSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-sectionBg py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">

        {/* LEFT BIG CARD */}
        <div className="col-span-2 bg-leftCard rounded-3xl p-12 flex justify-between items-center">
          <div className="space-y-6">
            <p className="text-offerRed text-sm font-semibold">
              50% OFF SKIN SET
            </p>

            <h2 className="text-4xl font-serif text-headingDark leading-snug">
              Super Natural <br /> Beauty
            </h2>

            <button  onClick={() => navigate("/shop")} 
            className="bg-buttonPink hover:bg-[white] text-white hover:text-[#E17882] px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              SHOP NOW →
            </button>
          </div>

          <img
            src={skinSet}
            className="w-[420px] rounded-3xl"
            alt=""
          />
        </div>

        {/* RIGHT SIDE STACK */}
        <div className="flex flex-col gap-8">

          {/* TOP RIGHT */}
          <div className="bg-topRightCard rounded-3xl p-10 flex justify-between items-center">
            <div className="space-y-4">
              <p className="text-offerRed text-sm font-semibold">
                10% OFF
              </p>

              <h3 className="text-3xl font-serif text-headingDark">
                Body Butter
              </h3>

              <button  onClick={() => navigate("/shop")}
              className="bg-buttonPink hover:bg-[white] text-white hover:text-[#E17882] px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                SHOP NOW →
              </button>
            </div>

            <img
              src={bodyButter}
              className="w-40 rounded-2xl"
              alt=""
            />
          </div>

          {/* BOTTOM RIGHT */}
          <div className="bg-bottomRightCard rounded-3xl p-10 flex justify-between items-center">
            <div className="space-y-4">
              <p className="text-offerRed text-sm font-semibold">
                SHOP BY
              </p>

              <h3 className="text-3xl font-serif text-headingDark">
                Health <br /> & Beauty
              </h3>

              <button  onClick={() => navigate("/shop")}
               className="bg-buttonPink hover:bg-[white] text-white hover:text-[#E17882] px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                SHOP NOW →
              </button>
            </div>

            <img
              src={healthBeauty}
              className="w-40 rounded-2xl"
              alt=""
            />
          </div>

        </div>

      </div>
    </section>
  );
}