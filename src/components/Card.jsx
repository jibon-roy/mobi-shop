export default function Card({ mobile }) {
  return (

      <div className="card mx-auto h-full bg-base-100 max-w-72 shadow-xl">
        <figure>
          <img src={mobile?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mobile.name}</h2>
          <div className="badge badge-outline">{mobile.category}</div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
  );
}
