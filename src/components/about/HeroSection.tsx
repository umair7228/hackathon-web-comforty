// components/HeroSection.tsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80%] h-full mx-auto py-12">
      {/* Left - About Text */}
      <div className="bg-teal-700 text-white p-20 flex flex-col justify-between rounded-md h-[60vh]">
        <div>
          <h2 className="text-4xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-lg tracking-wider leading-7 font-normal mb-6">
            At Comforty, we believe that the right chair can transform your space
            and elevate your comfort. Specializing in ergonomic design, premium
            materials, and modern aesthetics, we craft chairs that seamlessly
            blend style with functionality.
          </p>
        </div>
        <button className="py-2 px-4 w-44 h-12 bg-teal-600 rounded-md font-medium">
          View collection
        </button>
      </div>

      {/* Right - Image */}
      <div className="relative h-[60vh] w-full rounded-md overflow-hidden">
        <Image
          src="/home-images/our-products/1.jpeg"
          alt="Comforty chair"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;