import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Favtpack from "./Pages/Favtpack";
import CustomPack from "./Pages/CustomPack";
import Footer from "./components/Footer";
import Box from "./components/Box";
import AllPacks from "./Pages/allpacks/page";
import FAQs from "./Pages/FAQs";
import DetailPage from "./Pages/DetailPage";
import Blog from "./Pages/Blog";
import Gallery from "./Pages/Gallery";
import ContactPage from "./Pages/Contact";
import InstantBox from "./components/InstantBox";
import MobHeader from "./components/MobHeader";

export default function Home() {
  return (
    <>
  <div className="relative overflow-hidden">
      
    
     <div className="hidden sm:block absolute top-0 left-0 w-full z-50 px-5 pt-3">
  <Header />
</div>

{/* Mobile Header */}
<div className="block sm:hidden absolute top-0 left-0 w-full z-50 px-5 pt-3">
  <MobHeader />
</div>

     
      <HeroSection />
  
    </div>
    <Favtpack />
    <CustomPack/>
    <Box/>
   <section id="blogs"><Blog/></section> 
    <section id="allpacks">
  <AllPacks />
</section>
    <Gallery/>
      
    <FAQs/>
    <section id="contact">
  <ContactPage/>
  </section>
    <Footer/>
   
    
    
   
    </>
  );
}