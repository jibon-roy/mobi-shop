import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import "./mobileDetail.css";
import Button from "../../../components/Button";
import Ratings from "../../../components/Ratings";
import Swal from "sweetalert2";

const MobileDetails = () => {
  const mobile = useLoaderData();
  const [quantity, setQuantity] = useState(mobile?.inStock <= 0 ? 0 : 1);

  console.log(mobile.inStock);

  if (!mobile) {
    return <p className="text-center text-red-500">Mobile not found.</p>;
  }

  const incrementQuantity = () => {
    if (mobile?.inStock <= quantity) {
      Swal.fire({
        title: "Opps out of stock!",
        icon: "error",
        confirmButtonColor: "#ff00d3",
      });
    } else setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    if (mobile?.inStock <= 0) {
      Swal.fire({
        title: "Opps out of stock!",
        icon: "error",
        confirmButtonColor: "#ff00d3",
      });
    } else {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const itemIndex = cartItems.findIndex((item) => item.id === mobile.id);

      if (itemIndex >= 0) {
        cartItems[itemIndex].quantity += quantity;
      } else {
        cartItems.push({ id: mobile.id, quantity });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      window.dispatchEvent(new Event("updateCart"));
    }
  };

  return (
    <div className="container">
      <div>
        <div className="breadcrumbs text-2xl font-semibold">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mobiles">Mobiles</Link>
            </li>
            <li>{mobile.name}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center p-6 max-w-4xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src={mobile.image}
            alt={mobile.name}
            className="rounded-lg w-[85%]"
          />
          <div className="mx-auto text-center my-5 text-xl font-medium">
            {mobile.name}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center space-x-2 mt-4">
              <Button
                className="btn-secondary btn-sm"
                onClick={decrementQuantity}
              >
                -
              </Button>
              <input
                type="number"
                value={mobile.inStock == 0 ? 0 : quantity}
                name={`mobile-${mobile.id}`}
                autoComplete="number"
                readOnly
                className="max-w-32 text-center border rounded"
              />
              <Button
                className="btn-secondary btn-sm"
                onClick={incrementQuantity}
              >
                +
              </Button>
            </div>
            <div className="card-actions justify-between mt-4">
              <button className="btn btn-md btn-primary" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {mobile.name}
          </h1>
          <p className="text-xl text-gray-700 mb-4">{mobile.price} USD</p>
          <p className="text-lg text-gray-700 mb-4">{mobile.description}</p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Brand:</strong> {mobile.brand}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Category:</strong> {mobile.category}
          </p>
          <div className="flex items-center mb-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Ratings mobile={mobile} />
            </div>
            <br />
            <div className="text-orange-400 ml-2 text-lg font-semibold">
              {mobile.ratings}
            </div>
            <span className="text-gray-600 ml-2">
              ({mobile.review.count} reviews)
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Specifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Display:</strong> {mobile.specifications.display}
            </li>
            <li>
              <strong>Processor:</strong> {mobile.specifications.processor}
            </li>
            <li>
              <strong>RAM:</strong> {mobile.specifications.ram}
            </li>
            <li>
              <strong>Storage:</strong> {mobile.specifications.storage}
            </li>
            <li>
              <strong>Camera:</strong> {mobile.specifications.camera}
            </li>
            <li>
              <strong>Battery:</strong> {mobile.specifications.battery}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;
