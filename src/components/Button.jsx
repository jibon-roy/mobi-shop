export default function Button({ className, children }) {
  return (
    <button
      className={`btn rounded-md ${
        className ? className : "btn-md btn-secondary"
      } `}
    >
      {children}
    </button>
  );
}
