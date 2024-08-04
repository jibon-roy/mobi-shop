import Ratings from "./Ratings";

export default function LandingCard({ mobile }) {
  const description = mobile?.description;
  const words = description.slice(0, 50);
  return (
    <div>
      <div className="card flex-wrap min-[320px]:flex-nowrap pt-4 justify-center min-[320px]:p-2 card-side h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={mobile?.image}
            className="w-[80%] transform transition duration-300 group-hover:scale-x-[-1]"
            alt="Mobile"
          />
        </figure>
        <div className="card-body p-3">
          <div className="flex justify-between">
            <h2 className="card-title text-base sm:text-md cursor-pointer group-hover:text-primary-red">
              {mobile.name}
            </h2>
            <div className="badge cursor-pointer badge-outline">
              {mobile?.brand}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            <Ratings mobile={mobile} className={"rating-sm"} />
            <div className="text-sm">({mobile.ratings})</div>
          </div>
          <p>{words}...</p>
          <div className="card-actions justify-between">
            <div className="text-xl font-semibold">${mobile.price}</div>
            <button className="btn btn-sm btn-secondary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
