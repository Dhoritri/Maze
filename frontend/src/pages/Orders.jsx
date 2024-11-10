import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image} className="w-20 sm:w-24" />
              <div>
                <p className="sm:text-base font-bold ">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-white">
                  <p className="text-lg">
                    {item.price}
                    {currency}
                  </p>
                  <p>Quantity:1 </p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-white">24,July,2024 </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Read to Ship</p>
              </div>
              <button className=" px-4 py-2 text-sm font-medium rounded-sm bg-black hover:bg-[#E6E8E6] hover:text-black">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
