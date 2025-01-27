


"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-[1440] h-[100px] flex justify-between items-center bg-white text-black px-12 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={32}
          className="object-contain"
        />
        <p className="text-2xl font-bold">Furniro</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? ""
                : "text-black hover:text-gray-700"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="shop"
            className={
              pathname === "shop"
                ? "text-blue-500 font-bold"
                : "text-black hover:text-gray-700"
            }
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/Blog"
            className={
              pathname === "/blog"
                ? "text-blue-500 font-bold"
                : "text-black hover:text-gray-700"
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-blue-500 font-bold"
                : "text-black hover:text-gray-700"
            }
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex space-x-6 ">
        <Image
          src="/face.png"
          alt="User"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <Image
          src="/heart.png"
          alt="Wishlist"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <Image
          src="/search.png"
          alt="Search"
          width={22}
          height={22}
          className="cursor-pointer"
        />
         <Link href="/Cart">
          <Image
            src="/shopping.png"
            alt="Cart"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
