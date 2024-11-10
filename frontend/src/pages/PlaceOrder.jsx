import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/*  Left side Informaation */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-white rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-white rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-white rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-white rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-white rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-white rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="ZipCode"
            className="border border-white rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-white rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-white rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Paymeent methooddd */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("bkash")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer bg-white"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-black ${
                  method === "bkash" ? "bg-[#292929]" : ""
                }`}
              ></p>
              <img className="h-5 mx-4 " src={assets.bkash_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("nagad")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer bg-white"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-black ${
                  method === "nagad" ? "bg-[#292929]" : ""
                }`}
              ></p>
              <img className="h-5 mx-4 " src={assets.nagad_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer bg-white"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-black ${
                  method === "cod" ? "bg-[#292929]" : ""
                }`}
              ></p>
              <p className={`text-black text-sm font-medium mx-4`}>
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm hover:bg-[#FAB29E] ">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
