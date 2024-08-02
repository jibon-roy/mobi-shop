import { useLoaderData } from "react-router-dom";
import "./mobileDetail.css";
import { Link } from "react-router-dom";
// import Heading from "../../components/Heading";

const MobileDetails = () => {
  const mobile = useLoaderData();

  if (!mobile) {
    return <p className="text-center text-red-500">Mobile not found.</p>;
  }

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
