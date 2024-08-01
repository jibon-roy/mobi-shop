export default function Card({ mobile }) {
  
    const description = mobile?.description
    const words = description.slice(0,50)
    return (
      <div className="card mx-auto h-full hover:scale-95 transition-all bg-base-100 max-w-72 shadow-xl">
        <figure>
          <img src={mobile?.image} className="w-1/2" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mobile.name}</h2>
          <div className="badge badge-outline">{mobile.category}</div>
          <p>{words}...</p>
          <div className="card-actions justify-start">
            <button className="btn btn-secondary">Details</button>
          </div>
        </div>
      </div>
  );
}
