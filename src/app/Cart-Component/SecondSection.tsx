
import Image from "next/image"

export default function Cart1() {
  return (
    <div className=" ">
      <div className="H ml-24 flex gap-11"> 
      {/* Header */}
      <ul className="  bg-[#F9F1E7] text-black font-medium flex py-4 justify-around  w-[817px] h-[55px]">
        <li className="ml-9">Product</li>
        <li className="ml-20">Price</li>
        <li className="ml-48">Quantity</li>
        <li className="ml-24">SubTotal</li>
        <li></li>
      </ul>

      <img
            src="/Section/Total.png"
            alt=" No-Delete-icon"
            className="w-[340px] h-[360px] mr-8"
          />
      </div>

      <div className="ml-28 relative -mt-72">
        <div className="flex items-center gap-16">
          <Image
            src="/Section/Sofa.webp" 
            alt=" No-Asgaard-sofa"
            className="w-[108px] h-[105px] object-cover "
          />
          <span className="text-gray-700">Asgaard sofa</span>
          <p>Rs. 250,000.00</p>
          <p>1</p>
          <p>Rs. 250,000.00</p>

          <img
            src="/Section/Delete.png" 
            alt=" No-Delete-icon"
            className="w-[28px] h-[28px]"
          />
        </div>

          <div/>
        </div>
      </div>
   
    
  );
}


