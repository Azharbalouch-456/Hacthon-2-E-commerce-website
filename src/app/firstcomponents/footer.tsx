
export default function Footer() {
  return (
    <div className="border-t border-gray-300">
    <footer className="bg-white  mx-auto flex flex-col justify-between py-24">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">Funiro.</h2>
            <address className="text-gray-500 mt-4">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

         
          <div>
            <h3 className="text-md font-semibold text-gray-400 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-gray-900">Home</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-900">Shop</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-md font-semibold text-gray-400 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black hover:text-gray-900">Payment Options</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-900">Returns</a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-900">Privacy Policies</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-md font-semibold text-gray-400 mb-4">Newsletter</h3>
            <div className="flex gap-2 ">
<p className=" inline-block border-b border-gray-300 pb-1 text-gray-400" >Enter your password</p>

<p className="inline-block border-b border-gray-300 pb-1">Subscribe</p>

            </div>
          
              {/* </button>
            </form> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      {/* <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
        &copy; 2023 Funiro. All rights reserved
      </div> */}
    </footer>
      <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-12">
        &copy; 2023 Funiro. All rights reserved
      </div> 
    </div>
  );
}
