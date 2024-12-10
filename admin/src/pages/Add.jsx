import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4 bg-[#191919] p-6 rounded-lg "
    >
      <div className="w-full">
        <p className="mb-2 text-white font-medium">Upload Images</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[image1, image2, image3, image4].map((image, idx) => (
            <label
              key={idx}
              htmlFor={`image${idx + 1}`}
              className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-500 rounded-lg p-4 hover:border-[#2c78cf] transition duration-200"
            >
              <img
                className="w-full object-fit"
                src={
                  !image
                    ? assets.upload_area
                    : URL.createObjectURL(image)
                }
                alt=""
              />
              <input
                onChange={(e) =>
                  [
                    setImage1,
                    setImage2,
                    setImage3,
                    setImage4,
                  ][idx](e.target.files[0])
                }
                type="file"
                id={`image${idx + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-white mb-2 font-medium">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-[#2c78cf] outline-none"
          type="text"
          placeholder="Type Here"
          required
        />
      </div>
      <div className="w-full">
        <p className="text-white mb-2 font-medium">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-[#2c78cf] outline-none"
          placeholder="Give Description"
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div>
          <p className="text-white mb-2 font-medium">Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-[#2c78cf] outline-none"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="text-white mb-2 font-medium">Sub-Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-[#2c78cf] outline-none"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="text-white mb-2 font-medium">Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-[#2c78cf] outline-none"
            type="number"
            placeholder="Enter Price"
            required
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-white mb-2 font-medium">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`px-4 py-2 rounded-md cursor-pointer ${
                sizes.includes(size)
                  ? "bg-[#2c78cf] text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="cursor-pointer"
        />
        <label
          htmlFor="bestseller"
          className="cursor-pointer text-white font-medium"
        >
          Add to Bestseller
        </label>
      </div>
      <button
        type="submit"
        className="px-6 py-3 mt-4 bg-[#2c78cf] text-black font-bold rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
