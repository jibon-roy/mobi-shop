import { useRef } from "react";
import Heading from "../../components/Heading";
import CountUp from "react-countup";

export default function Statistics() {
  const countUpRef1 = useRef(null);
  const countUpRef2 = useRef(null);
  const countUpRef3 = useRef(null);
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://content3.jdmagicbox.com/comp/ernakulam/c5/0484px484.x484.131004102709.k9c5/catalogue/smart-mobile-shop-kakkanad-ernakulam-mobile-phone-dealers-sony-a0996vg6mz.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content my-20 flex-col text-neutral-content text-center">
          <div>
            <Heading heading={"Our Statistics"}>
              Explore our stastistics.
            </Heading>
          </div>
          <div className="max-w-lg">
            <div className="stats stats-vertical md:stats-horizontal shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Products</div>
                <div className="stat-value" ref={countUpRef1}>
                  <CountUp
                    start={0}
                    enableScrollSpy
                    scrollSpyDelay={2}
                    scrollSpyOnce
                    end={978}
                  />
                </div>
                <div className="stat-desc">Adding more products.</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">Our Active Users</div>
                <div className="stat-value text-secondary" ref={countUpRef2}>
                  <CountUp
                    start={3500}
                    enableScrollSpy
                    scrollSpyDelay={2}
                    scrollSpyOnce
                    end={4231}
                  />
                </div>
                <div className="stat-desc text-secondary">↗︎ 48 (3%)</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value" ref={countUpRef3}>
                  <CountUp
                    start={800}
                    enableScrollSpy
                    scrollSpyDelay={2}
                    scrollSpyOnce
                    end={1639}
                  />
                </div>
                <div className="stat-desc">↘︎ 87 (19%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
