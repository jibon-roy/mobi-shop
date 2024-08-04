import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import ReactPaginate from "react-paginate";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Mobiles() {
  // const location = useLocation();
  const [searchParams] = useSearchParams();

  const searchKey = searchParams.get("search");
  const data = useLoaderData();

  const [err, setErr] = useState(false);
  const [priceRange, setPriceRange] = useState(1700);
  const [searchMobile, setSearchMobile] = useState(searchKey ? searchKey : "");
  const [searchBrand, setSearchBrand] = useState("");
  const [priceFilt, setPrice] = useState("default");
  const [filteredMobiles, setFilteredMobiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    if (data.length <= 0) {
      setErr(true);
    }

    const search = data?.filter((a) =>
      a?.name.toLowerCase()?.includes(searchMobile.toLowerCase())
    );
    const filterRange = search.filter((a) => a?.price <= priceRange);
    const filterBrand = filterRange.filter((a) =>
      a?.brand.toLowerCase().includes(searchBrand.toLowerCase())
    );
    const priceFilter = filterBrand.sort((a, b) =>
      priceFilt === "LowToHigh"
        ? a?.price - b?.price
        : priceFilt === "HighToLow"
        ? b?.price - a?.price
        : a?.price + b?.price
    );

    setFilteredMobiles(priceFilter);
    setCurrentPage(0);
  }, [data, priceFilt, priceRange, searchBrand, searchMobile]);

  const handleSearchMobile = (e) => {
    const value = e.target.value;
    setSearchMobile(value);
  };
  const setRange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
  };
  const handlePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };
  const handleBrand = (e) => {
    const value = e.target.value;
    setSearchBrand(value);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredMobiles.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredMobiles.length / itemsPerPage);

  return (
    <section className="container">
      <div className="flex justify-center my-10">
        <Heading heading={searchKey ? "Search Results" : "All Mobiles"}>
          {searchKey ? (
            <span>
              Search results for: <strong>{searchKey}</strong>
            </span>
          ) : (
            "View our mobile phone products."
          )}
        </Heading>
      </div>
      <div className="flex flex-col lg:flex-row my-16 gap-4">
        <div className="card mx-auto mb-16 bg-base-100  max-w-96 h-fit shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-semibold justify-center">
              Search or filter
            </h2>
            <p className="italic">Search:</p>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="searchMobile"
                id="searchMobile"
                autoComplete="name"
                className="grow"
                defaultValue={searchKey ? searchKey : ""}
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
            <p className="italic">Price:</p>
            <select
              name="price"
              id="price"
              className="select select-bordered w-full max-w-xs"
              onChange={handlePrice}
            >
              <option value={"default"}>Default</option>
              <option value={"LowToHigh"}>Low to High</option>
              <option value={"HighToLow"}>High to Low</option>
            </select>
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
            <p className="italic">Brand:</p>
            <select
              name="brand"
              id="brand"
              className="select select-bordered w-full max-w-xs"
              onChange={handleBrand}
            >
              <option value={""}>All</option>
              <option value={"Apple"}>Apple</option>
              <option value={"Asus"}>Asus</option>
              <option value={"Huawei"}>Huawei</option>
              <option value={"Lenovo"}>Lenovo</option>
              <option value={"LG"}>LG</option>
              <option value={"Motorola"}>Motorola</option>
              <option value={"Nokia"}>Nokia</option>
              <option value={"OnePlus"}>OnePlus</option>
              <option value={"Oppo"}>Oppo</option>
              <option value={"Pixel"}>Pixel</option>
              <option value={"Realme"}>Realme</option>
              <option value={"Sony"}>Sony</option>
              <option value={"Samsung"}>Samsung</option>
              <option value={"Vivo"}>Vivo</option>
              <option value={"Xiaomi"}>Xiaomi</option>
              <option value={"ZTE"}>ZTE</option>
            </select>
          </div>
        </div>
        {err ? (
          <div className="flex flex-1 justify-center">Data not found.</div>
        ) : (
          <div className="flex flex-1 flex-col items-center">
            <div className="grid grid-cols-1 gap-y-10 mx-auto gap-x-4 justify-center md:grid-cols-2 xl:grid-cols-3">
              {currentItems.length <= 0 ? (
                <div className="flex flex-1 justify-center">
                  Data not found.
                </div>
              ) : (
                currentItems.map((mobile) => (
                  <div key={mobile.id}>
                    <Card mobile={mobile}></Card>
                  </div>
                ))
              )}
            </div>
            {currentItems?.length > 0 && (
              <div className="my-10">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"flex justify-center mt-4 space-x-2"}
                  pageClassName={"border rounded px-3 py-1"}
                  activeClassName={"bg-primary-red text-white"}
                  previousClassName={"border rounded px-3 py-1"}
                  nextClassName={"border rounded px-3 py-1"}
                  disabledClassName={"text-gray-400"}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
