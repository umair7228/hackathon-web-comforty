import React from "react";
import heroImage from '../../../public/home-images/chair.png';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="bg-[#F5F7FA] w-[90%] sm:w-[85%] lg:w-[80%] min-h-screen flex items-center justify-center px-12 overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between gap-16 lg:gap-6">
        {/* Left Section */}
        <div className="lg:max-w-[50%] text-center flex flex-col items-center justify-center lg:items-start lg:justify-start lg:text-left">
          <p className="text-sm text-[#555555] tracking-wide uppercase mb-2 md:mb-4">
            Welcome to Chairy
          </p>
          <h1 className="text-[#2B2D42] text-2xl sm:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight mb-6">
            Best Furniture <br /> Collection For Your Interior.
          </h1>
          <Link
          href={'/shop'}
          >
            <Button className="bg-[#00B5AD] text-white text-base font-semibold px-4 py-4 sm:py-6 sm:px-8 lg:py-6 lg:px-8 rounded-md flex items-center space-x-4 hover:bg-[#019E96] transition mt-0 sm:mt-6 md:mt-4 lg:mt-10">
              <span>Shop Now</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <ArrowRight />
              </span>
            </Button>
          </Link>
        </div>

        {/* Right Section (Image) */}
        <div className="lg:max-w-[40%] w-full flex justify-center">
          <Image
            src={heroImage}
            alt="Modern Chair"
            className="w-full object-cover max-w-sm lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
