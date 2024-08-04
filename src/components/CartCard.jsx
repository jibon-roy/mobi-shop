import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import Swal from "sweetalert2";

export default function CartCard({ mobile, fetchData }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const item = cartItems.find((item) => item.id === mobile.id);
    if (item) setQuantity(item.quantity);
    setLoading(false);
  }, [mobile.id]);

  const updateLocalStorage = (updatedItems) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleDelete = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter((item) => item.id !== mobile.id);
    updateLocalStorage(cartItems);
    // window.location.reload();
    fetchData();
  };

  const handleQuantityChange = (change) => {
    let newQuantity = quantity + change;
    if (newQuantity < 1) newQuantity = 1;

    if (mobile?.inStock <= quantity) {
      Swal.fire({
        title: "Opps out of stock!",
        icon: "error",
        confirmButtonColor: "#ff00d3",
      });
    } else setQuantity(newQuantity);

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = cartItems.findIndex((item) => item.id === mobile.id);

    if (itemIndex >= 0) {
      cartItems[itemIndex].quantity = newQuantity;
    } else {
      cartItems.push({ ...mobile, quantity: newQuantity });
    }

    updateLocalStorage(cartItems);
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="loading loading-dots"></div>
      </div>
    );
  }

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
            <Ratings mobile={mobile} />
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
