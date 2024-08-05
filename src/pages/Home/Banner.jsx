import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useState } from "react";
import Button from "../../components/Button";

export default function Banner() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/8033213.jpg)",
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="my-32 text-neutral-content ">
          <div className="container">
            <div className="flex w-full gap-10 justify-around items-center flex-col lg:flex-row">
              <div>
                <Slider />
                <Link to={`/mobiles?search=${searchValue}`}>
                  <Button className="btn btn-secondary">
                    Explore Mobiles {">>"}
                  </Button>
                </Link>
              </div>
              <div className="max-w-xl">
                <h1 className="text-5xl text-primary-red font-bold">
                  Shop Your Mobile Now!
                </h1>
                <p className="py-6">
                  Buy Mobile Phone at Lowest Price in Bangladesh. Latest
                  official smartphone, android, feature phone Price & full Specs
                  available at Mobi Shop Online Shop. We offer a wide selection
                  of devices from top brands, ensuring you find the perfect
                  phone to meet your needs.
                </p>

                <div className="flex mt-5 items-center">
                  <input
                    type="text"
                    id="mainSearch"
                    onChange={handleSearch}
                    name="mainSearch"
                    placeholder="Search Mobiles"
                    autoComplete="search"
                    className="input w-[80px] min-[240px]:w-[120px] min-[300px]:w-[180px] min-[380px]:w-[40%] text-black appearance-none leading-tight focus:outline-none focus:shadow-outline input-bordered rounded-r-none"
                  />
                  <Link to={`/mobiles?search=${searchValue}`}>
                    <button className="btn btn-secondary rounded-l-none">
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
