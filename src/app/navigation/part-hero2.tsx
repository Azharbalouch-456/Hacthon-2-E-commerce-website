

export default function Part() {
  return (
    <div className=" part w-full py-4 px-8 flex justify-between items-center text-gray-700">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        {/* Filter Button */}
        <button className="flex items-center space-x-2">
          <span className="material-icons">filter_alt</span>
          <span>Filter</span>
        </button>

        {/* Layout Toggle Buttons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <span className="material-icons">grid_view</span>
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-100">
            <span className="material-icons">view_list</span>
          </button>
        </div>

        {/* Results Info */}
        <p>Showing 1–9 of 12 results</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Show Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="text-sm">Show</label>
          <select
            id="show"
            className="border border-gray-300 rounded-md p-2 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm">Sort by</label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md p-2 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
