import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MostReviw from "./MostReviw";
import LatestProduct from "./LatestProduct";

export default function Home() {
  const data = useLoaderData()
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <MostReviw data={data} />
      </section>
      <section>
        <LatestProduct data={data} />
      </section>
    </>
  );
}
