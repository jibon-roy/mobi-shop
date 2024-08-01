import Slider from "./Slider";


export default function Banner() {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/8033213.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content my-32 text-neutral-content ">
          <div className="max-w-5xl">
            <div className="hero-content justify-between flex-col lg:flex-row">
              <Slider />    
              <div className="max-w-xl">
                <h1 className="text-5xl text-primary-red font-bold">Shop Your Mobile Now!</h1>
                <p className="py-6">
                Buy Mobile Phone at Lowest Price in Bangladesh. Latest official smartphone, android, feature phone Price & full Specs available at Mobi Shop Online Shop.
                </p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
