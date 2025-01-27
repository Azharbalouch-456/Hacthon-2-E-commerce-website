

import Blog1 from "../navigation/blog";
import Hero2 from "../navigation/FirstS";
import Categories from "../navigation/Categeroiuxs";

import Pagination from "../navigation/buttons";
import Features from "../navigation/features";

import Footer2 from "../navigation/secondfooter";


function Bloging() {
  return (
    <div>
      <div>
        <Hero2 />

     
        <div className="flex space-x-8"> 
          <Blog1 />
          <Categories />
        </div>
     
        <div>
        <Pagination/>
<div className="mt-16">
<Features/>

</div>
<div>

<Footer2/>
</div>
        </div>
     
      </div>
    </div>
  );
}

export default Bloging;
