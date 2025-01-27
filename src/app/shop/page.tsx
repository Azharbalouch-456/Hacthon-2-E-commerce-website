
import Hero1 from "../navigation/sehero";
import Part from "../navigation/part-hero2";
import Products3 from "../../../src/app/navigation/ThirsSection2";
import Pagination from "../navigation/buttons";
import Features from "../navigation/features";
// import Last from "../navigation/lastShop"
import Footer from "../firstcomponents/footer";
 export default function Shop (){

  return(
    
    <div>
    
<Hero1/>
<Part/>
<div className="mt-16">
<Products3/>
<div className="mt-1">
<Products3/>
</div>

<div className="mt-1">
<Products3/>
</div>
<div className="mt-7">
  <Pagination/>
</div>

<div className="mt-28">
<Features/>
<div className="mt-8">


  <Footer/>
</div>
</div>
</div>
</div>

  )
}
