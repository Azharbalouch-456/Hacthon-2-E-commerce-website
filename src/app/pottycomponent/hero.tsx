



"use client"; 

import Image from "next/image";
import { useState } from "react";

export default function POHero() {
  const [selectedImage, setSelectedImage] = useState("/4thproduct.png");
  const [quantity, setQuantity] = useState(1);

  const images = ["/4thproduct.png", "/4thproduct.png", "/4thproduct.png", "/4thproduct.png"] // Add your image URLs here

  return (
    <div className="flex w-full gap-8 p-6 ml-14">
      {/* Left Side: Image Display */}
      <div className="flex w-[553px] h-[500px] gap-4">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer border-8  rounded-md ${
                selectedImage === image ? "border-[#F9F1E7]" : "border-[#F9F1E7]"
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Thumbnail-${index}`}
                width={76}
                height={80}
                className="w-[90px] h-[80px]"
              />
            </div>
          ))}
        </div>

        {/* Main Display Image */}
        <div className="border-8 border-[#F9F1E7] border-opacity-100">
          <Image
            src={selectedImage}
            alt="Main-Display"
            width={481}
            height={500}
            className="w-[481px] h-[500px]"
          />
        </div>
      </div>

      {/* Right Side: Product Details */}
      <div className="w-[300px] ml-24">
        <h1 className="text-2xl font-bold">Potty</h1>
        <p className="text-sm text-gray-500">(150 reviews) | <span className="text-green-500">In Stock</span></p>
        <p className="text-xl font-semibold text-gray-800 mt-4">Rs 500,000</p>
        <p className="text-sm text-gray-600 mt-2">minimalist flower post</p>

        {/* Horizontal Line */}
        <hr className="border-t-4 border-gray-300 w-[80%] mt-4" />


        {/* Colors */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">Colours:</p>
          <div className="flex gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-600 cursor-pointer"></div>
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">Size:</p>
          <div className="flex gap-4 mt-2">
            <button className="px-4 py-2 border rounded-md">XS</button>
            <button className="px-4 py-2 border rounded-md">L</button>
            <button className="px-4 py-2 border rounded-md">XL</button>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">Quantity:</p>
          <div className="flex items-center mt-2">
            <button
              className="px-4 py-2 border"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <p className="px-4">{quantity}</p>
            <button
              className="px-4 py-2 border"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-6 px-4 py-2 bg-green-500 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
