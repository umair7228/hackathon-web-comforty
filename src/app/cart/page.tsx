// pages/cart.tsx
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";
import { Button } from "../../components/ui/button";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: "$99",
      image: "/home-images/our-products/3.jpeg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: "$99",
      image: "/home-images/our-products/2.jpeg", // Replace with actual image path
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Bag Section */}
      <div className="col-span-2">
        <h2 className="text-2xl font-bold mb-6">Bag</h2>
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between border-b border-gray-200 pb-6"
            >
              {/* Image */}
              <div className="relative h-28 w-28 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 ml-6">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="flex flex-col items-end space-y-4">
                <p className="font-medium">{item.price}</p>
                <div className="flex space-x-4">
                  <Heart className="h-5 w-5 text-gray-500 cursor-pointer hover:text-red-500" />
                  <Trash2 className="h-5 w-5 text-gray-500 cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Summary</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="flex justify-between text-sm text-gray-700 mb-4">
            <p>Subtotal</p>
            <p>$198.00</p>
          </div>
          <div className="flex justify-between text-sm text-gray-700 mb-4">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-sm text-gray-700 font-semibold mb-6">
            <p>Total</p>
            <p>$198.00</p>
          </div>
          <Button className="w-full">Member Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;