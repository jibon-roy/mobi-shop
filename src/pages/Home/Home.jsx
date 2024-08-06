import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MostReviw from "./MostReviw";
import LatestProduct from "./LatestProduct";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Statistics from "./Statistics";
import useBackendUri from "../../utils/hooks/useBackendUri";

export default function Home() {
  const data = useLoaderData();
  const backend = useBackendUri();
  console.log(backend);
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
