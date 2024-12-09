// components/PopularProducts.tsx
import Image from "next/image";

const PopularProducts = () => {
  const products = [
    {
      name: "The Poplar suede sofa",
      price: "$99.00",
      image: "/about-images/soofa.jpeg",
    },
    {
      name: "The Dandy chair",
      price: "$99.00",
      image: "/about-images/1.jpeg",
    },
    {
      name: "The Dandy chair",
      price: "$99.00",
      image: "/about-images/2.jpeg",
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-8 md:mt-12 lg:mt-16 xl:mt-24">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-start font-bold mb-8">Our Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden"
          >
            <div className="relative h-80 w-full">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;