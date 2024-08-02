import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ cartValue }) => {
  return (
    <div className="relative w-12 h-12">
      <FaCartShopping className="text-2xl" />
      {cartValue > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartValue}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
