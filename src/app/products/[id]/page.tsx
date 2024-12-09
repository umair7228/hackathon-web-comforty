import { notFound } from "next/navigation";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { products, productsLink } from "@/app/data";
import Link from "next/link";

interface ProductDetailParams {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductDetailParams) {
  // Ensure id is a string and fetch the corresponding product
  const product = productsLink.find((p) => p.id.toString() === params.id);

  if (!product) return notFound();

  return (
    <div className="container mx-auto my-16 w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Image
          src={product.image}
          alt={product.name}
          width={675}
          height={400}
          className="rounded-lg border border-gray-200 w-[675px] lg:h-[400px] xl:h-[500] 2xl:h-[600px]"
        />
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#272343]">{product.name}</h1>
          <span className="bg-teal-600 text-white px-4 py-1 w-32 flex rounded-2xl items-center justify-center text-lg lg:text-xl font-bold mt-4">
            ${product.price} USD
          </span>
          <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>
          <button
            className="flex items-center space-x-2 bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 mt-6"
          >
            <ShoppingCart />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>

      {/* Featured products */}
      <h2 className="text-2xl md:text-3xl font-bold mt-24 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products.slice(1, 5).map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="md:col-span-2 lg:col-span-1 relative lg:w-[18.5vw] xl:w-[19vw]"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={312}
              height={312}
              className="rounded-md w-full h-80 lg:h-64 xl:h-80"
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
              <ShoppingCart className="w-5 h-5 xl:h-6 xl:w-6" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
