export default function Heading({heading, children}) {
  return (
    <div>
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="py-6">
          {children && children}
        </p>
      </div>
    </div>
  );
}
