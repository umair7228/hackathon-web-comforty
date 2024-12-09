import { products } from "@/app/data";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductsList: React.FC = () => {

  return (
    <div className="container mt-12 w-[80%] overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-6">All Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-14 mt-8">
        {products.map((product) => (
          <div key={product.id} className="relative">
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={312}
              height={312}
              className="rounded-md w-full h-60 xl:h-80 object-cover"
            />

            {/* Product Badges */}
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            {product.isOnSale && (
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                Sales
              </span>
            )}

            {/* Product Details */}
            <h3 className="mt-4 font-medium text-base text-[#272343]">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="text-sm line-through text-gray-500">${product.oldPrice}</span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              className="absolute bottom-2 right-2 bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart />
            </button>
          </div>
        ))}
      </div>

      {/* <Subscription /> */}
    </div>
  );
};

export default ProductsList;
