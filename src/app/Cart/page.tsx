




import CartHero from "../Cart-Component/navbar"
import Cart1 from "../Cart-Component/SecondSection"
import Feature from "../Cart-Component/features"
import Footer2 from "../navigation/secondfooter"
export default function Cart (){
    return(
        <div>
            <div>
<CartHero/>
<Cart1/>

            </div>

            <div className="mt-60">
<Feature/>
<Footer2/>
            </div>
        </div>
    )
}