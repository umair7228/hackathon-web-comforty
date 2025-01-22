import { sanityClient } from "@/sanity/sanityClient";
import Image from "next/image";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
  imageUrl: string;
  products: number;
};


export const categories:Category[] = await sanityClient.fetch(`*[_type == "categories"] {
  _id,
  title,
  "imageUrl": image.asset->url,
  products
}
`)

const TopCategories = async () => {
  return (
    <section className=" max-w-screen-2xl w-[80%] mx-auto mt-28 overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6">
        Top Categories
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 justify-center">

        {categories.map((category) => (
          <Link href={'/products'} key={category._id} className="relative w-full sm:w-[250px] md:w-[300px] lg:w-[260px] xl:w-[330px] 2xl:w-[474px] h-[300px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[380px] 2xl:h-[474px] rounded-lg overflow-hidden">
            <Image
              src={category.imageUrl}
              alt={category.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 h-20 w-full bg-black bg-opacity-70 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold">{category.title}</h3>
              <p className="text-sm opacity-70">{category.products}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
