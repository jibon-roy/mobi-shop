import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import "./mobileDetail.css";

const MobileDetails = () => {
  const mobile = useLoaderData();
  const [quantity, setQuantity] = useState(1); // Initialize the quantity state

  if (!mobile) {
    return <p className="text-center text-red-500">Mobile not found.</p>;
  }

  // Handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decrementing the quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Handle adding to cart and storing the mobile ID and quantity in local storage
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = cartItems.findIndex((item) => item.id === mobile.id);

    if (itemIndex >= 0) {
      cartItems[itemIndex].quantity += quantity;
    } else {
      cartItems.push({ id: mobile.id, quantity });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
              <button
                className="btn btn-sm btn-secondary"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                name={`mobile-${mobile.id}`}
                autoComplete="number"
                readOnly
                className="max-w-32 text-center border rounded"
              />
              <button
                className="btn btn-sm btn-secondary"
                onClick={incrementQuantity}
              >
                +
              </button>
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
            <div className="flex flex-wrap gap-2 ">
              <div className="rating cursor-default rating-md rating-half">
                {/* Rating inputs */}
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
                    mobile.ratings > 2.5 && mobile.ratings <= 3 ? true : false
                  }
                />
                <input
                  type="radio"
                  name={`rating-${mobile.id}`}
                  className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                  disabled
                  checked={
                    mobile.ratings > 3 && mobile.ratings <= 3.5 ? true : false
                  }
                />
                <input
                  type="radio"
                  name={`rating-${mobile.id}`}
                  className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                  disabled
                  checked={
                    mobile.ratings > 3.5 && mobile.ratings <= 4 ? true : false
                  }
                />
                <input
                  type="radio"
                  name={`rating-${mobile.id}`}
                  className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                  disabled
                  checked={
                    mobile.ratings > 4 && mobile.ratings <= 4.5 ? true : false
                  }
                />
                <input
                  type="radio"
                  name={`rating-${mobile.id}`}
                  className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                  disabled
                  checked={
                    mobile.ratings > 4.5 && mobile.ratings <= 5 ? true : false
                  }
                />
              </div>
            </div>
            <br />
            <div className="text-orange-400 ml-2 font-bold">
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
