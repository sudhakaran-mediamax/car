import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import electricCar from "/electric-car.svg";
import electricCar2 from "/electric-car2.svg";
const services = [
  {
    title: "Are you Looking for a Car ?",
    desc: "We are committed to providing our customers with exceptional service.",
    link: "",
    img: electricCar,
  },
  {
    title: "Do You Want to Sell a Car ?",
    desc: "We are committed to providing our customers with exceptional service.",
    link: "",
    img: electricCar2,
  },
];
function Services() {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8">
        {services.map((item, index) => {
          return (
            <div
              className={`w-full lg:w-[50%] px-8 py-10  md:px-16 md:py-20 bg-[#e9f2ff] rounded-lg text-black ${
                index === 1 && "bg-[#ffe9f3]"
              }`}
              key={index}
            >
              <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="">
                  <h2 className="text-2xl lg:text-3xl max-w-[250px] leading-normal capitalize">
                    {item.title}
                  </h2>
                  <p className="max-w-[350px] my-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <Link to={item.link}>
                    <Button className={index === 1 && "bg-black"}>
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="slef-start lg:self-end w-24 h-24 flex items-center justify-center mb-8 lg:mb-0">
                  <img src={item.img} alt="" className="w-full h-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
