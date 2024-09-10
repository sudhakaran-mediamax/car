import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-2xl">Have a Questions? Feel Free To Ask...</h3>
          <p className="w-8 h-8">
            <PiDeviceMobileSpeaker className="w-full h-full" />
          </p>
        </div>
      </div>
      <div className="bg-darkbg ">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-4">
          <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between text-white py-14">
            <div className="">
              <h3 className="text-2xl lg:text-3xl mb-2">Join BoxCar</h3>
              <p className="text-sm font-thin">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 relative">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-full p-8 text-base"
              />
              <Button
                type="submit"
                variant="roundbtn"
                className="absolute top-1/2 p-6 left-[calc(100%-130px)] -translate-y-1/2"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Separator className="container mx-auto " />
        <div className="container mx-auto">
          <div className="py-6"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
