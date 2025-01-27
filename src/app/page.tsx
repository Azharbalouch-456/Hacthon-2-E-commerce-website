
import HeroSection from "./componenets/herosection";
import Second from "./componenets/second";
import Products1 from "./2ndcomp/firstproductsvalue";
import Products2 from "./2ndcomp/secondproductsvalue";
import RoomInspiration from "./2ndcomp/card";
import Third from "./firstcomponents/thirdSection";
import Footer from "./firstcomponents/footer";
// import Navbar from "./componenets/nav"; 
// import Shop from "./2ndComp/Shop";
// import MyApp from "./2ndcomp/app";
export default function Home({ }) {
  return (
   <div>

{/* <Navbar/> */}

<HeroSection/>
<Second />
<Products1/>
<Products2/>
<RoomInspiration/>
<Third/>
<div className="mt-16">
<Footer/>
</div>

   </div>

  );
}
