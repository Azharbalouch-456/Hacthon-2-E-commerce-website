
import Image from "next/image";

export default function RecentPosts() {
  const posts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/Section/First.webp",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/Section/Second.webp",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
      image: "/Section/Third.webp",
    },
    {
      title: "Modern home in Milan",
      date: "03 Aug 2022",
      image: "/Section/Four4.webp",
    },
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/Section/Fifth.webp",
    },
    
  ];

  return (
    <div className="w-[393px] h-[560px] bg-white p-6 rounded-lg shadow-md overflow-auto ml-11">
      {/* Title */}
      <h2 className="font-bold text-2xl mb-6">Recent Posts</h2>
      
      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-4 items-center">
            {/* Post Image */}
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={80}
              className="rounded object-cover"
            />
            {/* Post Details */}
            <div>
              <p className="text-gray-700 text-sm font-medium leading-tight">
                {post.title}
              </p>
              <p className="text-gray-500 text-xs mt-1">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
