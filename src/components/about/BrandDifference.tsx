// components/BrandDifference.tsx
import { Truck, DollarSign, Recycle, CircleCheck } from "lucide-react";

const BrandDifference = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6 text-teal-700" />,
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard.",
    },
    {
      icon: <CircleCheck className="h-6 w-6 text-teal-700" />,
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-teal-700" />,
      title: "Unbeatable prices",
      description:
        "For our materials and quality, you won’t find better prices anywhere.",
    },
    {
      icon: <Recycle className="h-6 w-6 text-teal-700" />,
      title: "Recycled packaging",
      description:
        "We use 100% recycled to ensure our footprint is more manageable.",
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-8 md:mt-12 lg:mt-16 xl:mt-24">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-start font-bold mb-8">
        What Makes Our Brand Different
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#F9F9F9] rounded-md p-4 lg:p-6 xl:p-8 flex flex-col items-center xl:items-start text-center hover:shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold tracking-wide text-lg text-[#007580] mb-2">{feature.title}</h3>
            <p className="text-sm tracking-wider text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDifference;
