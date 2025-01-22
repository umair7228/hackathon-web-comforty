import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../products/ProductsList";

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  imageUrl?: string; // Updated to use the resolved image URL directly
  description: string;
  tags?: string[];
  category?: {
    _id: string;
    title: string;
  };
};

const ShopList = async () => {

  return (
    <div className="container mt-12 max-w-screen-2xl w-[80%] overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-6">Shop Now</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-14 mt-8">
      {products
          .slice() // Creates a copy of the products array to avoid mutating the original
          .reverse()
          .map((product) => (
          <Link href={`/products/${product._id}`} key={product._id} className="relative">
            {/* Product Image */}
            <Image
              src={product.imageUrl || "/placeholder.png"}
              alt={product.title}
              width={312}
              height={312}
              className="rounded-md w-full h-60 xl:h-80 object-cover"
            />

            {/* Product Badges */}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}

            {/* Product Details */}
            <h3 className="mt-4 font-medium text-base text-[#272343]">{product.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.priceWithoutDiscount && (
                <span className="text-sm line-through text-gray-500">
                  ${product.priceWithoutDiscount}
                </span>
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

export default ShopList;
