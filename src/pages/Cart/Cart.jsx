import { useEffect, useState } from "react";
import CartCard from "../../components/CartCard";
import Heading from "../../components/Heading";

export default function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCartData() {
    const localItems = localStorage.getItem("cartItems");
    const localItemsJson = JSON.parse(localItems) || [];

    const response = await fetch("/phones.json");
    const mobiles = await response.json();

    const filteredMobiles = mobiles.filter((mobile) =>
      localItemsJson.some((item) => item.id === mobile.id)
    );

    setData(filteredMobiles);
    setLoading(false);
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-80">
        <div className="loading loading-dots"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex justify-center my-10">
        <Heading heading={"My Carts"}>Added items in cart.</Heading>
      </div>
      <div className="mb-20">
        {data.length === 0 ? (
          <div className="flex flex-1 justify-center">No items added.</div>
        ) : (
          data.map((mobile) => (
            <div className="my-4 mx-auto max-w-2xl" key={mobile.id}>
              <CartCard fetchData={fetchCartData} mobile={mobile} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
