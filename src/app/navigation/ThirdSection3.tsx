
import Image from 'next/image';

export default function ThirdSection3() {
  return (
   
    <div className="min-h-screen flex flex-col items-center py-10 mt-1">
      {/* Blog Content Wrapper */}
      <div className="max-w-4xl">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/Section/OFBlog.webp" // Replace with your blog cover image path
            alt="2"
            width={874}
            height={500}
            className=""
          />
        </div>

        {/* Post Details Section */}
        <div className="ml-5 flex items-center gap-6 text-gray-500 text-sm mt-4">
          {/* Admin Icon and Text */}
          <div className="flex items-center space-x-1">
            <Image
              src="/Section/Vector1.png" // Replace with the path to your User icon image
              alt="User Icon"
              width={16}
              height={16}
            />
            <p>Admin</p>
          </div>

          {/* Date Icon and Text */}
          <div className="flex items-center space-x-1">
            <Image
              src="/Section/Vector2.png" // Replace with the path to your Calendar icon image
              alt="Calendar Icon"
              width={16}
              height={16}
            />
            <span>14 Oct 2022</span>
          </div>

          {/* Tag Icon and Text */}
          <div className="flex items-center space-x-1">
            <Image
              src="/Section/Vector3.png" // Replace with the path to your Tag icon image
              alt="Tag Icon"
              width={16}
              height={16}
            />
            <span>Handmore</span>
          </div>
        </div>

        {/* Blog Text Content Section */}
        <div className="mt-6 ml-5">
          <h2 className="font-medium text-3xl mb-2">
          Going all-in with millennial design
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
