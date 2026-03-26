import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Favtpack from "./Pages/Favtpack";
import CustomPack from "./Pages/CustomPack";
import Footer from "./components/Footer";
import Box from "./components/Box";
import AllPacks from "./Pages/AllPacks";
import FAQs from "./Pages/FAQs";
import DetailPage from "./Pages/DetailPage";
import Blog from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import ContactPage from "./Pages/Contact";
import InstantBox from "./components/InstantBox";

export default function Home() {
  return (
    <>
  <div className="relative">
      
      {/* Floating Header */}
      <div className="absolute top-0 left-0 w-full z-50 px-5 pt-3">
        <Header />
      </div>
      <HeroSection />
  
    </div>
    <Favtpack />
    <CustomPack/>
    <Box/>
    <AllPacks/>
      <Blog/>
    <FAQs/>
  
    <Footer/>
    <DetailPage/>
    <Gallery/>
    <ContactPage/>
    <InstantBox/>
    </>
  );
}