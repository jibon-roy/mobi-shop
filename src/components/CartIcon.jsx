const CartIcon = ({ cartValue }) => {
  return (
    <div className="relative w-12 h-12">
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h10M5.4 5h13.2M12 13V21m0-8l-2 8m2-8l2 8m6-8h1a1 1 0 010 2h-1a1 1 0 010-2zM5 21h14M9 21h6"
        />
      </svg>
      {cartValue > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartValue}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
