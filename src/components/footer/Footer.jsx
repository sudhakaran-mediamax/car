import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  quickLinks,
  vehicleType,
  company,
  ourBrands,
} from "../../utils/menuLinks";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
function Footer() {
  return (
    <footer>
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-md md:text-2xl">
            Have a Questions ?
            <br className="sm:block md:hidden" /> Feel Free To Ask...
          </h3>
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
        <div className="container mx-auto">
          <div className="py-12 text-white flex flex-wrap border-t border-white/20">
            <div className="w-full md:w-[50%] lg:w-[20%] flex flex-col gap-4">
              <h4 className="text-xl mb-3">Company</h4>
              {company.map((menulink, index) => {
                return (
                  <Link
                    to={menulink.link}
                    className="text-sm font-light hover:text-white/70"
                    key={index}
                  >
                    {menulink.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-full md:w-[50%] lg:w-[20%] flex flex-col gap-4">
              <h4 className="text-xl mb-3">Quick Links</h4>
              {quickLinks.map((qlinks, index) => {
                return (
                  <Link
                    to={qlinks.link}
                    className="text-sm font-light hover:text-white/70"
                    key={index}
                  >
                    {qlinks.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-full md:w-[50%] lg:w-[20%] flex flex-col gap-4">
              <h4 className="text-xl mb-3">Our Brands</h4>
              {ourBrands.map((brands, index) => {
                return (
                  <Link
                    to={brands.link}
                    className="text-sm font-light hover:text-white/70"
                    key={index}
                  >
                    {brands.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-full md:w-[50%] lg:w-[20%] flex flex-col gap-4">
              <h4 className="text-xl mb-3">Vehicles Type</h4>
              {vehicleType.map((type, index) => {
                return (
                  <Link
                    to={type.link}
                    className="text-sm font-light hover:text-white/70"
                    key={index}
                  >
                    {type.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-full md:w-[50%] lg:w-[20%] flex flex-col gap-4">
              <h4 className="text-xl mb-3">Our Mobile App</h4>
              <div className="flex gap-2 bg-slate-800 w-fit rounded-lg px-4 py-2">
                <div className="flex justify-center items-center">
                  <FaApple className="w-[30px] h-[30px] " />
                </div>
                <div className="">
                  <p className="text-xs font-extralight">download on the</p>
                  <p className="font-semibold text-lg">Apple Store</p>
                </div>
              </div>
              <div className="flex gap-2 mb-2 bg-slate-800 w-fit rounded-lg px-4 py-2">
                <div className="flex justify-center items-center">
                  <BiLogoPlayStore className="w-[30px] h-[30px]" />
                </div>
                <div className="">
                  <p className="text-xs font-extralight">Get in on</p>
                  <p className="font-semibold text-lg">Google Play</p>
                </div>
              </div>
              <div className="">
                <h4 className="text-xl mb-3">Connect with us</h4>
                <div className="flex gap-6">
                  <FaFacebookF className="hover:text-primary cursor-pointer" />
                  <FaXTwitter className="hover:text-primary cursor-pointer" />
                  <FaInstagram className="hover:text-primary cursor-pointer" />
                  <FaLinkedinIn className="hover:text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="py-4 text-white">
          <div className="container mx-auto flex justify-between">
            <p className="font-extralight text-xs">
              © 2024 exemple.com. All rights reserved.
            </p>
            <div className="flex gap-2 items-center">
              <p className="font-extralight text-xs">Terms & Conditions</p>
              <span className="inline-flex w-1 h-1 bg-white rounded-full"></span>
              <p className="font-extralight text-xs">Privacy Notice</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
