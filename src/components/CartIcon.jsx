import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ cartValue }) => {
  return (
    <div className="relative flex items-center gap-2">
      <FaCartShopping className="" />
      <span className="lg:hidden">My Cart</span>
      {cartValue > 0 && (
        <span className="absolute -top-4 -left-4 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {cartValue}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
