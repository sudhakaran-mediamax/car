import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../reduxslicers/CarDetailsSlice";
import CarDetails from "../Cars/CarDetails";
import { useEffect } from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Popular() {
  const dispatch = useDispatch();
  const { value, status, error } = useSelector((state) => state.carDetails);
  useEffect(() => {
    dispatch(fetchDetails());
  }, [dispatch]);
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl lg:text-4xl mb-10 font-semibold dark:text-white">
        Popular Makes
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.navigation.prevEl = navigationPrevRef.current;
        }}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {value?.map((item, index) => {
          const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          });
          return (
            <SwiperSlide key={index}>
              <CarDetails car={item} format={formatter} />
            </SwiperSlide>
          );
        })}
        <div className="mt-12 flex gap-6">
          <Button
            variant="secondary"
            className="group"
            size="icon"
            ref={navigationPrevRef}
          >
            <IoIosArrowBack className="group-hover:fill-primary dark:text-white dark:group-hover:fill-white" />
          </Button>
          <Button
            variant="secondary"
            className="group"
            size="icon"
            ref={navigationNextRef}
          >
            <IoIosArrowForward className="group-hover:fill-primary dark:text-white dark:group-hover:fill-white" />
          </Button>
        </div>
      </Swiper>
    </div>
  );
}

export default Popular;
