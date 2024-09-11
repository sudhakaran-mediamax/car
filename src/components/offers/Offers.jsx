import offer1 from "/f1.svg";
import offer2 from "/f2.svg";
import offer3 from "/f3.svg";
import offer4 from "/f4.svg";

const offers = [
  {
    title: "Special Financing Offers",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
    img: offer1,
  },
  {
    title: "Trusted Car Dealership",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
    img: offer2,
  },
  {
    title: "Transparent Pricing",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
    img: offer3,
  },
  {
    title: "Expert Car Service",
    desc: "Our stress-free finance department that can find financial solutions to save you money.",
    img: offer4,
  },
];

function Offers() {
  return (
    <div className="container py-14 md:py-28">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-3xl lg:text-4xl font-semibold max-w-[350px] tracking-wide dark:text-white">
            We're BIG on what matters to you
          </h2>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="flex flex-col flex-wrap lg:flex-row gap-8 lg:gap-x-12 justify-between">
            {offers.map((item, index) => {
              return (
                <div
                  className="w-full lg:w-[calc(50%-2rem)] text-black dark:text-white"
                  key={index}
                >
                  <div className="w-fit h-fit flex justify-center items-center">
                    <img src={item.img} alt="" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl my-4">{item.title}</h3>
                  <p className="text-sm leading-6 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
