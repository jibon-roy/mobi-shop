import Heading from "../../components/Heading";
import Statistics from "../Home/Statistics";
import WhyChooseUs from "../Home/WhyChooseUs";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex container justify-center">
        <Heading heading={"About Us"}>Know something about us.</Heading>
      </div>
      <p className="text-lg container my-16 max-w-3xl text-center">
        Buy mobile phones at the lowest prices in Bangladesh. Explore the latest
        official smartphones, Androids, and feature phones with full specs
        available at Mobile Shop Online. We offer a wide selection of devices
        from top brands, ensuring you find the perfect phone to meet your needs.
        Enjoy secure shopping with multiple payment options and benefit from our
        fast delivery service. Our dedicated customer support team is always
        ready to assist you with any questions or concerns. Stay updated with
        the newest releases and get the best deals on the market. At Mobile
        Shop, your satisfaction is our priority. Shop confidently and enjoy a
        seamless shopping experience from the comfort of your home. Discover the
        latest technology and unbeatable prices at Mobile Shop Online.
      </p>
      <div className="w-full">
        <Statistics />
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
