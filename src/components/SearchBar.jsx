import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchBar({ id }) {
  const [allMobiles, setAllMobiles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const navigate = useNavigate();
  // const link = useLocation

  useEffect(() => {
    if (allMobiles.length === 0) {
      fetch("./phones.json")
        .then((data) => data.json())
        .then((mobiles) => setAllMobiles(mobiles));
    }
  }, [allMobiles]);

  useEffect(() => {
    if (searchText.length > 0) {
      const searchedMobiles = allMobiles.filter((key) =>
        key.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchData(searchedMobiles);
    } else {
      setSearchData([]);
    }
  }, [allMobiles, searchText]);

  useEffect(() => {
    if (searchData.length > 5) {
      setFinalData(searchData.slice(0, 5));
    } else {
      setFinalData(searchData);
    }
  }, [searchData]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/mobiles?search=${searchText}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="relative z-50 flex w-full group justify-center">
        <input
          id={id ? id : "navSearch"}
          name="navSearch"
          autoComplete="search"
          required
          type="text"
          onChange={handleSearch}
          placeholder="Search Product"
          className="input font-normal flex-1 rounded-md input-sm w-full text-black appearance-none leading-tight focus:outline-none focus:shadow-outline input-bordered rounded-r-none"
        />

        <button
          type="submit"
          className="bg-primary-red border-l-0 transition-all text-white border border-border active:bg-[#ef00d3] rounded-r-md rounded-l-none btn-sm"
        >
          <FaMagnifyingGlass />
        </button>

        <div
          className={
            "lg:w-96 hidden border group-hover:block group-focus-within:block group-focus:block group-active:block group-focus-visible:block bg-white z-50 absolute translate-y-[102%] rounded-md bottom-0 left-0 max-h-80 overflow-auto"
          }
        >
          {finalData.map((mobile, index) => (
            <Link
              to={`/mobiles/${mobile.id}`}
              key={index}
              className="flex items-center p-4 border-b border-gray-200"
            >
              <img
                src={mobile.image}
                alt={mobile.name}
                className="w-10 object-cover mr-4"
              />
              <div>
                <div className="text-lg font-semibold">{mobile.name}</div>
                <div className="text-primary-red">${mobile.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </form>
  );
}
