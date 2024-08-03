import image from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center font-bold text-lg gap-0 sm:text-2xl ">
      <img
        src={image}
        className="aspect-square w-7 sm:w-10"
        alt="mobile_logo_image"
      />
      <div className="text-[#ff00d3]">Mobi </div> <div> Shop</div>
    </div>
  );
}
