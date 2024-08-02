import { useLoaderData } from "react-router-dom";
import "./mobileDetail.css";
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
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>{mobile.name}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center p-6 max-w-4xl mx-auto">
        <div className="w-full md:w-1/2">
          <img src={mobile.image} alt={mobile.name} className="rounded-lg" />
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
            <span className="text-yellow-500 font-bold">{mobile.ratings}</span>
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
