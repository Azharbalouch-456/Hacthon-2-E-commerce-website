



import Image from "next/image";
import React from "react";

 function SecondSectionC () {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">Get In Touch With Us</h1>
      <p className="text-center text-gray-600 mb-10">
        For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. <br />
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Information */}
        <div className="flex-1 space-y-8">
          <div className="flex items-start">
            <span className="text-2xl text-blue-500 mr-4">
              <Image src="/Section/map.png" alt="" 
              width={28}
              height={23}
              />

            </span>
            <div>
              <h2 className="font-bold">Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-2xl text-blue-500 mr-4">

            <Image src="/Section/phone.png" alt="" 
              width={28}
              height={23}
              />

            </span>
            <div>
              <h2 className="font-bold">Phone</h2>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-2xl text-blue-500 mr-4 ">

            <Image src="/Section/watch.png" alt="" 
              width={28}
              height={23}
              />

            </span>
            <div>
              <h2 className="font-bold">Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

<div>
  <label htmlFor="message" className="block font-medium mb-2">Message</label>
  <textarea
    id="message"
    placeholder="Let's talk about..."
    rows={4} // Corrected to a number
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  ></textarea>
</div>

            <button
              type="submit"
              className="Send"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionC;

