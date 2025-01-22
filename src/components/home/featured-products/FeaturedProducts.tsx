
import { products } from '@/components/products/ProductsList';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const FeaturedProducts: React.FC = () => {

  return (
    <div className="container max-w-screen-2xl w-[80%]  mt-12 overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products
        .slice(1, 5)
        .map((product) => (
          <Link
            href={`/products/${product._id}`}
            key={product._id}
            className="md:col-span-2 lg:col-span-1 relative lg:w-[18.5vw] xl:w-[19vw] outline-none"
          >
            <Image
              src={product.imageUrl || "/placeholder.png"}
              alt={product.title}
              width={312}
              height={312}
              className="rounded-md w-full h-80 lg:h-64 xl:h-80"
            />
            
            {/* Product Badges */}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}

            <h3 className="mt-4 font-medium text-base text-[#272343]">{product.title}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.price && (
                <span className="text-sm line-through text-gray-500">${product.price}</span>
              )}
            </div>
            <button
              className="absolute bottom-2 right-2 bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600"
              aria-label={`Add ${product.title} to cart`}
            >
              <ShoppingCart className='w-5 h-5 xl:h-6 xl:w-6' />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
