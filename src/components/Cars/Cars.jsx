import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../reduxslicers/CarDetailsSlice";
import { useEffect } from "react";

import CarDetails from "./CarDetails";
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
    <div className="container py-14 md:py-28">
      <div className="">
        <h2 className="text-black capitalize dark:text-white font-semibold text-4xl">
          The Most Searched SUV Cars
        </h2>
      </div>
      {/* car card components */}
      <div className="flex flex-wrap pt-8 gap-4 justify-center md:gap-8 md:justify-start">
        {value?.map((item, index) => {
          // Create our number formatter for price
          const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          });
          return <CarDetails key={index} car={item} format={formatter} />;
        })}
      </div>
    </div>
  );
}

export default Cars;
