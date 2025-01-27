



export default function HeroSection() {
  return (
    <div className="relative h-screen ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Ai.jfif" // Update this with your image path
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Overlay */}
      <div className="absolute top-1/3 left-1/2 bg-[#FAF3E0] p-7 rounded-lg shadow-md max-w-md line-height: 2.5rem;">
      {/* <div className="absolute top-1/3 left-1/2 bg-[#FAF3E0] p-7 rounded-lg shadow-md w-[700px] h-[500px] transform -translate-x-1/2 -translate-y-1/2"> */}
        <p className="text-sm font-semibold text-gray-500">New Arrival</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-800">Discover Our New Collection</h1>
        <p className="mt-4 text-gray-600 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-6 py-2 bg-[#B6862E] text-white rounded hover:bg-[#A37425] transition">
          BUY NOW
        </button>
      </div>

     
      
    </div>
  );
}




