// import Card from "../../components/Card";
import Heading from "../../components/Heading";
import LandingCard from "../../components/LandingCard";

export default function LatestProduct({ data }) {
  const latestProducts = data.splice(0, 6);
  // .sort((a, b) => b?.ratings - a?.ratings)

  // console.log(latestProducts);
  return (
    <div className="w-full py-16 bg-base-200">
      <div className="mb-16 flex justify-center">
        <Heading heading={"Latest Products"}>
          Our latest mobile phones are here.
        </Heading>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 justify-center  lg:grid-cols-3">
          {latestProducts.map((mobile) => (
            <div key={mobile.id} className="flex justify-center">
              <LandingCard mobile={mobile}></LandingCard>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
        <button className="btn btn-secondary">See more {">"}</button>
      </div>
    </div>
  );
}
