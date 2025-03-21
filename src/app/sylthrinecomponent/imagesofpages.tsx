import Image from 'next/image';

interface Product {
    
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    discount?: number,
    isNew?: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }
  
  export default function Related({ product }: ProductCardProps) {
    return (

          <div>
          
      <div className=" relative group overflow-hidden shadow-md ">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={285}
          height={446}
          className="w-[285] h-[446]"
        />
  
  {/* Discount Badge */}
  {product.discount && (
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {`${product.discount}% OFF`}
        </div>
      )}

      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          New
        </div>
      )}

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-blue-500 font-bold">{`Rp ${product.price}`}</p>
        </div>
  
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
         <button className="bg-yellow-500 text-white py-2 px-4 rounded-md mb-2">
           Add to cart
         </button>
         <div className="flex space-x-4 text-white">
           <button>Share</button>
           <button>Compare</button>
           <button>Like</button>
         </div>
       </div>  
        </div>
       </div>
    
    );
  }
  