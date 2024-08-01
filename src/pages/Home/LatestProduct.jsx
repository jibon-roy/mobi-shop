// import Card from "../../components/Card";
import Heading from "../../components/Heading";
import LandingCard from "../../components/LandingCard";


export default function LatestProduct({data}) {
    const latestProducts = data.splice(0, 6);
    // .sort((a, b) => b?.ratings - a?.ratings)

  console.log(latestProducts);
  return (
    <div className="w-full my-16 ">
      <div className="mb-16 flex justify-center">
        <Heading heading={"Latest Products"}>
          Our latest mobile phones are here.
        </Heading>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {latestProducts.map((mobile) => (
            <div key={mobile.id} className="flex">
              <LandingCard mobile={mobile}></LandingCard>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
