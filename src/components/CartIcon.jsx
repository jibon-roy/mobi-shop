import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ cartValue }) => {
  return (
    <div className="relative">
      <FaCartShopping className="text-2xl" />
      {cartValue > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartValue}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
