import loreal from "../assets/img/brands/loreal.png";
import rhode from "../assets/img/brands/rhode.png";
import rareBeauty from "../assets/img/brands/rarebeauty.png";
import dior from "../assets/img/brands/dior.png";
import kylie from "../assets/img/brands/kylie.png";

export default function BrandSection() {
  return (
    <section className="bg-sectionBg py-16">
      <div className="max-w-6xl mx-auto px-10">
        
        <div className="flex items-center justify-between justify-center gap-24">

          <img
            src={loreal}
            className="h-24 opacity-70 hover:opacity-100 transition duration-300"
            alt="Loreal"
          />

          <img
            src={rhode}
            className="h-24 opacity-70 hover:opacity-100 transition duration-300"
            alt="Rhode"
          />

          <img
            src={rareBeauty}
            className="h-24 opacity-70 hover:opacity-100 transition duration-300"
            alt="Rare Beauty"
          />

          <img
            src={dior}
            className="h-24 opacity-70 hover:opacity-100 transition duration-300"
            alt="Dior"
          />

          <img
            src={kylie}
            className="h-24 opacity-70 hover:opacity-100 transition duration-300"
            alt="Kylie"
          />

        </div>

      </div>
    </section>
  );
}