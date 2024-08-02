import Heading from "../../components/Heading";
import WhyChooseUs from "../Home/WhyChooseUs";

const AboutUs = () => {
  return (
    <div className="flex container flex-col items-center py-10">
      <div className="flex justify-center">
        <Heading heading={"About Us"}>Know something about us.</Heading>
      </div>
      <p className="text-lg mb-6">
        Shop Your Mobile Now! Buy Mobile Phone at Lowest Price in Bangladesh.
        Latest official smartphone, android, feature phone Price & full Specs
        available at Mobi Shop Online Shop
      </p>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
