import {
  Gift,
  Medal,
  Truck,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footerBg text-textMuted">

      {/* TOP FEATURE ROW (Compact) */}
      <div className="max-w-7xl mx-auto px-10 py-8 flex justify-between border-b border-gray-300">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Gift size={18} className="text-[#F27C7C]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-textDark">
              Free Deluxe Samples
            </h4>
            <p className="text-xs">On orders over $50</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Medal size={18} className="text-[#F27C7C]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-textDark">
              Earn Reward Points
            </h4>
            <p className="text-xs">On every purchase</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Truck size={18} className="text-[#F27C7C]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-textDark">
              Free Standard Delivery
            </h4>
            <p className="text-xs">On orders over $25</p>
          </div>
        </div>

      </div>

      {/* MAIN FOOTER CONTENT (Single Row Compact) */}
      <div className="max-w-7xl mx-auto px-10 py-10 flex justify-between items-start">

        {/* Brand */}
        <div className="max-w-xs">
          <h2 className="text-xl font-serif mb-3 text-textDark">
            BE<span className="text-[#F27C7C]">AUTIFO</span>
          </h2>
          <p className="text-sm mb-4 leading-relaxed">
            We offer a vast array of beauty and health products as well as gift sets.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accentPink" />
              beautifo@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-accentPink" />
              +918669453789
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-[#F27C7C] font-semibold mb-3 text-sm">About</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Collections</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[#F27C7C] font-semibold mb-3 text-sm">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>How to Order</li>
            <li>FAQs</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[#F27C7C] font-semibold mb-3 text-sm">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Delivery</li>
            <li>Returns</li>
            <li>Gift Card</li>
            <li>My Account</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-[#F27C7C] font-semibold mb-3 text-sm">Socials</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Facebook size={14} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={14} /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={14} /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <Youtube size={14} /> YouTube
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright (Compact) */}
      <div className="border-t border-gray-300 py-4 text-center text-xs">
        © 2025 Beautifo. All Rights Reserved by Shreya V.
      </div>

    </footer>
  );
}