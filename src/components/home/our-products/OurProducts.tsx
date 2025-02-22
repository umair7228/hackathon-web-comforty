import { products } from "@/components/products/ProductsList";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurProducts: React.FC = () => {

  return (
    <div className="container max-w-screen-2xl w-[80%] mt-32 overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-3xl text-center font-semibold mb-6">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6 mt-14">
        {products
        .slice(1, 9)
        .map((product) => (
          <Link 
          href={`/products/${product._id}`}
          key={product._id} className="relative">
            {/* Product Image */}
            <Image
              src={product.imageUrl || "/placeholder.png"}
              alt={product.title}
              width={312}
              height={312}
              className=" h-60 xl:h-72 2xl:h-80 w-full object-cover"
            />

            {/* Product Badges */}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}

            {/* Product Details */}
            <h3 className="mt-4 font-medium text-base text-[#272343]">{product.title}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.price && (
                <span className="text-sm line-through text-gray-500">${product.price}</span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              className="absolute bottom-2 right-2 bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600"
              aria-label={`Add ${product.title} to cart`}
            >
              <ShoppingCart />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
