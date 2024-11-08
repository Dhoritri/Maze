import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <>
      {" "}
      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 w-1/2 mx-auto" />{" "}
      {/* Adjust the color and margins as needed */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-500">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold text-[18px] text-white ">Exchange Policy</p>
          <p className=" text-gray-200">We Offer No pera exchange policy</p>
        </div>
        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold text-[18px] text-white ">7 Days Return Policy</p>
          <p className="text-gray-200">We Provide 7 Days free return policy</p>
        </div>
        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold text-[18px] text-white ">Best Customer Support</p>
          <p className="text-gray-200">We Provide 24/7 customer Support</p>
        </div>
      </div>
    </>
  );
};
export default OurPolicy;
