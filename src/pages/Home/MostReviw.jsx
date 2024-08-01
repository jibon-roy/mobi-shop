import Card from "../../components/Card";
import Heading from "../../components/Heading";

export default function MostReviw() {

    const arr = [1,2,3,4,5,6,7,8]
  return (
    <div className="w-full my-16 ">
      <div className="mb-16 flex justify-center">
        <Heading heading={"Most Reviewed Mobiles"}>
          Our most reviewed mobile phones are here.
        </Heading>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 gap-x-4 justify-center sm:grid-cols-2 lg:grid-cols-4">
          {arr.map((value, idx) => (
            <div key={idx}>
              <Card></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
