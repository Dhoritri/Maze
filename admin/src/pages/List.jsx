import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="min-h-screen bg-[#191919] px-6 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">All Products</h1>
      <div className="flex flex-col gap-4">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gray-600 text-gray-300 font-semibold rounded-lg shadow-md">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-3 px-4 bg-[#000000] text-gray-300 rounded-lg shadow-md"
            key={index}
          >
            <img className="w-32 h-32 object-cover rounded-md" src={item.image[0]} alt={item.name} />
            <p className="font-medium">{item.name}</p>
            <p className="text-sm">{item.category}</p>
            <p className="font-semibold">
              {item.price}
              {currency}
            </p>
            <button
              onClick={() => removeProduct(item._id)}
              className="text-red-500 font-bold hover:text-red-700 transition duration-200 text-right md:text-center"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
