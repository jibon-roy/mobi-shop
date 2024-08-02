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
  const [filteredMobiles, setFilteredMobiles] = useState();

  useEffect(() => {
    fetch("./phones.json")
      .then((data) => data.json())
      .then((mobileData) => setMobiles(mobileData))
      .catch((err) => setErr(err));

    const filterRange = mobiles.filter((a) => a.price <= priceRange);
    setFilteredMobiles(filterRange);
  }, [mobiles, priceRange]);

  // console.log(mobiles);
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
        <div className="card bg-base-100 w-96 h-fit shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold justify-center">
              Search or filter
            </h2>
            {/* price range */}
            <p className="font-semibold">Price range: ${priceRange}</p>
            <input
              type="range"
              min={0}
              max="2000"
              defaultValue={priceRange}
              onChange={setRange}
              className="range range-xs range-secondary"
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
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
