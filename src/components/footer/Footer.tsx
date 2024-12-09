import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 lg:mt-36 flex flex-col items-center border-t justify-center overflow-x-hidden">
        
      <div className="container w-[80%]  px-4 mt-12 lg:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/Logo.png" alt="Comforty Logo" width={40} height={40} className="w-6 h-6" />
              <h2 className="text-xl lg:text-2xl font-semibold">Comforty</h2>
            </div>
            <p className="text-gray-600 ">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras
              egestas purus.
            </p>

            {/* Social Media Icons */}
          <div className="flex space-x-6">
            <Button variant="link" className="!p-0 text-gray-600 hover:text-teal-500">
              <Facebook size={20} />
            </Button>
            <Button variant="link" className="!p-0 text-gray-600 hover:text-teal-500">
              <Twitter size={20} />
            </Button>
            <Button variant="link" className="!p-0 text-gray-600 hover:text-teal-500">
              <Instagram size={20} />
            </Button>
            <Button variant="link" className="!p-0 text-gray-600 hover:text-teal-500">
              <Youtube size={20} />
            </Button>
          </div>
          </div>

          {/* Categories */}
        <div className=" lg:ml-12">
        <h3 className="text-lg text-[#9A9CAA] font-semibold mb-4">Category</h3>
        <ul className="-space-y-2">
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Sofa</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Armchair</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Wing Chair</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Desk Chair</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Wooden Chair</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Park Bench</Button>
            </li>
        </ul>
        </div>

        {/* Support Links */}
        <div>
        <h3 className="text-lg text-[#9A9CAA] font-semibold mb-4">Support</h3>
        <ul className="-space-y-2">
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Help & Support</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Terms & Conditions</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Privacy Policy</Button>
            </li>
            <li>
            <Button variant="link" className="text-gray-600 p-0 text-base hover:text-[#007580]">Help</Button>
            </li>
        </ul>
        </div>


          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-[#9A9CAA] font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              <Button>Subscribe</Button>
            </form>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
