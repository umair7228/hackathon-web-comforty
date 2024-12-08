import React from "react";
import { Button } from "../ui/button";
import { Check, ChevronDown, Info } from "lucide-react";

const Headline = () => {
  return (
    <div className="w-screen flex items-center justify-center bg-[#1A1932] ">
        <div className="h-11 w-[80%] text-white text-sm flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span className="text-xs">Free Shipping On All Orders Over $50</span>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer">
            <span>Eng</span>
            <ChevronDown className="w-4 h-4" />
            </div>
            <Button>Faqs</Button>
            <Button variant={'link'} className="flex items-center text-white space-x-1 cursor-pointer">
            <Info className="w-4 h-4" />
            <span>Need Help</span>
            </Button>
        </div>
        </div>
    </div>
  );
};

export default Headline;
