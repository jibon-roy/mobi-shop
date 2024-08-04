import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar({ id }) {
  return (
    <div className="flex w-full justify-center">
      <input
        id={id ? id : "navSearch"}
        name="navSearch"
        autoComplete="search"
        type="text"
        placeholder="Search Product"
        className="input font-normal flex-1  rounded-md input-sm w-full text-black appearance-none leading-tight focus:outline-none focus:shadow-outline input-bordered rounded-r-none"
      />
      <button className="bg-primary-red border-l-0 transition-all text-white border border-border active:bg-[#ef00d3] rounded-r-md rounded-l-none btn-sm">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}
