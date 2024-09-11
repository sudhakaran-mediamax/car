import CountUp from "react-countup";

const counts = [
  {
    name: "Cars for Sale",
    count: 810,
  },
  {
    name: "Dealer Reviews",
    count: 715,
  },
  {
    name: "Visitors Per Day",
    count: 96,
  },
  {
    name: "Verified Dealer",
    count: 230,
  },
];

function Counter() {
  return (
    <div className="container mx-auto py-14 md:py-28 bottom-px border-black/20">
      <div className="flex flex-col md:flex-row dark:text-white gap-12">
        {counts.map((counter, index) => {
          return (
            <div
              className="w-full md:w-[50%] lg:w-[25%] text-center"
              key={index}
            >
              <CountUp
                end={counter.count}
                enableScrollSpy={true}
                scrollSpyDelay="200"
                suffix="M"
                className="text-3xl lg:text-4xl font-semibold"
              />
              <p className="uppercase font-extralight text-xs">
                {counter.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Counter;
