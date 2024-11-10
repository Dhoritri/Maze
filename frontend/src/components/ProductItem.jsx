import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-600 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt="product image"
        />
      </div>
      <p className="pt-3 pb-1 text-center text-sm text-[#FFFFFF] ">{name}</p>
      <p className="text-sm text-center font-medium text-[#FFFFFF]">
      
        {price}
        {currency}
      </p>
    </Link>
  );
};
export default ProductItem;
