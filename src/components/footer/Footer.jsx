import { PiDeviceMobileSpeaker } from "react-icons/pi";

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
      <div className="bg-darkbg">
        <div className="container flex flex-col lg:flex-row lg:justify-between gap-4">
          <div className=""></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
