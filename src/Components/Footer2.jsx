import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer2 = () => {
  return (
    <footer className="bg-sky-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {/* Column 1 */}
        <div className="footer-column mx-4">
          <h4 className="text-xl font-semibold mb-4">Help</h4>
          <ul className="list-disc list-inside">
            <li>Contact Customer service</li>
            <li>Scorecard</li>
            <li>Product availability</li>
            <li>Recalls</li>
            <li>Return policy</li>
            <li>Shipping Rates</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="footer-column mx-4">
          <h4 className="text-xl font-semibold mb-4">Company</h4>
          <ul className="list-disc list-inside">
            <li>About us</li>
            <li>Affiliate Program</li>
            <li>Careers</li>
            <li>Gift Shop</li>
            <li>Group Sales</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="footer-column mx-4">
          <h4 className="text-xl font-semibold mb-4">My Account</h4>
          <ul className="list-disc list-inside">
            <li>Your Account</li>
            <li>Information</li>
            <li>Addresses</li>
            <li>Orders History</li>
            <li>Delivery Information</li>
            <li>Search terms</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="footer-column mx-4">
          <h4 className="text-xl font-semibold mb-4">Informations</h4>
          <ul className="list-disc list-inside">
            <li>Terms and conditions</li>
            <li>About us</li>
            <li>Sitemap</li>
            <li>Contact</li>
            <li>Return Policy</li>
            <li>Suppliers</li>
          </ul>
        </div>
        {/* Form */}
        <div className="footer-column mx-4">
          <h4 className="text-xl font-semibold mb-4">Sale News</h4>
          <p className="text-sm">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form className="mt-4">
            <input type="text" className="bg-white border border-gray-300 py-2 px-4 rounded-md w-full mb-4" placeholder="Sign up for our Newspaper!" style={{ maxWidth: '300px' }} />
            <button type="submit" className="bg-sky-600 text-white py-2 px-4 rounded-md flex items-center justify-center w-full mb-4" style={{ maxWidth: '300px' }}>
              <MdEmail className="mr-2" /> Subscribe
            </button>
          </form>
          <div className="flex items-center">
            <h4 className="text-xl font-semibold mr-4">Follow us</h4>
            <FaFacebookF className="text-white text-2xl mr-4" />
            <FaYoutube className="text-white text-2xl mr-4" />
            <FaTwitter className="text-white text-2xl mr-4" />
            <FaLinkedinIn className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

