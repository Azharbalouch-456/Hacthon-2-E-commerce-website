







import Related from "./imagesofpages";

const products1 = [
   
  {
    id: 1,
    name: "Grifo",
    description: "Night lamp",
    price: "1.500.000",
    image: "/1stproduct.png",
  

  },
  {
    id: 2,
    name: "muggo",
    description: "small mug",
    price: "2,500,000",
    image: "/2ndproduct.png",
    isNew: "New"
  },
  {
    id: 3,
    name: "Pingky",
    description: "cute bed set",
    price: "7,000,000",
    image: "/3rdproduct.png",
    discount: -50,
  },
  {
    id: 4,
    name: "Potty",
    description: "minimalist flower pot",
    price: "500,000",
    image: "/4thproduct.png",
    isNew: "New"
  },
];

export default function Related2() {
  return (
   
<div>
<div className="w-[300] h-[48] font-bold text-3xl place-items-center justify-center m-8">
        <h1>Related Products</h1>
      </div>
    <div className="flex overflow-x-auto gap-10 p-4 ml-80">
      {products1.map((product) => (
        <Related key={product.id} product={product} />
      ))}
     
      </div>

      <div className="flex items-center justify-center mt-2">
      <button className=" w-[245px] h-[48px] border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-white transition">
        Show More
      </button>
    </div>
    </div>
   
  );
}
