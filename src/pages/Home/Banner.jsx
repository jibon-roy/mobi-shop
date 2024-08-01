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
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
