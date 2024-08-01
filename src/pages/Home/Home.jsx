import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MostReviw from "./MostReviw";

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
    </>
  );
}
