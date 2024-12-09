import Image from "next/image";

const TopCategories = () => {
  return (
    <section className="w-[80%] mx-auto mt-28 overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6">
        Top Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 justify-center">
        {/* Category Card 1 */}
        <div className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[260px] xl:w-[330px] 2xl:w-[474px] h-[300px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[380px] 2xl:h-[474px] rounded-lg overflow-hidden">
          <Image
            src="/home-images/top-categories/wing-chair.jpeg"
            alt="Wing Chair"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 h-20 w-full bg-black bg-opacity-70 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">Wing Chair</h3>
            <p className="text-sm opacity-70">3,584 Products</p>
          </div>
        </div>

        {/* Category Card 2 */}
        <div className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[260px] xl:w-[330px] 2xl:w-[474px] h-[300px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[380px] 2xl:h-[474px] rounded-lg overflow-hidden">
          <Image
            src="/home-images/top-categories/stool-chair.jpeg"
            alt="Wooden Chair"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 h-20 w-full bg-black bg-opacity-70 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">Wooden Chair</h3>
            <p className="text-sm opacity-70">157 Products</p>
          </div>
        </div>

        {/* Category Card 3 */}
        <div className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[260px] xl:w-[330px] 2xl:w-[474px] h-[300px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[380px] 2xl:h-[474px] rounded-lg overflow-hidden">
          <Image
            src="/home-images/top-categories/desk-chair.png"
            alt="Desk Chair"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 h-20 w-full bg-black bg-opacity-70 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">Desk Chair</h3>
            <p className="text-sm opacity-70">154 Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
