
import FirstProducts from "./firstproducts";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "2,500,000",
    image: "/one.png",
    discount: -30,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "2nd Stylish cafe chair",
    price: "2,500,000",
    image: "/tw.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "7,000,000",
    image: "/two.png",
    discount: -50,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500,000",
    image: "/three.png",
    isNew: "New",
  },
];

export default function Products1() {
  return (
    <div>
      <div className="w-[300] h-[48] font-bold text-3xl place-items-center justify-center m-5">
        <h1>Our Products</h1>
      </div>
      <div className="flex overflow-x-auto gap-10 p-4 ml-7">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/${product.name}`} // Navigate to dynamic product-specific page
            passHref
          >
            <div className="cursor-pointer">
              <FirstProducts product={product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
