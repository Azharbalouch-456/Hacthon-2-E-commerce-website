

import Image from 'next/image';

export default function SecondSection() {
  return (
    <div className="flex flex-col items-center mt-10">
     
      <div className="max-w-4xl">
        
        <div className="relative">
          <Image
            src="/Section/After.png" 
            alt="2"
            width={874}
            height={500}
           
          />
        </div>
       
        <div className="ml-5 flex items-center gap-6 text-gray-500 text-sm mt-4">
          
          <div className="flex items-center space-x-1">
            <Image
              src="/Section/Vector1.png" 
              alt="User Icon"
              width={16}
              height={16}
            />
            <p>Admin</p>
          </div>

         
          <div className="flex items-center space-x-1">
            <Image
              src="/Section/Vector2.png" 
              alt="Calendar Icon"
              width={16}
              height={16}
            />
            <span>14 Oct 2022</span>
          </div>

         
          <div className="flex items-center space-x-1">
            <Image
              src="/Section/Vector3.png"
              alt="Tag Icon"
              width={16}
              height={16}
            />
            <span>Handmore</span>
          </div>
        </div>

       
        <div className="mt-6 ml-5">
          <h2 className="font-medium text-3xl mb-2">
            Exploring new ways of decorating
          </h2>
          <p className="text-black leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium mt-2 block"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
