
 const G = () => {
    return(
        <div>
<div className="min-h-screen bg-gray-50">
       <div className="w-full bg-white py-8 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800">Shop</h1>
           <p className="text-gray-500">Home &gt; Shop</p>
         </div>
      </div>

       <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center space-x-2">
            <button className="text-gray-700">
               <i className="fas fa-filter"></i> Filter
             </button>
             <button className="text-gray-700">
               <i className="fas fa-bars"></i>
             </button>
           </div>
           <p className="text-gray-500">Showing 1–16 of 62 results</p>
           <div className="flex items-center space-x-4">
             <span>Show</span>
             <select className="border-gray-300 rounded-md">
               <option value="16">16</option>
               <option value="32">32</option>
               <option value="64">64</option>
             </select>
             <span>Short by</span>
             <select className="border-gray-300 rounded-md">
               <option value="default">Default</option>
               <option value="price">Price</option>
               <option value="popularity">Popularity</option>
             </select>
           </div>
         </div>
       </div>
     </div>
     </div>

        
    )
}

export default G