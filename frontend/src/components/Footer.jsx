import { assets } from "../assets/assets";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import specific icons
import { Link } from 'react-router-dom'; // Import Link for routing

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-28" alt="Maze Logo" />
          <p className="w-full md:w-2/3 text-gray-300">
            Discover the Maze, and experience true comfort. <br />
            Crafted from 100% Organic Cotton for a soft, eco-friendly feel. <br />
            Featuring premium-quality prints and embroidery for a sophisticated,
            long-lasting finish.
          </p>
        </div>
        <div>
          <p className="text-white text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li className="transition duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              <Link to="/">Home</Link>
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              <Link to="/orders">Orders</Link>
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              <Link to="/policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 mb-5">
            <li className="transition-transform duration-300 text-[#E6E8E6] ">
              +880 01796582064
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] ">
              officialmazemaze@gmail.com
            </li>
          </ul>
          <div className="flex justify-start space-x-4">
            <a href="https://www.facebook.com/mazee.inc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com/mmaze.official" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <FaInstagram size={20} />
            </a>
            <a href="#twitter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-white py-5 text-sm text-center">
          Copyright 2024 @ mazewears.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
