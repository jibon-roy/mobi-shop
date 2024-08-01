import Card from "../../components/Card";
import Heading from "../../components/Heading";

export default function MostReviw({ data }) {
  const getMostReviewedMobiles = data
    .sort((a, b) => b?.ratings - a?.ratings)
    .splice(0, 8);
  console.log(getMostReviewedMobiles);
  return (
    <div className="w-full my-16 ">
      <div className="mb-16 flex justify-center">
        <Heading heading={"Most Reviewed Mobiles"}>
          Our most reviewed mobile phones are here.
        </Heading>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 justify-center sm:grid-cols-2 lg:grid-cols-4">
          {getMostReviewedMobiles.map((mobile) => (
            <div key={mobile.id}>
              <Card mobile={mobile}></Card>
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
