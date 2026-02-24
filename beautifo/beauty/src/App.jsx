import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiscountSection from "./components/DiscountSection";
import PromoSection from "./components/PromoSection";
import ProductSection from "./components/ProductSection";
import Newspaper from "./components/Newsletter";
import BrandSection from "./components/BrandSection";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Blog from './pages/Blog';
import Page from './pages/Page';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import ProductDetail from "./pages/ProductDetail";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";

function Home() {
  return (
    <>
      <Hero />
      <DiscountSection />
      <PromoSection />
      <ProductSection />
      <Newspaper />
      <BrandSection />
      <Instagram />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar classname="pt-20"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/page" element={<Page/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;