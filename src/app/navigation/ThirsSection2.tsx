











import ProductCard from "../2ndcomp/firstproducts";

const products3 = [
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
    isNew: "New"
  },
];

export default function Products3() {
  return (
    <div>
      
    <div className="flex overflow-x-auto gap-10 p-4 ml-24">
      {products3.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}
