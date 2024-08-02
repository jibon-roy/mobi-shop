// import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card";

export default function Mobiles() {
  // const data = useLoaderData();

  const [mobiles, setMobiles] = useState([]);
  const [err, setErr] = useState();
  const [priceRange, setPriceRange] = useState(1700);
  const [searchMobile, setSearchMobile] = useState("");
  const [filteredMobiles, setFilteredMobiles] = useState();

  useEffect(() => {
    fetch("./phones.json")
      .then((data) => data.json())
      .then((mobileData) => setMobiles(mobileData))
      .catch((err) => setErr(err));

    const search = mobiles.filter((a) =>
      a.name.toLowerCase().includes(searchMobile.toLowerCase())
    );
    const filterRange = search.filter((a) => a.price <= priceRange);
    setFilteredMobiles(filterRange);
  }, [mobiles, priceRange, searchMobile]);

  // console.log(mobiles);

  const handleSearchMobile = (e) => {
    const value = e.target.value;
    setSearchMobile(value);
  };
  const setRange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
  };

  return (
    <section className="container">
      <div className="flex justify-center my-10">
        <Heading heading={"All Mobiles"}>
          View our all mobile phone products.
        </Heading>
      </div>
      <div className="flex flex-col sm:flex-row my-16 gap-4">
        <div className="card bg-base-100 max-w-96 h-fit shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold justify-center">
              Search or filter
            </h2>
            {/* Search */}
            <p className="italic">Search:</p>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="searchMobile"
                id="searchMobile"
                autoComplete="name"
                className="grow"
                placeholder="Search Keyword"
                onChange={handleSearchMobile}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            {/* price low to high */}
            <p className="italic">Price:</p>
            <select className="select select-bordered w-full max-w-xs">
              <option>Default</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            {/* price range */}
            <div className="flex justify-between w-full">
              <p className="italic">Price Range:</p>
              <p className="font-semibold text-end">${priceRange}</p>
            </div>
            <input
              type="range"
              min={0}
              max="2000"
              defaultValue={priceRange}
              onChange={setRange}
              className="range range-xs range-secondary"
            />
            {/* brand */}
            <p className="italic">Brand:</p>
            <select className="select select-bordered w-full max-w-xs">
              <option>All</option>
              <option>Java</option>
              <option>Go</option>
              <option>C</option>
              <option>C#</option>
              <option>C++</option>
              <option>Rust</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </div>
        </div>
        {err ? (
          <div className="flex flex-1 justify-center">Data not found.</div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 mx-auto gap-x-4 justify-center lg:grid-cols-2 xl:grid-cols-3">
            {filteredMobiles?.length <= 0 ? (
              <div className="flex flex-1 justify-center">Data not found.</div>
            ) : (
              filteredMobiles?.map((mobile) => (
                <div key={mobile.id}>
                  <Card mobile={mobile}></Card>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
