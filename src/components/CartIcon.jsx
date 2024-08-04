import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ cartValue }) => {
  return (
    <div className="relative flex items-center gap-2">
      <FaCartShopping className="" />
      <span>My Cart</span>
      {cartValue > 0 && (
        <span className="absolute -top-3 -left-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartValue}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
