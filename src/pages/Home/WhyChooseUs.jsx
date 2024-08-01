import Heading from "../../components/Heading";
import imagebg from "../../assets/choose.jpg";

export default function WhyChooseUs() {
  return (
    <div>
      <div className="container py-20 pb-28">
        <div className="flex justify-center mb-16">
          <Heading heading={"Why Choose Us?"}>Make your good decition.</Heading>
        </div>
        <div className="flex justify-evenly items-center gap-10 flex-col lg:flex-row">
          <img
            src={imagebg}
            className="max-w-md h-80 my-auto object-cover rounded-lg "
          />
          <div className="max-w-lg my-auto flex-1 text-xl">
            <p className="mb-5">
            <strong>Wide Selection:</strong> We offer the latest mobile phones from top brands at
            competitive prices.
            </p>
           <p className="mb-5">
           <strong>Secure Shopping:</strong> Enjoy a safe and convenient
           shopping experience with multiple payment options.
           </p>
           <p className="mb-5">
           <strong>Fast Delivery:</strong>
           Get your new phone quickly with our efficient delivery service.
           </p>
          <p className="mb-5">
          <strong>Customer Support:</strong> Our dedicated team is here to assist you with any
          questions or concerns.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
