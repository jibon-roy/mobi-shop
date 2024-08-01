import imagebg from "../../assets/faq-bg.jpg";
import Heading from "../../components/Heading";

export default function FAQ() {
  return (
    <div>
      <div className="container py-20 pb-28">
        <div className="flex justify-center mb-16">
          <Heading heading={"FAQs & Answers"}>
            Here are some question and answers about us.
          </Heading>
        </div>
        <div className="flex justify-evenly flex-col lg:flex-row-reverse">
          <img
            src={imagebg}
            className="max-w-md h-80 my-auto object-cover rounded-lg shadow-2xl"
          />
          <div className="max-w-lg flex-1">
            <div className="collapse collapse-plus mb-3 bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                1. What types of mobile phones do you offer?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a wide range of mobile phones from top brands
                  including Apple, Samsung, Xiaomi, OnePlus, and more. Our
                  collection includes the latest models as well as popular
                  budget-friendly options.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-3 bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                2. Do you provide any warranty on the mobile phones?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, all our mobile phones come with a manufacturer’s
                  warranty. The duration and terms of the warranty vary by brand
                  and model. Please check the product details for specific
                  warranty information.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-3 bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                3. What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>
                  We accept various payment methods including credit/debit
                  cards, mobile banking, and online payment gateways like
                  PayPal. For more convenience, we also offer cash on delivery
                  options in certain regions.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-3 bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                4. Can I return or exchange a mobile phone if I am not
                satisfied?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we have a hassle-free return and exchange policy. If you
                  are not satisfied with your purchase, you can return or
                  exchange the mobile phone within 7 days of delivery, provided
                  it is in its original condition and packaging. Please refer to
                  our return policy for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
