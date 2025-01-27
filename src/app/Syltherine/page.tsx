
import ProductDisplay from "../sylthrinecomponent/hero"
import  BeforeFooter from "../sylthrinecomponent/beforeF"
// import Products1 from "../2ndcomp/5th"
import Related2 from "../sylthrinecomponent/pagesimagesvalue"
import Footer from "../firstcomponents/footer"

 export default function Sylth (){
    return(
        <div>
            <div>
<ProductDisplay/>
<div className="mt-11">

< BeforeFooter/>
<Related2/>
</div>
<div className="mt-16">
<Footer/>
</div>
            </div>
        </div>
    )
}