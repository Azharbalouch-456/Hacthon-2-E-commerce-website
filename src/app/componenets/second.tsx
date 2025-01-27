
import Image from "next/image"


 export default function Second(){
    
    return(
        <div className="w-[1183] h-[685] place-items-center justify-center m-8">
<div className=" w-[300] h-[48] font-bold text-3xl ">
<h1>Browse The Range</h1>
</div>


<div className=" w-[559] h-[28.71] text-[#666666]">

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

</div>

<div className=" place-items-center justify-center flex gap-3 m-5">

<div className=" place-items-center justify-center">
<Image src="/First.png" alt="NO First" width={381} height={480}
className="w-[381] h-[480]"
/>
<p className="m-2">Dining</p>
</div>

<div className=" place-items-center justify-center">
<Image src="/Second.png" alt="No Second"
width={381} height={480}
className="w-[381] h-[480]"
/>
<p className="m-2">Living</p>
</div>

<div className=" place-items-center justify-center">
<Image src="/third.png" alt="NO third"
width={381} height={480}
className="w-[381] h-[480]"
/>
<p className="m-2">Bedroom</p>
</div>

</div>
        </div>
    )
}