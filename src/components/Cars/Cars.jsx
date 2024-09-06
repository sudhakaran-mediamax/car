import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../reduxslicers/CarDetailsSlice";
import { useEffect } from "react";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox } from "react-icons/tb";

function Cars() {
  const dispatch = useDispatch();
  const { value, status, error } = useSelector((state) => state.carDetails);
  useEffect(() => {
    dispatch(fetchDetails());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container py-28">
      <div className="">
        <h2 className="text-black capitalize dark:text-primary font-semibold text-4xl">
          The Most Searched SUV Cars
        </h2>
      </div>
      {/* car card components */}
      <div className="flex flex-wrap pt-8">
        {value?.map((item, index) => {
          return (
            <div
              className="border rounded-lg border-black/10 max-w-[300px] w-full h-fit overflow-hidden"
              key={index}
            >
              <div className="h-[150px] overflow-hidden w-full">
                <img
                  src="https://picsum.photos/300/300"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-4 text-black dark:text-white mt-1">
                <h2 className="text-xl capitalize">{item.name}</h2>
                <p className="text-black/60 overflow-auto text-nowrap text-sm overflow-ellipsis pb-1">
                  {item.desc}
                </p>
                {/* icons */}
                <div className="flex justify-between py-4 border-t border-b">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <span>
                      <SlSpeedometer />
                    </span>
                    <p className="text-sm">mileage</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <span>
                      <BsFuelPump />
                    </span>
                    <p className="text-sm">mileage</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <span>
                      <TbManualGearbox />
                    </span>
                    <p className="text-sm">mileage</p>
                  </div>
                </div>
                {/* price */}
                <div className="flex justify-between py-4 border-t ">
                  <p className="text-xl capitalize font-semibold">
                    {item.price}
                  </p>
                  <p className="text-xl capitalize font-semibold">View</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cars;
