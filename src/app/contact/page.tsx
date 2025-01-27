
import HContact from "../C-Component/contactpagehero"
import SecondSecondC from "../C-Component/SecondSection"
import Features from "../navigation/features"
import Footer from "../firstcomponents/footer"
export default function Contact(){
    return(
<div>
<div>

<HContact/>
<SecondSecondC/>
</div>

<div className="mt-5">
    <Features/>

</div>
<div className="mt-5">
    <Footer/>
</div>
</div>
    )
}