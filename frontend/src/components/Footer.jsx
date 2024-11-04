import { assets } from "../assets/assets";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import specific icons

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-28" alt="Maze Logo" />
          <p className="w-full md:w-2/3 text-gray-500">
            Wear Maze & Be Amazed Uniqnuess and Comfort
            Full 100% Organic Cotton 
            High Quality Print & Embroidery 
          </p>
        </div>
        <div>
          <p className="text-white text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li className="transition duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2 ">
              Home
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              About Us
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              Delivery
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 mb-5">
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              +880 01796582064
            </li>
            <li className="transition-transform duration-300 text-[#E6E8E6] hover:text-[#FAB29E] hover:translate-x-2">
              officiallmmaze@gmail.com
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex justify-start space-x-4">
            <a
              href="https://www.facebook.com/mazee.inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.instagram.com/mmaze.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-white py-5 text-sm text-center">
          Copyright 2024@ mazewears.com -All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
