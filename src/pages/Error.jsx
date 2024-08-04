import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="text-7xl font-semibold">404</p>
        <p className="mb-10">Page Not Found</p>
        <Link to={"/"}>
          {" "}
          <button className="btn rounded-lg ">Back to home</button>
        </Link>
      </div>
    </div>
  );
}
