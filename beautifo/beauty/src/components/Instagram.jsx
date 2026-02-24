import { Instagram } from "lucide-react";
import insta1 from '../assets/img/brands/insta1.png'
import insta2 from '../assets/img/brands/insta2.png'
import insta3 from '../assets/img/brands/insta3.png'
import insta4 from '../assets/img/brands/insta4.png'

export default function InstagramSection() {
  return (
    <section className="py-20 bg-sectionBg">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl text-buttonPink font-serif mb-2">
          @beautifo_store
        </h2>
        <p className="text-gray-500 mb-12">
          Follow us on Instagram
        </p>

        <div className="flex justify-center gap-6">

          {/* SINGLE IMAGE CARD */}
          <div className="relative group w-48 h-64 rounded-2xl overflow-hidden cursor-pointer">

            <img
              src={insta1}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

              <Instagram className="text-white w-8 h-8" />

            </div>

          </div>

          <div className="relative group w-48 h-64 rounded-2xl overflow-hidden cursor-pointer">

            <img
              src={insta2}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

              <Instagram className="text-white w-8 h-8" />

            </div>

          </div>

          <div className="relative group w-48 h-64 rounded-2xl overflow-hidden cursor-pointer">

            <img
              src={insta3}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

              <Instagram className="text-white w-8 h-8" />

            </div>

          </div>

          <div className="relative group w-48 h-64 rounded-2xl overflow-hidden cursor-pointer">

            <img
              src={insta4}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              alt=""
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

              <Instagram className="text-white w-8 h-8" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}