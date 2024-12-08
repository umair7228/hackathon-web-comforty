import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  isOnSale?: boolean;
  image: string;
};

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Library Stool Chair', price: 20, isNew: true, image: '/home-images/featured-products/1.jpeg' },
    { id: 2, name: 'Library Stool Chair', price: 20, oldPrice: 30, isOnSale: true, image: '/home-images/featured-products/2.jpeg' },
    { id: 3, name: 'Library Stool Chair', price: 20, image: '/home-images/featured-products/3.jpeg' },
    { id: 4, name: 'Library Stool Chair', price: 20, image: '/home-images/featured-products/4.jpeg' },
  ];

  return (
    <div className="container mt-12">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={312}
              height={312}
              className="rounded-md w-[19vw] h-80"
            />
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
            <h3 className="mt-4 font-medium text-base text-[#272343]">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="text-sm line-through text-gray-500">${product.oldPrice}</span>
              )}
            </div>
            <button
              className="absolute bottom-2 right-2 bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;