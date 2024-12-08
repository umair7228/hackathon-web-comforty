import React from "react";
import heroImage from '../../../public/home-images/chair.png'
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <section className="bg-[#F5F7FA] w-[80%] min-h-screen flex items-center justify-center">
      <div className="w-[80%] flex items-center justify-between">
        {/* Left Section */}
        <div className="max-w-[50%]">
          <p className="text-sm text-[#555555] tracking-wide uppercase mb-4">
            Welcome to Chairy
          </p>
          <h1 className="text-[#2B2D42] text-6xl font-bold leading-tight mb-6">
            Best Furniture <br /> Collection For Your Interior.
          </h1>
          <Button  className="bg-[#00B5AD] text-white text-base font-semibold px-6 py-7 rounded-md flex items-center space-x-4 hover:bg-[#019E96] transition mt-10">
            <span>Shop Now</span>
            <span className="w-6 h-6 flex items-center justify-center"><ArrowRight /></span>
          </Button>
        </div>

        {/* Right Section (Image) */}
        <div className="max-w-[40%]">
          <Image
            src={heroImage}
            alt="Modern Chair"
            className="w-full object-cover"
          />
        </div>
      </div>
      
    </section>
  );
};

export default HomePage;
