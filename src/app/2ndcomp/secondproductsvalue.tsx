


import SecondProducts from "./secondproducts";
import Link from "next/link";

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
    name: "Muggo",
    description: "Small mug",
    price: "2,500,000",
    image: "/2ndproduct.png",
    isNew: "New",
  },
  {
    id: 3,
    name: "Pingky",
    description: "Cute bed set",
    price: "7,000,000",
    image: "/3rdproduct.png",
    discount: -50,
  },
  {
    id: 4,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "500,000",
    image: "/4thproduct.png",
    isNew: "New",
  },
];

export default function Products2() {
  return (
    <div>
      <div className="flex overflow-x-auto gap-10 p-4 ml-7">
        {products1.map((product) => (
          <Link
            key={product.id}
            href={`/${product.name}`} // Navigate to a dynamic product-specific page
            passHref
          >
            <div className="cursor-pointer">
              <SecondProducts product={product} />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center mt-2">
        <button className="w-[245px] h-[48px] border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
}
