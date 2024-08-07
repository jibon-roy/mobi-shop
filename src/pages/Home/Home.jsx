import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import MostReviw from "./MostReviw";
import LatestProduct from "./LatestProduct";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Statistics from "./Statistics";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
  const data = useLoaderData();
  const { userInfo, userToken, loading, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userInfo) {
      console.log("User Info:", userInfo);
    }
    if (userToken) {
      console.log("User Token:", userToken);
    }
  }, [userInfo, userToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
