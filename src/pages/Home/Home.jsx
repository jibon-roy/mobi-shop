import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MostReviw from "./MostReviw";
import LatestProduct from "./LatestProduct";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Statistics from "./Statistics";

export default function Home() {
  const data = useLoaderData();

  return (
    <>
      <section>
        <Banner />
      </section>

      <section>
        <LatestProduct data={data} />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <Statistics />
      </section>
      <section>
        <FAQ />
      </section>
    </>
  );
}
