export default function Button({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={`btn rounded-md ${
        className ? className : "btn-md btn-secondary"
      }`}
    >
      {children}
    </button>
  );
}
