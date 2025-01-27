
import Image from "next/image"

 export default function Third (){
    return(
        <div className="place-items-center justify-center m-4 w-[1750] h-[750] ">

<div className=" text-[#616161] font-semibold ">

<p>Share your setup with</p>

</div>
<h1 className="font-bold text-3xl">#FuniroFurniture</h1>

<div>
        <Image
          src="/last.png"
          alt="No-lastimage"
          width={1799}
          height={721}
          className="rounded-lg"
        />
      </div>  </div>
    )
}