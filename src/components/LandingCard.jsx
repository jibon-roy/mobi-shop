export default function LandingCard({ mobile }) {
  const description = mobile?.description;
  const words = description.slice(0, 50);
  return (
    <div>
      <div className="card card-side h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={mobile?.image}
            className="w-[80%] transform transition duration-300 group-hover:scale-x-[-1]"
            alt="Mobile"
          />
        </figure>
        <div className="card-body p-5">
          <div className="flex justify-between">
            <h2 className="card-title cursor-pointer group-hover:text-primary-red">
              {mobile.name}
            </h2>
            <div className="badge cursor-pointer badge-outline">
              {mobile?.brand}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            <div className="rating cursor-default rating-md rating-half">
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="rating-hidden"
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 0 && mobile.ratings <= 0.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 0.5 && mobile.ratings <= 1 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 1 && mobile.ratings <= 1.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 1.5 && mobile.ratings <= 2 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 2 && mobile.ratings <= 2.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 2.5 && mobile.ratings <= 3 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 3 && mobile.ratings <= 3.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 3.5 && mobile.ratings <= 4 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-1 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 4 && mobile.ratings <= 4.5 ? true : false
                }
              />
              <input
                type="radio"
                name={`rating-${mobile.id}`}
                className="mask mask-star cursor-default mask-half-2 bg-orange-400"
                disabled
                checked={
                  mobile.ratings >= 4.5 && mobile.ratings <= 5 ? true : false
                }
              />
            </div>
            <div>({mobile.ratings})</div>
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
