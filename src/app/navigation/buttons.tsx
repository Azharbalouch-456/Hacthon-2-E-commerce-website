




import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">

      <button
        className="w-10 h-9 flex justify-center items-center border bg-yellow-700 rounded-md font-semibold text-white "
        aria-current="page"
      >
        1
      </button>

  
      <button
        className=" Two  w-10 h-8 flex justify-center items-center border text-black rounded-md  hover:bg-yellow-200"
      >
        2
      </button>

      <button
        className=" Three w-10 h-8 flex justify-center items-center text-black rounded-md  hover:bg-yellow-200"
      >
        3
      </button>

 
      <button
        className=" Next w-16 h-8 flex justify-center items-center text-black rounded-md  hover:bg-yellow-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
