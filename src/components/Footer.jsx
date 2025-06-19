import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Shop</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="cart" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Support</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <p className="text-sm mb-2">Get product updates and offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white text-sm rounded-r-md hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-4 pb-4 h-2 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EJ Premium. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
