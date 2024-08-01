import Heading from "../../components/Heading";

export default function Statistics() {
  return (
    <div>
      <div
  className="hero"
  style={{
    backgroundImage: "url(https://content3.jdmagicbox.com/comp/ernakulam/c5/0484px484.x484.131004102709.k9c5/catalogue/smart-mobile-shop-kakkanad-ernakulam-mobile-phone-dealers-sony-a0996vg6mz.jpg)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }}>
  <div className="hero-overlay bg-opacity-75"></div>
  <div className="hero-content my-20 flex-col text-neutral-content text-center">
    <div>
    <Heading heading={"Our Statistics"}>Explore our stastistics.</Heading>
    </div>
    <div className="max-w-lg">
      <div className="stats stats-vertical md:stats-horizontal shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Products</div>
          <div className="stat-value">957</div>
          <div className="stat-desc">Adding more products.</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
