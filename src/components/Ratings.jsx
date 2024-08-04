export default function Ratings({ mobile, className }) {
  return (
    <div
      className={`rating cursor-default ${
        className ? className : "rating-md"
      }  rating-half`}
    >
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
        checked={mobile.ratings >= 0 && mobile.ratings <= 0.5 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-2 bg-orange-400"
        disabled
        checked={mobile.ratings >= 0.5 && mobile.ratings <= 1 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-1 bg-orange-400"
        disabled
        checked={mobile.ratings >= 1 && mobile.ratings <= 1.5 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-2 bg-orange-400"
        disabled
        checked={mobile.ratings >= 1.5 && mobile.ratings <= 2 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-1 bg-orange-400"
        disabled
        checked={mobile.ratings >= 2 && mobile.ratings <= 2.5 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-2 bg-orange-400"
        disabled
        checked={mobile.ratings > 2.5 && mobile.ratings <= 3 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-1 bg-orange-400"
        disabled
        checked={mobile.ratings > 3 && mobile.ratings <= 3.5 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-2 bg-orange-400"
        disabled
        checked={mobile.ratings > 3.5 && mobile.ratings <= 4 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-1 bg-orange-400"
        disabled
        checked={mobile.ratings > 4 && mobile.ratings <= 4.5 ? true : false}
      />
      <input
        type="radio"
        name={`rating-${mobile.id}`}
        className="mask mask-star cursor-default mask-half-2 bg-orange-400"
        disabled
        checked={mobile.ratings > 4.5 && mobile.ratings <= 5 ? true : false}
      />
    </div>
  );
}
