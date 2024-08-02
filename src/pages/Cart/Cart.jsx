import { useLoaderData } from "react-router-dom";
import CartCard from "../../components/CartCard";
import Heading from "../../components/Heading";

export default function Cart() {
  const data = useLoaderData();
  //   console.log(data);

  return (
    <div className="container">
      <div className="flex  justify-center my-10">
        <Heading heading={"My Carts"}>Added items on cart.</Heading>
      </div>
      <div className="mb-20">
        {!data ? (
          <div className="flex flex-1 justify-center">No items added.</div>
        ) : (
          data.map((mobile) => (
            <div className="my-4 mx-auto max-w-2xl" key={mobile.id}>
              <CartCard mobile={mobile}></CartCard>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
