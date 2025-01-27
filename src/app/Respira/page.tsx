



import Hero8 from "../respiracomponents/hero"
import Related2 from "../sylthrinecomponent/pagesimagesvalue"
import BeforeFooter from "../sylthrinecomponent/beforeF"
import Footer from "../firstcomponents/footer"
export default  function Respira (){
    return(
        <div>

<Hero8/>
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