import Image from "next/image";
import React from "react";

const BrandLogos = () => {
  // Array of logo paths and alt text
  const logos = [
    { src: "/company-logos-images/zapier.png", alt: "Zapier" },
    { src: "/company-logos-images/pipedrive.png", alt: "Pipedrive" },
    { src: "/company-logos-images/cib-bank.png", alt: "CIB Bank" },
    { src: "/company-logos-images/z-image.png", alt: "Seven" },
    { src: "/company-logos-images/burnt-toast.png", alt: "Burnt Toast" },
    { src: "/company-logos-images/panadoc.png", alt: "PandaDoc" },
    { src: "/company-logos-images/moz.png", alt: "Moz" },
  ];

  return (
    <div className="bg-white py-8 w-[90%] sm:w-[85%] lg:w-[80%] overflow-x-hidden">
      <div className="flex flex-wrap items-center justify-center sm:justify-evenly gap-4 sm:gap-6">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={100}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
