import HomePage from "./home/page";
import BrandLogos from "@/components/home/brand-logos/BrandLogos";
import FeaturedProducts from "@/components/home/featured-products/FeaturedProducts";
import TopCategories from "@/components/home/top-catagories/TopProducts";
import OurProducts from "@/components/home/our-products/OurProducts";

export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center justify-center overflow-x-hidden">
      <HomePage />
      <BrandLogos />
      <FeaturedProducts />
      <TopCategories />
      <OurProducts />
    </main>
  );
}
