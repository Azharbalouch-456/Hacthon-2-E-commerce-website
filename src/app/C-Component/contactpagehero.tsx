






const Hero1 = () => {
  return (
    <div className="relative w-full h-[336px]">
     
      <img
        src="/hero3.png" 
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold text-black mb-3">Contact</h1>
        <nav className="text-sm font-medium text-black">
          <ol className="list-reset flex space-x-2 font-semibold text-2xl">
            <li>
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <span className="text-black">{">"}</span>
            </li>
            <li className="text-gray-400 font-light">
              <span>contact</span>
            </li>
          </ol>
        </nav>
      </div>

    </div>
  );
};

export default Hero1;
