import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CartCard({ mobile }) {
  const [quantity, setQuantity] = useState(1); // Default quantity

  useEffect(() => {
    // Initialize quantity from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const item = cartItems.find((item) => item.id === mobile.id);
    if (item) setQuantity(item.quantity);
  }, [mobile.id]);

  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleDelete = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter((item) => item.id !== mobile.id);
    updateLocalStorage(cartItems);
    window.location.reload(); // Refresh to update cart display
  };

  const handleQuantityChange = (change) => {
    let newQuantity = quantity + change;
    if (newQuantity < 1) newQuantity = 1; // Prevent quantity from going below 1

    setQuantity(newQuantity);

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = cartItems.findIndex((item) => item.id === mobile.id);

    if (itemIndex >= 0) {
      cartItems[itemIndex].quantity = newQuantity;
    } else {
      cartItems.push({ ...mobile, quantity: newQuantity });
    }

    updateLocalStorage(cartItems);
  };

  return (
    <div>
      <div className="card card-side group h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={mobile?.image}
            className="w-[80%] transform transition duration-300 group-hover:scale-x-[-1]"
            alt="Mobile"
          />
        </figure>
        <div className="card-body p-5">
          <div className="flex justify-between">
            <Link to={`/mobiles/${mobile.id}`}>
              <h2 className="card-title cursor-pointer group-hover:text-primary-red">
                {mobile.name}
              </h2>
            </Link>
            <div className="badge cursor-pointer badge-outline">
              {mobile?.brand}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            <div className="rating cursor-default rating-md rating-half">
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="rating-hidden"
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 0 && mobile.ratings <= 0.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 0.5 && mobile.ratings <= 1 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 1 && mobile.ratings <= 1.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 1.5 && mobile.ratings <= 2 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 2 && mobile.ratings <= 2.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 2.5 && mobile.ratings <= 3 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 3 && mobile.ratings <= 3.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 3.5 && mobile.ratings <= 4 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 4 && mobile.ratings <= 4.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 4.5 && mobile.ratings <= 5 ? true : false
                }
              />
            </div>
            <div>({mobile.ratings})</div>
          </div>
          <p>{mobile?.description.slice(0, 50)}...</p>
          <div className="card-actions justify-between">
            <div className="text-xl font-semibold">${mobile.price}</div>
            <div className="flex items-center">
              <button
                className="btn btn-sm btn-secondary mr-2"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="text-xl font-semibold mx-2">{quantity}</span>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-2 items-center">
            <Link to={`/mobiles/${mobile.id}`}>
              <button className="btn btn-sm">Details</button>
            </Link>
            <button
              className="btn bg-red-500 text-white btn-sm hover:bg-red-600 btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
