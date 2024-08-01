export default function Heading({heading, children}) {
  return (
    <div>
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="py-4 text-primary-red">
          {children && children}
        </p>
      </div>
    </div>
  );
}
