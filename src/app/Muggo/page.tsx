
import CMuggo from "../muggocomp/hero"
import BeforeFooter from "../sylthrinecomponent/beforeF"
import Related2 from "../sylthrinecomponent/pagesimagesvalue"
import Footer from "../firstcomponents/footer"



export default function Muggo (){
return(
    <div>
        <div>
<CMuggo/>
        </div>
        <div className="mt-14">
            <BeforeFooter/>
            <Related2/>
        </div>

        <div className="mt-16">
<Footer/>
        </div>
    </div>
)
}