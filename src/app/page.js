import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Favtpack from "./Pages/Favtpack";
import CustomPack from "./Pages/CustomPack";
import Footer from "./components/Footer";
import Box from "./components/Box";

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
    <Footer/>
    </>
  );
}