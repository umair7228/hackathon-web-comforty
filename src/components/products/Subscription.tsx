import Image from "next/image";

type InstagramImage = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Subscription: React.FC = () => {
  const instagramImages: InstagramImage[] = [
    { id: 1, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/1.jpeg" },
    { id: 2, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/2.jpeg" },
    { id: 3, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/3.jpeg" },
    { id: 4, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/4.jpeg" },
    { id: 5, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/black-chair.jpeg" },
  ];

  return (
    <div className="bg-gray-100 py-12 w-full mt-36 -mb-36 flex items-center justify-center">
      <div className="w-[80%] ">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
            <h2 className=" text-xl md:text-3xl lg:text-4xl tracking-wide font-semibold mb-6">Or Subscribe To The Newsletter</h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 max-w-sm md:max-w-md lg:max-w-xl mx-auto bg-gray-100 rounded-md overflow-hidden">
            <input
                type="email"
                placeholder="Email Address..."
                className="flex-grow p-4 text-gray-700 border-b-2 border-black shadow-none bg-gray-100 focus:outline-none"
            />
            <button className="bg-gray-100 border-b-2 border-black/75 text-black/70 px-8 py-3 font-semibold hover:bg-gray-800">
                SUBMIT
            </button>
            </div>
        </div>

        {/* Instagram Section */}
        <div className="text-center">
            <h2 className=" text-xl md:text-3xl lg:text-4xl font-semibold mb-6">Follow Products And Discounts On Instagram</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
            {instagramImages.map((img) => (
                <div
                key={img.id}
                className="overflow-hidden rounded-md shadow-md bg-white"
                >
                <Image
                    src={img.image}
                    alt={img.name}
                    width={150}
                    height={150}
                    className="object-cover w-full h-44 md:h-52"
                />
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
