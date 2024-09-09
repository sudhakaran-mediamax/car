import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";

function CarDetails({ car, format }) {
  return (
    <div className="border rounded-lg border-black/10 max-w-[300px] w-full h-fit overflow-hidden dark:bg-darkbg">
      <div className="h-[150px] overflow-hidden w-full">
        <img
          src="https://picsum.photos/300/300"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="px-6 py-4 text-black dark:text-white mt-1">
        <h2 className="text-xl capitalize">{car.name}</h2>
        <p className="text-black/60 overflow-auto text-nowrap text-sm overflow-ellipsis pb-1 dark:text-white/60">
          {car.desc}
        </p>
        {/* icons */}
        <div className="flex justify-between py-4 border-t border-b">
          <div className="flex flex-col justify-center items-center gap-1">
            <span>
              <SlSpeedometer />
            </span>
            <p className="text-sm">{car.miles} Miles</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span>
              <BsFuelPump />
            </span>
            <p className="text-sm capitalize">{car.fuel}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <span>
              <TbManualGearbox />
            </span>
            <p className="text-sm capitalize">{car.transmission}</p>
          </div>
        </div>
        {/* price */}
        <div className="flex justify-between py-4 border-t ">
          <p className="text-xl capitalize font-semibold">
            {format.format(car.price)}
          </p>
          <Link to={car.link} className="text-md capitalize text-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
