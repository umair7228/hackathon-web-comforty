import Link from "next/link";
import Image from "next/image";
import {products} from '@/app/data'

const ProductsList = () => {

  return (
    <div className="container mt-32">
      <h2 className="text-3xl text-center font-semibold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-14 mt-14">
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="relative block group"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={312}
              height={312}
              className="rounded-md w-[19vw] h-80 object-cover"
            />
            <h3 className="mt-4 font-medium text-base text-[#272343]">{product.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-lg font-bold">${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
