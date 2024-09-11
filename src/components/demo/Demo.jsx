import { Button } from "@/components/ui/button";
import demoPic from "/demo.jpg";
function Demo() {
  return (
    <div className="container mx-auto py-14 md:py-28">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[600px] h-[600px] rounded-xl overflow-hidden ">
          <img src={demoPic} alt="" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-center gap-6">
          <h2 className="text-2xl lg:text-4xl dark:text-white capitalize">
            Flexible finance for added shine
          </h2>
          <p className="font-extralight text-sm dark:text-white/70">
            AA Car Finance allows you to get a quote without affecting your
            credit rating. Find a car from any dealer, and we'll do the rest.
            With a large panel of 30+ lenders we can help most drivers.
          </p>
          <Button>Find More</Button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
