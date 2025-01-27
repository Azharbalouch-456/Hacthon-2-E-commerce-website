

import CategoriesAndPosts from "./Icons2"


import Image from "next/image";

export default function Categories() {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-xs bg-white p-6 mt-28 space-y-8 ">
      {/* Search Box */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button className="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
          Q
        </button>
      </div>

      {/* Categories Section */}
      <div className="w-full ">
        <h2 className="font-bold text-2xl mb-4">Categories</h2>
        <div className="flex gap-40">
          {/* Names List */}
          <ul className="space-y-9">
            {categories.map((category) => (
              <li key={category.name} className="text-gray-900">
                {category.name}
              </li>
            ))}
          </ul>

          {/* Counts List */}
          <ul className="space-y-9">
            {categories.map((category) => (
              <li key={category.count} className="text-gray-900">
                {category.count}
              </li>
            ))}
          </ul>
        </div>
      </div>

    
       <div>
       <CategoriesAndPosts />
  
      </div> 
    </div>
  );
}




