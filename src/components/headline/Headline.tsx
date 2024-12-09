import React from "react";
import { Button } from "../ui/button";
import { Check, ChevronDown, Info } from "lucide-react";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="w-screen hidden lg:flex items-center justify-center bg-[#1A1932] px-4 overflow-x-hidden">
      <div className="h-11 w-full sm:w-[90%] md:w-[80%] text-white text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <Check className="w-4 h-4" />
          <span className="text-center sm:text-left">
            Free Shipping On All Orders Over $50
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Link href={'/faq'}>
            <Button className="text-xs sm:text-sm">Faqs</Button>
          </Link>
          
          <Link href={'/contact'}>
            <Button
              variant={"link"}
              className="flex items-center text-white space-x-1 cursor-pointer"
            >
              <Info className="w-4 h-4" />
              <span>Need Help</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headline;
