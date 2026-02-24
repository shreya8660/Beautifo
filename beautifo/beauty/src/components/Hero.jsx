"use client"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Petal1 from "../assets/img/petal1.png";
import Petal2 from "../assets/img/petal2.png";
import Petal3 from "../assets/img/petal3.png";
import Butterfly from "../assets/img/butterfly.png";
import Bottle from "../assets/img/bottle.png";


export default function Hero() {
  const [isFloating, setIsFloating] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#f3e7e7] w-full h-[500px] overflow-hidden flex items-center">
      
      {/* LEFT CONTENT */}
      <div className="w-1/2 pl-16 space-y-4">
        <p className="text-black-500 text-lg">Discover</p>

        <h1 className="text-6xl font-serif text-gray-800 leading-tight">
          The Secrets <br /> Of Beauty
        </h1>

        <p className="text-gray-500 max-w-md">
          Get them together, the best for deep, nourishing coverage that will
          make like skin.
        </p>

        <button  onClick={() => navigate("/shop")}
         className="bg-[#D97882] hover:bg-white text-white hover:text-[#D97882] px-8 py-3 rounded-full font-medium transition">
          
          SHOP NOW →
        </button>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="relative w-1/2 flex justify-center items-center">

        {/* Extra Floating Image 1 */}
        <img
          src= {Petal1}
          className="absolute left-20 top-20 w-16 animate-floatSlow"
          alt="petal1"
        />

        {/* Extra Floating Image 2 */}
        <img
          src={Petal2}
          className="absolute left-32 bottom-10 w-20 animate-float"
          alt=""
        />

        <img
          src={Petal2}
          className="absolute right-32 bottom-60 w-20 animate-float"
          alt=""
        />

        <img
          src={Petal3}
          className="absolute right-20 top-15 w-20 animate-float"
          alt=""
        />

         <img
          src={Butterfly}
          className="absolute right-17 top-8 w-20 animate-float"
          alt=""
        />

        {/* Bottle */}
        <img
          src={Bottle}
          onClick={() => setIsFloating(!isFloating)}
          className={`w-48 cursor-pointer transition duration-500 ${
            isFloating ? "animate-bounceUp" : ""
          }`}
          alt=""
        />
      </div>
    </section>
  );
}